# Simple To Do

## Application Overview
Simple To Do is a lightweight personal task tracker for recording work, setting priorities and due dates, and monitoring progress. It includes list and kanban views plus a responsive overview page for quick status and workload insights.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Tasks | Capture task details, priority, due date, status, and completion | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Tasks | List | Tasks |
| Task Board | Kanban | Tasks |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| To-Do Overview | Summarize workload and upcoming work | KPI cards, status progress, priority badges, overdue count, upcoming-task table, empty state |

## Design Decisions
- Uses declarative required fields and defaults; no workflow code is needed.
- Uses Creator's standard profiles with no custom roles or sharing rules.
- Provides both sortable list and status-based kanban navigation.
- Uses a responsive ZCS-styled HTML snippet without JavaScript.
- Web navigation uses a clean blue theme and matching project-management icon.
