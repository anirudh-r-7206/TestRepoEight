## Application Overview

HR Management provides a focused directory for storing and maintaining HR manager contact details. Manager names and email addresses are required, and email addresses are kept unique to prevent duplicate records.

## Forms

| Form Name | Purpose | Key Lookups |
|---|---|---|
| HR Managers | Store HR manager names and email addresses | None |

## Reports

| Report Name | Type | Source Form |
|---|---|---|
| All HR Managers | Default list | HR Managers |

## Pages

| Page Name | Purpose | Key Components |
|---|---|---|
| None | No dashboard is required in this initial version | — |

## Design Decisions

- Uses declarative mandatory and unique field properties instead of workflows.
- Marks manager names and email addresses as personal data.
- Uses built-in Zoho Creator profiles without custom roles or sharing rules.
- Provides web navigation, record preview/detail layouts, and a blue/teal Lato theme.
- Sorts the manager directory alphabetically by manager name.
