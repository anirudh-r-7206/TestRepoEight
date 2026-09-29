A compact People Directory app for storing a person’s name, gender, and age, with a clean form and searchable report. It uses standard Creator profiles and does not require workflows or external integrations.

## User Profiles

Use Zoho Creator’s standard built-in profiles for app access. No custom roles or profile hierarchy are needed for this simple directory.

Do not write profile files. The app uses Creator’s automatically available default profiles: Administrator, Developer, Read, and Write. Administrator and Developer have full access; Write can create and update people records; Read can view records. No custom profiles, portal profiles, roles, or sharing rules.

## People

Provide one straightforward form for recording a person’s core details and one report for browsing the directory.

Create stateful form People in components/People/form/People.ds. Include first section Person_Details (type=section, displayname="Person Details", row=1, column=0). Include must have Full_Name (type=text, displayname="Full Name", maxchar=100, personal data=true, row=1, column=1, width=medium); must have Gender (type=radiobuttons, values={"Female","Male","Non-binary","Prefer not to say"}, displayname="Gender", row=1, column=1, width=medium); and must have Age (type=number, displayname="Age", maxchar=3, row=1, column=1, width=medium). Add standard stateful actions: Submit and Reset on add, Update and Cancel on edit. Set success message to "Person saved successfully." Create default list report All_People in components/People/reports/All_People/All_People.ds, displayName="All People", showing Full_Name, Gender, and Age from People. Add filters for Gender and Age, sort by Full_Name ascending, and make Full_Name record-link enabled. No workflows, blueprints, schedules, custom actions, or record templates.

**Implementation notes:** Use declarative mandatory fields and numeric constraints where supported; do not add validation workflows unless a constraint cannot be represented declaratively.

## Permissions

Apply complete access rules for the built-in profiles so readers can view the directory and editors can maintain it.

Because this app uses only Creator’s automatic default profiles, do not create custom profile files or role files. Rely on standard profile behavior: Administrator and Developer full access; Write may add, view, edit, and delete People records and access All_People; Read has view-only access to People through All_People. All three business fields are visible to all profiles. No page permissions, portal permissions, roles, or data-sharing rules are required.

## UI Configuration

Configure a clean web navigation experience, report record layouts, theme, and app icon for the directory.

Create devices/web/forms.ds mapping People with left label placement. Create components/People/reports/All_People/devices/web.ds with quickview and detailview layouts containing Full_Name, Gender, and Age. Create devices/web/menu-sections.ds with one main space and a People section containing form People and report All_People, using valid user/contact icons, plus the mandatory SharedAnalytics_Section with type=shared_user_report_section. Create devices/web/theme.ds using a clean supported web theme and Poppins font; include customize logo preference="app_icon" and placement="left". Create Customization/customization.ds with an icon block using zc-ab-users-contacts, exact primary hex matching the selected web theme preset, and foreground #ffffff. Do not create phone or tablet device files.