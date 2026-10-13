A lightweight Student Ages app for recording each student's name and age, then browsing the saved records in a simple list.

## User Profiles

Use Zoho Creator’s standard built-in access profiles for this small internal app; no custom roles or profiles are required.

Do not create custom profile files. Rely on Zoho Creator's automatically available default profiles. Do not create roles or data-sharing rules.

**Implementation notes:** This is intentionally a no-file shell segment because the user did not request custom access levels.

## Students

Store each student’s name and age and provide a straightforward list for viewing and managing all saved students.

Create stateful form Students in components/Students/form/Students.ds. Fields in order: Student_Details (section, displayname "Student Details", row 1, column 0); Student_Name (text, displayname "Student Name", must have, maxchar 100, row 1, column 1, width medium); Age (number, displayname "Age", must have, maxchar 3, row 1, column 1, width medium). Include standard stateful actions: on add Submit and Reset; on edit Update and Cancel. Add success message "Student saved successfully."
Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds, sourced from Students, with columns Student_Name and Age, filters for Student_Name and Age, sorted by Student_Name ascending. No workflows, blueprints, schedules, templates, or custom actions.

**Implementation notes:** Use declarative mandatory modifiers; no validation workflow is needed for the requested scope.

## Permissions

Keep access governed by Creator’s built-in profiles without adding custom permission definitions.

Do not write custom profile, role, portal, or sharing-rule files. The app uses Creator's default profiles and their standard behavior. Confirm no custom profiles were created by earlier segments.

**Implementation notes:** No files are expected unless an existing custom profile unexpectedly requires convergence.

## UI Configuration

Configure a clean web interface with student-focused navigation, a readable record layout, and an education-themed app icon.

Create devices/web/forms.ds mapping Students with left label placement. Create components/Students/reports/All_Students/devices/web.ds with quickview and detailview fields Student_Name and Age. Create devices/web/menu-sections.ds with one main space containing a Students section that links the Students form and All_Students report, plus mandatory SharedAnalytics_Section. Use valid education/user icons from the documented icon catalog. Create devices/web/theme.ds with a documented web theme, readable font, matching color option, and customize logo preference = "app_icon" with placement = "left". Create customization/customization.ds containing an education-domain zc-ab-* icon, background color exactly matching the chosen theme preset's primary hex, and white foreground. Do not create phone or tablet configuration because the request does not require those devices.

**Implementation notes:** Read device menu, report layout, theme, customize, and icon detail docs before implementation. Every report must have web.ds.