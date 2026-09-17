## Application Overview
Student Registry stores basic student information: name, age, and gender. It also includes an empty namespaced Deluge function exposed through an OAuth2-protected POST custom API for future Cliq integration.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Store student identity details | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | Standard form and report UI is sufficient | — |

## Design Decisions
- Gender uses required radio choices: Male, Female, and Other.
- Student name and gender are marked as personal data.
- `func.postToCliq()` is intentionally empty and accepts no parameters.
- POST API `postToCliq` uses JSON key/value arguments, OAuth2, and All Users scope.
- Creator’s default profiles are retained; no custom roles or sharing rules are added.
