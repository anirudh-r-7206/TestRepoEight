## Application Overview
Student Registry is a simple Zoho Creator app for storing student names, ages, and gender. It provides a required-field entry form and a searchable web report for maintaining student records.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Capture student name, age, and gender | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | Standard form and report navigation is sufficient | — |

## Design Decisions
- Uses declarative mandatory fields instead of validation workflows.
- Uses radio buttons for consistent gender choices.
- Relies on Zoho Creator’s standard profiles without custom roles.
- Uses a web-only education-themed interface with the mandatory shared analytics section.
