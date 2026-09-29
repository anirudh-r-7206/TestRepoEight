A simple Student Register app for storing each student’s name, age, and gender, with a searchable report for browsing and maintaining records.

## User Profiles

Use Zoho Creator’s standard built-in profiles for access, without introducing extra role complexity.

Do not create custom profile files. Rely on Zoho Creator default profiles (Read, Write, Developer, Administrator, Customer), which are generated automatically when no custom profiles exist. No roles or sharing rules are required.

**Implementation notes:** This segment intentionally writes no files because default profiles must not be declared explicitly.

## Students

Capture each student’s basic personal details and provide a searchable directory for viewing and maintaining student records.

Create stateful form Students at components/Students/form/Students.ds. Use one mandatory first section Student_Information (type=section, displayname="Student Information", row=1, column=0). Add mandatory Student_Name (type=text, displayname="Student Name", maxchar=100, personal data=true, row=1, column=1, width=medium), mandatory Age (type=number, maxchar=3, row=1, column=2, width=medium), and mandatory Gender (type=radiobuttons, values={"Female","Male","Non-binary","Prefer not to say"}, layout=2, personal data=true, row=1, column=1, width=medium). Add standard stateful actions: Submit and Reset on add; Update and Cancel on edit. Create default list report All_Students at components/Students/reports/All_Students/All_Students.ds with displayName="All Students", sourced from Students, showing Student_Name, Age, and Gender; filters for Gender and Age; sort by Student_Name ascending. Do not create workflows, blueprints, templates, or custom actions.

**Implementation notes:** Use declarative mandatory modifiers. Keep all field widths medium and ensure every field row matches its parent section.

## Permissions

Retain standard Creator access controls suitable for a small internal register.

Because the app uses only Zoho Creator default profiles and no custom profiles, write no profile, role, portal, or sharing-rule files. Default profile permissions are managed automatically by Creator.

**Implementation notes:** No files are expected from this converge segment.

## UI Configuration

Provide clear navigation, a practical record layout, and a clean education-themed visual style for web users.

Create components/Students/reports/All_Students/devices/web.ds with a list quickview and standard detailview. Both layouts must contain only Student_Name, Age, and Gender, matching the parent report. Include Edit, Duplicate, Delete menus and standard web click/right-click actions. Create devices/web/forms.ds mapping Students with label placement=left. Create devices/web/menu-sections.ds with one space Student_Records (displayname="Student Records", education icon), one section Student_Directory containing form Students and report All_Students with distinct valid education icons, and the mandatory SharedAnalytics_Section exactly once. Add outline icon preference showing space, section, and component icons. Create devices/web/theme.ds using theme_1, font="poppins", color option "5" (primary #0093FF), and logo preference="app_icon" placement="left". Create Customization/customization.ds with an icon block using zc-ab-education-1, background color="#0093FF", foreground color="#ffffff". Do not emit phone or tablet files.

**Implementation notes:** Read all device, menu, report-layout, theme, customization, and icon docs again in the same turn before writing. Every report must have web.ds.