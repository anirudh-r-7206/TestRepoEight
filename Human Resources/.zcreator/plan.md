A focused HR Management app for maintaining a clean directory of HR manager names and email addresses. This first version uses built-in validation and avoids unnecessary workflows or dashboards.

## User Profiles

Use Zoho Creator’s standard built-in profiles for this initial internal directory, without introducing custom roles or access tiers.

Do not create custom profile files. The application will rely on Creator's automatically available default profiles (Read, Write, Developer, Administrator, Customer as applicable). Do not create roles or sharing rules.

**Implementation notes:** This is a required shell segment; no files are expected unless the platform workspace already requires explicit custom profiles.

## HR_Managers

Store each HR manager’s name and email address in a simple, validated directory, with a list for browsing and searching records.

Create stateful form HR_Managers at components/HR_Managers/form/HR_Managers.ds. Use title display name "HR Managers", add title "Add HR Manager", edit title "Edit HR Manager", and success message "HR manager saved successfully." Fields in one mandatory first section Manager_Details (type=section, displayname="Manager Details", row=1, column=0): Manager_Name (type=text, displayname="Manager Name", must have, row=1, column=1, width=medium, maxchar=100, personal data=true); Email_ID (type=email, displayname="Email ID", must have unique, row=1, column=2, width=medium, personal data=true). Include standard add Submit/Reset and edit Update/Cancel actions. Create default list report All_HR_Managers at components/HR_Managers/reports/All_HR_Managers/All_HR_Managers.ds, display name "All HR Managers", showing Manager_Name and Email_ID from HR_Managers, with Manager_Name and Email_ID filters and ascending sort by Manager_Name. No workflows, blueprints, schedules, or custom actions are needed because mandatory and unique validation are declarative.

**Implementation notes:** Use the email field type for format validation and the unique modifier to prevent duplicate manager email addresses.

## Permissions

Keep access aligned with Zoho Creator’s built-in profiles for this small internal directory.

Because no custom profiles are being created, do not write custom ModulePermissions files. Verify the plan's form and report do not require profile-specific private, hidden, or read-only field rules. Do not create roles or sharing rules.

**Implementation notes:** Default profiles are system-managed and must not be emitted unless explicitly requested.

## UI Configuration

Provide a clean web navigation experience with an HR-themed identity and practical record preview layouts.

Create web UI configuration only. Write devices/web/forms.ds mapping HR_Managers with label placement left. Write devices/web/menu-sections.ds with one main HR directory space/section containing form HR_Managers and report All_HR_Managers, plus mandatory SharedAnalytics_Section. Choose valid user/business icons after reading icon docs. Write devices/web/theme.ds using a professional HR-appropriate theme, Poppins or Zoho Puvi font, and logo preference app_icon. Write components/HR_Managers/reports/All_HR_Managers/devices/web.ds with quickview and detailview fields Manager_Name and Email_ID. Write Customization/customization.ds with an HR Management zc-ab-* app icon and set its background color to the exact primary color hex of the selected web theme preset. No phone or tablet configuration is required for this initial version.

**Implementation notes:** The report device layout must reference only fields exposed by All_HR_Managers. Include exactly the required device files and no legacy UI paths.