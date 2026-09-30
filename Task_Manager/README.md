# Task Manager

## Application Overview
Task Manager is a lightweight personal productivity app for capturing and completing work. It combines a simple task form with list, Kanban, calendar, and dashboard views for quick planning and review.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Tasks | Stores task details, status, priority, category, due date, and completion state | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Tasks | List | Tasks |
| Task Board | Kanban | Tasks |
| Task Calendar | Calendar | Tasks |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| Task Dashboard | Summarizes workload and upcoming work | KPI cards, progress bar, status and priority summaries, overdue and upcoming task lists |

## Design Decisions
- Uses one form to keep personal task entry fast and uncluttered.
- Synchronizes the Status and Completed fields through form workflows.
- Uses built-in Administrator access without unnecessary custom profiles or roles.
- Provides web-only navigation with a modern blue theme and task-focused iconography.
- Implements the dashboard as a responsive HTML snippet for flexible presentation.