A simple student registry for storing student names and ages, browsing saved records, and seeing a quick total count.

## User Profiles

Use Zoho Creator’s built-in access profiles for this small internal app, without introducing custom roles or profile complexity.

User Profiles segment. Do not create custom profile files. Rely on Zoho Creator default profiles (Read, Write, Developer, Administrator, Customer) because no custom access model was requested. Do not create roles or sharing rules.

**Implementation notes:** This is a shell segment only; default profiles are system-created and must not be written.

## Students

Capture each student’s name and age in a short, required form, then provide a straightforward list for browsing and maintaining the records.

Create stateful form Students at components/Students/form/Students.ds. Fields in order: Student_Details (type=section, displayname="Student Details", row=1, column=0); Student_Name (type=text, displayname="Student Name", must have, maxchar=100, row=1, column=1, width=medium); Age (type=number, displayname="Age", must have, maxchar=3, row=1, column=1, width=medium). Use a title block with displayname="Students", on add="Add Student", on edit="Edit Student". Set success message="Student saved successfully." Include standard add Submit/Reset and edit Update/Cancel actions. Create default list report All_Students at components/Students/reports/All_Students/All_Students.ds, displayName="All Students", showing Student_Name and Age, sorted by Student_Name ascending. No workflows, blueprints, templates, or custom actions.

**Implementation notes:** Use declarative mandatory modifiers; no validation workflow is needed for this simple requirement.

## Student_Overview

Provide a compact landing page showing the number of stored students and quick guidance for opening the student list.

Create page Student_Overview with display name "Student Overview" under pages/Student_Overview/. Build a simple polished HTML snippet using ZCS styling: a heading, one KPI card showing Students.count(), and a short guidance card directing users to All Students. Place the snippet in content/Student_Overview_Content.dshtml and reference it from Student_Overview_page.ds using the required dsp file-reference envelope. The parent page content must contain only layout wrappers and the file reference; no inline component definition. No typed inputs are needed.

**Implementation notes:** Use ListComponents and GetComponent before authoring the snippet, include zcs-global.css once if utility classes are used, and keep the page lightweight.

## Permissions

Keep access aligned with Zoho Creator’s standard built-in profiles, with no custom permission files required.

Permissions convergence segment. Since the app uses only default system-created profiles and the user requested no custom access controls, do not write profile files, roles, portal profiles, or sharing rules. Confirm that no custom permission artifact is necessary after Students and All_Students exist.

**Implementation notes:** Do not write default profile declarations unless explicitly requested.

## UI Configuration

Configure a clean web navigation experience with the overview, student form, and student list, plus a simple education-themed appearance.

Create web UI configuration only. Write devices/web/forms.ds mapping Students with standard label placement. Write devices/web/menu-sections.ds with one main space and a section containing page Student_Overview, form Students, and report All_Students, plus mandatory SharedAnalytics_Section. Use valid education/users icons from the documented catalog. Write devices/web/theme.ds using a documented web theme and color preset, Poppins or another supported clean font, and logo preference app_icon with left placement. Write components/Students/reports/All_Students/devices/web.ds with quickview and detailview fields Student_Name and Age. Write customization/customization.ds with an education-appropriate zc-ab-* icon if available; otherwise use text="SR", background color="theme", foreground color="#ffffff". Ensure customization background matches the exact theme primary hex when an icon is used. Do not create phone or tablet files because only web is in scope.

**Implementation notes:** Every report must receive its web device layout. Keep exactly the supported files under devices/web/.