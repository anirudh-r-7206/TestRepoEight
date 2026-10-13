## Application Overview

Student Ages stores student names, ages, and gender selections. Users can manage student records and view a dashboard summarizing enrollment by gender.

## Forms

| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Stores each student's name, age, and gender | None |

## Reports

| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages

| Page Name | Purpose | Key Components |
|---|---|---|
| Gender Overview | Shows student totals by gender | KPI cards, percentages, distribution bars |

## Design Decisions

- Student Name, Age, and Gender are mandatory.
- Gender uses inclusive predefined options for consistent reporting.
- Dashboard percentages safely handle an empty dataset.
- Creator's built-in profiles govern access.
