A compact student registry for storing each student’s name and age, browsing records in a clean list, and presenting the app with a fresh green theme and friendly typography.

## User Profiles

Use Creator’s standard built-in access profiles for this small internal registry, without introducing extra role complexity.

No custom profile files. Rely on Zoho Creator's automatically available default profiles, especially Administrator, because the user did not request custom access tiers. Do not create roles or sharing rules.

## Students

Provide a simple entry form for student names and ages, plus a clear list for browsing the saved records.

Create stateful form Students in components/Students/form/Students.ds. Fields: Student_Details (section, displayname "Student Details", row 1, column 0); Student_Name (text, displayname "Student Name", must have, maxchar 100, row 1, column 1, width medium); Age (number, displayname "Age", must have, maxchar 3, row 1, column 2, width medium). Add standard stateful actions: on add Submit (submit) and Reset (reset); on edit Update (submit) and Cancel (cancel). Set success message "Student saved successfully." Create default list report All_Students at components/Students/reports/All_Students/All_Students.ds, display name "All Students", showing all rows from Students with Student_Name and Age, sortable by Student_Name ascending, and filters for Student_Name and Age. No workflows are required because mandatory input is declarative and the request does not specify age-range rules.

**Implementation notes:** Read forms index/tips, fields, section rules, forms/actions, reports index/tips, and list-report before writing. Keep width consistent across data fields.

## Permissions

Keep access straightforward through Creator’s standard profiles, with no custom security model needed for this basic registry.

Do not create custom profile, role, portal, or sharing-rule files. Confirm that the app relies on Creator's standard default profiles. This is a convergence/check segment only because no custom permissions were requested.

**Implementation notes:** If no permissions files are needed, make no writes in this scope.

## UI Configuration

Apply a fresh green look and organize web navigation so users can quickly add students or view the full registry.

Create web device configuration only. devices/web/forms.ds maps Students with left label placement. devices/web/menu-sections.ds creates one relevant app space and a Students section containing the Students form and All_Students report, using valid documented icons, plus the mandatory SharedAnalytics_Section. devices/web/theme.ds defines required web theme preferences using a fresh green direction and friendly Nunito typography, following documented device theme syntax. Create components/Students/reports/All_Students/devices/web.ds with quickview and detailview fields Student_Name and Age only. Create Customization/customization.ds with app-level customize block using a documented theme selection, font "nunito", a green color option, and no custom logo. Do not create phone or tablet files because mobile-specific surfacing was not requested.

**Implementation notes:** Read devices index plus devices, report examples, menu examples, web customize, web themes, deviceReports, menu, icons index and relevant icon category, and customization before writing. Ensure every report has web.ds and the menu includes SharedAnalytics_Section.