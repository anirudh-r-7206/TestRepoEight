## Application Overview

Student Ages is a minimal Zoho Creator app for storing student names and ages. It provides one data-entry form, one sorted list report, and a dummy Deluge function for testing log output.

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
| None | No custom pages requested | — |

## Design Decisions

- Student name and age are mandatory.
- The report sorts records by student name in ascending order.
- The `Dummy` function only writes `dummy` to the execution log.
- The app uses Creator’s default access profiles and a web-only education-themed UI.
