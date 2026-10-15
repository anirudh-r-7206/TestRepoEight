# Student Registry

## Application Overview
Student Registry is a simple Zoho Creator app for storing student names and ages. It includes a clean entry form, a searchable record list, and a lightweight overview page showing the total number of students.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Store each student’s name and age | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| Student Overview | Summarize stored student records | Total-students KPI, list guidance |

## Design Decisions
- Student Name and Age are mandatory.
- Built-in Zoho Creator profiles are used; no custom roles are required.
- The app is configured for a clean web experience.
- No workflows are needed because declarative field requirements cover the requested behavior.
