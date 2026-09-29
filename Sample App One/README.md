## Application Overview
Freelancer Client & Project Tracker is an owner-operated workspace for independent designers and developers. It centralizes client contacts, project progress, cumulative billed hours, and INR earnings in a clean editorial interface.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Clients | Client contacts and hourly billing rates | — |
| Projects | Project status, due dates, and billed hours | Client → Clients |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Clients | List | Clients |
| All Projects | List | Projects |
| Project Status Board | Kanban | Projects |
| Project Due Calendar | Calendar | Projects |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| Freelancer Dashboard | Global workload, earnings, and client overview | KPI summary, progress bar, client card grid, add actions |
| Client Detail | Client-specific billing and project drill-down | Client profile, KPI cards, project table/cards, status badges |

## Design Decisions
- Billed hours are maintained as one cumulative total per project.
- Earnings are calculated as project billed hours × the linked client’s INR hourly rate.
- Client cards link to a typed, parameterized detail page.
- System-default profiles are retained for the simple owner-operated access model.
- Web UI uses a white, slate, and indigo editorial visual system.