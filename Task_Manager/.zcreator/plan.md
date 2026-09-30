A personal task manager for capturing, prioritizing, scheduling, and completing work. It uses one streamlined task form, practical list/board/calendar views, and a visual dashboard with no external integrations.

## User Profiles

Use Creator’s built-in administrator access for this personal app, without adding unnecessary custom profiles or role hierarchies.

Profile model: single personal owner using the built-in Administrator profile. Do not create custom profile files because default profiles are system-created when no custom profiles exist. Do not create roles, portal profiles, or sharing rules. Confirm that later Permissions work requires no custom ModulePermissions artifacts.

**Implementation notes:** This segment intentionally writes no profile file unless the current app environment requires an explicit custom profile, which is not expected.

## Tasks

Capture each task with its description, status, priority, category, and due date. Provide list, Kanban, and calendar views so work can be reviewed in the most useful format.

Create stateful form Tasks with title display name "Tasks", add title "Add Task", edit title "Edit Task", success message "Task saved." Fields in one labeled section Task_Details (type=section, row=1, column=0): Task_Name (text, displayname "Task Name", must have, maxchar=200, row=1, column=1, width=medium); Description (textarea, height=120px, row=1, column=2, width=medium); Status (static picklist, must have, values "Not Started", "In Progress", "Completed", initial value "Not Started", row=1, column=1, width=medium); Priority (static picklist, must have, values "Low", "Medium", "High", initial value "Medium", row=1, column=2, width=medium); Due_Date (date, displayname "Due Date", row=1, column=1, width=medium); Category (text, maxchar=100, row=1, column=2, width=medium); Completed (checkbox, initial value=false, row=1, column=1, width=medium). Include canonical add/edit submit, reset, update, and cancel actions.
Reports: (1) default list All_Tasks, display "All Tasks", source Tasks, columns Task_Name, Status, Priority, Due_Date, Category, Completed; filters Status, Priority, Category; group by Status ascending with record count; sort Due_Date ascending then Priority descending. (2) kanban Task_Board, display "Task Board", source Tasks, columns Task_Name, Priority, Due_Date, Category; filters Priority and Category; options display field=Status, sort order=custom or ascending if custom syntax is unsuitable, record count enabled. (3) calendar Task_Calendar, display "Task Calendar", source Tasks where Due_Date is not null, columns Task_Name, Status, Priority, Due_Date; filters Status and Priority; monthly display, Monday week start, display field Task_Name, start date Due_Date, relative current-date default.
Workflows: create Status_On_User_Input field workflow triggered on user input of Status for add/edit so Completed becomes true when Status is "Completed" and false otherwise. Create Completed_On_User_Input field workflow triggered on user input of Completed for add/edit so checking it sets Status to "Completed" and unchecking a completed task sets Status to "Not Started". Create Tasks_On_Load form workflow for add/edit to keep the two controls synchronized when the form opens. Use null-safe Deluge and avoid recursive behavior. No blueprint, approval, schedule, integration, or notification.

**Implementation notes:** Read section and choice-field detail docs before implementing. Read form workflow and Deluge UI docs before writing synchronization workflows. Component link names must remain unique.

## Task_Dashboard

Show an at-a-glance personal workload overview with task totals, completion progress, status and priority breakdowns, overdue items, and upcoming due work.

Create page Task_Dashboard with display name "Task Dashboard" using a responsive HTML snippet rather than native page charts. Main page file must be pages/Task_Dashboard/Task_Dashboard_page.ds and contain only the page declaration, ZML layout wrappers, and a file reference inside the required DSP envelope. Create content/Task_Overview.dshtml as the authoritative snippet. The snippet queries Tasks read-only and renders: header; KPI cards for total, not started, in progress, completed, and overdue; completion progress bar; status distribution; priority distribution; overdue task list; next five incomplete tasks ordered by Due_Date. Use ZCS components and variables where suitable, include zcs-global.css once, use Creator theme variables, Nucleo zc-li icons, accessible labels, empty states, and responsive styling. No JavaScript. Overdue means Due_Date before current date and Status is not Completed. Escape task text safely. Keep all Deluge within the snippet and use null-safe conditions.

**Implementation notes:** Use ListComponents then GetComponent before authoring. Read page HTML snippet and output-structure docs in the implementation turn. Do not create native chart, panel, board, gauge, embedded report, or embedded form files.

## Permissions

Keep access simple and private for the app owner, relying on Creator’s built-in administrator permissions.

Review all implemented forms, fields, reports, and page. Because the app is personal and uses only the built-in Administrator profile, do not create custom profile, role, portal, or sharing-rule files. Verify that no custom permission declarations are necessary. If an explicit profile artifact already exists unexpectedly, complete its ModulePermissions for Tasks, All_Tasks, Task_Board, Task_Calendar, and Task_Dashboard according to full administrator access; otherwise write nothing.

**Implementation notes:** Do not create default profile files unless explicitly requested; built-in profiles are system-managed.

## UI Configuration

Provide clean web navigation, consistent report layouts, and a task-focused visual theme with a recognizable app icon.

Create web UI configuration only. devices/web/forms.ds maps Tasks with label placement appropriate for a compact two-column form. Create mandatory report device files: components/Tasks/reports/All_Tasks/devices/web.ds, components/Tasks/reports/Task_Board/devices/web.ds, and components/Tasks/reports/Task_Calendar/devices/web.ds, each with valid quickview and detailview fields drawn only from its parent report definition. Create devices/web/menu-sections.ds with one main space and sections for Overview and Tasks; map page Task_Dashboard, form Tasks, and reports All_Tasks, Task_Board, Task_Calendar; include the mandatory SharedAnalytics_Section. Use valid domain-appropriate menu icons. Create devices/web/theme.ds using a clean modern theme, Poppins or Zoho Puvi font, a blue primary preset, and logo preference app_icon placed left. Create customization/customization.ds with app icon zc-ab-project-mgmt1, background color exactly matching the selected theme preset’s primary blue hex, and white foreground. No phone or tablet configuration.

**Implementation notes:** Read device detail docs, menu examples, web themes/customize color table, and relevant icon category before writing. Every report must receive web.ds.