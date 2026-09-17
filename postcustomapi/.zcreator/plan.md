Create a compact Student Registry app for recording student names, ages, and gender, plus an empty namespaced Deluge function exposed through an OAuth2-protected POST custom API available to all app users.

## User Profiles

Use Creator’s standard built-in profiles for this small internal registry; no custom profile hierarchy is needed.

No custom profile files will be created. Rely on Zoho Creator's automatically available default profiles. No roles or sharing rules are required.

## Students

Provide a simple student entry form and a searchable list for reviewing stored student records.

Create stateful form Students at components/Students/form/Students.ds. Fields in order: Personal_Information (type=section, displayname="Personal Information", row=1, column=0); Student_Name (type=text, displayname="Student Name", must have, personal data=true, row=1, column=1, width=medium); Age (type=number, displayname="Age", must have, row=1, column=1, width=medium); Gender (type=radiobuttons, displayname="Gender", values={"Male","Female","Other"}, must have, layout=3, personal data=true, row=1, column=1, width=medium). Add standard stateful actions: Submit and Reset on add; Update and Cancel on edit. Create default list report All_Students at components/Students/reports/All_Students/All_Students.ds, sourced from Students, with Student_Name, Age, and Gender columns; filters for Gender; sort Student_Name ascending. No workflows are required.

**Implementation notes:** Define the static gender options using a choice field and use declarative mandatory validation. Keep all fields in one Personal Information section.

## Custom API

Expose an intentionally empty function through a POST endpoint so its implementation can be added later without changing the API contract.

Create library/functions/deluge/func/postToCliq.ds containing an empty no-argument void function with signature `void func.postToCliq()` and an empty body. Create library/custom-apis/postToCliq.ds containing API link name postToCliq, display name "Post To Cliq", method POST, content type application/json, argument type "Key and Value", authentication OAuth2, scope "All users", default standard response codes (omit custom status code block), and action `Student_Registry.func.postToCliq();`.

**Implementation notes:** The custom API action must qualify the non-default namespace and app link name exactly as Student_Registry.func.postToCliq().

## Permissions

Keep access governed by Creator’s built-in profiles without introducing custom permission declarations.

No custom permission files are created because the app uses default Creator profiles only. No roles, portal profiles, or data-sharing rules are required.

## UI Configuration

Add a straightforward web navigation entry and record layouts so users can open the student form and browse student records.

Create web UI configuration only. devices/web/forms.ds maps Students with left label placement. devices/web/menu-sections.ds defines a primary app space/section containing the Students form and All_Students report with valid documented icons, and includes SharedAnalytics_Section. devices/web/theme.ds supplies the mandatory web theme preferences using conservative defaults. Create components/Students/reports/All_Students/devices/web.ds with quickview and detailview layouts containing only Student_Name, Age, and Gender from the parent report. No tablet or phone configuration is required.

**Implementation notes:** Use only valid documented menu icons. Include the mandatory SharedAnalytics_Section and the mandatory web theme file.