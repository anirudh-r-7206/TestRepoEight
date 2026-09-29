## Application Overview
IT Management provides a focused internal directory for system administrators. It stores required administrator names and unique email addresses, with a searchable web report and a modern blue IT-themed interface.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| System Admins | Maintain system administrator contact records | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All System Admins | List | System Admins |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | No custom pages in this initial release | — |

## Design Decisions
- Required name and email fields use declarative form validation.
- Email ID is unique and marked as personal data.
- Built-in Zoho Creator profiles are used without custom permission files.
- Theme 1 uses Poppins, blue preset 5, and an IT app icon.
- Web navigation groups the form and report under System Administration.
