Create a minimal Library Management app with one catalog form for storing books. The design stays intentionally small now while leaving room for lending and member features later.

## User Profiles

Use Creator’s built-in access profiles for this initial single-form app, without introducing unnecessary custom roles or hierarchy.

No custom profile files will be created. Rely on Zoho Creator's automatically available default profiles, including Administrator, because the user has not requested distinct user groups, field restrictions, portal access, role hierarchy, or sharing rules.

**Implementation notes:** This is a no-file shell segment. Do not write default profile declarations.

## Books

Provide a simple book catalog where users can record each book’s name, price, and type.

Create stateful form Books in components/Books/form/Books.ds. Use a title block with displayname "Books", add title "Add Book", and edit title "Edit Book"; success message "Book saved successfully." Fields in order: Book_Details, type=section, displayname="Book Details", row=1, column=0; Book_Name, type=text, displayname="Book Name", must have, maxchar=255, row=1, column=1, width=medium; Price, type=INR, displayname="Price", must have, decimalplace=2, row=1, column=2, width=medium; Book_Type, type=text, displayname="Book Type", must have, maxchar=100, row=1, column=1, width=medium. Add canonical stateful actions: on add Submit (submit) and Reset (reset); on edit Update (submit) and Cancel (cancel). No reports, workflows, blueprints, record templates, or dynamic field behavior are required in this initial scope.

**Implementation notes:** Read forms/index, forms/tips, forms/fields, forms/forms, forms/fields/section_rules, forms/fields/currency_codes, and forms/forms/actions before writing. Use declarative must-have modifiers; do not create validation workflows.

## Permissions

Keep access on Creator’s standard profiles for now, with no custom permission layer until more user groups are introduced.

No permission files will be written because there are no custom profiles and no reports or pages in scope. Do not write declarations for system default profiles. Do not add roles or sharing rules.

**Implementation notes:** No-file convergence segment.

## UI Configuration

Make the Books form available in a clean web navigation menu with a simple library-themed appearance.

Create web-only device configuration. Write devices/web/forms.ds mapping the Books form with left label placement. Write devices/web/menu-sections.ds with one primary navigation space and a Catalog section containing the Books form, plus the mandatory SharedAnalytics_Section using type=shared_user_report_section. Use only icon identifiers verified from the icons documentation. Write devices/web/theme.ds with a restrained library-appropriate web theme and mandatory font/color preferences according to device documentation. No report device layouts are needed because this scope has no reports. Do not create phone or tablet files.

**Implementation notes:** Read devices/index plus the exact device, menu, and web theme pages, and icons/index plus the relevant icon category before writing.