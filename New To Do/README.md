## Application Overview
Simple To-Do is a lightweight task-management app for capturing work, setting priorities and due dates, and tracking progress. It includes list and board views plus a compact overview dashboard for day-to-day planning.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Tasks | Capture and track to-do items | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Tasks | List | Tasks |
| Task Board | Kanban | Tasks |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| To-Do Overview | Summarize workload and upcoming tasks | KPI cards, status and priority summaries, upcoming-task table |

## Design Decisions
- Uses declarative required fields and static defaults instead of workflows.
- Uses both list and kanban views for quick browsing and status-based planning.
- Uses a server-rendered HTML dashboard without JavaScript.
- Relies on Creator's built-in profiles for simple access management.
- Provides a clean, web-first navigation and theme.