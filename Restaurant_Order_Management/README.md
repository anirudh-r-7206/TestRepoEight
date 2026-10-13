# Restaurant Order Management

## Application Overview
A Zoho Creator app for a hotel restaurant. The Table Floor page shows every table as a card with its seat count and live status (Available, Reserved, Occupied). Staff pick an available table to reserve it, or open an order for a table in service. Workflows keep table status in step with reservations and orders.

## Forms
| Name | Purpose | Key Lookups |
|---|---|---|
| Dining_Table | Table master: number, area, seats, live status | none |
| Menu_Item | Dishes, category, price, availability | none |
| Table_Reservation | Guest booking for a table, date and slot | Dining_Table |
| Table_Order | Order for a table with items subform and total | Dining_Table, Menu_Item |

## Reports
| Name | Type | Source Form |
|---|---|---|
| All_Tables | List (grouped by area) | Dining_Table |
| Tables_By_Status | Kanban | Dining_Table |
| All_Menu_Items | List (grouped by category) | Menu_Item |
| All_Reservations | List | Table_Reservation |
| Reservation_Calendar | Calendar | Table_Reservation |
| All_Orders | List | Table_Order |
| Open_Orders | List (Open and Served) | Table_Order |

## Pages
| Name | Purpose | Key Components |
|---|---|---|
| Table_Floor | Table widgets, status filter, reserve by picking a table | HTML snippet, URL pre-fill into the reservation form |

## Design Decisions
- Table widgets are cards in an HTML snippet; the Reserve button opens the reservation form with the table pre-filled.
- A reservation holds a table for a date and time slot; double booking and parties larger than the table are rejected.
- Table status changes to Reserved only for same-day reservations; Seated or an open order makes it Occupied; Paid, Cancelled or Completed frees it when nothing else is open.
- Profiles: Manager has full access; Waiter works reservations and orders and can only view tables and menu.
