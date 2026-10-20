A lightweight student register for storing each student’s name and age, with a simple report for viewing and managing records.

## User Profiles

Use Zoho Creator’s standard built-in access profiles; no custom user profile is needed for this small internal app.

No custom profile files will be created. Rely on Zoho Creator default profiles, including Administrator, because the user did not request custom access levels, portal access, role hierarchy, or sharing rules.

## Students

Capture each student’s name and age in a straightforward entry form, and provide a list for browsing and managing all student records.

Create stateful form Students in components/Students/form/Students.ds. Fields in order: Student_Details (type=section, displayname="Student Details", row=1, column=0); Student_Name (type=text, displayname="Student Name", must have, row=1, column=1, width=medium, maxchar=100); Age (type=number, displayname="Age", must have, row=1, column=1, width=medium, maxchar=3). Add standard stateful actions: on add Submit (submit) and Reset (reset); on edit Update (submit) and Cancel (cancel). Set success message to "Student saved successfully." Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds, displayName="All Students", showing all rows from Students with Student_Name and Age, filtering on Student_Name and Age, and sorting Student_Name ascending. No workflows, blueprints, schedules, or custom actions are required.

## Permissions

Use the platform’s standard permissions without adding a custom role or sharing model.

Do not create or modify custom profile files because the app uses only system default profiles. Do not create roles, portal profiles, or sharing rules.

## UI Configuration

Configure a clean web navigation experience, the student report’s record layouts, and an education-themed app identity.

Create devices/web/forms.ds mapping Students with standard left label placement. Create components/Students/reports/All_Students/devices/web.ds with quickview and detailview fields Student_Name and Age. Create devices/web/menu-sections.ds with one main space and a Students section containing form Students and report All_Students, plus the mandatory SharedAnalytics_Section. Use valid education/user icons from the icon catalog. Create devices/web/theme.ds with a clean web theme, readable font, and logo preference="app_icon" placement="left". Create customization/customization.ds with an icon block using a suitable zc-ab-education-* icon; its background color must exactly match the selected web theme preset primary color and foreground color must be #ffffff. No phone or tablet configuration is needed.