A basic HR registry for storing and browsing HR manager contact details. This first version uses standard Creator profiles and keeps validation declarative and simple.

## User Profiles

Use Zoho Creator’s standard built-in profiles for this initial version, without adding custom access roles.

Do not create custom profile files. Rely on Creator's automatically provided Administrator, Developer, Write, Read, and Customer profiles. No roles or sharing rules are required.

## HR_Managers

Provide a simple form for maintaining HR manager details and a searchable directory for browsing the saved records.

Create stateful form HR_Managers in components/HR_Managers/form/HR_Managers.ds. Use title display name "HR Managers", add title "Add HR Manager", and edit title "Edit HR Manager". Add first section Manager_Details (type section, displayname "Manager Details", row 1, column 0). Add must have Manager_Name (type text, displayname "Name", maxchar 100, row 1, column 1, width medium); must have unique Email (type email, displayname "Email", personal data true, row 1, column 2, width medium); and must have Age (type number, displayname "Age", maxchar 3, personal data true, row 1, column 1, width medium). Add standard on-add Submit and Reset actions and on-edit Update and Cancel actions. Create default list report All_HR_Managers in components/HR_Managers/reports/All_HR_Managers/All_HR_Managers.ds with display name "All HR Managers", sourced from HR_Managers, showing Manager_Name, Email, and Age; provide filters for Manager_Name and Email; sort Manager_Name ascending. No workflows, blueprints, schedules, or custom actions.

**Implementation notes:** Use declarative mandatory and uniqueness modifiers; do not add workflows for these validations.

## Permissions

Keep access governed by Creator’s standard profiles for the basic version, with no custom permission files to maintain.

No custom profiles exist, so do not create or edit profile files. Do not create roles, portal profiles, or sharing rules. Creator's built-in profiles govern access.

## UI Configuration

Add a clean web menu and practical record layouts so users can open the manager form and directory easily.

Create devices/web/forms.ds mapping HR_Managers with top label placement. Create components/HR_Managers/reports/All_HR_Managers/devices/web.ds with quickview and detailview containing Manager_Name, Email, and Age. Create devices/web/menu-sections.ds with one HR space and a Managers section containing the HR_Managers form and All_HR_Managers report, plus the mandatory SharedAnalytics_Section. Use valid user/business icons from the icon catalog. Create devices/web/theme.ds with a simple professional web theme suitable for a small HR app. Do not create phone or tablet configuration in this initial version.