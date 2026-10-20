# Student Registry

## Application Overview
Student Registry is a small Zoho Creator app for storing student names and ages. It provides a simple list for browsing records and includes a standalone dummy Deluge function that logs `dummy` when invoked.

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
| None | No custom page required | — |

## Design Decisions
- Student Name and Age are mandatory declarative fields.
- Records are sorted alphabetically by student name.
- `Dummy_Info` is a standalone, parameterless function and logs `dummy` with an `info` statement.
- `Get_Dummy` is an OAuth2-protected GET custom API that returns `dummy` through `Dummy_API_Response`.
- Standard Zoho Creator profiles are used instead of custom profiles.
- The web interface uses an education-themed icon and simple navigation.
