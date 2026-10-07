A lightweight student registry for storing student names and ages, with a straightforward report for viewing and managing entries.

## User Profiles

Use Zoho Creator’s standard built-in profiles for access, without adding unnecessary custom roles or profile layers.

No custom profile files will be created. Use the platform-provided default profiles. This shell segment intentionally writes no files because the user did not request custom access levels, portal users, or role hierarchy.

**Implementation notes:** Do not create default profile declarations; Creator supplies them automatically.

## Students

Capture each student’s name and age in a simple, required-entry form, and provide a clear list for reviewing the saved students.

Create stateful form Students in components/Students/form/Students.ds. Fields in order: Student_Details (type=section, displayname="Student Details", row=1, column=0); Student_Name (type=text, displayname="Student Name", must have, row=1, column=1, width=medium, maxchar=100); Age (type=number, displayname="Age", must have, row=1, column=1, width=medium, maxchar=3). Include canonical stateful actions: on add Submit (submit) and Reset (reset); on edit Update (submit) and Cancel (cancel). Add success message "Student saved successfully." Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds, displayName="All Students", showing all rows from Students with Student_Name and Age, sorted by Student_Name ascending. No workflows, blueprint, or custom actions are needed.

**Implementation notes:** Use declarative mandatory modifiers; do not create validation workflows for simple required fields.

## Permissions

Rely on the standard Creator access model for this small registry, with no extra custom permission configuration.

No permission files are required because no custom profiles were requested or created. Do not create ModulePermissions for platform-provided default profiles. Confirm that the Students form and All_Students report are covered by the normal app-sharing configuration.

**Implementation notes:** This is a no-file convergence segment unless existing custom profiles are discovered during implementation.

## UI Configuration

Set up a clean web navigation experience, readable form and report layouts, and an education-themed app appearance.

Create devices/web/forms.ds mapping Students with left label placement. Create components/Students/reports/All_Students/devices/web.ds with quickview and detailview fields Student_Name and Age. Create devices/web/menu-sections.ds with a main navigation space and section containing form Students and report All_Students, plus mandatory SharedAnalytics_Section. Use valid education/user icons from the documented icon catalog. Create devices/web/theme.ds with a documented web theme, readable font, color option, and customize logo preference="app_icon" placement="left". Create customization/customization.ds with an icon block using an education-domain zc-ab-* icon, background color exactly matching the selected theme preset primary hex, and white foreground. No phone or tablet configuration is required.

**Implementation notes:** Read device menu, report layout, web theme/customize, and relevant icon detail docs before writing. Ensure the report device layout references only fields present in All_Students.