An administrator-only appointment app that immediately creates Zoho Bookings appointments for one configured service and staff/resource. It records the booking result, prevents duplicate creation on later edits, and highlights records needing manual reconciliation.

## User Profiles

Use Creator’s built-in Administrator profile as the only audience for this app. No custom user profiles or role hierarchy are needed.

Do not create custom profile files. The app uses the system-provided Administrator profile only; no shell profile artifact is required. Do not create roles or sharing rules.

## Booking_Settings

Store the single Zoho Bookings destination used by every appointment. Administrators configure the service, assigned staff member or resource, and booking time zone once.

Create form Booking_Settings with title/display name “Booking Settings”, success message, and one section Configuration_Details. Fields: Setting_Name (text, must have, initial value “Default Booking Configuration”); Service_ID (number, must have); Assignee_ID (number, must have); Assignee_Type (picklist, must have, values “Staff” and “Resource”, initial value “Staff”); Time_Zone (text, must have, initial value “Asia/Calcutta”). Use width medium and balanced columns. Add standard add/edit actions. Add form properties total entries allowed count = 1 with a clear exceed message. Create default list report Booking_Settings_Report on Booking_Settings showing Setting_Name, Service_ID, Assignee_ID, Assignee_Type, and Time_Zone. Sort by Setting_Name ascending. No workflows.

**Implementation notes:** Use declarative total-entry restriction rather than a validation workflow to enforce a singleton configuration record.

## Appointments

Capture customer appointment details and immediately create the corresponding Zoho Bookings appointment. Store the remote booking reference and sync outcome, while flagging any later edits for administrator review.

First create administrator-only Quick Connect connection library/integrations/connections/zoho_bookings_connection.ds with connector = zoho_bookings and permissions containing create_appointment; omit user access, auth per env, and BYOC mode. Create form Appointments with title/display name “Appointments” and success message. Section Appointment_Details: Customer_Name (text, must have), Customer_Email (email, must have, personal data = true), Customer_Phone (phonenumber, must have, personal data = true), Start_Time (datetime, must have), End_Time (datetime, must have), Notes (textarea, optional). Section Sync_Details with visibility true: Sync_Status (picklist; values “Pending”, “Synced”, “Needs Review”, “Failed”; initial value “Pending”; private = true), Booking_ID (text; private = true), Summary_URL (url; private = true), Last_Sync_Message (textarea; private = true), Synced_At (datetime; private = true). Use width medium, balanced columns, and standard add/edit actions.
Create workflow Appointments_Validate on add or edit / on validate: reject when End_Time is not later than Start_Time.
Create workflow Appointments_Create_Booking on add / on success: fetch the singleton Booking_Settings record with a count guard; if absent, set Sync_Status to “Failed” and Last_Sync_Message to a clear configuration error. Otherwise build customer_details map with name, email, and phone_number; format Start_Time as the appointment date-time text expected by Zoho Bookings; call zoho.bookings.createAppointment(Service_ID, formatted start, customer map, Assignee_ID, Time_Zone, Assignee_Type == “Staff”, “zoho_bookings_connection”) in try/catch. Guard response keys before extraction. On success store Booking_ID, Summary_URL, Sync_Status = “Synced”, Synced_At = zoho.currenttime, and a concise message. On API-declared failure or exception set Sync_Status = “Failed” and store the returned/error text. Never hardcode credentials.
Create workflow Appointments_Flag_Edit on edit / on success: if Booking_ID is not empty, set Sync_Status = “Needs Review” and Last_Sync_Message to explain that the Creator record changed after booking and must be reconciled manually; do not call Bookings and do not clear Booking_ID.
Create default list report All_Appointments showing Customer_Name, Customer_Email, Customer_Phone, Start_Time, End_Time, Sync_Status, Booking_ID, Summary_URL; filters Customer_Name, Start_Time, Sync_Status; sort Start_Time descending; conditional formatting for Failed and Needs Review.
Create calendar report Appointment_Calendar showing Customer_Name, Start_Time, End_Time, Sync_Status; month view, Monday week start, Customer_Name display field, Start_Time start, End_Time end.
Create list report Sync_Exceptions with criteria Sync_Status == “Failed” or Sync_Status == “Needs Review”; show Customer_Name, Customer_Email, Start_Time, Sync_Status, Booking_ID, Last_Sync_Message; filters Sync_Status and Start_Time; sort Start_Time descending.

**Implementation notes:** Use the documented native zoho.bookings.createAppointment task. The Bookings API task does not accept notes or an end time, so keep those fields locally for operational context. Do not attempt automatic remote updates after edit.

## Sync_Dashboard

Provide a concise operational dashboard for appointment volume and synchronization health. Administrators can see upcoming bookings, successful syncs, failures, and records requiring review at a glance.

Create page Sync_Dashboard with display name “Sync Dashboard”. Use one responsive .dshtml snippet as the primary UI, backed by inline Deluge queries. Include: a header with current date/context; KPI cards for total appointments, upcoming appointments, synced appointments, failed syncs, and needs-review records; a status distribution visualization using styled progress bars or donut-like CSS; an upcoming appointments table with customer, start time, and sync badge; a sync attention panel listing recent Failed/Needs Review records and their messages; and clear empty states. Use ZCS components/CSS variables and Nucleo zc-li icons after ListComponents/GetComponent discovery, include shared zcs-global.css once, avoid JavaScript, and ensure mobile responsiveness. The page parent file must contain only the snippet file reference inside the required DSP envelope and layout wrappers.

**Implementation notes:** Build this as a rich responsive HTML snippet using ZCS components and Creator theme variables; keep the main page content limited to file references and layout wrappers.

## Permissions

Confirm that only administrators can access configuration, appointments, reports, and the dashboard. No additional profiles or sharing hierarchy will be introduced.

Do not create custom profile, role, portal, or sharing-rule files. Creator’s system Administrator profile supplies full access to Booking_Settings, Appointments, Booking_Settings_Report, All_Appointments, Appointment_Calendar, Sync_Exceptions, and Sync_Dashboard. Verify no custom profile shells exist that require ModulePermissions.

## UI Configuration

Configure a clean web navigation experience, report record layouts, and a booking-focused visual theme. The dashboard, appointments, sync exceptions, calendar, and settings will be organized for fast administrator access.

Create devices/web/forms.ds mappings for Booking_Settings and Appointments with appropriate label placement. Create web report device layout file for every report: Booking_Settings_Report, All_Appointments, Appointment_Calendar, and Sync_Exceptions; define valid quickview/detailview fields drawn only from each report’s columns. Create devices/web/menu-sections.ds with one administration space and sections for Overview, Appointments, Configuration, and mandatory SharedAnalytics_Section. Add Sync_Dashboard page, Appointments form/reports, Appointment_Calendar, Sync_Exceptions, and Booking_Settings/Booking_Settings_Report with valid calendar, synchronization, settings, and report icons. Create devices/web/theme.ds using a professional blue theme, Poppins font, and logo preference app_icon placed left. Create customization/customization.ds with a booking/calendar-appropriate zc-ab-* icon, white foreground, and background color exactly matching the selected theme preset’s primary hex. Web only; do not create phone or tablet configuration.

## Integrations

Connect datasources to sync data automatically.

- **Zoho Bookings** — Creates appointments from Creator records using one configured service and staff or resource.