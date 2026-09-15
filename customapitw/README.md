## Application Overview
Student Registry is a compact Zoho Creator app for storing student names, ages, and inclusive gender selections. It includes a web directory and a public-key GET custom API that invokes a Deluge function which logs `Hello`.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Stores student name, age, and gender | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | The app uses native form and report navigation | — |

## Design Decisions
- Uses declarative mandatory fields instead of validation workflows.
- Gender uses an inclusive radio-button set.
- The `Hello` function is parameterless and logs `Hello` with an `info` statement.
- `Info_Hello` is a GET custom API secured with Creator-managed public-key authentication.
- Uses Creator’s built-in profiles and a web-only interface.