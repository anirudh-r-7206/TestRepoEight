## Application Overview
Student Registry is a simple Zoho Creator app for storing student names and ages. Users can add or edit student records and browse them in a searchable, alphabetically sorted list.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Stores each student's name and age | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | The app uses the standard form and report UI | — |

## Design Decisions
- Uses built-in required-field validation instead of workflows.
- Stores age as a whole number.
- Uses Creator's default profiles because custom access rules were not requested.
- Provides a web menu and record quick/detail views.