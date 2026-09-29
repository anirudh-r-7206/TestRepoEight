A compact student records app for storing each student’s name, age, and gender, with a printable record template available from a student list report.

## User Profiles

Use Creator’s standard built-in profiles for access; no custom user profiles are needed for this simple app.

Do not write custom profile files. Rely on Zoho Creator default profiles because the user did not request specialized access levels, roles, portals, or sharing rules.

## Students

Capture basic student details and provide a straightforward list where records can be viewed and printed using a simple student record layout.

Create stateful form Students at components/Students/form/Students.ds. Add first section Student_Information (type=section, displayname="Student Information", row=1, column=0). Add mandatory Student_Name (type=text, displayname="Student Name", maxchar=100, personal data=true, row=1, column=1, width=medium); mandatory Age (type=number, displayname="Age", row=1, column=2, width=medium); mandatory Gender (type=radiobuttons, displayname="Gender", values={"Female","Male","Non-binary","Prefer not to say"}, layout=2, row=1, column=1, width=medium). Include standard stateful actions: Submit and Reset for add, Update and Cancel for edit. Create default list report All_Students at components/Students/reports/All_Students/All_Students.ds with displayName="All Students", template=Student_Record_Template, showing Student_Name, Age, Gender, filtering by Gender, sorting Student_Name ascending. Create form-level record template Student_Record_Template at components/Students/form/record-template/Student_Record_Template.ds with displayname="Student Record" and valid version-2 A4 JSON content: a centered "Student Record" heading followed by clearly labeled Student_Name, Age, and Gender fields in a simple clean layout. Ensure all template element IDs are unique and include the required empty image placeholder. No workflows are required.

**Implementation notes:** The report is required because Creator record templates must be paired with an associated report using template = Student_Record_Template. Read forms and reports documentation before writing.

## Permissions

Keep access aligned with Creator’s built-in profiles without adding custom permission definitions.

No permission files are required because no custom profiles exist. Do not create roles or sharing rules.

## UI Configuration

Add a minimal web navigation and report layout so the student form and list are easy to access.

Create web device configuration for the Students form and All Students report. Write devices/web/forms.ds with a mapping for Students using top label placement. Write components/Students/reports/All_Students/devices/web.ds with quickview and detailview fields Student_Name, Age, Gender. Write devices/web/menu-sections.ds with an appropriate main space/section containing the Students form and All_Students report, plus mandatory SharedAnalytics_Section. Choose valid education/person icons from the icon documentation. Write devices/web/theme.ds with a simple suitable theme and logo preference app_icon. Write customization/customization.ds with an app icon block using a valid zc-ab-* education/person icon, a matching documented theme primary hex background, and white foreground.