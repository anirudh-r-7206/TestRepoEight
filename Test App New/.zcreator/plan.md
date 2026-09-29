A compact student registry for storing student names and ages, with a simple directory report and a dark, education-themed interface.

## User Profiles

Use Creator’s standard built-in profiles for this simple sample app, without introducing extra access roles.

No custom profiles are required. Rely on Zoho Creator’s automatically provided default profiles (Read, Write, Developer, Administrator, Customer). Do not write profile files, roles, portal profiles, or sharing rules in this segment.

**Implementation notes:** This shell segment intentionally creates no files because default profiles must not be explicitly written.

## Students

Capture each student’s name and age in a focused entry form, and provide a clean directory for browsing saved students.

Create stateful form Students at components/Students/form/Students.ds. Add first field Student_Details (type=section, displayname="Student Details", row=1, column=0). Add must have Student_Name (type=text, displayname="Student Name", maxchar=100, row=1, column=1, width=medium). Add must have Age (type=number, displayname="Age", maxchar=3, row=1, column=2, width=medium). Add standard stateful actions: on add Submit (submit) and Reset (reset); on edit Update (submit) and Cancel (cancel). Set success message to "Student saved successfully." Create default list report All_Students at components/Students/reports/All_Students/All_Students.ds, displayName="All Students", based on Students, with columns Student_Name and Age, sorted by Student_Name ascending. No workflows, blueprints, schedules, templates, integrations, or custom actions.

**Implementation notes:** Keep the model minimal and use declarative mandatory modifiers; do not add validation workflows.

## Permissions

Keep access management aligned with Creator’s built-in profiles for a straightforward sample application.

Because the app uses only default profiles and default profiles must not be written explicitly, create no permission files. Do not add roles, sharing rules, or portal profiles. Confirm that no custom profile convergence is needed.

**Implementation notes:** No files are expected from this segment.

## UI Configuration

Apply a dark web theme, education-focused branding, straightforward navigation, and practical student report layouts.

Create devices/web/forms.ds with a forms block mapping Students using label placement=left. Create devices/web/menu-sections.ds with one space Student_Registry_Space (displayname="Student Registry", icon="education-school") containing section Students_Section (displayname="Students", icon="education-hat") with form Students icon="education-pencil-47" and report All_Students icon="education-notepad"; include the mandatory SharedAnalytics_Section verbatim; use outline icon preference showing space, section, and component. Create devices/web/theme.ds with customize block: layout theme="theme_1", font="poppins", color options color="11" for dark mode (primary #5051F9, background #12132B), and logo preference="app_icon", placement="left". Create components/Students/reports/All_Students/devices/web.ds with bare report All_Students block: quickview type=-1/layout type=-1 showing Student_Name and Age, standard Edit/Duplicate/Delete header and record menus, on click View Record, on right click Edit/Delete/Duplicate/View Record; detailview type=1/layout type=-2 showing Student_Name and Age with standard Edit/Duplicate/Delete header menu. Create Customization/customization.ds containing customize with icon block using icon="zc-ab-education-1", background color="#5051F9", foreground color="#ffffff". Do not create phone or tablet configuration because this sample is scoped to web.

**Implementation notes:** Use exactly the documented dark preset theme_1 color 11 and keep every report device field aligned with the parent report.