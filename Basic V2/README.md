# Student Registry

## Application Overview
Student Registry is a lightweight Zoho Creator app for storing student names and ages. It provides a simple entry form and an alphabetically sorted report for reviewing saved students.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Stores each student's required name and age | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | The app uses standard Creator forms and reports | — |

## Design Decisions
- Required fields use declarative `must have` modifiers rather than workflows.
- Student names are displayed alphabetically in the default report.
- Standard Zoho Creator profiles and app sharing are used.
- The web interface uses an education-themed icon and navigation.