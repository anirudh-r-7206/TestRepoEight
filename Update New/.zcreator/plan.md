Extend the existing Student Ages app with inclusive gender capture and a gender-count dashboard.

## User Profiles

Keep the existing built-in access model unchanged.

Do not create or modify profile, role, portal, or sharing-rule files. Continue using Zoho Creator's built-in profiles.

## Students

Add gender to each student record and make it available in the student list.

Edit components/Students/form/Students.ds to add a mandatory Gender field after Age. Gender is a radiobuttons field with displayname "Gender", values {"Male", "Female", "Non-binary", "Prefer not to say"}, layout 2, row 1, column 2, and width medium. Edit components/Students/reports/All_Students/All_Students.ds to include Gender as a visible column and filter while preserving existing fields and Student_Name ascending sorting. Edit components/Students/reports/All_Students/devices/web.ds so Gender appears in both quickview and detailview layouts.

## Gender_Overview

Create a polished dashboard that shows the total number of students and a separate count for each gender option.

Create page Gender_Overview with main file pages/Gender_Overview/Gender_Overview_page.ds and HTML snippet pages/Gender_Overview/content/Gender_Counts.dshtml. The main page must use the XML-style page structure and reference only the snippet file inside a dsp stub and layout wrappers. The snippet must query Students and calculate total count plus counts where Gender equals "Male", "Female", "Non-binary", and "Prefer not to say". Render a responsive, education-themed dashboard with a heading, one total-students KPI card, four gender KPI cards, and a horizontal distribution/progress visualization for each gender. Show zero when a category has no records and handle a zero total without division errors. Use ZCS components/styles and include zcs-global CSS once; use Nucleo icons and no emojis or JavaScript.

**Implementation notes:** Use ListComponents/GetComponent before implementation. Prefer ZCS page wrapper, page header, KPI grid/card, section, stat rows, progress bars, and badges where appropriate.

## Permissions

Keep permissions unchanged while relying on the current built-in access profiles.

Do not create custom permission files. The new Gender field and Gender_Overview page follow the existing built-in profile access model.

## UI Configuration

Add the gender dashboard to the web navigation so it is easy to open.

Edit devices/web/menu-sections.ds. Add a page-first Dashboard_Section before Students_Section, with displayname "Dashboard", icon "business-chart-bar-33", containing page Gender_Overview with icon "business-chart-pie-36". Preserve the Students form/report mappings, mandatory SharedAnalytics_Section, existing space, and preference block. Ensure every component remains mapped exactly once.