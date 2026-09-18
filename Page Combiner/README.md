## Application Overview
Student Registry stores student names, ages, and gender selections in one simple form. A responsive overview page shows the total number of students and counts for each gender option.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Capture student name, age, and gender | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| Student Overview | Summarize enrollment and gender counts | Total, Male, Female, Other, and Prefer Not to Say KPI cards |

## Design Decisions
- Uses mandatory native fields instead of validation workflows.
- Uses radio buttons to keep gender values consistent.
- Includes inclusive `Other` and `Prefer not to say` options.
- Uses Creator’s built-in profiles because no custom access model was requested.
- Provides web navigation and web report quick/detail layouts.