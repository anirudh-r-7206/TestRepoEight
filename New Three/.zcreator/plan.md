A minimal student register that stores each student’s name and age, presents the records in one list report, and includes a test function that logs “dummy”.

## User Profiles

Use Zoho Creator’s built-in profiles with no custom user roles or access tiers.

Do not create custom profile files. The app relies on Zoho Creator default profiles only; this shell segment makes no file changes.

**Implementation notes:** Default profiles are system-created and must not be written unless explicitly requested.

## Students

Capture student names and ages in a simple form, show all saved students in a list, and provide a tiny test function that writes a dummy message to the execution log.

Create stateful form Students in components/Students/form/Students.ds. Fields in row 1 under first section Student_Details (type=section, displayname="Student Details", row=1, column=0): Student_Name (type=text, displayname="Student Name", must have, row=1, column=1, width=medium) and Age (type=number, must have, row=1, column=1, width=medium). Include standard stateful on-add Submit/Reset and on-edit Update/Cancel actions. Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds with displayName="All Students", show all rows from Students, columns Student_Name and Age, and sort Student_Name ascending. Create library/functions/deluge/default/Dummy.ds containing a no-argument void function named Dummy whose sole Deluge statement is info "dummy";. No workflows, pages, integrations, templates, extra reports, or extra fields.

**Implementation notes:** Read the exact section, form action, list-report, custom-function, and Deluge info-statement documentation before writing.

## Permissions

Keep access control at Creator’s standard defaults because no custom profiles were requested.

Do not create or modify profile, role, portal, or sharing-rule files. Confirm the Students form and All_Students report rely on Creator default access behavior.

**Implementation notes:** No custom profiles exist, so no ModulePermissions converge is needed.

## UI Configuration

Expose the student form and report through a minimal web navigation and give the app a simple education-themed appearance.

Create required web configuration only. devices/web/forms.ds maps Students with standard label placement. devices/web/menu-sections.ds contains one navigation space and section exposing form Students and report All_Students, plus mandatory SharedAnalytics_Section. devices/web/theme.ds uses a documented web theme/color/font and sets logo preference="app_icon" with left placement. Create components/Students/reports/All_Students/devices/web.ds with quickview and detailview containing only Student_Name and Age, both verified against report columns. Create customization/customization.ds with an education-domain zc-ab-* app icon, background color exactly matching the selected documented theme primary color, and white foreground. Do not create phone or tablet configuration.

**Implementation notes:** Keep UI metadata minimal; do not add pages or dashboards.