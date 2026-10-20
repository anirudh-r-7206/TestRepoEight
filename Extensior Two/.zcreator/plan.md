A compact student fee tracking app for recording student details and quickly changing unpaid records to paid from the main report. It uses built-in validation and a guarded report action so already-paid records are not processed again.

## User Profiles

Use Zoho Creator’s standard built-in profiles for this small internal app, without adding a custom role hierarchy.

Do not create custom profile files. Rely on Creator’s automatically available default profiles because the user did not request profile-specific access. Do not create roles or data-sharing rules.

## Student_Fees

Capture each student’s name, age, and current fee status. Provide a main report where unpaid records can be marked paid with one confirmed action.

Create stateful form Student_Fees. Fields, in order: Fee_Details (section, displayname "Student Fee Details", row 1, column 0); Student_Name (text, displayname "Student Name", must have, maxchar 100, row 1, column 1, width medium); Age (number, displayname "Age", must have, maxchar 3, row 1, column 2, width medium); Status (radiobuttons, displayname "Fee Status", must have, values {"Paid","Not Paid"}, initial value "Not Paid", layout 2, row 1, column 1, width medium). Include standard add Submit/Reset and edit Update/Cancel actions, with success message "Student fee record saved successfully." Create default list report All_Student_Fees with displayName "All Student Fees", sourced from Student_Fees, showing Student_Name, Age, and Status; include Status as a filter and sort by Student_Name ascending. Inside the report, add an inline custom action "Mark as Paid" linked to workflow Student_Fees_Mark_As_Paid, visible for each record only when Status == "Not Paid", with column header "Mark as Paid", confirmation message "Mark this student's fee status as paid?", confirm text "Mark Paid", cancel text "Cancel", and success message "Fee status marked as paid." Create report-button workflow Student_Fees_Mark_As_Paid as display name "Mark as Paid", type functions, form Student_Fees, execution type for each record, on start with inline Deluge in an on click block that updates input.Status to "Paid". No blueprint is needed.

## Permissions

Keep access aligned with Creator’s standard profiles and verify that the app does not introduce unnecessary custom security configuration.

No custom profiles were requested and no shell profile files exist to converge. Do not create default profile files, roles, or sharing rules. Verify that the plan relies only on automatically created Creator default profiles.

## UI Configuration

Configure a clean web navigation, report record layouts, and an education-themed appearance for the fee tracker.

Create devices/web/forms.ds mapping Student_Fees with label placement left. Create components/Student_Fees/reports/All_Student_Fees/devices/web.ds as the mandatory bare report device layout: quickview and detailview must show Student_Name, Age, Status, and the exact quoted visible action "Mark as Paid" in both fields blocks; include standard web menus/actions in valid order. Create devices/web/menu-sections.ds with one space Student_Fee_Management, an education-themed icon, a section Fee_Tracking containing form Student_Fees and report All_Student_Fees with distinct valid education icons, plus the mandatory SharedAnalytics_Section exactly once and outline icon preference. Create devices/web/theme.ds using theme_1, Poppins font, color option 5 (#0093FF primary), and logo preference app_icon placed left. Create customization/customization.ds with an icon block using zc-ab-education-1, background color #0093FF, and foreground color #ffffff. Do not create phone or tablet files because those devices were not requested.