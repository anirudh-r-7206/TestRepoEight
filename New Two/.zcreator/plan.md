A simple Student Registry app that stores student names and ages, provides a basic list report, and includes a dummy reusable function that writes “dummy” to the info log. No custom pages or integrations are included.

## User Profiles

Use Zoho Creator’s standard built-in profiles for this small internal app; no custom user profiles or role hierarchy are needed.

Do not create custom profile files. Rely on Zoho Creator’s automatically available default profiles. Do not create roles or sharing rules.

**Implementation notes:** This is intentionally a no-file shell-profile segment because no custom profiles were requested.

## Students

Capture each student’s name and age and provide a simple report for browsing the stored records. Include a harmless test function that logs a dummy message.

Create form Students in components/Students/form/Students.ds. Use a first section Student_Details (type=section, displayname="Student Details", row=1, column=0), followed by must have Student_Name (type=text, displayname="Student Name", row=1, column=1, width=medium, maxchar=100) and must have Age (type=number, displayname="Age", row=1, column=1, width=medium, maxchar=3). Include canonical stateful form actions for add (Submit and Reset) and edit (Update and Cancel), and success message "Student saved successfully." Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds with displayName="All Students", sourcing Students and showing Student_Name and Age, sorted by Student_Name ascending. Create reusable Deluge function library/functions/deluge/default/Dummy.ds with unique function link name Dummy, no parameters, void return type, and body: info "dummy";. Do not create workflows or pages.

**Implementation notes:** Read the specific form section, form actions, list-report, workflow overview/function, and Deluge info-statement documentation before writing. Keep Student_Name as a simple text field, not a composite name field.

## Permissions

Retain the default Zoho Creator access model because no custom profiles were requested.

Do not create or modify permission files. There are no custom profiles requiring ModulePermissions, FieldPermissions, ReportPermissions, roles, or sharing rules.

**Implementation notes:** No files are expected from this convergence segment.

## UI Configuration

Provide a clean web menu with access to the student form and report, plus a simple education-themed appearance.

Create devices/web/forms.ds mapping the Students form with standard left label placement. Create components/Students/reports/All_Students/devices/web.ds containing valid quickview and detailview layouts whose fields include only Student_Name and Age. Create devices/web/menu-sections.ds with one main space and a Student Records section containing the Students form and All_Students report, plus the mandatory SharedAnalytics_Section. Use valid education/users icons from the icon catalog. Create devices/web/theme.ds using a documented web theme and color preset, with a readable font and customize logo preference="app_icon" placement="left". Create customization/customization.ds with an education-domain zc-ab-* icon, exact background hex matching the selected documented theme color, and white foreground. Do not create phone or tablet files and do not create pages.

**Implementation notes:** Read device structure, report examples, menu examples, web customization, web themes, relevant icon catalog, and customization docs before writing. Every report must have web.ds.