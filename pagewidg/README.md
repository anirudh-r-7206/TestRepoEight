## Application Overview
This app stores student names, ages, and inclusive gender selections in a simple administrator-managed registry. It includes a live gender-count summary and a separate custom widget page showing the lowercase English alphabet.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Store each student's name, age, and gender | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| Gender Summary | Show record totals for each gender choice | Native metric panel, live count variables |
| Lowercase Alphabet | Display a through z in lowercase | Responsive custom ZET widget |

## Design Decisions
- Uses the built-in Administrator profile only.
- Gender is required and uses inclusive predefined choices.
- Required-field validation is declarative; no workflows are needed.
- The gender dashboard uses the explicitly requested native panel.
- The alphabet widget renders 26 accessible responsive letter tiles.
- Web navigation and report quick/detail views are configured.