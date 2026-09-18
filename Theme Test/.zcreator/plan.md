A lightweight student register for storing names and ages, with a playful orange visual theme and simple navigation.

## User Profiles

Use Creator’s standard built-in access profiles for this small internal app, without introducing unnecessary custom roles.

Profiles: No custom profile files. Rely on Zoho Creator’s automatically provided default profiles, including Administrator, Developer, Write, and Read as applicable. Do not create roles, portal profiles, or sharing rules.

**Implementation notes:** This is a non-writing shell segment because the user did not request custom profiles.

## Students

Provide a simple entry form for student details and a clean list for browsing all saved students.

Form Students: stateful form with display name “Students”. Fields in order: Student_Details (type=section, display name “Student Details”, row=1, column=0); Student_Name (type=text, display name “Student Name”, must have, maxchar=100, row=1, column=1, width=medium); Age (type=number, display name “Age”, must have, maxchar=3, row=1, column=1, width=medium). Add standard Submit and Reset actions for add, and Update and Cancel actions for edit. Set success message to “Student saved successfully.” Report All_Students: default list report on Students, display name “All Students”, columns Student_Name and Age, sorted by Student_Name ascending. No workflows or blueprints are required.

**Implementation notes:** Keep the data model deliberately minimal. Use declarative mandatory properties rather than validation workflows.

## Permissions

Keep access straightforward through Creator’s standard profiles, with no custom permission declarations needed.

No permission files are required because no custom profiles are being created. Do not create roles, portal permissions, or sharing rules. Creator’s default profile behavior will govern access.

**Implementation notes:** This is a non-writing convergence segment.

## UI Configuration

Apply a playful orange theme and provide a tidy web menu and record layouts for student entry and browsing.

Customization: create app-level customization using font “quicksand”, an orange color option, visible icons, and no custom logo. Web device configuration: map the Students form with left label placement; create a navigation space and section containing the Students form and All_Students report, using valid education/users icons; include the mandatory SharedAnalytics_Section. Create devices/web/theme.ds with the corresponding Quicksand/orange preferences as supported by device syntax. Report device layout: create components/Students/reports/All_Students/devices/web.ds with quickview and detailview fields Student_Name and Age. Tablet and phone files are not required because the app is only explicitly surfaced on web.

**Implementation notes:** Read the education/users icon catalogs before choosing exact icon identifiers. Keep exactly the permitted files under devices/web/.