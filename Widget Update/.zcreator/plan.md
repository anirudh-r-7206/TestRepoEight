A compact student registry that stores each student’s name and age, with a separate page containing a custom widget that displays the numbers 1 through 100.

## User Profiles

Use Zoho Creator’s standard built-in profiles for access. No custom user roles or profile hierarchy are needed for this simple app.

Do not create custom profile files. The app relies on Zoho Creator default profiles. This shell segment intentionally writes no files because default Read, Write, Developer, Administrator, and Customer profiles are system-created when no custom profiles exist.

**Implementation notes:** Do not create default profiles manually.

## Students

Provide a simple form for entering student names and ages, plus a browsable student list.

Create stateful form Students at components/Students/form/Students.ds. Fields: Student_Details (section, row 1, column 0, display name Student Details); Student_Name (text, must have, display name Student Name, row 1, column 1, width medium, personal data true); Age (number, must have, row 1, column 2, width medium). Include standard add Submit/Reset and edit Update/Cancel actions. Create default list report All_Students at components/Students/reports/All_Students/All_Students.ds, display name All Students, showing Student_Name and Age, sorted by Student_Name ascending. No workflows are required because mandatory validation is declarative.

**Implementation notes:** Use a simple text field for the full student name and an integer number field for age.

## Numbers_1_to_100

Create a dedicated page with a custom widget that prints the numbers from 1 to 100 in a clean, readable grid.

Create a ZET widget project with link name Numbers_1_to_100 under library/widgets/Numbers_1_to_100 using CreateWidget, then implement its plugin-manifest.json, app/widget.html, and app/css/widget.css. The widget must render integers 1 through 100 inclusively in order, using a responsive grid of numbered tiles, with a clear heading and accessible contrast. Create page Numbers_1_to_100 at pages/Numbers_1_to_100/Numbers_1_to_100_page.ds, display name Numbers 1 to 100. Its content block must contain ZML layout wrappers and an inline widgets reference only; embed the widget with elementName Numbers 1 to 100, linkName Numbers_1_to_100, automatic height, and a white background. Do not define page elements inline outside the permitted widget reference.

**Implementation notes:** Use the page-builder specialist. The custom widget is explicitly requested, so do not substitute an HTML snippet.

## Permissions

Keep access aligned with Zoho Creator’s built-in profiles without adding unnecessary custom security configuration.

No permission files are required because there are no custom profiles. Verify the plan’s Students form, All_Students report, and Numbers_1_to_100 page are intended to use the platform defaults. Do not create roles or sharing rules.

**Implementation notes:** This converge segment intentionally writes no files.

## UI Configuration

Configure web navigation, form presentation, report layouts, theme, and an education-themed app icon.

Create devices/web/forms.ds mapping Students with left label placement. Create components/Students/reports/All_Students/devices/web.ds with quickview and detailview fields Student_Name and Age. Create devices/web/menu-sections.ds with one main space containing a Students section with form Students and report All_Students, a Numbers section with page Numbers_1_to_100, and the mandatory SharedAnalytics_Section of type shared_user_report_section. Use valid education/users/UI icons. Create devices/web/theme.ds using an appropriate supported web theme, readable font, education-friendly primary color, and customize logo preference app_icon with left placement. Create customization/customization.ds with an education-domain zc-ab icon, exact background hex matching the chosen theme preset, and white foreground. Only web device files are needed.

**Implementation notes:** Every report must receive web quickview/detailview configuration. Ensure the page is included in web navigation.