A compact student directory for storing each student’s name, age, gender, and photograph. Each record can be browsed in a list and printed as a polished student profile.

## User Profiles

Use Creator’s standard built-in profiles for access, without introducing extra roles or custom access layers.

Do not create custom profile files. Rely on Zoho Creator default profiles (Read, Write, Developer, Administrator, Customer), which are system-created when no custom profiles exist. Do not create roles or data-sharing rules.

**Implementation notes:** This remains a required planning segment but intentionally writes no files.

## Students

Capture each student’s core personal details and photograph, and provide a searchable directory with a printable profile for every record.

Create stateful form Students in components/Students/form/Students.ds. Use title display name "Students", add title "Add Student", edit title "Edit Student", and success message "Student record saved successfully." Add one section Personal_Information (type=section, displayname="Personal Information", row=1, column=0). Add must have Student_Name (type=text, displayname="Student Name", maxchar=100, personal data=true, row=1, column=1, width=medium); must have Age (type=number, maxchar=3, row=1, column=2, width=medium) with no fixed age range validation; must have Gender (type=radiobuttons, values={"Female","Male","Non-binary","Prefer not to say"}, layout=2, personal data=true, row=1, column=1, width=medium); and Student_Image (type=image, displayname="Student Image", source=file,camera, aspect ratio=square, compression=true, camera=secondary, switch camera=true, show gallery=true, personal data=true, row=1, column=2, width=medium). Include standard stateful actions: Submit and Reset on add; Update and Cancel on edit.
Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds with displayName="All Students", show all rows from Students, columns Student_Image, Student_Name, Age, Gender, filters Gender and Age, and sort Student_Name ascending. Add print template = Student_Profile_Template.
Create record template Student_Profile_Template in components/Students/form/record-template/Student_Profile_Template.ds with displayname="Student Profile". Use A4 portrait, Lato, a clean education-themed heading, and fields for Student_Name, Age, Gender, and Student_Image arranged as a polished student profile. For the dynamic Student_Image field, represent it using a field element bound to Student_Image because the record-template image element schema is for registered static images; include the required default images placeholder array and unique IDs throughout. Do not set the report detail-view template property because only printable output was requested.

**Implementation notes:** Read the form, choice, image, record-template, record-template-schema, list-report, and report field docs before writing. Pair the record template and report print-template reference in the same operation.

## Permissions

Keep access simple by relying on Creator’s built-in profiles and their standard behavior.

Do not create or edit profile files because the app uses only system default profiles and no custom profiles were requested. Do not create roles or sharing rules. Verify that no custom permission artifacts are needed.

**Implementation notes:** No files are expected from this segment.

## UI Configuration

Provide a clear web navigation experience, readable record layouts, and education-themed branding.

Create devices/web/forms.ds with a forms block mapping Students and label placement=left. Create components/Students/reports/All_Students/devices/web.ds with a bare report All_Students block. Quickview must use list layout type -1 and fields Student_Image, Student_Name, Age, Gender; include header and record menus with Edit, Duplicate, Delete; web actions on click View Record and on right click Edit, Delete, Duplicate, View Record. Detailview must use type=1, layout type=-2, the same four fields, and header menu Edit, Duplicate, Delete.
Create devices/web/menu-sections.ds with one space Student_Directory_Space (displayname="Student Directory", education-school icon), one section Student_Records_Section (displayname="Student Records", education-backpack-57 icon), form Students (education-pencil-47 icon), report All_Students (education-books-46 icon), and the mandatory exact SharedAnalytics_Section block. Add outline icon preference showing space, section, and component.
Create devices/web/theme.ds with theme_1, font="lato", color option "5" (primary #0093FF), and logo preference="app_icon", placement="left".
Create customization/customization.ds with customize block and app icon zc-ab-education-1, background color #0093FF, foreground color #ffffff.

**Implementation notes:** Only web is surfaced. Do not create phone or tablet files. Cross-check every device-layout field against the parent report.