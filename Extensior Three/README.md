## Application Overview
Bookings Sync is an administrator-only Zoho Creator app that sends new appointment records to one configured Zoho Bookings service immediately. It records each remote booking result and flags later Creator edits for manual reconciliation instead of creating duplicates.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Booking Settings | Stores the single Bookings service, assignee, and time zone configuration | None |
| Appointments | Captures customer appointment details and sync status | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| Booking Settings Report | List | Booking Settings |
| All Appointments | List | Appointments |
| Appointment Calendar | Calendar | Appointments |
| Sync Exceptions | List | Appointments |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| Sync Dashboard | Monitors appointment volume and synchronization health | KPI cards, status progress, upcoming appointments, exception feed |

## Design Decisions
- Uses Creator’s built-in Administrator profile only.
- Uses an administrator-authorized Zoho Bookings Quick Connect connection.
- Creates Bookings appointments immediately after successful Creator submission.
- Stores notes and end time locally because the native create-appointment task does not accept them.
- Post-sync edits are flagged as Needs Review and never create duplicate bookings.
- A singleton settings form centralizes the service, staff/resource, and time zone IDs.
