A lightweight education app that stores student names and ages and provides an interactive A–Z learning experience. Learners select any alphabet letter to reveal a matching child-friendly emoji and phrase such as “A for Apple.”

## User Profiles

Use Creator’s standard built-in profiles for app access, with no custom role hierarchy needed for this small learning app.

Do not create custom profile files. The app will use Zoho Creator's automatically available default profiles. Do not create roles or sharing rules.

## Students

Capture each student’s name and age and provide a simple register for browsing saved students.

Create stateful form Students in components/Students/form/Students.ds with title display name "Students", add title "Add Student", edit title "Edit Student", and success message "Student saved successfully." Fields in one mandatory first section Student_Details (type=section, displayname="Student Details", row=1, column=0): must have Student_Name (type=text, displayname="Student Name", personal data=true, maxchar=100, row=1, column=1, width=medium); must have Age (type=number, displayname="Age", maxchar=3, row=1, column=2, width=medium). Include standard add Submit/Reset and edit Update/Cancel actions. Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds with displayName="All Students", source Students, columns Student_Name and Age, and sort Student_Name ascending. No workflows, blueprints, or custom actions.

## Alphabet_Learning

Provide a bright interactive alphabet page where children can click any letter from A to Z and immediately see an emoji and a phrase built around that letter.

Create page Alphabet_Learning under pages/Alphabet_Learning/ with display name "Alphabet Learning". Create a ZET widget project using CreateWidget at library/widgets/AlphabetExplorer/; never hand-create its scaffold. Configure the widget for Zoho Creator and implement a responsive, accessible child-friendly alphabet interface in its app/widget.html and app/css/widget.css. The widget must initialize the Zoho Creator Widget SDK. Render 26 large clickable letter buttons A through Z. On initial load select A and show a large emoji plus "A for Apple". Clicking or keyboard-activating any letter must update a reveal card with the selected letter, matching emoji, and phrase. Use these examples: A Apple 🍎, B Ball ⚽, C Cat 🐱, D Dog 🐶, E Elephant 🐘, F Fish 🐟, G Grapes 🍇, H House 🏠, I Ice Cream 🍦, J Juice 🧃, K Kite 🪁, L Lion 🦁, M Moon 🌙, N Nest 🪺, O Orange 🍊, P Parrot 🦜, Q Queen 👸, R Rabbit 🐰, S Sun ☀️, T Tree 🌳, U Umbrella ☂️, V Violin 🎻, W Whale 🐋, X Xylophone 🎶, Y Yo-yo 🪀, Z Zebra 🦓. Include clear focus states, aria labels, responsive layout, cheerful colors, rounded cards, and no external image dependencies. Create pages/Alphabet_Learning/Alphabet_Learning_page.ds using the required XML-style page structure with content containing only ZML layout wrappers and an inline widgets element referencing linkName AlphabetExplorer; use a full-width column and suitable custom height. Do not place widget files inside the page content folder.

## Permissions

Rely on Creator’s standard profile permissions for this compact app without adding custom security profiles.

No custom profile files exist, so do not write ModulePermissions. Do not create roles, portal profiles, or sharing rules.

## UI Configuration

Add clear web navigation for students and alphabet learning, configure the student report layout, and apply a cheerful education-themed visual identity.

Create devices/web/forms.ds mapping Students with standard left label placement. Create components/Students/reports/All_Students/devices/web.ds with valid quickview and detailview layouts containing only Student_Name and Age. Create devices/web/menu-sections.ds with one main space and an education section containing form Students, report All_Students, and page Alphabet_Learning, using valid education/users icons, plus the mandatory SharedAnalytics_Section. Create devices/web/theme.ds using a documented cheerful theme preset, Poppins or Nunito font, and logo preference app_icon with left placement. Create customization/customization.ds with icon block using an education-domain zc-ab-* icon, exact primary hex matching the chosen documented web theme color, and white foreground. Do not create phone or tablet files because only web navigation is requested.