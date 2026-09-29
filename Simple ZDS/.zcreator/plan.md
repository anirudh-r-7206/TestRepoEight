A lightweight personal to-do app for capturing tasks, setting priority and due dates, and tracking progress through simple list, board, and calendar views. It uses Creator’s built-in profiles and requires no integrations or custom dashboard.

## User Profiles

Use Creator’s standard built-in access profiles so the app remains simple and immediately usable.

No custom profile files. Rely on Creator default profiles (Read, Write, Developer, Administrator, Customer) created automatically when no custom profiles exist. Do not create roles or sharing rules.

## Tasks

Capture each to-do item with its description, priority, due date, and current progress. Provide practical views for browsing, status tracking, and deadline planning.

Create stateful form Tasks in components/Tasks/form/Tasks.ds. Fields: Task_Details section (type section, display name Task Details, row 1 column 0); Title (type text, mandatory, row 1 column 1, width medium, maxchar 150); Description (type textarea, optional, row 1 column 1, width medium, height 100px); Priority (type picklist, mandatory, static values Low, Medium, High, initial value Medium, row 1 column 1, width medium); Due_Date (type date, optional, row 1 column 1, width medium); Status (type picklist, mandatory, static values To Do, In Progress, Completed, initial value To Do, row 1 column 1, width medium); Completed (type checkbox, initial value false, row 1 column 1, width medium). Add standard submit/reset and update/cancel actions and success message 'Task saved successfully.' Create reports: default list All_Tasks showing Title, Priority, Due_Date, Status, Completed; filters Priority and Status; sort Due_Date ascending. Create kanban Task_Board showing Title, Priority, Due_Date, Completed, grouped by Status with record count enabled and filters Priority and Status. Create calendar Task_Calendar showing Title, Priority, Due_Date, Status, month view using Due_Date as start date and Title as display field, with filters Priority and Status. No workflows, blueprints, record templates, or custom actions.

**Implementation notes:** Use declarative mandatory/default properties; no workflows are needed. Define static choices with documented picklist syntax.

## Permissions

Keep access management aligned with Creator’s standard built-in profiles without adding custom security complexity.

No custom profile, role, portal profile, or sharing-rule files. Creator default profiles remain authoritative. Do not write ModulePermissions because no custom profile files are being created.

## UI Configuration

Configure a clean web navigation experience and useful record previews for every task view.

Create devices/web/forms.ds mapping Tasks with left label placement. Create web report device files for All_Tasks, Task_Board, and Task_Calendar under each report's devices/web.ds, with quickview and detailview fields restricted to fields present in that report definition. Create devices/web/menu-sections.ds with one main space and a Tasks section containing the Tasks form, All_Tasks, Task_Board, and Task_Calendar; use valid documented icons and include SharedAnalytics_Section. Create devices/web/theme.ds with a simple appropriate documented web theme. Do not create phone or tablet mappings.

**Implementation notes:** Every report must receive a web device layout. Use only valid documented icons and include SharedAnalytics_Section.