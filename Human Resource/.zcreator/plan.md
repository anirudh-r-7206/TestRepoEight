A minimal Human Resource app for maintaining HR manager records. It will use Creator’s built-in Administrator profile, include one data-entry form and one list report, and provide a clean web navigation setup.

## User Profiles

Use Zoho Creator’s built-in Administrator access for this initial version. No custom user profiles or role hierarchy are needed yet.

Do not create profile files. Rely on Zoho Creator’s automatically available default Administrator profile. No roles or sharing rules are required in this basic single-administrator version.

## HR_Managers

Store and browse the basic personal details of HR managers in one simple module.

Create stateful form HR_Managers with display name “HR Managers”. Fields in one required first section: Manager_Details (section, row 1, column 0, display name “Manager Details”); Name (text, mandatory, personal data, maxchar 100, row 1, column 1, width medium); Age (number, mandatory, maxchar 3, row 1, column 1, width medium); Gender (radiobuttons, mandatory, personal data, choices “Male”, “Female”, “Non-binary”, “Prefer not to say”, row 1, column 1, width medium). Include standard stateful add actions Submit and Reset, and edit actions Update and Cancel. Create default list report All_HR_Managers with display name “All HR Managers”, sourced from HR_Managers, showing Name, Age, and Gender, with Gender as a filter and Name ascending as default sort. No workflows are required.

**Implementation notes:** Read the form action, section, choice-field, and list-report detail docs before implementation. Use declarative mandatory modifiers rather than validation workflows.

## Dashboards

No dashboard is needed for this initial three-field directory. Analytics can be added when more HR data and processes are introduced.

Do not create page files in this version.

## Permissions

Keep access limited to the built-in Administrator profile for this first version.

Do not create or edit permission files. The app uses Zoho Creator’s default Administrator profile only, with normal full access.

## UI Configuration

Provide a clean web menu, form mapping, report record layouts, and an HR-themed visual identity.

Create web device configuration only. devices/web/forms.ds maps HR_Managers with left label placement. devices/web/menu-sections.ds creates one HR space and an “HR Management” section containing the HR_Managers form and All_HR_Managers report, plus the mandatory SharedAnalytics_Section. devices/web/theme.ds sets a simple professional web theme with a readable supported font and complementary HR-oriented color. Create components/HR_Managers/reports/All_HR_Managers/devices/web.ds with quickview and detailview fields Name, Age, Gender; every field must exist in the report definition. Create Customization/customization.ds with a matching professional theme and an HR Management app icon from the zc-ab-hr-mgmt category. Do not create phone or tablet files in this initial version.

**Implementation notes:** Read device structure, menu examples, report-layout examples, web theme details, customization, and relevant icon docs before implementation.