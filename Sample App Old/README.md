## Application Overview
Student Registry is a small Zoho Creator sample app for recording student names and ages. It provides a simple entry form and a web list for browsing, editing, duplicating, and deleting student records.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Store each student's name and age | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | Default list | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | The sample uses native forms and reports | — |

## Design Decisions
- Requiredness is declarative, so no workflows are needed.
- Student name is a simple text field to keep the sample minimal.
- The web interface uses an education-themed icon and blue theme.
- Standard Creator profiles are used without custom roles or sharing rules.
