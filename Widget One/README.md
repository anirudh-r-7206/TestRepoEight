## Application Overview

Student Registry is a compact Zoho Creator app for storing student names and ages. It also includes a web page with a custom responsive widget that calculates and displays all 25 prime numbers from 1 through 100.

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
| Prime Numbers | Display primes from 1–100 | PrimeNumbers ZET widget, responsive number grid, prime count |

## Design Decisions

- Uses built-in Creator profiles; no custom roles or sharing hierarchy.
- Uses declarative mandatory fields and requires no workflows.
- Keeps widget code under `library/widgets/PrimeNumbers` and references it inline from the page.
- Provides web-only navigation and report layouts with an education-themed UI.
