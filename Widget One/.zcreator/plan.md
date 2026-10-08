A compact student registry for storing student names and ages, with a separate page containing a custom widget that calculates and displays every prime number from 1 through 100.

## User Profiles

Use Zoho Creator’s standard built-in profiles for access, with no custom roles or profile hierarchy required.

Do not create custom profile files. Use the automatically available default Creator profiles. This shell segment establishes that the app has no custom profiles, portal profiles, roles, or sharing rules.

## Students

Store each student’s name and age and provide a simple sorted list for browsing and editing records.

Create stateful form Students in components/Students/form/Students.ds. Fields: Student_Details (section, row 1, column 0, displayname Student Details); Student_Name (text, must have, displayname Student Name, row 1, column 1, width medium, maxchar 100); Age (number, must have, displayname Age, row 1, column 2, width medium, maxchar 3). Include standard on-add Submit/Reset and on-edit Update/Cancel actions and success message "Student saved successfully." Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds, sourced from Students, showing Student_Name and Age, sorted by Student_Name ascending. No workflows are required.

## Prime Numbers Page

Provide a clean page with a custom widget that calculates and prints all prime numbers from 1 to 100.

Create a ZET widget project named PrimeNumbers under library/widgets/PrimeNumbers using CreateWidget, never direct scaffolding. Implement app/widget.html and app/css/widget.css so the widget calls ZOHO.CREATOR.init(), computes primes from 1 through 100 in JavaScript using a deterministic primality test, and displays the resulting 25 numbers clearly in an accessible responsive grid with a heading and count. Create page Prime_Numbers at pages/Prime_Numbers/Prime_Numbers_page.ds with display name Prime Numbers. Its content must contain ZML layout wrappers and an inline widgets element referencing linkName PrimeNumbers; do not place widget files under page content. Use custom height if needed for a stable display.

## Permissions

Rely on Creator’s standard profile permissions for this small internal app without adding custom permission definitions.

No custom profile permission files are needed because the app uses only automatically provided default profiles. Do not create roles, sharing rules, or portal permissions.

## UI Configuration

Configure web navigation, student form placement, report record layouts, a coordinated education theme, and the application icon.

Create devices/web/forms.ds mapping Students with top label placement. Create devices/web/menu-sections.ds with one primary space and sections that expose the Students form, All_Students report, and Prime_Numbers page, plus the mandatory SharedAnalytics_Section. Use valid education/users/UI icons from the documented icon catalog. Create devices/web/theme.ds with a documented web theme, Poppins font, coordinated primary color, and logo preference app_icon. Create components/Students/reports/All_Students/devices/web.ds with quickview and detailview fields Student_Name and Age only. Create customization/customization.ds with an education-domain zc-ab-* icon, exact theme-primary background hex, and white foreground. Web only; do not add phone or tablet configuration.