A simple Student Registry app for storing student names and ages, with a searchable list for viewing and maintaining records.

## User Profiles

Use Creator’s standard built-in profiles for access, keeping the app simple and avoiding unnecessary custom roles.

Do not create custom profile files. Rely on Zoho Creator’s automatically available default profiles because the user requested no specialized access model. No roles or sharing rules are required.

## Students

Capture each student’s name and age in a compact form, and provide a clear list for browsing and maintaining student records.

Create form Students in components/Students/form/Students.ds. Include section Student_Details (type=section, displayname="Student Details", row=1, column=0); mandatory Student_Name (type=text, displayname="Student Name", maxchar=100, row=1, column=1, width=medium); mandatory Age (type=number, displayname="Age", maxchar=3, row=1, column=1, width=medium). Include standard stateful form actions: Submit and Reset on add; Update and Cancel on edit. Set a concise success message confirming the student was saved. Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds, sourced from Students, showing Student_Name and Age, with both fields available as filters and sorting Student_Name ascending. No workflows, blueprints, schedules, or templates are needed.

## Permissions

Keep access aligned with Creator’s standard profiles without introducing a custom security model for this small app.

No custom profile DS files are required. Confirm that the app relies on automatically created default Creator profiles and that there are no custom field, report, role, portal, or sharing-rule declarations to write.

## UI Configuration

Provide a clean web layout with straightforward navigation to add students and view the student list, using an education-themed visual identity.

Create devices/web/forms.ds mapping Students with left label placement. Create components/Students/reports/All_Students/devices/web.ds with quickview and detailview fields Student_Name and Age. Create devices/web/menu-sections.ds with one primary space and a Students section containing the Students form and All_Students report, plus mandatory SharedAnalytics_Section. Use valid education/users icons from the documented catalog. Create devices/web/theme.ds with a documented web theme preset, readable font, matching color option, and customize logo preference="app_icon" placement="left". Create customization/customization.ds with an education-domain zc-ab-* icon, exact primary hex matching the selected documented theme preset, and white foreground. Web is the only surfaced device; do not create tablet or phone files.