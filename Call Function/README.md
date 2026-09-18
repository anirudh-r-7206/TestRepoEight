## Application Overview

This Zoho Creator app stores student names and ages in a simple registry. It provides a student report, a live overview page, and reusable Deluge functions for age classification and student summaries.

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
| Student Overview | Summarize the registry and explain age categories | Live student-count KPI, guidance cards |

## Design Decisions

- Student Name and Age are mandatory declarative fields.
- `Classify_Age` returns Child, Teen, or Adult.
- `Build_Student_Summary` calls `Classify_Age` rather than duplicating its logic.
- The app uses standard Creator profiles and a concise web-first interface.
