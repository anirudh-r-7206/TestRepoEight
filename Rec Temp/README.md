## Application Overview
Student Records is a compact Zoho Creator app for capturing students’ names, ages, and genders. It includes a searchable student list and a clean A4 record template for viewing or printing individual records.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Stores basic student details | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | Not required for this compact app | — |

## Design Decisions
- Student name, age, and gender are mandatory.
- Gender uses radio buttons to keep values consistent.
- The All Students report supports gender filtering and alphabetical sorting.
- The Student Record template is linked to the report for formatted record output.
- Creator’s built-in profiles are used; no custom access model was needed.
