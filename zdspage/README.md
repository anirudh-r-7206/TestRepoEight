## Application Overview
This Zoho Creator app stores student names, ages, and gender selections in a simple registry. It includes a greeting page and a live dashboard showing the number of students in each gender category.

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
| Hello | Display a simple greeting | HTML snippet with `<h1>Hello</h1>` |
| Students by Gender | Show live totals by gender | HTML snippet, four KPI cards |

## Design Decisions
- Gender uses Male, Female, Non-binary, and Prefer not to say.
- Required fields use declarative form modifiers rather than workflows.
- The gender dashboard calculates live counts with server-side Deluge.
- Access relies on Creator’s built-in profiles.
- The initial device configuration targets web only.