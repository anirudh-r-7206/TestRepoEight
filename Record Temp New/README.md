# Student Directory

## Application Overview
Student Directory stores essential student profile information, including name, age, gender, and a student image. Users can browse records in a web report and print each student as a polished profile card.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Capture student identity details and photo | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | Not required for this compact app | — |

## Design Decisions
- Uses declarative mandatory fields with no unnecessary workflows.
- Gender uses an inclusive predefined choice list.
- Student photos support file upload and camera capture.
- The All Students report is linked to an A4 student profile-card record template.
- Web navigation and branding use an education-focused theme and icon.