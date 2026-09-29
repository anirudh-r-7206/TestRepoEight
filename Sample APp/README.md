# Names Registry

## Application Overview
Names Registry is a small Zoho Creator app for storing basic personal details. Users can add a name, select a gender, enter an age, and browse all saved entries in one report.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| People | Store names, genders, and ages | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All People | List | People |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | The app uses the standard form and report interface | — |

## Design Decisions
- Uses built-in Creator profiles; no custom roles are needed.
- Uses mandatory field properties instead of validation workflows.
- Gender is a controlled dropdown for consistent reporting.
- Provides a minimal web menu and standard record views.
