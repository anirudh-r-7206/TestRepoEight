# Student Registry

## Application Overview
Student Registry is a simple Zoho Creator app for storing student names and ages. It includes one data-entry form, one list report, and a reusable dummy function for basic testing.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Stores each student's name and age | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | No custom pages requested | — |

## Design Decisions
- Student name uses a simple required text field.
- Age uses a required integer field.
- The default report sorts students alphabetically.
- Standard Creator profiles are used without custom permissions.
- The web interface uses an education-themed icon and menu.
- `Dummy()` logs `dummy` using an `info` statement.
