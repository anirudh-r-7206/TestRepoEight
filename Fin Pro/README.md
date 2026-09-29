## Application Overview

Expense Reporting lets employees submit receipt-backed expenses and automatically routes claims by value. Expenses over $500 require final Department Head approval; approved claims then move to Finance for payment tracking, while all key actions are audited.

## Forms

| Form Name | Purpose | Key Lookups |
|---|---|---|
| Department Heads | Maintains selectable approvers | None |
| Expense Reports | Captures expenses, receipts, approval, and payment state | Department Head |
| Expense Audit | Records approval and payment actions | Expense Report |

## Reports

| Report Name | Type | Source Form |
|---|---|---|
| Active Department Heads | List | Department Heads |
| My Expenses | List | Expense Reports |
| Head Approval Queue | List | Expense Reports |
| Finance Payment Queue | List | Expense Reports |
| All Expenses | List | Expense Reports |
| Expense Audit Trail | List | Expense Audit |

## Pages

| Page Name | Purpose | Key Components |
|---|---|---|
| Expense Dashboard | Summarizes spend and workflow progress | KPI cards, category bars, payment pipeline, recent expenses |

## Design Decisions

- Claims of $500 or less are approved automatically and sent to Finance.
- Claims over $500 require the selected Department Head’s decision; Finance only tracks payment.
- Approval and payment changes use controlled report actions rather than direct status editing.
- Audit records capture actor, timestamp, and before/after states.
- Web-only navigation and layouts are configured for the initial release.
