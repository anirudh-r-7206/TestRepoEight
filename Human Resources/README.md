## Application Overview

HR Management is a focused internal directory for storing HR manager names and email addresses. It uses built-in validation to require both values, validate email format, and prevent duplicate email records.

## Forms

| Form Name | Purpose | Key Lookups |
|---|---|---|
| HR Managers | Maintain HR manager contact details | None |

## Reports

| Report Name | Type | Source Form |
|---|---|---|
| All HR Managers | List | HR Managers |

## Pages

| Page Name | Purpose | Key Components |
|---|---|---|
| None | No dashboard required in this initial version | — |

## Design Decisions

- Email ID is mandatory and unique, using Creator's native email validation.
- Name and email are marked as personal data.
- The app relies on Creator's standard profiles rather than unnecessary custom roles.
- Web navigation uses a compact HR directory section and an HR-themed app icon.
