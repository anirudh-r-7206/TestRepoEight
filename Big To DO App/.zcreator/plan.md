A compact student registry for storing each student's name and age, with a simple report for browsing and editing records.

## User Profiles

Use Zoho Creator’s built-in administrator access for this small internal app. No custom user profiles or role hierarchy are needed.

Do not create custom profile files. Rely on the platform-provided Administrator profile. Do not create roles or data-sharing rules.

**Implementation notes:** This is intentionally a no-file shell segment because only the default Administrator profile is required.

## Students

Capture a student’s name and age in a straightforward entry form, and provide a searchable list of all students.

Create stateful form Students in components/Students/form/Students.ds. Fields in order: Student_Details (type=section, displayname="Student Details", row=1, column=0); Student_Name (type=text, displayname="Student Name", must have, row=1, column=1, width=medium, personal data=true); Age (type=number, displayname="Age", must have, row=1, column=1, width=medium). Add standard on-add Submit and Reset actions and on-edit Update and Cancel actions. Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds, displayName="All Students", showing Student_Name and Age, filtering by Student_Name and Age, sorted by Student_Name ascending. No workflows or blueprints are required.

**Implementation notes:** Use declarative mandatory modifiers rather than validation workflows.

## Permissions

Keep access aligned with the app’s simple internal use, relying on the built-in administrator profile.

Do not create custom profile, role, portal, or sharing-rule files. The platform-provided Administrator profile supplies access to the Students form and All_Students report.

**Implementation notes:** No permission files are expected unless an existing custom profile is discovered during implementation.

## UI Configuration

Configure a clean web navigation experience with the student form and report, plus an education-themed app identity.

Create devices/web/forms.ds mapping Students with left label placement. Create components/Students/reports/All_Students/devices/web.ds with valid quickview and detailview layouts containing Student_Name and Age. Create devices/web/menu-sections.ds with a main space and section containing the Students form and All_Students report, plus mandatory SharedAnalytics_Section. Use valid education/user icons from the icon catalog. Create devices/web/theme.ds using a documented web theme preset, readable font, matching color option, and customize logo preference="app_icon" placement="left". Create customization/customization.ds with an education-domain zc-ab-* app icon, exact primary theme color hex, and white foreground. Do not create phone or tablet configuration because only the web experience is requested.

**Implementation notes:** Every report must have web device layout. Read the theme color table and use its exact primary color in app customization.