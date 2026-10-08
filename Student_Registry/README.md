## Application Overview
Student Registry is a lightweight Zoho Creator app for storing student names and ages. It includes a searchable student list and an overview page with age-based summary metrics.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Store each student's name and age | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| Student Overview | Summarize registry and age distribution | Total, average, youngest/oldest ages, age bands |

## Design Decisions
- Kept the data model intentionally simple with one form.
- Used mandatory fields for student name and age.
- Marked student names as personal data.
- Added an education-themed web menu and app icon.
- Used an HTML dashboard snippet for a responsive summary layout.
