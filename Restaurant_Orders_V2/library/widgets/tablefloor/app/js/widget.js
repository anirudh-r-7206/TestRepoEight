/*
 * Table Floor widget
 * Shows every Dining_Tables record as a card (seats, area, live status) and
 * lets staff reserve an Available table. Reservations are written to the
 * Reservations form; its on-success workflow flips the table to Reserved.
 *
 * Uses Creator Widget SDK v1 (ZOHO.CREATOR.API.*). When the SDK is not present
 * (file opened outside Creator) it runs on sample data so the layout can be
 * previewed.
 */
(function () {
  "use strict";

  var TABLES_REPORT = "All_Tables";
  var RESERVATIONS_REPORT = "All_Reservations";
  var RESERVATION_FORM = "Reservations";
  var REFRESH_MS = 60000;
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var state = {
    appName: null,
    tables: [],
    nextBooking: {},   // table ID -> earliest upcoming Booked reservation
    area: "",
    status: "",
    party: 0,
    selected: null,
    preview: false
  };

  var $ = function (id) { return document.getElementById(id); };

  // ---------- data access ----------

  // Creator always hosts widgets in an iframe; a top-level window is a local preview
  function hasSdk() {
    return window.parent !== window &&
      typeof window.ZOHO !== "undefined" && window.ZOHO.CREATOR && window.ZOHO.CREATOR.API;
  }

  function fetchAll(reportName, criteria) {
    var out = [];
    function page(n) {
      var cfg = { appName: state.appName, reportName: reportName, page: n, pageSize: 200 };
      if (criteria) { cfg.criteria = criteria; }
      return ZOHO.CREATOR.API.getAllRecords(cfg).then(function (resp) {
        var rows = (resp && resp.data) || [];
        out = out.concat(rows);
        return rows.length === 200 ? page(n + 1) : out;
      }, function (err) {
        // code 3100 = no records matched; treat as an empty result
        if (responseCode(err) === "3100") { return out; }
        throw err;
      });
    }
    return page(1);
  }

  function loadData() {
    if (state.preview) { return Promise.resolve(sampleData()); }
    return Promise.all([
      fetchAll(TABLES_REPORT),
      fetchAll(RESERVATIONS_REPORT, '(Status == "Booked")')
    ]).then(function (res) { return { tables: res[0], bookings: res[1] }; });
  }

  function addReservation(data) {
    if (state.preview) {
      return new Promise(function (resolve) { setTimeout(function () { resolve({ code: 3000 }); }, 400); });
    }
    return ZOHO.CREATOR.API.addRecord({
      appName: state.appName,
      formName: RESERVATION_FORM,
      data: { data: data }
    });
  }

  // ---------- helpers ----------

  // The SDK rejects with a plain object, a JSON string, or an object whose
  // responseText holds the JSON body; normalise all three.
  function parseResponse(r) {
    if (typeof r === "string") {
      try { return JSON.parse(r); } catch (e) { return { message: r }; }
    }
    if (r && r.code == null && typeof r.responseText === "string") {
      try { return JSON.parse(r.responseText); } catch (e) { /* fall through */ }
    }
    return r || {};
  }

  function responseCode(r) {
    var p = parseResponse(r);
    return p.code == null ? "" : String(p.code);
  }

  function lookupId(v) {
    if (v && typeof v === "object") { return String(v.ID || v.id || ""); }
    return v ? String(v) : "";
  }

  // Creator returns date-times as "dd-MMM-yyyy HH:mm:ss" (app date format)
  function parseCreatorDate(s) {
    if (!s) { return null; }
    var m = /^(\d{1,2})-([A-Za-z]{3})-(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?\s*([AaPp][Mm])?)?/.exec(String(s));
    if (!m) { var d = new Date(s); return isNaN(d) ? null : d; }
    var h = parseInt(m[4] || "0", 10);
    if (m[7]) { var pm = m[7].toUpperCase() === "PM"; if (pm && h < 12) { h += 12; } if (!pm && h === 12) { h = 0; } }
    return new Date(parseInt(m[3], 10), MONTHS.indexOf(m[2].charAt(0).toUpperCase() + m[2].slice(1).toLowerCase()),
      parseInt(m[1], 10), h, parseInt(m[5] || "0", 10), parseInt(m[6] || "0", 10));
  }

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function toCreatorDate(d) {
    return pad(d.getDate()) + "-" + MONTHS[d.getMonth()] + "-" + d.getFullYear() + " " +
      pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":00";
  }

  function toLocalInput(d) {
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) + "T" + pad(d.getHours()) + ":" + pad(d.getMinutes());
  }

  function formatWhen(d) {
    var now = new Date();
    var sameDay = d.toDateString() === now.toDateString();
    var t = d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    return sameDay ? "Today " + t : d.toLocaleDateString([], { day: "numeric", month: "short" }) + ", " + t;
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) { n.className = cls; }
    if (text != null) { n.textContent = text; }
    return n;
  }

  function statusKey(s) {
    s = String(s || "Available").toLowerCase();
    return s === "reserved" || s === "occupied" ? s : "available";
  }

  function errorText(resp) {
    if (!resp) { return "The reservation could not be saved."; }
    resp = parseResponse(resp);
    var e = resp.error || resp.message || resp.responseText;
    if (Array.isArray(e)) { e = e.join(" "); }
    if (e && typeof e === "object") {
      var parts = [];
      Object.keys(e).forEach(function (k) { parts.push(e[k]); });
      e = parts.join(" ");
    }
    return e ? String(e) : "The reservation could not be saved (code " + resp.code + ").";
  }

  function toast(msg) {
    var t = $("tfToast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.hidden = true; }, 3500);
  }

  // ---------- table drawing ----------

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // One chair seen from above: seat + backrest, centred on (x, y), facing the
  // table when rotated by `deg` (0 = chair above the table, facing down).
  function chair(x, y, deg) {
    return '<g class="tf-chair" transform="translate(' + x.toFixed(1) + " " + y.toFixed(1) + ") rotate(" + deg.toFixed(1) + ')">' +
      '<rect class="tf-chair-back" x="-13" y="-12" width="26" height="6" rx="3"/>' +
      '<rect class="tf-chair-seat" x="-12" y="-6" width="24" height="16" rx="5"/>' +
      "</g>";
  }

  // Top-down view of a rectangular dining table. Chairs sit along the two long
  // sides; from 5 seats up one chair also goes at each end. The tabletop grows
  // in length so chairs on a side never overlap.
  function tableSvg(t) {
    var n = Math.max(1, Math.min(t.seats || 1, 20));
    var ends = n >= 5 ? 2 : 0;
    var topRow = Math.ceil((n - ends) / 2), bottomRow = Math.floor((n - ends) / 2);
    var tw = Math.max(96, topRow * 30 + 20), th = 56;
    var gap = 17;                             // tabletop edge to chair centre
    var W = Math.max(220, tw + 2 * (gap + 16)), H = th + 2 * (gap + 16);
    var cx = W / 2, cy = H / 2;
    var x0 = cx - tw / 2, y0 = cy - th / 2;
    var parts = [];

    function along(count, k) { return (tw * (k + 0.5)) / count - tw / 2; }
    for (var a = 0; a < topRow; a++) { parts.push(chair(cx + along(topRow, a), y0 - gap, 0)); }
    for (var b = 0; b < bottomRow; b++) { parts.push(chair(cx + along(bottomRow, b), y0 + th + gap, 180)); }
    if (ends) {
      parts.push(chair(x0 - gap, cy, -90));
      parts.push(chair(x0 + tw + gap, cy, 90));
    }

    var surface = '<rect class="tf-top" x="' + x0.toFixed(1) + '" y="' + y0.toFixed(1) +
      '" width="' + tw + '" height="' + th + '" rx="8"/>';

    var label = esc(t.number);
    var size = label.length > 3 ? 16 : 22;
    return '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Table ' + label + ", " + t.seats + ' seats">' +
      parts.join("") + surface +
      '<text class="tf-top-num" x="' + cx + '" y="' + (cy - 1) + '" font-size="' + size + '">' + label + "</text>" +
      '<text class="tf-top-seats" x="' + cx + '" y="' + (cy + 15) + '">' + t.seats + (t.seats === 1 ? " seat" : " seats") + "</text>" +
      "</svg>";
  }

  // ---------- rendering ----------

  function applyData(d) {
    state.tables = (d.tables || []).map(function (r) {
      return {
        id: String(r.ID),
        number: r.Table_Number || "?",
        seats: parseInt(r.Seats, 10) || 0,
        area: r.Area || "Unassigned",
        status: statusKey(r.Status),
        statusLabel: r.Status || "Available"
      };
    }).sort(function (a, b) {
      return a.number.localeCompare(b.number, undefined, { numeric: true });
    });

    var now = Date.now() - 2 * 3600 * 1000;
    state.nextBooking = {};
    (d.bookings || []).forEach(function (b) {
      var tid = lookupId(b.Dining_Table);
      var when = parseCreatorDate(b.Reservation_Time);
      if (!tid || !when || when.getTime() < now) { return; }
      var cur = state.nextBooking[tid];
      if (!cur || when < cur.when) {
        state.nextBooking[tid] = { when: when, guest: b.Guest_Name || "", party: b.Party_Size };
      }
    });

    $("tfUpdated").textContent = (state.preview ? "Preview with sample data. " : "") +
      "Updated " + new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    renderAreas();
    render();
  }

  function renderSummary(list) {
    var counts = { available: 0, reserved: 0, occupied: 0 };
    var freeSeats = 0;
    list.forEach(function (t) { counts[t.status]++; if (t.status === "available") { freeSeats += t.seats; } });
    var box = $("tfSummary");
    box.innerHTML = "";
    [["available", "Available", counts.available],
     ["reserved", "Reserved", counts.reserved],
     ["occupied", "Occupied", counts.occupied],
     ["", "Free seats", freeSeats]].forEach(function (s) {
      var c = el("div", "tf-stat " + s[0]);
      c.appendChild(el("b", null, String(s[2])));
      c.appendChild(el("span", null, s[1]));
      box.appendChild(c);
    });
  }

  function renderAreas() {
    var areas = [];
    state.tables.forEach(function (t) { if (areas.indexOf(t.area) < 0) { areas.push(t.area); } });
    if (state.area && areas.indexOf(state.area) < 0) { state.area = ""; }
    var box = $("tfAreaChips");
    box.innerHTML = "";
    [""].concat(areas).forEach(function (a) {
      var b = el("button", "tf-chip", a || "All areas");
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", String(state.area === a));
      b.addEventListener("click", function () { state.area = a; renderAreas(); render(); });
      box.appendChild(b);
    });
  }

  function render() {
    var inArea = state.tables.filter(function (t) { return !state.area || t.area === state.area; });
    renderSummary(inArea);

    var visible = inArea.filter(function (t) { return !state.status || t.statusLabel === state.status; });
    var grid = $("tfGrid");
    grid.innerHTML = "";
    $("tfEmpty").hidden = visible.length > 0;
    $("tfEmpty").textContent = state.tables.length === 0
      ? "No tables yet. Add tables under Setup > Dining Tables, then refresh."
      : "No tables match these filters.";

    visible.forEach(function (t) {
      var pickable = t.status === "available";
      var tooSmall = state.party > 0 && t.seats < state.party;
      var card = el(pickable ? "button" : "div", "tf-card " + t.status + (tooSmall ? " dim" : ""));
      if (pickable) {
        card.type = "button";
        card.setAttribute("aria-label", "Reserve table " + t.number + ", " + t.seats + " seats, " + t.area);
        card.addEventListener("click", function () { openModal(t); });
      }

      var top = el("div", "tf-card-top");
      top.appendChild(el("div", "tf-area", t.area));
      top.appendChild(el("span", "tf-badge", t.statusLabel));
      card.appendChild(top);

      var plan = el("div", "tf-plan");
      plan.innerHTML = tableSvg(t);
      card.appendChild(plan);

      var meta = el("div", "tf-meta");
      var nb = state.nextBooking[t.id];
      if (nb) {
        meta.appendChild(document.createTextNode("Next: "));
        meta.appendChild(el("strong", null, formatWhen(nb.when)));
        meta.appendChild(document.createTextNode(" - " + nb.guest + (nb.party ? " (" + nb.party + ")" : "")));
      } else if (t.status === "occupied") {
        meta.textContent = "Guests seated";
      }
      card.appendChild(meta);
      if (pickable) { card.appendChild(el("div", "tf-cta", tooSmall ? "Too small for party" : "Reserve this table")); }

      grid.appendChild(card);
    });
  }

  // ---------- reservation modal ----------

  function openModal(t) {
    state.selected = t;
    $("tfModalTitle").textContent = "Reserve table " + t.number;
    $("tfModalSub").textContent = t.area + " - seats " + t.seats;
    $("tfForm").reset();
    $("fParty").max = String(t.seats);
    $("fParty").value = String(state.party > 0 ? Math.min(state.party, t.seats) : Math.min(2, t.seats));
    var start = new Date();
    start.setMinutes(Math.ceil((start.getMinutes() + 1) / 15) * 15, 0, 0);
    $("fTime").value = toLocalInput(start);
    $("fTime").min = toLocalInput(new Date());
    showError("");
    $("tfSubmit").disabled = false;
    $("tfOverlay").hidden = false;
    $("fGuest").focus();
  }

  function closeModal() {
    $("tfOverlay").hidden = true;
    state.selected = null;
  }

  function showError(msg) {
    var e = $("tfError");
    e.textContent = msg;
    e.hidden = !msg;
  }

  function submitReservation(ev) {
    ev.preventDefault();
    var t = state.selected;
    if (!t) { return; }
    var guest = $("fGuest").value.trim();
    var phone = $("fPhone").value.trim();
    var party = parseInt($("fParty").value, 10);
    var when = $("fTime").value ? new Date($("fTime").value) : null;

    if (!guest) { return showError("Enter the guest's name."); }
    if (!/^[+\d][\d\s()-]{5,}$/.test(phone)) { return showError("Enter a valid phone number."); }
    if (!party || party < 1) { return showError("Enter the party size."); }
    if (party > t.seats) { return showError("Table " + t.number + " seats only " + t.seats + ". Pick a larger table."); }
    if (!when || isNaN(when)) { return showError("Pick a date and time."); }
    if (when.getTime() < Date.now() - 5 * 60000) { return showError("The reservation time is in the past."); }

    showError("");
    $("tfSubmit").disabled = true;
    $("tfSubmit").textContent = "Reserving...";

    addReservation({
      Guest_Name: guest,
      Phone: phone,
      Party_Size: party,
      Reservation_Time: toCreatorDate(when),
      Dining_Table: t.id,
      Status: "Booked",
      Special_Requests: $("fNotes").value.trim()
    }).then(function (resp) {
      if (responseCode(resp) === "3000") {
        if (state.preview) { t.status = "reserved"; t.statusLabel = "Reserved"; state.nextBooking[t.id] = { when: when, guest: guest, party: party }; }
        closeModal();
        toast("Table " + t.number + " reserved for " + guest + ", " + formatWhen(when) + ".");
        return state.preview ? render() : refresh();
      }
      throw resp;
    }).catch(function (err) {
      showError(errorText(err));
    }).then(function () {
      $("tfSubmit").disabled = false;
      $("tfSubmit").textContent = "Reserve table";
    });
  }

  // ---------- boot ----------

  function refresh() {
    return loadData().then(applyData).catch(function (err) {
      $("tfUpdated").textContent = "Could not load tables: " + errorText(err);
    });
  }

  function bind() {
    $("tfStatusFilter").addEventListener("change", function (e) { state.status = e.target.value; render(); });
    $("tfPartyFilter").addEventListener("input", function (e) { state.party = parseInt(e.target.value, 10) || 0; render(); });
    $("tfRefresh").addEventListener("click", refresh);
    $("tfClose").addEventListener("click", closeModal);
    $("tfCancel").addEventListener("click", closeModal);
    $("tfOverlay").addEventListener("click", function (e) { if (e.target === $("tfOverlay")) { closeModal(); } });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !$("tfOverlay").hidden) { closeModal(); } });
    $("tfForm").addEventListener("submit", submitReservation);
  }

  function sampleData() {
    var areas = ["Indoor", "Indoor", "Indoor", "Indoor", "Outdoor", "Outdoor", "Outdoor", "Rooftop", "Rooftop", "Private Room"];
    var seats = [2, 4, 4, 6, 2, 4, 8, 4, 6, 12];
    var status = ["Available", "Occupied", "Reserved", "Available", "Available", "Occupied", "Available", "Reserved", "Available", "Available"];
    var soon = new Date(Date.now() + 90 * 60000);
    return {
      tables: areas.map(function (a, i) {
        return { ID: String(i + 1), Table_Number: "T" + (i + 1), Seats: seats[i], Area: a, Status: status[i] };
      }),
      bookings: [
        { Dining_Table: { ID: "3", display_value: "T3" }, Reservation_Time: toCreatorDate(soon), Guest_Name: "Asha Rao", Party_Size: 4 },
        { Dining_Table: { ID: "8", display_value: "T8" }, Reservation_Time: toCreatorDate(new Date(soon.getTime() + 3600000)), Guest_Name: "Daniel Lee", Party_Size: 3 }
      ]
    };
  }

  function start() {
    bind();
    if (!hasSdk()) {
      state.preview = true;
      refresh();
      return;
    }
    ZOHO.CREATOR.init().then(function () {
      return ZOHO.CREATOR.UTIL.getInitParams();
    }).then(function (params) {
      state.appName = (params && (params.appLinkName || params.appName)) || null;
      return refresh();
    }).then(function () {
      setInterval(function () { if ($("tfOverlay").hidden) { refresh(); } }, REFRESH_MS);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
