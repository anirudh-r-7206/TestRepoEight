A compact student registry for storing student names and ages. It includes a browsable report, a simple overview page, and two chained custom functions that classify ages and produce student summaries.

## User Profiles

Use Zoho Creator’s standard built-in profiles for this small internal app; no custom profile hierarchy is needed.

Do not create custom profile files. Rely on Creator’s automatically provided default profiles (Read, Write, Developer, Administrator, Customer). Do not create roles or sharing rules.

**Implementation notes:** This is a non-implementation shell segment because no custom profiles were requested.

## Students

Store each student’s name and age, and provide a clear list for browsing all student records.

Create form Students at components/Students/form/Students.ds. Fields in order: Student_Details section (type=section, row=1, column=0); Student_Name (type=text, must have, maxchar=100, row=1, column=1, width=medium); Age (type=number, must have, maxchar=3, row=1, column=1, width=medium). Use standard add/edit actions. Create default list report All_Students at components/Students/reports/All_Students/All_Students.ds, source Students, columns Student_Name and Age, sorted by Student_Name ascending. No workflows are required because mandatory validation is declarative.

**Implementation notes:** Read section and action detail docs before implementation. Keep field widths consistent.

## Student_Functions

Provide reusable age classification and student-summary logic, with the summary function calling the classifier.

Create two Deluge function files under library/functions/deluge/Students/. Function 1 link name Classify_Age with signature string Students.Classify_Age(int age); return "Child" when age < 13, "Teen" when age is 13 through 17, and "Adult" when age >= 18. Function 2 link name Build_Student_Summary with signature string Students.Build_Student_Summary(string student_name, int age); it must call thisapp.Students.Classify_Age(age), then return a readable string in the form '<student_name> is <age> years old and is categorized as <category>.' Guard null/empty student names and non-positive ages with a clear fallback message.

**Implementation notes:** The explicit function-to-function call is the key requested behavior.

## Student_Overview

Show a simple, polished overview with the total number of students and quick guidance for using the registry.

Create page Student_Overview under pages/Student_Overview/. The parent Student_Overview_page.ds must reference child content files only. Use one responsive ZCS-based HTML snippet to show a title, total student count from Students, and a short explanation that age categories are Child, Teen, and Adult. Prefer a .dshtml snippet and include required shared ZCS styling. No native chart is necessary for this small dataset.

**Implementation notes:** Use the page-builder and ZCS components; do not put element definitions inline in the parent page file.

## Permissions

Keep access simple by relying on Zoho Creator’s standard profile behavior without introducing custom permission files.

Do not create permission files because the app uses only automatically managed default profiles and no custom profiles were requested. Do not create roles or sharing rules.

**Implementation notes:** Non-implementation converge segment.

## UI Configuration

Add straightforward web navigation and responsive record layouts for the student form, report, and overview page.

Create devices/web/forms.ds mapping Students with standard label placement. Create components/Students/reports/All_Students/devices/web.ds with quickview and detailview fields Student_Name and Age. Create devices/web/menu-sections.ds with a main navigation space containing Students form, All_Students report, and Student_Overview page, plus the mandatory SharedAnalytics_Section. Create devices/web/theme.ds with a clean default font and restrained blue accent theme. Use only documented valid icons.

**Implementation notes:** Read device, menu, report-layout, theme, and icon docs before implementation. Emit web.ds for the report.