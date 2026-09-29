A focused HR management app foundation for maintaining a clean directory of HR managers. This first version stores each manager’s name and unique email address and provides a simple report for browsing records.

## User Profiles

Use Zoho Creator’s standard built-in profiles for this initial internal app, without introducing custom roles or profile hierarchies.

User Profiles segment. Do not create custom profile files because the initial app uses Zoho Creator default profiles. Do not create roles or sharing rules. This segment establishes that Administrator, Developer, Read, and Write behavior remains platform-managed until the owner requests custom access controls.

**Implementation notes:** This is intentionally a no-file shell segment; default profiles must not be written unless explicitly requested.

## HR_Managers

Store and maintain HR manager contact records. Each record captures a manager’s name and ensures that the same email address cannot be entered twice.

Create stateful form HR_Managers in components/HR_Managers/form/HR_Managers.ds. Use title display name "HR Managers", add title "Add HR Manager", edit title "Edit HR Manager", and success message "HR manager saved successfully." Fields in row 1: section Manager_Details (type section, displayname "Manager Details", row 1, column 0); must have Manager_Name (type text, displayname "Manager Name", maxchar 150, row 1, column 1, width medium, personal data true); must have unique Email_ID (type email, displayname "Email ID", row 1, column 2, width medium, personal data true). Include canonical stateful actions: Submit and Reset on add, Update and Cancel on edit. Create default list report All_HR_Managers in components/HR_Managers/reports/All_HR_Managers/All_HR_Managers.ds, display name "All HR Managers", showing Manager_Name and Email_ID, with filters for both fields and sort by Manager_Name ascending. No workflows are required because mandatory and uniqueness rules are declarative.

**Implementation notes:** Read section rules, form actions, and list-report documentation before implementation. Keep width medium consistently.

## Permissions

Keep access governed by Zoho Creator’s built-in profiles for now, with no custom permission layer added.

Permissions converge segment. Since no custom profiles were requested or created, do not write profile permission files, roles, portal profiles, or sharing rules. Confirm the HR_Managers form and All_HR_Managers report remain governed by platform-managed default profiles.

**Implementation notes:** Do not materialize default profile files.

## UI Configuration

Add a clean web navigation entry for the HR manager directory and configure practical record preview and detail layouts.

Create web device configuration only. Write devices/web/forms.ds mapping HR_Managers with top label placement. Write components/HR_Managers/reports/All_HR_Managers/devices/web.ds with quickview and detailview fields Manager_Name and Email_ID. Write devices/web/menu-sections.ds with one HR management space and a directory section containing form HR_Managers and report All_HR_Managers, using valid HR/users-related icons, plus mandatory SharedAnalytics_Section. Write devices/web/theme.ds with a professional web theme and restrained blue/teal HR-oriented colors. Do not create tablet or phone files in this initial version.

**Implementation notes:** Read device structure, report layout examples, menu examples, web theme docs, and the relevant icon category before implementation. Every report must have web.ds.