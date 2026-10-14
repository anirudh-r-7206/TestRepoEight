# Restaurant Orders V2

## Application Overview
Order management for a hotel restaurant. The **Table Floor** widget shows every table as a colour-coded card with its seat count and live status (Available / Reserved / Occupied); staff click a free table to reserve it. Reservations and food orders keep each table's status in sync automatically.

## Forms
| Name | Purpose | Key Lookups |
|---|---|---|
| Dining_Tables | Table master: number, seats, area, live status | - |
| Menu_Items | Dishes with category, price, veg flag, availability | - |
| Reservations | Guest bookings for a table at a date/time | Dining_Table -> Dining_Tables |
| Orders | Food orders per table with an Items subform and total | Dining_Table -> Dining_Tables, Items.Menu_Item -> Menu_Items |

## Reports
| Name | Type | Source Form |
|---|---|---|
| All_Tables | list (grouped by area) | Dining_Tables |
| Tables_Kanban | kanban by status | Dining_Tables |
| All_Menu_Items | list (grouped by category) | Menu_Items |
| All_Reservations | list | Reservations |
| Reservation_Calendar | calendar (week) | Reservations |
| Todays_Reservations | list, today only | Reservations |
| All_Orders | list | Orders |
| Open_Orders | list, Open + Served | Orders |
| Orders_Kanban | kanban by status | Orders |

## Pages
| Name | Purpose | Key Components |
|---|---|---|
| Table_Floor | Pick and reserve tables | `tablefloor` JS widget (library/widgets/tablefloor) |
| Restaurant_Dashboard | Floor and sales overview | KPI HTML snippet, tables-by-status donut, orders-by-status column chart |

## Design Decisions
- Table status is driven by workflows: Booked -> Reserved, Seated or an open order -> Occupied, Completed / Cancelled / Paid -> Available (or Reserved if another booking is pending).
- Reservations_On_Validate blocks parties larger than the table, bookings on an occupied table within 2 hours, and overlapping bookings within a 2-hour window.
- Order line prices come from the menu and the total is recomputed server-side on validate.
- Profile `Restaurant_Staff`: can change table status only, read-only menu, full access to reservations and orders.
- The widget uses Creator Widget SDK v1 (`getAllRecords`, `addRecord`) and runs on sample data when opened outside Creator.

## Deploying the widget
`zcreator pack` does not build widgets. Install ZET (`npm i -g zoho-extension-toolkit`), run `zet pack` inside `library/widgets/tablefloor`, and upload the zip in Creator under Settings > Widgets with link name `tablefloor`.
