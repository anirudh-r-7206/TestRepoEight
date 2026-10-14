A compact two-form app that stores unique player IDs and lets users create records that reference an existing player through a searchable lookup.

## User Profiles

Use Creator’s standard built-in profiles for access, with no custom user roles or profile hierarchy needed for this simple app.

No custom profile files will be created. Rely on Zoho Creator’s automatically provided default profiles (Read, Write, Developer, Administrator, Customer). Do not create roles or sharing rules.

## Players

Maintain the master list of players, with each player identified by a manually entered ID that cannot be duplicated.

Create stateful form Players in components/Players/form/Players.ds. Fields in order: Player_Details (section, displayname "Player Details", row 1, column 0); Player_ID (text, displayname "Player ID", must have, unique, row 1, column 1, width medium, maxchar 100). Include standard stateful actions: Submit and Reset on add; Update and Cancel on edit. Create default list report All_Players in components/Players/reports/All_Players/All_Players.ds, sourced from Players and showing Player_ID, sorted ascending by Player_ID. No workflows, blueprints, or schedules.

## Player_Selections

Create records that select an existing player, ensuring the value always comes from the player master list rather than free text.

Create stateful form Player_Selections in components/Player_Selections/form/Player_Selections.ds. Fields in order: Selection_Details (section, displayname "Player Selection", row 1, column 0); Player (required single-select lookup using type picklist, values Players.ID, displayformat [Player_ID], searchable true, row 1, column 1, width medium). Do not enable allow-new-entry because Players is master data. Include standard stateful actions: Submit and Reset on add; Update and Cancel on edit. Create default list report All_Player_Selections in components/Player_Selections/reports/All_Player_Selections/All_Player_Selections.ds, sourced from Player_Selections and showing Player. No workflows, blueprints, or schedules.

## Permissions

Keep the app on Creator’s standard access model without introducing custom permissions or role hierarchy.

No permission files are required because no custom profiles exist. Confirm that the app relies on Creator’s default profiles and that no custom roles, portal profiles, or data-sharing rules are generated.

## UI Configuration

Provide a clean web navigation and usable record layouts for both forms and reports, with a simple app identity.

Create devices/web/forms.ds mapping Players and Player_Selections with suitable label placement. Create web device layouts for every report: components/Players/reports/All_Players/devices/web.ds must include Player_ID in quickview and detailview; components/Player_Selections/reports/All_Player_Selections/devices/web.ds must include Player in quickview and detailview. Create devices/web/menu-sections.ds with one main navigation space containing the Players form/report and Player_Selections form/report, plus mandatory SharedAnalytics_Section. Use valid documented icons. Create devices/web/theme.ds with a documented web theme, readable font, and logo preference app_icon. Create customization/customization.ds with an icon block; use text "PL" if no suitable player-domain app-builder icon exists, with background color theme and foreground #ffffff. Do not create phone or tablet configuration unless required by compiler diagnostics.