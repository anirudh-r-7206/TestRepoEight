A simple personal to-do application for capturing tasks, prioritizing work, tracking status, and monitoring due dates. It uses Zoho Creator’s built-in default profiles and requires no external integrations.

## User Profiles

Use Zoho Creator’s standard built-in profiles so the app stays simple and requires no custom access model.

Profiles: No custom profile files. Rely on the automatically available default Creator profiles (Read, Write, Developer, Administrator, Customer). Intended access: Administrator and Developer manage configuration and all records; Write users create and update tasks; Read users view tasks. Do not create roles or sharing rules.

**Implementation notes:** This is a shell segment with no files because default profiles must not be written unless explicitly requested.

## Tasks

Capture each to-do item with its description, priority, status, and due date. Provide both a standard task list and a visual status board.

Form Tasks: stateful form with title/display label “Tasks” and success message “Task saved.” Fields in one labeled section: Task_Title (text, display name “Task”, must have, maxchar 150); Description (textarea, optional, height 100px); Priority (static picklist, must have, values Low/Medium/High/Urgent, initial value Medium); Status (static picklist, must have, values Not Started/In Progress/Completed, initial value Not Started); Due_Date (date, optional); Completed (checkbox, initial value false). Use consistent medium width and valid section/row placement. Include standard add Submit/Reset and edit Update/Cancel actions.
Reports: (1) All_Tasks, default list report on Tasks, columns Task_Title, Priority, Status, Due_Date, Completed; filters Priority and Status; sort Due_Date ascending then Priority descending. (2) Task_Board, kanban report on Tasks, columns Task_Title, Priority, Due_Date, Completed; filters Priority and Status; options display field Status, sort order custom or ascending as valid, record count enabled. Both are available to normal app users.
Workflows: Tasks_On_Validate, form workflow on add and edit validation: when Status is Completed, set Completed true; when Completed is true and Status is not Completed, set Status to Completed. Keep logic deterministic and do not add notifications, schedules, approvals, or blueprints.

**Implementation notes:** Read static choice, section, actions, list report, kanban report, form workflow, and Deluge docs before implementation. Prefer field defaults and mandatory modifiers declaratively.

## Permissions

Keep access aligned with Creator’s built-in profile behavior without introducing a custom security model.

No custom profile artifacts, roles, portal profiles, or sharing rules. Confirm that no custom profiles were created and leave default-profile permissions managed by Zoho Creator.

**Implementation notes:** Do not write default profile files.

## UI Configuration

Provide a clean web menu, readable form layout, report record layouts, a task-oriented theme, and an app icon.

Web configuration only. devices/web/forms.ds: map Tasks with left label placement. devices/web/menu-sections.ds: one main space with a Tasks section containing the Tasks form, All_Tasks report, and Task_Board report, using valid task/list/board icons; include mandatory SharedAnalytics_Section. devices/web/theme.ds: choose a simple modern theme, readable font, exact documented color option, and logo preference app_icon placed left. Report device layouts: create web.ds for All_Tasks and Task_Board under each report’s devices folder; quickview and detailview fields must only use fields present in each report definition. customization/customization.ds: include an app icon block using a suitable documented zc-ab icon if available, otherwise text “TODO”; its background must exactly match the selected theme primary color and foreground must be #ffffff.

**Implementation notes:** No phone or tablet configuration. Read device, menu, report-layout, theme, customization, and icon detail docs before writing.