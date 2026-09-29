A simple student registry for storing each student's name, age, and gender, with an easy-to-browse report. The app uses built-in required-field validation and standard administrator access.

## User Profiles

Use Zoho Creator’s standard built-in profiles for access to this small internal registry. No custom roles or profile hierarchy are needed.

Do not create custom profile files. Rely on Zoho Creator default profiles, including Administrator, because the user did not request differentiated access. This shell segment establishes that all later components use standard platform access; do not add ModulePermissions, roles, portal profiles, or sharing rules.

**Implementation notes:** This segment intentionally writes no profile files because default profiles are system-created.

## Students

Provide a straightforward entry form for student details and a searchable list for viewing and maintaining saved students.

Create stateful form Students in components/Students/form/Students.ds. Add first mandatory section Student_Details (type=section, displayname="Student Details", row=1, column=0). Add mandatory Student_Name (type=text, displayname="Student Name", maxchar=100, personal data=true, row=1, column=1, width=medium). Add mandatory Age (type=number, displayname="Age", maxchar=3, row=1, column=1, width=medium). Add mandatory Gender (type=radiobuttons, displayname="Gender", values={"Female","Male","Non-binary","Prefer not to say"}, row=1, column=1, width=medium). Set title displayname="Students", on add="Add Student", on edit="Edit Student"; set success message="Student saved successfully." Add standard on-add Submit and Reset actions and on-edit Update and Cancel actions.

Create default list report All_Students in components/Students/reports/All_Students/All_Students.ds with displayName="All Students", showing Student_Name, Age, and Gender from Students. Include filters for Student_Name, Age, and Gender. Sort by Student_Name ascending. Do not add workflows, custom actions, blueprints, schedules, or record templates because required fields and fixed choices are handled declaratively.

**Implementation notes:** Read the section, choice-field, form-action, and list-report detail docs before implementation. Keep all field widths consistent.

## Permissions

Confirm that the completed app relies on standard Zoho Creator administrator permissions and does not introduce unnecessary custom access rules.

After the Students form and All_Students report exist, verify that no custom profiles were requested or created. Do not write profile, role, portal, or sharing-rule files. The default Administrator and other system profiles remain managed by Zoho Creator.

**Implementation notes:** No permission files should be emitted unless implementation discovers an explicitly requested custom profile, which is not present in this plan.

## UI Configuration

Configure a clean web experience with student-focused navigation, readable record layouts, and an education-themed app icon.

Create devices/web/forms.ds mapping the Students form with left label placement. Create components/Students/reports/All_Students/devices/web.ds containing valid quickview and detailview layouts using only Student_Name, Age, and Gender. Create devices/web/menu-sections.ds with one main navigation space and a Students section containing the Students form and All_Students report, plus the mandatory SharedAnalytics_Section. Use valid education/users icons from the documented catalog. Create devices/web/theme.ds with a documented web theme, readable modern font, exact documented color preset, and customize logo preference="app_icon" placement="left". Create Customization/customization.ds with an education-domain zc-ab-* icon, background color matching the exact primary hex of the selected web theme preset, and foreground color="#ffffff". Do not create phone or tablet configuration because only a standard web experience is requested.

**Implementation notes:** Read device structure, report layout examples, menu examples, web customization, web themes, relevant icon category, customization, and app-builder icon docs before implementation. Every report must have web.ds.