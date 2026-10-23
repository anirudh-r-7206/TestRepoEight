## Application Overview
This app stores student names and ages in a simple registry. It includes a web list for browsing student records and a standalone dummy Deluge function that logs “Hello” when called.

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
| None | No custom page required | — |

## Design Decisions
- Student Name and Age are mandatory.
- The report sorts records alphabetically by student name.
- `Hello()` is standalone and logs `Hello`; it is not triggered automatically.
- Standard Creator profiles govern access.
