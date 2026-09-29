A basic approval foundation that stores approver contact details. This first version focuses only on maintaining an approver directory; approval requests and routing can be added later.

## User Profiles

Use Creator’s standard built-in profiles for this initial internal app. No custom access model is needed yet.

User Profiles segment. Do not create custom profile files. Rely on Zoho Creator's automatically provided default profiles (Read, Write, Developer, Administrator, Customer). Do not create roles or sharing rules.

## Approvers

Maintain a clean directory of people who can approve requests, including their name and email address. Prevent incomplete records and duplicate email addresses.

Create one stateful form with link name Approvers and display name Approvers. Fields: first field Approver_Details, type=section, displayname="Approver Details", row=1, column=0; Approver_Name, type=text, displayname="Approver Name", must have, row=1, column=1, width=medium, maxchar=255; Email_ID, type=email, displayname="Email ID", must have unique, personal data=true, row=1, column=2, width=medium. Add standard stateful on-add Submit and Reset actions and on-edit Update and Cancel actions. Add success message "Approver saved successfully." Create one default list report All_Approvers with displayName="All Approvers", sourced from Approvers, showing Approver_Name and Email_ID, sorted by Approver_Name ascending. No workflows or blueprints are required.

## Permissions

Keep access aligned with Creator’s standard profiles while the app remains a basic internal directory.

Permissions convergence segment. Since no custom profiles are requested, do not write custom profile permission files, roles, portal profiles, or sharing rules. Confirm the app relies on Creator default profiles.

## UI Configuration

Provide a straightforward web menu, form layout, report record views, and a visual identity suited to approvals.

Create web UI configuration only. Map the Approvers form in devices/web/forms.ds with an appropriate label placement. Create devices/web/menu-sections.ds with one main space and an Approvers section containing the Approvers form and All_Approvers report, using valid domain-appropriate icons, plus the mandatory SharedAnalytics_Section. Create devices/web/theme.ds with a clean professional theme and app_icon logo preference. Create components/Approvers/reports/All_Approvers/devices/web.ds with quickview and detailview fields restricted to Approver_Name and Email_ID. Create Customization/customization.ds with an approval-domain zc-ab-* app icon and complementary colors. Do not create phone or tablet configuration in this initial version.