A compact student registry for storing each student’s name and age, with a simple report for browsing and maintaining records.

## User Profiles

Use Zoho Creator’s standard built-in access profiles; no custom roles or profile hierarchy are needed for this small registry.

Do not create custom profile files. Rely on Zoho Creator default profiles (Read, Write, Developer, Administrator, Customer) because the user did not request custom access levels. This segment establishes that subsequent permissions use the standard profiles only. Do not create roles or sharing rules.

**Implementation notes:** No files are expected from this shell segment unless required by the platform.

## Students

Provide a simple entry form for student details and a report where users can browse, add, edit, and maintain student records.

Create form Students in components/Students/form/Students.ds. Fields: Student_Details (section, displayname "Student Details", row 1, column 0); Student_Name (text, displayname "Student Name", must have, maxchar 100, row 1, column 1, width medium, personal data true); Age (number, displayname "Age", must have, maxchar 3, row 1, column 2, width medium). Include a title block with displayname "Students", on add "Add Student", on edit "Edit Student"; success message "Student record saved successfully." Include canonical stateful on-add Submit/Reset and on-edit Update/Cancel actions.
Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds, displayName "All Students", showing all rows from Students with Student_Name and Age, sorting Student_Name ascending, and filters for Student_Name and Age. No workflows, blueprints, schedules, templates, or custom actions are needed.

**Implementation notes:** Use declarative mandatory modifiers; no validation workflow is necessary for the requested scope.

## Permissions

Keep access straightforward by relying on the platform’s default profiles and avoiding unnecessary custom security layers.

No custom profile files, roles, portal profiles, or sharing rules are required. Confirm that the application relies on Zoho Creator’s automatically provided standard profiles. Do not create ModulePermissions files for default profiles unless required by existing application conventions.

## UI Configuration

Configure a clean web interface with a student-focused menu, readable form layout, report record layouts, and an education-themed application icon.

Create devices/web/forms.ds mapping Students with left label placement. Create components/Students/reports/All_Students/devices/web.ds with valid quickview and detailview layouts containing Student_Name and Age only. Create devices/web/menu-sections.ds with one main space and a Students section containing the Students form and All_Students report, plus the mandatory SharedAnalytics_Section. Use valid education or users icons from the documented icon catalog. Create devices/web/theme.ds using a documented web theme and color preset, a readable font, and customize logo preference = "app_icon" with placement = "left". Create customization/customization.ds with an education-domain zc-ab-* icon, exact primary hex matching the selected theme preset, and white foreground. Do not create tablet or phone configuration because only the standard web interface is required.

**Implementation notes:** Every report must receive its web device layout. Ensure icon names and theme color are taken verbatim from the docs.