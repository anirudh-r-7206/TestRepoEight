## Application Overview

HR Manager Registry is a basic Zoho Creator app for maintaining HR manager contact records. It captures each manager’s name, unique email address, and age, then presents the records in a searchable web directory.

## Forms

| Form Name | Purpose | Key Lookups |
|---|---|---|
| HR Managers | Store HR manager identity and contact details | None |

## Reports

| Report Name | Type | Source Form |
|---|---|---|
| All HR Managers | List | HR Managers |

## Pages

| Page Name | Purpose | Key Components |
|---|---|---|
| None | The basic version uses the standard form and report interface | — |

## Design Decisions

- Uses declarative mandatory fields instead of validation workflows.
- Enforces unique email addresses at the database level.
- Uses Creator’s built-in profiles for initial access control.
- Provides a web-only menu and report layout for the first release.
- Marks email and age as personal data.
