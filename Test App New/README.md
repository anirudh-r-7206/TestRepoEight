## Application Overview
Student Registry is a compact Zoho Creator sample app for storing student names and ages. It includes a simple directory report and a dark, education-themed web interface.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Stores each student’s name and age | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | The sample uses the standard form and report UI | — |

## Design Decisions
- Uses declarative mandatory fields instead of validation workflows.
- Uses Creator’s built-in profiles with no custom roles.
- Applies Theme 1 dark preset 11 with Poppins font.
- Uses education-specific navigation and app icons.
- Web-only device configuration keeps the sample focused.