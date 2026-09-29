## Application Overview
People Directory is a simple Zoho Creator app for storing names, gender, and age. It provides a clean entry form and a searchable list report for browsing saved people.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| People | Stores each person’s full name, gender, and age | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All People | List | People |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | Not required for this compact app | — |

## Design Decisions
- Uses mandatory field properties instead of validation workflows.
- Uses radio buttons to keep gender values consistent.
- Provides filters for gender and age and sorts records by name.
- Uses Creator’s standard profiles rather than unnecessary custom profiles.
- Configures a web-only interface with a contact-focused icon and clean theme.
