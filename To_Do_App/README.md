# Basic To Do

## Application Overview
A lightweight task-management app for recording personal to-do items, setting priorities and due dates, and tracking progress. Tasks can be reviewed in a standard list or moved through a status-oriented Kanban board.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Tasks | Capture task details, priority, status, due date, and completion | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Tasks | List | Tasks |
| Task Board | Kanban | Tasks |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | The basic app uses native forms and reports | — |

## Design Decisions
- Uses built-in Creator profiles rather than a custom security model.
- Required fields and default values are declared directly on the form.
- An on-validate workflow keeps Status and Completed synchronized.
- The Kanban board groups tasks by status.
- Web navigation uses a simple task-focused menu and modern violet theme.