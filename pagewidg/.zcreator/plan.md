A compact student registry for recording names, ages, and inclusive gender selections. It includes a gender-count dashboard and a separate page hosting a custom lowercase alphabet tile widget, with web navigation configured for administrator use.

## User Profiles

Use the platform’s built-in Administrator profile as the sole app user. No custom profile or role hierarchy is needed.

User Profiles segment:
- Use only the Zoho Creator default Administrator profile.
- Do not create any custom profile files because default profiles are platform-managed.
- Do not create roles or sharing rules.
- This segment performs no file writes.

## Students

Provide a simple registry where the administrator can add and maintain each student’s name, age, and gender. Include a clear list for reviewing all saved students.

Create form Students at components/Students/form/Students.ds.
Form display name: Students.
Fields, in exact logical order:
1. Student_Information: type=section, display name "Student Information", first mandatory layout section at row 1, column 0.
2. Student_Name: type=text, display name "Student Name", must have, maxchar=100, row=1, width=medium.
3. Age: type=number, display name "Age", must have, maxchar=3, row=1, width=medium.
4. Gender: type=picklist, display name "Gender", must have, static values exactly {"Male", "Female", "Non-binary", "Prefer not to say", "Other"}, row=1, width=medium.
Form actions: add Submit and Reset; edit Update and Cancel.
Create list report All_Students at components/Students/reports/All_Students/All_Students.ds using Students as its source. Display columns Student_Name, Age, Gender; sort Student_Name ascending; allow administrator add/edit/delete access. No workflows are required because mandatory entry validation is declarative.

**Implementation notes:** Read section and static-choice field docs before implementation. Keep every link name app-wide unique. Do not add permissions or device files in this segment.

## Gender_Summary

Show an at-a-glance gender distribution dashboard. A single panel will present the current number of student records for every configured gender choice.

Create page Gender_Summary under pages/Gender_Summary/ with display name "Gender Summary".
Use a native page panel because the user explicitly requested a panel. The page must have one authoritative panel component file at pages/Gender_Summary/content/Gender_Count_Panel.ds and a parent pages/Gender_Summary/Gender_Summary_page.ds whose content contains only layout wrappers and a file reference to Gender_Count_Panel.ds.
Declare five integer page variables in the page parameters attribute: maleCount, femaleCount, nonBinaryCount, preferNotCount, otherCount. In the page script, assign each variable from Students record counts filtered by Gender equal to the exact matching picklist value.
The panel must clearly show five labeled metric areas: Male, Female, Non-binary, Prefer not to say, and Other, each paired with its live count. Use a clean responsive grid, readable typography, subtle color distinction, and an overall heading such as "Students by Gender". Do not embed component definitions inline in the parent page file.

**Implementation notes:** Use the page-builder specialist. Read page panel, text, page-variable, onload-script, and DS output docs before implementation.

## Lowercase_Alphabet

Provide a playful reference page containing a custom widget that displays all lowercase English letters. Letters appear as responsive individual tiles from a through z.

Create a custom ZET widget project with link/folder name Lowercase_Alphabet_Widget under library/widgets/Lowercase_Alphabet_Widget/ using CreateWidget, never direct-write the initial scaffold.
Implement the widget entry page and stylesheet so it displays exactly the 26 lowercase English letters a through z as individual responsive tiles in alphabetical order. Use accessible contrast, a concise heading "Lowercase Alphabet", responsive CSS grid behavior, and no external service or stored data. JavaScript may generate the tile sequence, or the letters may be static HTML; keep behavior deterministic.
Create page Lowercase_Alphabet at pages/Lowercase_Alphabet/Lowercase_Alphabet_page.ds with display name "Lowercase Alphabet". Its content must use ZML layout wrappers and an inline widgets reference with element name "Lowercase Alphabet Widget", link name Lowercase_Alphabet_Widget, automatic height, and a white background. The widget itself remains in library/widgets, not page content. The parent page must not contain unrelated element definitions.

**Implementation notes:** Use the page-builder specialist. Read widget and page DS output docs before implementation. The widget scaffold must be created with CreateWidget.

## Permissions

Keep access restricted to the built-in Administrator profile, which has full access to the registry, report, and both pages.

Permissions convergence:
- The application uses only the platform-managed default Administrator profile.
- Do not create custom profile, role, portal, or sharing-rule files.
- Confirm there are no custom permissions files required because Administrator retains full form, report, and page access by default.
- This segment performs no file writes.

## UI Configuration

Make the form, student list, gender summary, and alphabet page easy to reach from the web navigation. Configure the student report’s web record layouts and a consistent app theme.

Create web UI configuration only.
1. devices/web/forms.ds: map Students with standard left label placement.
2. components/Students/reports/All_Students/devices/web.ds: define quickview and detailview for All_Students; fields must include Student_Name, Age, and Gender and must exist in the parent report.
3. devices/web/menu-sections.ds: create a suitable primary space and sections. Include navigation entries for form Students, report All_Students, page Gender_Summary, and page Lowercase_Alphabet. Include the mandatory SharedAnalytics_Section section with type=shared_user_report_section. Use valid documented icons.
4. devices/web/theme.ds: create the mandatory web theme with a clean education-friendly font and restrained blue/teal color preferences.
Do not create phone or tablet mappings because the requested app targets web only.

**Implementation notes:** Read devices index/details/menu/report-layout docs and icon index before implementation. Every report must receive web.ds.