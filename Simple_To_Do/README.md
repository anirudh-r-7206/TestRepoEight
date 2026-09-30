## Application Overview
Simple To Do is a lightweight task-management app for capturing work, setting priorities and due dates, and tracking progress from To Do through Done. It includes list and Kanban views plus a responsive overview dashboard with completion, priority, overdue, and upcoming-task insights.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Tasks | Stores task details, priority, status, and due date | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Tasks | List | Tasks |
| Task Board | Kanban | Tasks |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| To-Do Overview | Summarizes workload and progress | KPI cards, completion bar, priority distribution, upcoming tasks table |

## Design Decisions
- Uses built-in Creator profiles rather than custom access roles.
- Uses declarative required fields and defaults; no workflows are needed.
- Provides both a sortable list and a status-based Kanban board.
- Uses a responsive ZCS-themed HTML dashboard without JavaScript.
- Web navigation and report detail/quick views are configured; phone and tablet layouts are intentionally omitted.