# Student Registry

## Application Overview
Student Registry is a compact Zoho Creator app for storing student names and ages. Users can add or edit records and browse the complete student list through a searchable, sorted report.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Stores each student's required name and age | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | Default list | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | The app uses standard Creator forms and reports | — |

## Design Decisions
- Student Name is marked as personal data and limited to 100 characters.
- Age is stored as a required integer field.
- Records are sorted alphabetically by student name and can be filtered by name or age.
- The web interface uses an education-themed icon and a simple student-focused menu.
- Standard Zoho Creator profiles are used; no custom roles or workflows are needed.
