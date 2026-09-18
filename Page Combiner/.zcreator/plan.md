A compact student registry for storing each student’s name, age, and gender. It includes a searchable student list and a visual overview with total enrollment and gender-based counts.

## User Profiles

Use Zoho Creator’s standard built-in profiles for this simple internal registry, without introducing extra roles or access layers.

No custom profile files will be created. Rely on Zoho Creator default profiles (Read, Write, Developer, Administrator, Customer) because the user did not request custom access levels, portal users, role hierarchy, or record-level sharing. This segment is intentionally a no-op and must not write default profile declarations.

**Implementation notes:** Do not create default profile files; Creator provides them automatically.

## Students

Provide one straightforward form for recording student identity details and a list for browsing the saved students.

Create stateful form Students in components/Students/form/Students.ds. Fields, in exact layout order: Student_Details (type=section, displayname="Student Details", row=1, column=0); Student_Name (type=text, displayname="Student Name", must have, maxchar=100, row=1, column=1, width=medium); Age (type=number, displayname="Age", must have, maxchar=3, row=1, column=2, width=medium); Gender (type=radiobuttons, displayname="Gender", must have, static values={"Male","Female","Other","Prefer not to say"}, row=1, column=1, width=medium). Include canonical stateful actions for add (Submit, Reset) and edit (Update, Cancel). Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds with displayName="All Students", showing Student_Name, Age, and Gender from Students; filters for Gender and Age; sort by Student_Name ascending. No workflows or blueprints are required.

**Implementation notes:** Read the section, choice-field, action, and list-report detail docs immediately before writing. Keep field widths consistent.

## Student_Overview

Show an at-a-glance dashboard with the total number of students and separate counts for each gender choice.

Create page Student_Overview with display name "Student Overview" under pages/Student_Overview/. Strongly prefer one polished HTML snippet at content/Student_Counts.dshtml using ZCS styling/components where suitable. The snippet must query Students and display five KPI cards: Total Students = Students.count(); Male = Students[Gender == "Male"].count(); Female = Students[Gender == "Female"].count(); Other = Students[Gender == "Other"].count(); Prefer Not to Say = Students[Gender == "Prefer not to say"].count(). Include a clear dashboard heading and concise supporting text. Create pages/Student_Overview/Student_Overview_page.ds whose content contains only layout wrappers and the file reference/envelope for Student_Counts.dshtml; do not inline the snippet body in the parent page. No typed page parameters are needed.

**Implementation notes:** Use the page-builder. Consult ListComponents/GetComponent before composing the snippet and include zcs-global.css once if utility classes are used.

## Permissions

Keep access aligned with Creator’s built-in profile behavior for this uncomplicated internal app.

No custom profile, role, portal profile, or sharing-rule files are required. Do not create files for default profiles. Confirm that the app design contains no private or profile-specific fields and no custom access requirement. This segment is intentionally a no-op.

**Implementation notes:** Do not synthesize default profile DS files.

## UI Configuration

Make the student form, list, and overview easy to reach from the web navigation, with a clean report preview and detail layout.

Create web device configuration only. Write devices/web/forms.ds mapping Students with label placement left. Write devices/web/menu-sections.ds with one main space and a Student Management section containing form Students, report All_Students, and page Student_Overview, each with valid education/users icons; also include mandatory SharedAnalytics_Section. Write devices/web/theme.ds with a suitable clean web theme and restrained education-oriented colors. Write components/Students/reports/All_Students/devices/web.ds with quickview and detailview fields limited to Student_Name, Age, and Gender, all of which exist in the parent report. Do not create phone or tablet files because those devices were not requested.

**Implementation notes:** Read device details, menu examples, report-layout examples, web theme docs, and relevant icon category docs immediately before writing.