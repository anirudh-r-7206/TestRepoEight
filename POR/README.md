## Application Overview
Purchase Request Management lets employees request approved vendor-catalog items, routes requests through manager and Finance approval, and records the resulting purchase order. Finance can capture partial supplier invoices, perform line-level PO matching, and review discrepancies with a complete audit trail.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Vendors | Approved supplier directory | — |
| Vendor Items | Approved vendor catalog and pricing | Vendors |
| Purchase Request Lines | Requested item quantities and calculated totals | Vendor Items |
| Purchase Requests | Request, approval, and PO lifecycle | Vendors; request line subform |
| Invoice Lines | Billed quantities, prices, and taxes | Vendor Items |
| Invoices | Invoice capture and PO matching | Purchase Requests; Vendors; invoice line subform |
| Audit Log | Immutable operational and financial history | — |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Vendors / Active Vendors | List | Vendors |
| Vendor Catalog | List | Vendor Items |
| Catalog Price Maintenance | Spreadsheet | Vendor Items |
| Purchase Request Line Register | List | Purchase Request Lines |
| My Purchase Requests | List | Purchase Requests |
| Purchase Approval Queue | List | Purchase Requests |
| Finance Approval Queue | List | Purchase Requests |
| Purchase Order Register | List | Purchase Requests |
| Purchase Request Board | Kanban | Purchase Requests |
| Invoice Line Register | List | Invoice Lines |
| Invoice Register | List | Invoices |
| Match Exceptions | List | Invoices |
| Unpaid or Open Invoices | List | Invoices |
| Audit Trail | List | Audit Log |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| Purchase Finance Dashboard | Finance and procurement operations | KPIs, status view, trend, top vendors, exceptions, activity, quick links |

## Design Decisions
- Managed vendor catalog prevents unapproved item and vendor entry.
- Manager approval precedes Finance review and PO issuance.
- Two-way line matching supports partial invoices and a 0.01 tolerance.
- PO totals, billed totals, remaining value, and exceptions are tracked on the request.
- Least-privilege profiles separate employee, approver, Finance, and catalog administration duties.
- Critical approvals, PO events, invoice matches, and exceptions are audited.
