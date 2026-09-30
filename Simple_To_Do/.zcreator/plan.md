A simple personal to-do application for capturing tasks, prioritizing work, tracking due dates, and moving items through a small completion workflow. It uses Zoho Creator’s default user profiles and includes a concise dashboard plus list and board views.

## User Profiles

Use Zoho Creator’s built-in profiles so the app remains simple and immediately usable without custom access administration.

Do not create custom profile files. Rely on Creator's automatically provided Read, Write, Developer, Administrator, and Customer profiles because no custom access model is required. This segment establishes that later components use the default profile model only.

**Implementation notes:** No files are expected from this shell segment unless required by validation.

## Tasks

Capture each to-do item with its description, urgency, due date, and current progress. Provide both a familiar task list and a visual board for day-to-day management.

Create stateful form Tasks in components/Tasks/form/Tasks.ds. Fields, in order: Task_Details section (type=section, displayname="Task Details", row=1, column=0); Title (type=text, must have, maxchar=150, row=1, column=1, width=medium); Description (type=textarea, height=100px, row=1, column=2, width=medium); Priority (type=picklist, must have, values={"Low","Medium","High"}, initial value="Medium", row=1, column=1, width=medium); Status (type=picklist, must have, values={"To Do","In Progress","Done"}, initial value="To Do", row=1, column=2, width=medium); Due_Date (type=date, displayname="Due Date", row=1, column=1, width=medium). Add standard on-add Submit/Reset and on-edit Update/Cancel actions and success message "Task saved successfully." Create default list report All_Tasks at components/Tasks/reports/All_Tasks/All_Tasks.ds, sourced from Tasks, showing Title, Priority, Status, Due_Date, and Description; filters Priority, Status, Due_Date; sort by Due_Date ascending then Priority descending. Create kanban report Task_Board at components/Tasks/reports/Task_Board/Task_Board.ds, sourced from Tasks, showing Title, Priority, Status, Due_Date, and Description; filters Priority, Status, Due_Date; sort by Due_Date ascending; options display field=Status, filter type=manual, sort order=ascending, record count=enable. No custom workflows are required; status is updated directly by users. Both reports are accessible under the default profile model.

**Implementation notes:** Read the detailed section, choice-field, form-actions, list-report, and kanban-report docs immediately before writing. Keep all field widths consistent.

## To_Do_Overview

Show a clean at-a-glance overview of open, active, completed, and overdue work, with simple visual progress and priority summaries.

Create page To_Do_Overview with display name "To-Do Overview" under pages/To_Do_Overview/. Build it primarily as one polished HTML snippet at content/Overview.dshtml, referenced from To_Do_Overview_page.ds using the required dsp envelope and file reference. The snippet queries Tasks and displays: KPI cards for total tasks, To Do, In Progress, Done, and overdue tasks; a completion progress bar; a priority distribution section for Low, Medium, and High counts; a compact upcoming-tasks table limited to open tasks ordered by Due_Date, showing title, priority, status, and due date; and clear empty-state text. Use ZCS components/styles where applicable, Creator --zcs_* theme variables, Nucleo zc-li-* icons, no emoji, no JavaScript, and responsive CSS. The parent page content must contain only the snippet file reference inside its dsp/layout wrapper; never inline the snippet body. No typed page parameters are required.

**Implementation notes:** Use the page-builder specialist. ListComponents must be called before GetComponent, and zcs-global.css utilities should be included once if used.

## Permissions

Confirm that all app components work with Zoho Creator’s standard access profiles and avoid unnecessary custom security configuration.

Do not create custom permission profiles or roles. Since the app uses only Creator default profiles, no ModulePermissions files are required. Verify that the Tasks form, All_Tasks report, Task_Board report, and To_Do_Overview page do not depend on custom profiles, roles, portal access, or sharing rules.

**Implementation notes:** This is a verification converge and may produce no files.

## UI Configuration

Configure a focused navigation experience, consistent styling, and practical record layouts for web use.

Create web-only UI configuration. Write devices/web/forms.ds mapping Tasks with standard label placement. Write components/Tasks/reports/All_Tasks/devices/web.ds and components/Tasks/reports/Task_Board/devices/web.ds, each with valid quickview and detailview layouts using only fields present in its parent report: Title, Priority, Status, Due_Date, Description. Write devices/web/menu-sections.ds with one main space and a Tasks section containing form Tasks, report All_Tasks, report Task_Board, and page To_Do_Overview, each using valid task/list/board/dashboard-related icons; include mandatory SharedAnalytics_Section. Write devices/web/theme.ds using a clean project-management-friendly web theme, font="poppins", and logo preference="app_icon" with placement="left". Write customization/customization.ds with icon block using zc-ab-project-mgmt1, background color exactly matching the selected theme preset's primary hex, and foreground color="#ffffff". Do not create phone or tablet configuration.

**Implementation notes:** Read the device index plus devices, menu, report layout examples, menu examples, web customize, web themes, relevant icon category, customization, and app-builder icon docs immediately before writing. Every report must have web.ds.