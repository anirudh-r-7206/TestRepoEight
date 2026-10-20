## Application Overview
Student Fee Tracker records each student’s name, age, and fee payment status. Staff can filter the main report by status and mark an unpaid student as paid using a confirmed row action.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Student Fees | Capture student details and fee status | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Student Fees | List | Student Fees |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | No custom page required | — |

## Design Decisions
- Fee status defaults to **Not Paid** and is limited to Paid/Not Paid choices.
- The **Mark as Paid** action appears only for unpaid records and asks for confirmation.
- Required fields use declarative form validation.
- The web UI uses an education-themed blue design and Creator’s standard profiles.