## Application Overview
Student Directory is a lightweight Zoho Creator app for storing student names and ages. It provides a simple web form and an alphabetically sorted directory for record management.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Store each student's name and age | None |
| Teachers | Store each teacher's name and age | None |
| Trainers | Store each trainer's name and age | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |
| Students Over 60 | Filtered list (Age > 60) | Students |
| Teachers Over 60 | Filtered list (Age > 60) | Teachers |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| Prime Numbers | Display prime numbers from 1 through 100 | Prime Numbers widget |

## Design Decisions
- Used mandatory field properties instead of validation workflows.
- Used standard Creator profiles because no specialized access model was requested.
- Configured a web-only education-themed interface with a matching app icon.
- Sorted the student directory alphabetically by student name.
