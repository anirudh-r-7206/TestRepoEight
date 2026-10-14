# Student Registry

## Application Overview
Student Registry is a compact Zoho Creator app for recording student names and ages. It also includes a web page with a custom responsive widget that displays the numbers 1 through 100.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Store each student’s name and age | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| Numbers 1 to 100 | Display a counting chart | Custom Numbers_1_to_100 widget |

## Design Decisions
- Student name and age are mandatory fields.
- Student names are marked as personal data.
- The number widget uses a responsive grid and highlights multiples of ten.
- The app uses built-in Zoho Creator profiles and web navigation only.
- The education-themed icon and blue theme provide a clear student-focused identity.
