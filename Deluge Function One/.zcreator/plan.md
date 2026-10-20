A simple student registry that stores each student’s name and age. It also includes a standalone dummy Deluge function that writes "dummy" to the execution log when called.

## User Profiles

Use Zoho Creator’s standard built-in profiles for this small internal app, without introducing custom access roles.

Do not create custom profile files. The app will rely on Zoho Creator default profiles. This shell segment intentionally writes no files.

## Students

Capture student names and ages, provide a simple browsable student list, and include the requested dummy logging function.

Create form Students in components/Students/form/Students.ds. Fields in order: Student_Details (type=section, displayname="Student Details", row=1, column=0); Student_Name (type=text, displayname="Student Name", must have, row=1, column=1, width=medium); Age (type=number, displayname="Age", must have, row=1, column=2, width=medium). Include standard stateful on-add Submit/Reset and on-edit Update/Cancel actions. Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds, sourced from Students, displaying Student_Name and Age, sorted by Student_Name ascending. Create standalone Deluge function library/functions/deluge/default/Dummy_Info.ds with signature void Dummy_Info(), body info "dummy";, no parameters and no return value. No form workflow is required because the function is intentionally standalone.

**Implementation notes:** Use declarative mandatory modifiers for both data fields. Keep the dummy function standalone and parameterless.

## Permissions

Keep access aligned with Zoho Creator’s standard built-in profiles; no custom permission definitions are needed.

No custom profiles exist, so do not create or edit profile files. Rely on default Creator profile permissions for the Students form and All_Students report.

## UI Configuration

Provide a clean web navigation entry for adding and viewing students, along with an education-themed app appearance.

Create devices/web/forms.ds mapping Students with left label placement. Create components/Students/reports/All_Students/devices/web.ds with quickview and detailview fields Student_Name and Age. Create devices/web/menu-sections.ds with a main navigation space and section containing form Students and report All_Students, plus mandatory SharedAnalytics_Section. Use valid education/user icons. Create devices/web/theme.ds with a simple supported web theme, readable font, matching color preset, and logo preference app_icon placed left. Create customization/customization.ds with an education-domain zc-ab-* app icon whose background exactly matches the selected theme primary color and white foreground.