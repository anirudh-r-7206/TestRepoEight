Add a compact student registry to the active Function Updates app. It will store student names and ages and include a standalone dummy function that logs “Hello.”

## User Profiles

Use the app’s standard built-in profiles; no custom access roles are needed for this simple registry.

Do not create custom profile files. Rely on Creator’s default profiles because the user did not request custom access levels, role hierarchy, portal access, hidden fields, or record-level sharing.

## Students

Provide a simple form for recording each student’s name and age, with a list for browsing saved students. Add a standalone test function that writes “Hello” to the execution log when called.

Create stateful form Students in components/Students/form/Students.ds. Fields in order: Student_Details (section, displayname “Student Details”, row 1, column 0); Student_Name (text, displayname “Student Name”, must have, row 1, column 1, width medium, maxchar 100); Age (number, displayname “Age”, must have, row 1, column 2, width medium, maxchar 3). Include standard add Submit/Reset and edit Update/Cancel actions. Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds, display name “All Students”, showing all rows from Students with Student_Name and Age, sorted by Student_Name ascending. Create standalone no-argument void Deluge function Hello in library/functions/deluge/default/Hello.ds; function body must contain info "Hello"; and it must not be attached to a workflow or called automatically. No form workflows, validation workflows, schedules, blueprints, or integrations.

## Permissions

Keep the student registry available through the app’s standard profile behavior without introducing custom permission rules.

No custom profiles exist or are required, so do not create or edit permission files. Creator default profiles govern access. Do not add roles, sharing rules, portal profiles, or custom ModulePermissions.

## UI Configuration

Add the student form and report to web navigation and provide a clean web record layout using the app’s existing visual style.

Create or update web UI configuration for the new Students module while preserving any existing app configuration. Ensure devices/web/forms.ds maps Students with standard label placement. Ensure devices/web/menu-sections.ds includes a section containing form Students and report All_Students and includes the mandatory SharedAnalytics_Section; preserve existing spaces, sections, and items. Create components/Students/reports/All_Students/devices/web.ds with quickview and detailview fields Student_Name and Age. Ensure devices/web/theme.ds exists or is updated consistently with the current app and contains customize logo preference = "app_icon" with left placement. Ensure customization/customization.ds exists with an icon block; preserve an existing valid icon if present, otherwise use an education-domain zc-ab icon whose background exactly matches the selected web theme primary color and foreground #ffffff. Do not create phone or tablet variants because the user did not request mobile navigation.