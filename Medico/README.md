## Application Overview
Medical Doctor Directory is a compact Zoho Creator app for storing doctor names and email addresses. It includes built-in required-field and email validation, duplicate-email prevention, and a solid deep-teal medical theme.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Doctors | Store doctor names and email IDs | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Doctors | Default list | Doctors |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | Not required for this compact directory | — |

## Design Decisions
- Doctor name and email are mandatory and marked as personal data.
- Email ID uses the native email field and a declarative uniqueness constraint.
- The directory is alphabetically sorted and filterable by name or email.
- Web UI uses a solid deep-teal theme, Poppins font, solid menu icons, and a medical app icon.
- Standard Zoho Creator profiles are used; no custom role hierarchy or workflows are needed.
