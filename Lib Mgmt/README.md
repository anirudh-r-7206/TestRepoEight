## Application Overview
Library Management is a focused catalog app for recording books and their basic classification and price. This initial version provides a clean foundation for adding members, lending, and returns later.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Books | Stores book name, INR price, and book type | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| None in current scope | — | — |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None in current scope | — | — |

## Design Decisions
- Book name, price, and type are mandatory.
- Price uses INR with two decimal places.
- Book type is free text for flexibility.
- Creator’s standard profiles are used without custom roles.
- Web navigation exposes the Books form under a Catalog section.