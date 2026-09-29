# New Hire Onboarding

## Application Overview
This internal Zoho Creator app coordinates employee onboarding across HR, IT, and hiring managers. HR facilitates sensitive ID collection, uploaded-video training, and handbook signatures, while automated task assignment and overdue reminders keep work on schedule.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| New Hires | Central employee onboarding record | — |
| Checklist Templates | Reusable HR, IT, and manager tasks | — |
| Training Content | Uploaded onboarding video library | — |
| Onboarding Tasks | Assigned checklist work and deadlines | New Hires |
| ID Documents | Encrypted identity-document verification | New Hires |
| Training Assignments | Per-hire training completion | New Hires, Training Content |
| Handbook Acknowledgements | Witnessed handbook signature | New Hires |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All New Hires | List | New Hires |
| Active Onboarding | List | New Hires |
| All Checklist Templates | List | Checklist Templates |
| Training Library | List | Training Content |
| All Onboarding Tasks | List | Onboarding Tasks |
| Onboarding Task Board | Kanban | Onboarding Tasks |
| Onboarding Due Calendar | Calendar | Onboarding Tasks |
| ID Document Register | List | ID Documents |
| Training Assignment Register | List | Training Assignments |
| Outstanding Training | List | Training Assignments |
| Handbook Sign-off Register | List | Handbook Acknowledgements |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| Onboarding Dashboard | Operational overview | KPIs, status/category charts, upcoming starts, overdue tasks, training and sign-off tables |

## Design Decisions
- New hires do not log in; HR facilitates uploads, training, and signatures.
- New-hire creation generates active checklist and training assignments automatically.
- Overdue reminders send at 1, 3, and 7 days; HR is copied on day 7.
- ID documents are encrypted and restricted to HR.
- The app is web-first with role-specific field and report access.
