A compact sample app for storing student names and ages, with a simple form and list report for everyday entry and browsing.

## User Profiles

Use Zoho Creator’s standard built-in profiles for this sample app, without introducing custom access roles.

User Profiles segment. Do not create custom profile files. Rely on Zoho Creator’s automatically available default profiles because the user requested a simple sample app and did not request custom access controls. Do not create roles or sharing rules.

**Implementation notes:** This is intentionally a no-file shell segment; default profiles must not be written unless explicitly requested.

## Students

Provide a straightforward student entry form and a list for viewing saved students.

Create form Students in components/Students/form/Students.ds. Form display purpose: store student names and ages. Fields in exact order: Student_Details (type=section, displayname="Student Details", row=1, column=0); Student_Name (type=text, displayname="Student Name", must have, maxchar=100, row=1, column=1, width=medium); Age (type=number, displayname="Age", must have, maxchar=3, row=1, column=2, width=medium). Include canonical stateful form actions for add: Submit submit button and Reset reset button; edit: Update submit button and Cancel cancel button. Use success message "Student saved successfully." Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds with displayName="All Students", sourced from Students, columns Student_Name and Age, sorted by Student_Name ascending. No workflows are needed; requiredness is declarative. Do not add permissions, device mappings, or UI configuration in this segment.

**Implementation notes:** Use text rather than a composite name field to keep the sample minimal. Ensure all fields share the first section’s row.

## Permissions

Keep access simple by relying on Creator’s standard profile behavior for the student form and report.

Permissions converge segment. There are no custom profile files to edit because the app uses Creator’s default profiles. Do not create default profile declarations, roles, portal profiles, or sharing rules. Verify that no custom permission artifact is required for this sample app.

**Implementation notes:** Default profiles are system-created and must not be emitted.

## UI Configuration

Add a clean web menu, form placement, list-detail layouts, a simple education-themed appearance, and the app icon.

Create UI configuration for all components. Write devices/web/forms.ds mapping Students with left label placement. Write components/Students/reports/All_Students/devices/web.ds with valid quickview and detailview layouts containing only Student_Name and Age. Write devices/web/menu-sections.ds with one main space and a Students section containing the Students form and All_Students report, using valid education/users icons, plus the mandatory SharedAnalytics_Section of type shared_user_report_section. Write devices/web/theme.ds using a documented web theme preset, a clean readable font, and logo preference app_icon because an app icon is included. Write Customization/customization.ds with an education-domain zc-ab-* icon and background color exactly matching the selected theme preset’s documented primary color. Do not create tablet or phone files because this sample is scoped to web.

**Implementation notes:** Read device theme/color and menu/report-layout detail docs before implementation. Every report requires web.ds.