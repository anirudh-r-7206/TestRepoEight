A single-user freelancer workspace for managing clients and their projects, tracking cumulative billed hours, and viewing INR earnings. The interface emphasizes a minimal editorial dashboard with client cards, concise project status views, and a drill-down page for each client.

## User Profiles

Use Creator’s built-in access model for the independent freelancer, without adding unnecessary custom roles or profiles.

User profile model: one internal independent freelancer using the app, with full management access. Do not create custom profile files, roles, portal profiles, or sharing rules. Rely on the system-created Administrator/Developer/Read/Write defaults. This segment establishes that all business components are designed primarily for the app owner/Administrator.

**Implementation notes:** This is intentionally a no-file shell segment. Default Creator profiles are system-created and must not be written unless explicitly requested.

## Clients

Store each client’s contact and billing details, and provide a clean directory for browsing client relationships.

Create stateful form Clients at components/Clients/form/Clients.ds. Use title display name “Clients”, add title “Add Client”, edit title “Edit Client”, and success message “Client saved.” Fields in exact order: Client_Details (section, display “Client Details”, row 1, column 0); Client_Name (must have text, display “Client Name”, maxchar 150, row 1, column 1, width medium); Email (must have unique email, personal data true, row 1, column 2, width medium); Company (text, maxchar 150, row 1, column 1, width medium); Hourly_Rate (must have INR currency, display “Hourly Rate”, decimalplace 2, initial value 0, row 1, column 2, width medium). Include canonical on-add Submit/Reset and on-edit Update/Cancel actions.
Create default list report All_Clients at components/Clients/reports/All_Clients/All_Clients.ds, display “All Clients”, showing Client_Name as a record link, Company, Email, and Hourly_Rate; filters Company; sort Client_Name ascending. No workflows or blueprints are required. Access intent: Administrator full CRUD; standard Write users CRUD; Read users view only.

**Implementation notes:** Define Clients before Projects because Projects uses a lookup to Clients. Use INR as the currency type.

## Projects

Track every client project, its current stage, due date, and cumulative billed hours, with list, board, and calendar views.

Create stateful form Projects at components/Projects/form/Projects.ds. Use title display name “Projects”, add title “Add Project”, edit title “Edit Project”, and success message “Project saved.” Fields in exact order: Project_Details (section, display “Project Details”, row 1, column 0); Client (must have lookup picklist to Clients.ID with displayformat [Client_Name], row 1, column 1, width medium); Project_Name (must have text, display “Project Name”, maxchar 180, row 1, column 2, width medium); Status (must have static picklist with values “Active”, “Review”, “Completed”, initial value “Active”, row 1, column 1, width medium); Due_Date (must have date, display “Due Date”, row 1, column 2, width medium); Billed_Hours (must have decimal, display “Billed Hours”, decimalplace 2, initial value 0, row 1, column 1, width medium). Include canonical on-add Submit/Reset and on-edit Update/Cancel actions.
Create default list report All_Projects, display “All Projects”, showing Project_Name as record link, Client, Status, Due_Date with full-date display, and Billed_Hours with total aggregation; filters Client and Status; group by Status ascending with record count; sort Due_Date ascending. Create kanban report Project_Status_Board, display “Project Status Board”, showing Project_Name, Client, Due_Date, Billed_Hours; filters Client and Status; sort Due_Date ascending; options display field Status, sort order custom following the choice order, record count enable. Create calendar report Project_Due_Calendar, display “Project Due Calendar”, showing Project_Name, Client, Status, Due_Date; filters Client and Status; month view, Monday week start, display field Project_Name, start date Due_Date, default date Today/Currentmonth/Currentyear. No workflows or blueprints are required because status values are directly editable and billed hours are maintained as a project total. Access intent: Administrator full CRUD; standard Write users CRUD; Read users view only.

**Implementation notes:** Use a lookup to Clients and a static status picklist. Billed hours are cumulative project totals, not individual time logs.

## Freelancer_Dashboard

Create the main workspace with an earnings and workload summary at the top and a responsive card grid of clients below.

Create page Freelancer_Dashboard, display “Freelancer Dashboard”, under pages/Freelancer_Dashboard/. Build the UI primarily as a dshtml snippet referenced by the parent page file; the parent content must contain only file references and layout wrappers. The snippet must query Clients and Projects and render: an editorial header; a global progress summary bar at the top containing total active projects where Status == “Active”, total projects in review, completed projects, total billed hours, and total earnings in INR. Calculate earnings as the sum, for each project, of Billed_Hours multiplied by the linked client’s Hourly_Rate; safely handle nulls as zero. Below, render a responsive clean card grid with one card per client showing Client_Name, Company, Email, Hourly_Rate, count of Active projects, total project count, total billed hours across that client’s projects, and total earned amount for that client. Each card must be clickable and open #Page:Client_Detail?Client_ID=<ID>. Include prominent indigo actions to add a client and add a project using Creator URLs. Include polished empty states when no clients or projects exist. Styling: crisp white background, slate gray typography, restrained borders/shadows, generous editorial whitespace, indigo #4F46E5 accents, accessible contrast, responsive card columns, no JavaScript. Use Creator/Nucleo icons only where valid. Page link name and file name must follow the modular page convention, with the parent named Freelancer_Dashboard_page.ds.

**Implementation notes:** Strongly prefer one rich dshtml snippet. Use ZCS components/variables where suitable and keep the visual system white, slate, and indigo. Client cards must link to Client_Detail with Client_ID.

## Client_Detail

Provide a focused client profile with billing totals and that client’s complete project list, reached directly from a dashboard card.

Create page Client_Detail, display “Client Detail”, under pages/Client_Detail/. Declare typed page input parameter int Client_ID via the page parameters attribute. Build primarily as a dshtml snippet referenced by Client_Detail_page.ds; parent content contains only file references/layout wrappers. Query the selected Clients record by ID and its related Projects records. Render a back link to the main dashboard, client identity/contact information, Company, Hourly_Rate in INR, KPI cards for total projects, active projects, total billed hours, and total earnings calculated as the sum of each related project’s Billed_Hours times this client’s Hourly_Rate. Render the client’s projects as a clean responsive table/card list with Project_Name, status badge using distinct restrained colors for Active/Review/Completed, Due_Date, Billed_Hours, and calculated project earnings. Project names should link to the project record where feasible. Include an indigo action to add a project with the Client lookup prefilled and an edit-client action. Add a polished empty state and an invalid-client state. Match the white/slate/indigo editorial design, use no JavaScript, and keep calculations null-safe.

**Implementation notes:** Use typed int parameter Client_ID and a rich dshtml snippet. Gracefully handle missing or invalid IDs.

## Permissions

Confirm a simple owner-operated access model without introducing extra profiles or role hierarchy.

Permissions converge: do not create or edit profile, role, portal, or sharing-rule files. The app is owner-operated and uses system-created defaults. Intended effective permissions: Administrator has create/read/update/delete and access to all fields, reports, and both pages; Developer likewise for building/testing; Write users may create/read/update Clients and Projects and access all reports/pages; Read users may view forms/reports/pages without mutation. Since the user did not explicitly request custom profiles, preserve these as intended system-default access rather than writing default profile DS files.

**Implementation notes:** No permission file should be emitted because the plan deliberately uses system-created default profiles, which must not be written unless explicitly requested.

## UI Configuration

Configure the web navigation, form presentation, report previews, and the app’s minimal indigo visual theme.

Create devices/web/forms.ds mapping Clients and Projects with top label placement. Create web device layouts for every report: components/Clients/reports/All_Clients/devices/web.ds; components/Projects/reports/All_Projects/devices/web.ds; components/Projects/reports/Project_Status_Board/devices/web.ds; components/Projects/reports/Project_Due_Calendar/devices/web.ds. Each must define quickview and detailview using only fields present in its parent report; prioritize the report’s identity field and billing/status/date fields. No phone/tablet mappings are required.
Create devices/web/menu-sections.ds with a primary workspace containing a Dashboard section with page Freelancer_Dashboard, a Clients section with form Clients and report All_Clients, and a Projects section with form Projects plus All_Projects, Project_Status_Board, and Project_Due_Calendar. Map Client_Detail under unused because it is opened contextually from client cards, not primary navigation. Include the mandatory SharedAnalytics_Section. Use only documented valid icons selected from business/users/design categories.
Create devices/web/theme.ds using a documented web theme compatible with page-led navigation and set available preferences to a white background, slate typography, and indigo accent where supported. Do not create any other files under devices/.

**Implementation notes:** Every report must receive web device layout. Include SharedAnalytics_Section. Validate every device report field against its parent report.