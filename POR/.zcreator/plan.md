A purchase-to-pay app where employees build requests from an approved vendor catalog, managers approve business need, Finance issues a tracked PO, and supplier invoices are matched to PO lines and remaining balances. The design includes audit history, exception reporting, and a finance dashboard.

## User Profiles

Establish separate access groups for employees, approvers, Finance, and procurement administrators. Detailed permissions will be applied after all forms and reports exist.

Create shell custom profile files only, with name and type and no ModulePermissions: Employee (Custom), Purchase_Approver (Custom), Finance (Custom), Procurement_Admin (Custom). Intended access: Employee creates and views own requests; Purchase_Approver reviews assigned requests; Finance issues POs and manages invoice matching; Procurement_Admin manages catalog and has full operational access. Do not create default Administrator or other built-in profiles. Do not create roles or sharing rules.

**Implementation notes:** Shell profiles only; ModulePermissions belong in the later Permissions segment.

## Vendors

Maintain the approved supplier directory and core commercial details used throughout purchasing.

Create form Vendors. Fields: Vendor_Details section; Vendor_ID autonumber starting at 1000; Vendor_Name text must have unique; Tax_Registration_Number text; Contact_Name text; Contact_Email email; Contact_Phone phonenumber; Payment_Terms picklist values Net 15, Net 30, Net 45, Net 60, Due on Receipt and must have; Currency picklist values USD, EUR, GBP, INR, CAD, AUD and must have; Active checkbox initial true; Notes textarea. Stateful actions for add/edit. Reports: default list All_Vendors showing vendor ID, name, contact, payment terms, currency, active, sorted by name; list Active_Vendors filtered Active == true. Access intent: Procurement_Admin full CRUD, Finance read, other profiles no direct form access but may use lookups.

**Implementation notes:** Use declarative must-have/unique/default properties.

## Vendor_Items

Maintain each vendor’s approved catalog of purchasable items, standard prices, and tax rates.

Create form Vendor_Items. Fields: Item_Details section; Item_Code text must have unique; Vendor lookup to Vendors.ID, display Vendor_Name, must have; Item_Name text must have; Item_Description textarea; Unit_Of_Measure picklist values Each, Box, Pack, Case, Hour, Day, Month and must have; Unit_Price decimal must have with 2 decimal places; Tax_Rate decimal with 2 decimal places initial 0; Active checkbox initial true; Effective_From date; Effective_To date. Validate Unit_Price >= 0, Tax_Rate >= 0, and Effective_To is not before Effective_From. Reports: default list Vendor_Catalog showing item code, vendor, item, UOM, price, tax rate, active and effective dates with vendor/active filters; spreadsheet Catalog_Price_Maintenance for Procurement_Admin inline maintenance. Access intent: Procurement_Admin CRUD, Finance read, Employee and Purchase_Approver lookup/read only.

**Implementation notes:** Read lookup and choice field docs before implementation.

## Purchase_Request_Lines

Define the repeating catalog-item rows used inside each purchase request, including quantity and calculated values.

Create child form Purchase_Request_Lines for use as a subform. Fields: Line_Details section; Catalog_Item lookup to Vendor_Items.ID displaying Item_Code and Item_Name, must have; Item_Description textarea; Quantity decimal must have with 2 decimal places; Unit_Of_Measure text; Unit_Price decimal must have with 2 decimal places; Tax_Rate decimal with 2 decimal places initial 0; Line_Subtotal formula decimal = Quantity * Unit_Price; Tax_Amount formula decimal = Line_Subtotal * Tax_Rate / 100; Line_Total formula decimal = Line_Subtotal + Tax_Amount. Field workflow Catalog_Item_On_User_Input: populate description, UOM, unit price, and tax rate from selected catalog item. Validation workflow: Quantity > 0 and Unit_Price >= 0. Report: default list Purchase_Request_Line_Register showing item, quantity, UOM, unit price, tax, subtotal and total, accessible only to Finance and Procurement_Admin.

**Implementation notes:** This is the backing form for the Purchase_Requests grid; use formula fields for derived values.

## Purchase_Requests

Let employees assemble catalog-based requests, route them through manager and Finance review, and turn approved requests into tracked purchase orders.

Create form Purchase_Requests with record owner = Added_User. Fields: Request_Details section; Request_Number autonumber starting at 10000; Requester users field must have with initial logged-in user; Department text must have; Request_Date date must have initial current date; Needed_By date must have; Vendor lookup to Vendors.ID displaying Vendor_Name and must have; Assigned_Approver users field must have; Business_Justification textarea must have; Quote_Attachment upload file; Requested_Items grid/subform using Purchase_Request_Lines.ID, must have, minimum 1 row; Financial_Summary section; Subtotal decimal 2 places; Tax_Total decimal 2 places; Request_Total decimal 2 places; Workflow_Details section; Status picklist values Draft, Pending Manager Approval, Pending Finance Approval, Rejected, PO Issued, Partially Invoiced, Matched, Match Exception with initial Draft and must have; Rejection_Reason textarea; PO_Number text unique; PO_Date date; PO_Total decimal 2 places; Invoiced_Total decimal 2 places initial 0; Remaining_To_Invoice decimal 2 places; Last_Match_Date date. Add blueprint components for the Status stages. Workflows: Purchase_Requests_On_Load locks workflow, total, and PO fields for Employees; enables only appropriate fields for Finance/Procurement_Admin; shows Rejection_Reason only when rejected; prevents editing request content after submission. Vendor_On_User_Input clears incompatible line rows and constrains Catalog_Item choices to active items from the selected vendor. Purchase_Requests_On_Validate requires Needed_By >= Request_Date, at least one line, every line's item belongs to selected active vendor, positive quantities, and recalculates Subtotal, Tax_Total, Request_Total. Purchase_Requests_On_Success writes an Audit_Log entry for creation and material edits. Blueprint Purchase_Request_Approval: Submit Request from Draft to Pending Manager Approval owned by Employee; Manager Approve from Pending Manager Approval to Pending Finance Approval owned by Purchase_Approver and restricted to Assigned_Approver; Manager Reject to Rejected requiring reason; Finance Issue PO from Pending Finance Approval to PO Issued owned by Finance/Procurement_Admin, assigns PO_Number in format PO-<record ID>, PO_Date current date, PO_Total=Request_Total, Remaining_To_Invoice=PO_Total, and logs action; Finance Reject to Rejected requiring reason. Reports: default list My_Purchase_Requests filtered to logged-in owner, showing request number, date, vendor, total, needed by, status and PO number; list Purchase_Approval_Queue for Purchase_Approver filtered Pending Manager Approval; list Finance_Approval_Queue filtered Pending Finance Approval; list Purchase_Order_Register filtered PO_Number not empty showing PO/date/vendor/PO total/invoiced/remaining/status; kanban Purchase_Request_Board grouped by Status for Finance and Procurement_Admin. Configure conditional formatting for rejected, exception, pending and matched states.

**Implementation notes:** Use blueprint plus validation/audit workflows. Read users, lookup, subform, upload, formula/autonumber, blueprint, form workflow, Deluge, and task docs before writing.

## Invoice_Lines

Define invoice line rows so Finance can compare billed quantities and prices to the ordered catalog items.

Create child form Invoice_Lines for use as a subform. Fields: Invoice_Line_Details section; Catalog_Item lookup to Vendor_Items.ID displaying Item_Code and Item_Name, must have; Description textarea; Invoiced_Quantity decimal must have with 2 decimal places; Unit_Price decimal must have with 2 decimal places; Tax_Rate decimal with 2 decimal places initial 0; Line_Subtotal formula decimal = Invoiced_Quantity * Unit_Price; Tax_Amount formula decimal = Line_Subtotal * Tax_Rate / 100; Line_Total formula decimal = Line_Subtotal + Tax_Amount. Catalog_Item_On_User_Input workflow populates description, standard price, and tax rate as starting values, while allowing Finance to enter the actual invoiced values. Validation requires positive quantity and nonnegative price/tax. Report: default list Invoice_Line_Register showing item, quantity, price, tax and totals, accessible only to Finance and Procurement_Admin.

**Implementation notes:** Use formulas for line totals; this is the backing form for the Invoices grid.

## Invoices

Capture supplier invoices, match them against issued POs, support partial billing, and clearly flag discrepancies for Finance.

Create form Invoices. Fields: Invoice_Details section; Invoice_Number text must have; Purchase_Order lookup to Purchase_Requests.ID displaying PO_Number and Vendor and must have, constrained to statuses PO Issued, Partially Invoiced, Match Exception; Vendor lookup to Vendors.ID displaying Vendor_Name and must have; Invoice_Date date must have; Due_Date date; Invoice_File upload file must have; Invoice_Lines grid/subform using Invoice_Lines.ID, must have, minimum 1 row; Amounts section; Invoice_Subtotal decimal 2 places; Invoice_Tax decimal 2 places; Invoice_Total decimal 2 places; Match_Result section; Match_Status picklist values Pending Match, Matched, Partial Match, Exception with initial Pending Match and must have; Amount_Variance decimal 2 places; Exception_Details textarea; Matched_On date; Matched_By users field. Workflows: Purchase_Order_On_User_Input populates Vendor, filters invoice line catalog choices to items present on the selected PO, and shows remaining PO amount. Invoices_On_Load locks match-result fields except for Finance/Procurement_Admin. Invoices_On_Validate rejects duplicate Invoice_Number for the same Vendor, requires Vendor to equal the PO vendor, requires at least one line, recalculates invoice totals, compares each invoice line to PO item quantities/prices and prior invoices, calculates cumulative amount and variance, and sets Pending Match data without silently exceeding remaining quantities. Invoices_On_Success performs two-way match: Matched when lines and cumulative totals exactly satisfy the PO; Partial Match when valid billed quantities remain; Exception when item, quantity, price, tax, vendor, or cumulative total differs/exceeds tolerance of 0.01. It sets Matched_On/Matched_By, updates Purchase_Requests.Invoiced_Total, Remaining_To_Invoice, Last_Match_Date and Status to Partially Invoiced, Matched, or Match Exception, and writes Audit_Log entries for invoice capture and match result. Reports: default list Invoice_Register showing invoice number, PO, vendor, dates, total, match status and variance; list Match_Exceptions filtered Match_Status == Exception; list Unpaid_or_Open_Invoices filtered Match_Status in Partial Match/Exception/Pending Match. Access: Finance and Procurement_Admin CRUD; Purchase_Approver read-only for invoices tied to requests they approved; Employee no invoice access.

**Implementation notes:** Two-way line-level match with partial invoices; use cross-form validation and updates, null guards, and fetch-once/reuse patterns.

## Audit_Log

Keep an immutable history of submissions, approvals, PO issuance, invoice matching, and financial exceptions.

Create form Audit_Log. Fields: Audit_Details section; Event_Time datetime must have initial current time; User_Email email must have; User_Profile text; Action text must have; Component text must have; Record_ID number must have; Reference_Number text; Before_Value textarea; After_Value textarea; Notes textarea. No end-user add/edit actions beyond what is required structurally; records are written by workflows. Report: default list Audit_Trail showing newest first with event time, user, profile, action, component, reference and notes, accessible read-only to Finance and Procurement_Admin. Employee and Purchase_Approver have no access. Prevent edit/delete through permissions.

**Implementation notes:** Critical financial and approval actions must write here.

## Purchase_Finance_Dashboard

Give Finance and procurement a clear operational view of pending approvals, issued POs, invoice exposure, and match exceptions.

Create page Purchase_Finance_Dashboard using a page definition whose content contains only file references/layout wrappers and one rich .dshtml or .zml snippet as the primary UI. Prefer ZCS components and include zcs-global.css once. Dashboard content: header with current date and concise workflow explanation; KPI cards for Pending Manager Approval count, Pending Finance Approval count, Open PO value, Remaining to Invoice value, Match Exception count, and Matched Invoice value; status-distribution donut or styled CSS visualization; monthly requested-vs-invoiced trend; top vendors by PO value; exception queue table with invoice, PO, vendor, variance and age/status badges; recent activity feed from Audit_Log; quick links to create a purchase request, open approval queues, PO register, invoice entry, and match exceptions. Data must come from Vendors, Purchase_Requests, Invoices, and Audit_Log using embedded Deluge in the snippet. Page access intended for Finance and Procurement_Admin, with a reduced approval summary available to Purchase_Approver if page permissions support it.

**Implementation notes:** Use page-builder, ListComponents/GetComponent, and page/snippet docs. Do not inline element definitions in the parent page file.

## Permissions

Apply complete least-privilege access so employees see their own requests, approvers handle assigned work, and Finance controls POs and invoice matching.

Edit all profile files to add complete ModulePermissions, FieldPermissions, ReportPermissions, page permissions, and button/transition visibility for every component. Employee: create/read/edit own Purchase_Requests only while Draft; view Vendor and Vendor_Item lookup data; no direct child-line, invoice, audit, catalog maintenance, PO financial-control field editing, dashboard, or admin reports. Purchase_Approver: read assigned requests and lines, execute manager approve/reject transitions, read relevant vendors/catalog, read-only approved-related invoices where supported; no catalog maintenance, PO issuance, invoice editing, or audit access. Finance: read vendors/catalog; read all requests; execute Finance Issue PO/Reject; full CRUD Invoices and invoice lines; read Audit_Log; access finance reports and dashboard; no deletion of financial records. Procurement_Admin: full operational access to vendors, catalog, requests, POs, invoices, dashboard and audit reports, but Audit_Log remains read-only/no delete. Hide/disable unauthorized form and report buttons through profile permissions. Include all fields and every report created by the plan. Do not add roles unless required by platform syntax; rely on record ownership, report criteria, profile permissions, and Assigned_Approver validation.

**Implementation notes:** Read existing forms/reports first and use permissions profile syntax docs before edits.

## UI Configuration

Organize forms, approvals, purchasing, invoices, reports, and the dashboard into a clear web navigation experience with complete report layouts.

Create devices/web/forms.ds mappings for every form with top label placement. Create web quickview/detailview device layout file for every report: All_Vendors, Active_Vendors, Vendor_Catalog, Catalog_Price_Maintenance, Purchase_Request_Line_Register, My_Purchase_Requests, Purchase_Approval_Queue, Finance_Approval_Queue, Purchase_Order_Register, Purchase_Request_Board, Invoice_Line_Register, Invoice_Register, Match_Exceptions, Unpaid_or_Open_Invoices, Audit_Trail. Each layout must list only fields defined in its parent report; include any per-record custom action display names if present. Create devices/web/menu-sections.ds with a Purchasing space and sections: Requests (Purchase_Requests form, My_Purchase_Requests, Purchase_Request_Board as permitted), Approvals (Purchase_Approval_Queue, Finance_Approval_Queue), Purchase Orders (Purchase_Order_Register), Invoices (Invoices form, Invoice_Register, Match_Exceptions, Unpaid_or_Open_Invoices), Catalog Administration (Vendors, Vendor_Items, All_Vendors, Vendor_Catalog, Catalog_Price_Maintenance), Finance Analytics (Purchase_Finance_Dashboard, Audit_Trail), and mandatory SharedAnalytics_Section of shared_user_report_section type. Use valid documented icons. Create devices/web/theme.ds with a professional finance/procurement theme. Do not create tablet/phone files unless explicitly supported by the plan.

**Implementation notes:** Read devices and icons docs. Emit web.ds for every report without exception.