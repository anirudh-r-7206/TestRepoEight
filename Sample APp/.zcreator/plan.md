A small Zoho Creator registry for storing a person’s name, gender, and age. It will use Creator’s standard profiles, one entry form, one list report, and a simple web menu.

## User Profiles

Use Zoho Creator’s standard built-in profiles for this simple app, with no custom role hierarchy or portal access.

No custom profile files will be created. Rely on the automatically provided Read, Write, Developer, Administrator, and Customer profiles. No roles or data-sharing rules are required.

## People

Provide a simple form to add and maintain people, plus a clear directory for browsing saved entries.

Create stateful form People in components/People/form/People.ds. Fields: Personal_Information (type=section, displayname="Personal Information", row=1, column=0); Name (type=text, displayname="Name", must have, row=1, column=1, width=medium, maxchar=100); Gender (type=picklist, displayname="Gender", must have, values={"Male","Female","Non-binary","Prefer not to say"}, row=1, column=2, width=medium); Age (type=number, displayname="Age", must have, row=1, column=1, width=medium, maxchar=3). Include standard stateful actions: on add Submit and Reset; on edit Update and Cancel. Create default list report All_People in components/People/reports/All_People/All_People.ds with displayName="All People", showing Name, Gender, and Age from People; filters Gender and Age; sort by Name ascending. No workflows, blueprints, schedules, templates, or custom actions.

**Implementation notes:** Use declarative mandatory fields; no workflows are needed. Define the form before its report.

## Permissions

Keep access control intentionally simple by using Creator’s built-in profiles and their standard behavior.

No permission files will be created because the app uses only automatically generated default profiles. Verify that no custom ModulePermissions, roles, portal profiles, or sharing rules are necessary.

## UI Configuration

Add a straightforward web navigation area for entering people and opening the people directory, with a clean report record layout.

Create devices/web/forms.ds with label placement=left for People. Create devices/web/menu-sections.ds containing one space People_Space (displayname="People Registry") and one section People_Section (displayname="People") mapping form People and report All_People exactly once; include mandatory SharedAnalytics_Section exactly once; use valid distinct outline icons. Create components/People/reports/All_People/devices/web.ds containing bare report All_People with quickview and detailview layouts. Both layouts must list only Name, Gender, and Age, which exist in the parent report. Quickview must use web list layout, header and record menus with Edit/Duplicate/Delete, and web click/right-click actions. Detailview must use standard fields layout and header Edit/Duplicate/Delete. No phone or tablet mappings are required.

**Implementation notes:** Every report must receive a web device layout. Include SharedAnalytics_Section exactly once.