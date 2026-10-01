A simple personal to-do application for capturing tasks, tracking priority and status, and reviewing upcoming work from a compact overview.

## User Profiles

Use Zoho Creator’s standard built-in profiles for this simple app, without introducing custom access roles.

User Profiles segment. Do not create custom profile files. Rely on Creator's automatically available default profiles (Read, Write, Developer, Administrator, Customer). No roles or sharing rules are required because this is a simple to-do app without a role hierarchy or portal.

## Tasks

Capture to-do items with descriptions, priorities, due dates, and progress states. Provide both a straightforward task list and a visual status board.

Create one stateful form at components/Tasks/form/Tasks.ds with link name Tasks and display name Tasks. Fields, in exact intended order: Task_Details section (type=section, display name Task Details, row=1, column=0); Task_Name (type=text, display name Task Name, must have, maxchar=150, row=1, column=1, width=medium); Description (type=textarea, display name Description, row=1, column=1, width=medium, height=120px); Priority (type=picklist, display name Priority, must have, values Low/Medium/High, initial value Medium if supported by the choice-field syntax, row=1, column=2, width=medium); Status (type=picklist, display name Status, must have, values To Do/In Progress/Done, initial value To Do if supported by the choice-field syntax, row=1, column=2, width=medium); Due_Date (type=date, display name Due Date, row=1, column=2, width=medium); Completed (type=checkbox, display name Completed, initial value=false, row=1, column=2, width=medium). Add standard stateful actions for add (Submit, Reset) and edit (Update, Cancel), and success message 'Task saved successfully.' No workflows are required: mandatory fields and static defaults must be declarative. Create reports: default list All_Tasks at components/Tasks/reports/All_Tasks/All_Tasks.ds, display name All Tasks, showing Task_Name, Priority, Status, Due_Date, Completed, filters Priority/Status/Due_Date, sorted Due_Date ascending then Priority descending; and kanban Task_Board at components/Tasks/reports/Task_Board/Task_Board.ds, display name Task Board, showing Task_Name, Priority, Due_Date, Completed, grouped by Status through kanban options with record count enabled, filters Priority and Due_Date. Do not add permissions, device mappings, or UI configuration in this segment.

## To_Do_Overview

Provide a clean overview with key task counts, priority and status summaries, and a quick view of upcoming work.

Create page To_Do_Overview under pages/To_Do_Overview/ using the required modular page structure: main file pages/To_Do_Overview/To_Do_Overview_page.ds and authoritative child snippets under content/. Prefer one polished HTML snippet (.dshtml) rendered through a dsp wrapper and use ZCS components where suitable. The overview must show KPI cards for total open tasks, due today, overdue, and completed; status summary for To Do/In Progress/Done; priority summary for Low/Medium/High; a compact upcoming-task table ordered by Due_Date; and clear badges for status and priority. Use server-side inline Deluge in the snippet to query Tasks. Include no JavaScript. The main page content must contain only layout wrappers and file references/snippet envelope, never inline element definitions.

## Permissions

Keep access simple by relying on Creator’s standard profile behavior while confirming all app components are covered.

Permissions converge. Since no custom profiles are requested and the User Profiles segment intentionally creates no custom profile files, do not create default-profile files or roles. Confirm there are no custom profiles requiring ModulePermissions. No portal or data-sharing rules are required.

## UI Configuration

Configure clear web navigation, task layouts, consistent styling, and an app icon for a polished out-of-the-box experience.

Create complete web UI configuration. Write devices/web/forms.ds mapping Tasks with a sensible label placement. Write web report device layouts for every report: components/Tasks/reports/All_Tasks/devices/web.ds and components/Tasks/reports/Task_Board/devices/web.ds, each with valid quickview and detailview fields drawn only from its parent report's show-all-rows field list. Write devices/web/menu-sections.ds with one primary space containing an Overview section with page To_Do_Overview and a Tasks section with form Tasks plus reports All_Tasks and Task_Board; include the mandatory SharedAnalytics_Section. Use valid domain-appropriate icons from the documented icon catalog. Write devices/web/theme.ds with a clean lightweight theme, readable font, exact supported theme/color settings, and customize logo preference='app_icon' placement='left'. Write customization/customization.ds with an icon block; choose a suitable documented zc-ab project/task-management icon if available, otherwise use text='TODO', background color='theme', foreground color='#ffffff'. No tablet or phone files are required for this simple web-first app.