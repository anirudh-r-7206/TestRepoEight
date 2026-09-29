# Company Hardware Tracker

## Application Overview
Company Hardware Tracker gives IT administrators a reliable view of company equipment, its current holder, serial number, condition, and availability. Separate assignment and maintenance records preserve custody and repair history while automated workflows keep each asset’s current snapshot synchronized.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Assets | Master inventory and current custody snapshot | None |
| Assignments | Issue, return, and custody history | Asset → Assets; Assigned To → Creator users |
| Maintenance | Repair and service history | Asset → Assets |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Assets | List | Assets |
| Available Assets | List | Assets |
| Assigned Assets | List | Assets |
| Maintenance Assets | List | Assets |
| Assignment History | List | Assignments |
| Active Assignments | List | Assignments |
| Returned Assignments | List | Assignments |
| Maintenance History | List | Maintenance |
| Open Maintenance | List | Maintenance |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| Hardware Overview | IT operations dashboard | KPI cards, distributions, custody table, open-maintenance list, report links |

## Design Decisions
- Administrator-only first release; assignees come from existing Creator users.
- Asset records hold the current snapshot; assignment records remain the custody audit trail.
- Validation prevents overlapping active assignments and duplicate open maintenance.
- Issue, return, and maintenance completion workflows synchronize asset status, holder, and condition.
- Current custody fields are read-only in the UI and workflow-managed.