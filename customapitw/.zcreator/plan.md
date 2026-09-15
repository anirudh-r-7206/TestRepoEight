A compact Student Registry app will store each student’s name, age, and gender, provide a browsable directory, and expose a public-key custom API that runs a Deluge function logging “Hello.”

## User Profiles

Use Creator’s standard built-in profiles so the app remains simple and immediately usable without a custom access model.

No custom profile files will be created. Rely on Zoho Creator’s automatically provided Read, Write, Developer, Administrator, and Customer profiles. No roles or sharing rules are required.

## Students

Capture basic student details and provide a clear directory for browsing and filtering registered students.

Create stateful form Students at components/Students/form/Students.ds. Fields in one Personal Information section: Student_Name (text, display name “Student Name”, must have, maxchar 100, row 1, column 1, width medium), Age (number, must have, maxchar 3, row 1, column 2, width medium), Gender (radiobuttons, must have, values “Male”, “Female”, “Non-binary”, “Prefer not to say”, layout 2, row 1, column 1, width medium). Add standard stateful actions: Submit and Reset on add; Update and Cancel on edit. Set success message to confirm the student was saved.
Create default list report All_Students at components/Students/reports/All_Students/All_Students.ds, sourced from Students. Include Student_Name, Age, and Gender; filter by Gender; sort by Student_Name ascending. No business workflows, approvals, blueprints, or custom actions are required.

**Implementation notes:** Use a plain text field for the student name. Keep all three visible fields in the mandatory first section and use declarative must-have modifiers rather than validation workflows.

## Hello_API

Provide a tiny callable API for external testing that runs the requested Hello function.

Create library/functions/deluge/default/Hello.ds containing a parameterless void Deluge function Hello whose body is exactly the informational log statement info "Hello";. Create library/custom-apis/Info_Hello.ds containing api Info_Hello with display name “Info Hello”, description explaining that it invokes the Hello logging function, method GET, authentication Public_Key, scope “All users”, default standard response codes, and an actions block calling Student_Registry.Hello(); with the mandatory trailing semicolon. Do not add request arguments, content type, or argument type for this GET endpoint.

**Implementation notes:** The application link name used by the custom API action is Student_Registry. The public key itself is generated and managed by Creator, not hardcoded in DS.

## Permissions

Keep access control aligned with Creator’s built-in profiles and avoid unnecessary custom permission files.

Do not create custom profile, role, portal, or data-sharing-rule files. The app uses Creator’s automatic default profiles. Verify that no custom permission artifacts are needed for the Students form, All_Students report, or custom API.

## UI Configuration

Configure a simple web navigation experience with the student form and directory easy to find.

Create devices/web/forms.ds with a Students form mapping using left label placement. Create devices/web/menu-sections.ds with one Student_Registry_Space using education-school icon, a Students_Section containing form Students with education-pencil-47 and report All_Students with education-books-46, plus the mandatory SharedAnalytics_Section verbatim and outline icon preferences. Create devices/web/theme.ds with a clean web theme, readable font, and education-appropriate blue brand color using valid documented customization syntax.
Create components/Students/reports/All_Students/devices/web.ds as the mandatory web report layout. Include Student_Name, Age, and Gender in both quickview and detailview. Use standard Edit, Duplicate, Delete menus; web click/right-click actions; and reference only fields present in the parent report.

**Implementation notes:** Do not create phone or tablet files because this version is scoped to web. Every defined form and report must be mapped exactly once in the web menu.