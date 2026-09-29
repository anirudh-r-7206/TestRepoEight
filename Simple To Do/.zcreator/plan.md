A simple personal to-do application for capturing tasks, prioritizing work, tracking due dates, and marking progress. It uses built-in validation and straightforward views without unnecessary automation.

## User Profiles

Use Zoho Creator’s standard built-in profiles so the app remains simple and immediately usable.

Do not create custom profile files. Rely on Creator's automatically available default profiles: Administrator, Developer, Write, Read, and Customer. This shell segment establishes that subsequent components use standard access only; no roles or sharing rules are required.

## Tasks

Capture each to-do item with its description, priority, due date, and current status. Provide both a sortable task list and a visual status board.

Create stateful form Tasks in components/Tasks/form/Tasks.ds. Fields, in order: Task_Details (section, displayname "Task Details", row 1, column 0); Task_Name (text, displayname "Task", must have, maxchar 150, row 1, column 1, width medium); Description (textarea, optional, height 100px, row 1, column 1, width medium); Priority (picklist with values "Low", "Medium", "High", must have, initial value "Medium", row 1, column 2, width medium); Due_Date (date, optional, row 1, column 2, width medium); Status (picklist with values "To Do", "In Progress", "Completed", must have, initial value "To Do", row 1, column 2, width medium); Completed (checkbox, initial value false, row 1, column 2, width medium). Add standard on-add Submit/Reset and on-edit Update/Cancel actions. Set success message to "Task saved successfully."
Create default list report All_Tasks at components/Tasks/reports/All_Tasks/All_Tasks.ds, sourced from Tasks, showing Task_Name, Priority, Due_Date, Status, and Completed; filters Priority, Status, Due_Date; sort Due_Date ascending then Priority descending.
Create kanban report Task_Board at components/Tasks/reports/Task_Board/Task_Board.ds, sourced from Tasks, showing Task_Name, Priority, Due_Date, Status; filters Priority and Status; group by Status through kanban options using display field Status, ascending order, and record count enabled. No workflows or blueprints.

**Implementation notes:** Use declarative mandatory/default properties. Define the form before reports. No workflows are needed because all behavior is covered by field properties and normal record editing.

## To_Do_Overview

Show a clean overview with task totals, status breakdowns, priority highlights, and quick guidance for managing the list.

Create page To_Do_Overview with display name "To-Do Overview" under pages/To_Do_Overview/. Create one HTML snippet content/To_Do_Summary.dshtml that queries Tasks and renders: header/title, KPI cards for total, To Do, In Progress, Completed, and overdue open tasks; a status progress visualization; priority summary badges/cards; a compact upcoming-tasks table limited to the nearest due items; and a clear empty state when no tasks exist. Use inline Deluge in the snippet, ZCS components/styles and Creator --zcs_* theme variables. No JavaScript. The parent To_Do_Overview_page.ds must contain only the page declaration, layout wrappers, DSP envelope, and a file reference to To_Do_Summary.dshtml.

**Implementation notes:** Build with one responsive HTML snippet using ZCS components and Creator theme variables. Keep the page parent content limited to the snippet file reference inside the required DSP envelope.

## Permissions

Keep access aligned with Creator’s standard profiles, avoiding extra security complexity for this personal utility.

Do not create custom profile, role, portal, or sharing-rule files. Confirm that the app relies only on Creator's standard default profiles and that there are no custom ModulePermissions to converge.

## UI Configuration

Configure web navigation, form placement, report record layouts, a clean theme, and a matching app icon.

Create devices/web/forms.ds mapping Tasks with left label placement. Create web report device layouts for All_Tasks and Task_Board, each with quickview and detailview fields limited to fields exposed by the parent report. Create devices/web/menu-sections.ds with one main space and a Tasks section containing page To_Do_Overview, form Tasks, report All_Tasks, and report Task_Board, plus the mandatory SharedAnalytics_Section. Use valid icons from the documented catalog. Create devices/web/theme.ds using a clean web theme, Poppins font, a blue primary preset, and logo preference app_icon placed left. Create customization/customization.ds with icon zc-ab-project-mgmt1, foreground #ffffff, and a background color exactly matching the selected web theme preset's documented primary hex. Web only; do not create phone or tablet configuration.

**Implementation notes:** Use only the three allowed files in devices/web. Include SharedAnalytics_Section. Every report must receive web quickview/detailview configuration.