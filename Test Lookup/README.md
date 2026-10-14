## Application Overview

Player Lookup is a compact Zoho Creator application for maintaining unique player identifiers and referencing those players from a second form. The searchable lookup prevents inconsistent free-text player references.

## Forms

| Form Name | Purpose | Key Lookups |
|---|---|---|
| Players | Stores the master list of unique, manually entered player IDs. | None |
| Player Selections | Creates records linked to an existing player. | Player → Players |

## Reports

| Report Name | Type | Source Form |
|---|---|---|
| All Players | List | Players |
| All Player Selections | List | Player Selections |

## Pages

| Page Name | Purpose | Key Components |
|---|---|---|
| None | The app uses standard forms and reports. | N/A |

## Design Decisions

- Player ID is mandatory, manually entered text with duplicate prevention.
- The second form uses a required, searchable lookup to the Players form.
- Adding players directly from the lookup is disabled so Players remains controlled master data.
- Creator’s built-in profiles provide the access model; no custom roles are needed.
- Web navigation, report detail layouts, theme, and app identity are configured.