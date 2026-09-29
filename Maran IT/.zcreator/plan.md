A compact IT management app for maintaining a reliable directory of system administrators. The first release includes administrator names and unique email addresses, a searchable list, and a consistent IT-themed web interface.

## User Profiles

Use Zoho Creator’s standard built-in access profiles for this initial internal app. No custom profile hierarchy is needed for the first release.

Do not create custom profile files. Rely on Zoho Creator default profiles because the user did not request custom roles or access levels. This segment establishes that subsequent components use standard built-in access behavior only.

**Implementation notes:** Default profiles are platform-created and must not be written unless explicitly requested.

## System_Admins

Store each system administrator’s name and email address in a clean directory. Provide a simple list for finding and maintaining administrator records.

Create stateful form System_Admins in components/System_Admins/form/System_Admins.ds. Use title display name "System Admins", add title "Add System Admin", edit title "Edit System Admin", and success message "System administrator saved successfully." Fields in one section: Admin_Details (section, display "Admin Details", row 1, column 0); Admin_Name (text, display "Admin Name", must have, row 1, column 1, width medium, maxchar 100); Email_ID (email, display "Email ID", must have unique, personal data true, row 1, column 2, width medium). Include standard stateful actions: Submit and Reset on add; Update and Cancel on edit. Create default list report All_System_Admins at components/System_Admins/reports/All_System_Admins/All_System_Admins.ds, display name "All System Admins", showing Admin_Name and Email_ID, with both as filters and Admin_Name ascending sort. Do not add workflows; required and uniqueness behavior must be declarative.

**Implementation notes:** Read the section, actions, list report, field column, and filter/sort detail docs before implementation.

## Permissions

Keep access aligned with Zoho Creator’s standard built-in profiles for this initial version. No custom field or report restrictions are introduced.

Do not create or modify custom profile files because no custom profiles were requested and the built-in profiles are system-managed. Confirm the System_Admins form and All_System_Admins report require no additional custom permission artifacts.

**Implementation notes:** Do not write default Administrator, Developer, Read, Write, or Customer profile files.

## UI Configuration

Apply a modern blue IT theme, app icon, navigation menu, and polished record layouts. Make the administrator directory straightforward to access on the web.

Create devices/web/forms.ds mapping System_Admins with left label placement. Create devices/web/menu-sections.ds with one main IT Management space and a System Administration section containing the System_Admins form and All_System_Admins report, using valid technology/users icons, plus the mandatory SharedAnalytics_Section. Create devices/web/theme.ds using theme_1, font "poppins", color option "5" (primary #0093FF), and logo preference "app_icon" placed left. Create Customization/customization.ds containing an IT-domain app icon using zc-ab-intel-it1 with background color #0093FF and foreground color #ffffff. Create components/System_Admins/reports/All_System_Admins/devices/web.ds with quickview and detailview layouts whose fields are limited to Admin_Name and Email_ID from the report definition. Do not create phone or tablet files because the user requested only an initial app and did not request mobile navigation.

**Implementation notes:** Read device structure, menu examples, report layout examples, web theme, and relevant icon docs before implementation. The app icon background must exactly match theme_1 color 5.