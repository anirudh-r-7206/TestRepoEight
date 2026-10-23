A lightweight student directory for storing student names and ages, with a simple report for browsing and managing records.

## User Profiles

Use Creator’s standard built-in access profiles and establish a clean education-themed visual style for the app.

Profiles: use Zoho Creator's automatically available default profiles; create no custom profile declarations, roles, portal profiles, or sharing rules. Theme: create devices/web/theme.ds with an education-appropriate web theme, readable font, primary color selection, and customize block whose logo preference is app_icon with left placement.

**Implementation notes:** Do not create custom profile files because the request does not require specialized user roles. Write the web theme in this segment.

## Students

Capture each student’s name and age in a concise data-entry form, then provide a straightforward directory for browsing and maintaining student records.

Create stateful form Students in components/Students/form/Students.ds. Fields in exact order: Student_Details (type=section, displayname="Student Details", row=1, column=0); Student_Name (type=text, displayname="Student Name", must have, row=1, column=1, width=medium, maxchar=100); Age (type=number, displayname="Age", must have, row=1, column=1, width=medium, maxchar=3). Include canonical stateful actions: Submit and Reset under on add; Update and Cancel under on edit. Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds with displayName="All Students", sourcing all rows from Students, columns Student_Name and Age, and sort by Student_Name ascending. No workflows, blueprints, schedules, or custom actions.

**Implementation notes:** Use declarative mandatory modifiers; no validation workflow is needed for the requested scope.

## Permissions

Confirm that standard Creator access controls cover the student form and directory without introducing unnecessary custom roles.

Review the completed Students form and All_Students report. Because the app uses only automatically provided default profiles and the user requested no differentiated access model, create no custom profile, role, portal, or sharing-rule files. Verify that no field is marked private and that no custom permission artifact is required.

**Implementation notes:** There are no custom profiles to converge; this is an explicit permissions audit segment.

## UI Configuration

Add the student form and directory to web navigation, configure record views, and apply a recognizable education app icon.

Create devices/web/forms.ds mapping Students with standard label placement. Create devices/web/menu-sections.ds with one main navigation space and a student records section containing the Students form and All_Students report, using valid education/users icons; include the mandatory SharedAnalytics_Section. Create components/Students/reports/All_Students/devices/web.ds with quickview and detailview fields Student_Name and Age. Create customization/customization.ds with an icon block using a valid education-domain zc-ab-* icon, background color exactly matching the selected web theme preset's primary color, and foreground color #ffffff. Do not create phone or tablet mappings because only the web interface is requested.

**Implementation notes:** Every report must receive a web device layout. Include SharedAnalytics_Section in the menu.