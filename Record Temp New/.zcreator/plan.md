A compact Student Directory app for storing student identity details and photos, browsing them in a report, and printing each record as a clean profile card.

## User Profiles

Use Creator’s standard built-in profiles for this straightforward internal directory, without introducing extra role complexity.

No custom profiles are required. Rely on Zoho Creator’s automatically provided default profiles (Read, Write, Developer, Administrator, Customer). Do not write profile files, roles, or sharing rules in this segment.

**Implementation notes:** This shell segment intentionally creates no DS files because default profiles must not be written unless explicitly requested.

## Students

Capture each student’s name, age, gender, and photo, then provide a browsable directory and a printable profile card for every record.

Create form Students in components/Students/form/Students.ds. Use title display name "Students", add title "Add Student", edit title "Edit Student", and success message "Student record saved successfully." Add section Student_Information (type=section, displayname="Student Information", row=1, column=0). Add must have Student_Name (type=text, displayname="Student Name", maxchar=150, row=1, column=1, width=medium, personal data=true). Add must have Age (type=number, maxchar=3, row=1, column=2, width=medium). Add must have Gender (type=picklist, values={"Male","Female","Non-binary","Prefer not to say","Other"}, row=1, column=1, width=medium, personal data=true). Add must have Student_Image (type=image, displayname="Student Image", source=file,camera, aspect ratio=square, camera=secondary, switch camera=true, show gallery=true, row=1, column=2, width=medium, personal data=true). Add standard stateful on-add Submit/Reset and on-edit Update/Cancel actions.
Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds with displayName="All Students", template=Student_Profile_Card, show all rows from Students with Student_Image, Student_Name (link enabled), Age, Gender; filters Age and Gender; sort by Student_Name ascending. Create report-level record template components/Students/reports/All_Students/record-template/Student_Profile_Card.ds named Student_Profile_Card with displayname="Student Profile Card" and valid version-2 A4 portrait JSON. Design it as a polished profile card with a centered education-themed header, the dynamic Student_Image field prominently presented, and labeled Student_Name, Age, and Gender values. Use unique template element IDs and the documented field element syntax. The report and template must be created together and linked via template=Student_Profile_Card.

**Implementation notes:** Use declarative must-have modifiers rather than validation workflows. The image in the record template must reference the dynamic Student_Image field through a fields element; do not fabricate a static image URL.

## Permissions

Keep access aligned with Creator’s standard built-in profiles and avoid unnecessary custom security configuration.

No custom profile files exist to converge. Do not create default profile DS files. Do not create roles or data-sharing rules. Confirm that this simple app relies on Creator’s built-in profile behavior.

**Implementation notes:** No files should be written unless custom profiles are found during implementation.

## UI Configuration

Provide a clear web navigation experience, a readable student report layout, and education-themed visual branding.

Create devices/web/forms.ds mapping Students with left label placement. Create components/Students/reports/All_Students/devices/web.ds with valid quickview and detailview layouts containing Student_Image, Student_Name, Age, and Gender; every referenced field must exist in the report definition. Create devices/web/menu-sections.ds with an education-oriented space and section containing form Students and report All_Students, valid education/users icons, plus mandatory SharedAnalytics_Section. Create devices/web/theme.ds using a documented web theme preset, Poppins font, matching color option, and customize logo preference="app_icon" placement="left". Create customization/customization.ds with an icon block using a valid education zc-ab icon, exact primary hex matching the selected theme preset, and white foreground. Do not create phone/tablet files because only web is requested.

**Implementation notes:** Read device detail docs and the relevant education/users icon catalog before implementation. The icon background hex must exactly match the chosen documented theme color.