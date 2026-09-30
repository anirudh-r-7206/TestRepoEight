## Application Overview

Student Registry is a compact Zoho Creator app for storing student names and ages. It provides a simple data-entry form and a searchable web report for reviewing and maintaining student records.

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
| None | Not required for this compact registry | — |

## Design Decisions

- Student name and age are mandatory fields.
- Student names are marked as personal data.
- Records are sorted alphabetically by student name.
- The app uses built-in administrator access without custom roles.
- The web interface uses an education-themed icon and navigation.
