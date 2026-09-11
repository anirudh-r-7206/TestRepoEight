A compact student registry for storing each student’s name, age, and gender, with a basic greeting page and a live gender-count dashboard. The app uses built-in Creator profiles and a simple web navigation structure.

## User Profiles

Use Creator’s built-in access profiles for this small internal app, without introducing custom roles or profile complexity.

Do not create custom profile files. Rely on Creator's automatically available default profiles. Administrator and Developer users have full build/manage access; Write users can add and maintain student records; Read users can view records and pages. No roles or sharing rules are required.

**Implementation notes:** This is a no-write shell segment because default profiles must not be emitted unless explicitly requested.

## Students

Provide one simple form for capturing student details and a report for browsing all saved students.

Create stateful form Students in components/Students/form/Students.ds. Fields in order: Student_Details (type=section, displayname="Student Details", row=1, column=0); must have Student_Name (type=text, displayname="Student Name", maxchar=100, row=1, column=1, width=medium); must have Age (type=number, displayname="Age", maxchar=3, row=1, column=1, width=medium); must have Gender (type=radiobuttons, displayname="Gender", values={"Male","Female","Non-binary","Prefer not to say"}, row=1, column=1, width=medium). Include standard add/edit actions. Create default list report All_Students at components/Students/reports/All_Students/All_Students.ds, sourced from Students, showing Student_Name, Age, Gender; filter by Gender; group by Gender ascending with record counts; sort by Student_Name ascending. No workflows, blueprints, or custom actions.

**Implementation notes:** Read section and choice-field docs before implementation. Use declarative must-have modifiers rather than validation workflows.

## Hello_Page

Add a minimal page that displays a clear “Hello” heading.

Create page Hello_Page with display name "Hello". Create HTML snippet pages/Hello_Page/content/Hello_Message.dshtml whose visible body is exactly <h1>Hello</h1> (styling may be added without changing the heading text). Create pages/Hello_Page/Hello_Page_page.ds with a single full-width layout row containing a dsp snippet stub referencing Hello_Message.dshtml. Do not add inline component definitions to the parent page and do not add page parameters or onload script.

**Implementation notes:** Use the required HTML-snippet envelope and file-reference structure.

## Gender_Statistics

Show a live summary of how many students belong to each configured gender category.

Create page Gender_Statistics with display name "Students by Gender". Create HTML snippet pages/Gender_Statistics/content/Gender_Counts.dshtml. In the snippet, use server-side inline Deluge to calculate Students[Gender == "Male"].count(), Students[Gender == "Female"].count(), Students[Gender == "Non-binary"].count(), and Students[Gender == "Prefer not to say"].count(). Render four responsive, pre-themed KPI cards, one per category, showing its label and current count; include a concise page heading. Create pages/Gender_Statistics/Gender_Statistics_page.ds with one full-width dsp snippet stub referencing Gender_Counts.dshtml. Do not define page variables or an onload script because counting occurs inside the snippet.

**Implementation notes:** Prefer ZCS metric/card styling where applicable; use Creator theme variables and no JavaScript.

## Permissions

Keep access straightforward by relying on Creator’s standard profiles and avoiding unnecessary custom permission files.

Do not create custom profile, role, portal, or sharing-rule files. Confirm the app contains no custom profiles requiring ModulePermissions. The built-in Administrator, Developer, Write, and Read profiles remain the access model described in the User Profiles segment.

**Implementation notes:** No permission artifact is expected unless implementation reveals an existing custom profile that must converge.

## UI Configuration

Make the form, report, greeting, and statistics dashboard easy to reach from the web app navigation.

Create web device configuration only. devices/web/forms.ds maps Students with standard left label placement. components/Students/reports/All_Students/devices/web.ds defines quickview and detailview layouts using only Student_Name, Age, and Gender. devices/web/menu-sections.ds creates one main space with a Students section containing form Students and report All_Students, a Pages section containing page Hello_Page and page Gender_Statistics, and the mandatory SharedAnalytics_Section. Use valid education/users/business icons after reading the relevant icon catalog. devices/web/theme.ds provides a clean default font and restrained blue accent theme following device syntax. Do not create phone or tablet files because only web is in scope.

**Implementation notes:** Every report must have web.ds. Verify the report fields before writing its device layout.