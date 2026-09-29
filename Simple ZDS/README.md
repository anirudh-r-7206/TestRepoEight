## Application Overview
Simple To Do is a lightweight task tracker for recording work, setting priorities and due dates, and monitoring completion. Tasks can be viewed as a list, a status board, or a calendar.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Tasks | Capture and update to-do items | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Tasks | List | Tasks |
| Task Board | Kanban | Tasks |
| Task Calendar | Calendar | Tasks |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | The app uses native forms and reports | — |

## Design Decisions
- Uses declarative required fields and defaults instead of workflows.
- Uses Creator’s standard profiles without custom roles or sharing rules.
- Provides web navigation and record layouts for every report.
- Groups board cards by task status and calendar entries by due date.