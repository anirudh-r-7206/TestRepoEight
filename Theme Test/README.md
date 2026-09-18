## Application Overview

Student Register is a lightweight Zoho Creator app for recording student names and ages. It provides simple data entry, alphabetical browsing, and a playful orange interface using Quicksand typography.

## Forms

| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Store each student's name and age | None |

## Reports

| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages

| Page Name | Purpose | Key Components |
|---|---|---|
| None | The app uses native forms and reports | — |

## Design Decisions

- Uses mandatory field properties instead of validation workflows.
- Sorts students alphabetically by name.
- Uses Creator's built-in profiles without custom roles or sharing rules.
- Applies a playful orange theme with Quicksand typography.
- Surfaces the app on web with focused student navigation.
