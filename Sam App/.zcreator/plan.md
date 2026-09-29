A compact student registry for storing each student’s name and age, with a simple report for browsing and maintaining records.

## User Profiles

Use Zoho Creator’s built-in profiles for access to this simple internal registry. No custom profile hierarchy is needed.

User Profiles segment. Do not create custom profile files. Rely on Zoho Creator’s automatically available default profiles because the user did not request custom access levels, portal access, roles, or record-level sharing. Create no roles or sharing rules.

**Implementation notes:** This is intentionally a no-file shell-profile segment; default profiles must not be written unless explicitly requested.

## Students

Capture each student’s name and age in a straightforward entry form, and provide a searchable list for viewing and maintaining the registry.

Create stateful form Students in components/Students/form/Students.ds. Include first section Student_Details (type=section, displayname="Student Details", row=1, column=0). Include must have Student_Name (type=text, displayname="Student Name", maxchar=100, row=1, column=1, width=medium). Include must have Age (type=number, displayname="Age", maxchar=3, row=1, column=1, width=medium). Use a title block with displayname="Students", on add="Add Student", and on edit="Edit Student". Add success message "Student saved successfully." Add canonical stateful actions: Submit and Reset under on add; Update and Cancel under on edit. Do not add workflows because mandatory input is declarative and no cross-field behavior is required.

Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds. Set displayName="All Students", show all rows from Students with Student_Name and Age, filters on Student_Name and Age, and sort by Student_Name ascending. No custom actions, conditional formatting, templates, or extra reports.

**Implementation notes:** Use plain text rather than a composite Name field because the request asks only for student names. Use type=number for whole-year ages.

## Permissions

Confirm that the registry uses Creator’s standard access model without adding unnecessary custom security configuration.

Permissions convergence segment. Do not create profile, role, portal, or sharing-rule files because no custom profiles were requested and default profiles are platform-managed. Verify that no custom permission artifacts are needed for the Students form and All_Students report.

**Implementation notes:** No permission files should be emitted unless another approved segment introduced a custom profile, which this plan does not.

## UI Configuration

Add a clean web menu and record layouts so users can quickly open the student form or browse all saved students.

Create web UI configuration for the complete app. Create devices/web/forms.ds mapping Students with standard label placement. Create devices/web/menu-sections.ds with one main space and a Student Registry section containing the Students form and All_Students report, plus the mandatory SharedAnalytics_Section. Use valid education/users icons from the icon documentation. Create devices/web/theme.ds with a clean web theme and complementary blue/teal preferences supported by the device theme syntax. Create components/Students/reports/All_Students/devices/web.ds with quickview and detailview layouts containing only Student_Name and Age. Do not create tablet or phone files because those device surfaces were not requested.

**Implementation notes:** The web report device file is mandatory. Verify every listed layout field exists in All_Students.