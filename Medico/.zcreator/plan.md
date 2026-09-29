A compact medical directory for storing doctor names and email addresses. It will use built-in validation, a clean list view, and a solid deep-teal healthcare theme.

## User Profiles

Use Zoho Creator’s standard built-in profiles for access, without introducing unnecessary custom roles or hierarchy.

No custom profile files are required. Rely on Zoho Creator default profiles (Administrator, Developer, Write, Read, and Customer where applicable). Do not create roles or sharing rules.

## Doctors

Store each doctor’s name and email address with required-field checks and duplicate-email prevention. Provide a simple searchable directory for browsing the saved doctors.

Create stateful form Doctors in components/Doctors/form/Doctors.ds. Fields: Doctor_Details (section, displayname "Doctor Details", row 1, column 0); Doctor_Name (text, displayname "Doctor Name", must have, personal data = true, row 1, column 1, width medium); Email_ID (email, displayname "Email ID", must have unique, personal data = true, row 1, column 2, width medium). Add standard add actions Submit and Reset, and edit actions Update and Cancel. Set a concise success message confirming that the doctor was saved. Create default list report All_Doctors in components/Doctors/reports/All_Doctors/All_Doctors.ds over Doctors, displaying Doctor_Name and Email_ID, with both fields available as filters and Doctor_Name sorted ascending. No workflows are needed because mandatory and uniqueness validation are declarative.

## Permissions

Apply access through the platform’s standard profiles, keeping the directory manageable without adding a custom permission model.

Do not write custom profile files because the app uses Creator default profiles. Verify that no custom ModulePermissions, roles, portal profiles, or sharing rules are required for this small internal directory.

## UI Configuration

Configure clear web navigation, the doctor form and report layouts, and a solid deep-teal healthcare appearance with a medical app icon.

Create devices/web/forms.ds mapping Doctors with top label placement. Create components/Doctors/reports/All_Doctors/devices/web.ds with quickview and detailview layouts containing Doctor_Name and Email_ID only. Create devices/web/menu-sections.ds with one main medical directory space/section containing the Doctors form and All_Doctors report, plus the mandatory SharedAnalytics_Section. Use valid health/user icons from the icon docs. Create devices/web/theme.ds using a documented solid-style deep-teal theme preset, a professional font, and logo preference app_icon placed left. Create customization/customization.ds with a medical zc-ab icon, exact primary hex matching the selected deep-teal preset, and white foreground. Do not create phone or tablet configuration unless required by the chosen documented theme syntax.