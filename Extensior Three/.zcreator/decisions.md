# Decisions

User answers to clarifying questions, recorded at submit time.
- [Booking system] Which booking system should this app sync with? -> Zoho Bookings
- [Record type] What records will be sent to the booking system? -> Appointments
- [Direction] How should synchronization work? -> Creator to Bookings
- [Timing] When should records synchronize? -> Immediately
- [Users] Who will use the Creator app? -> Administrators only
- [Mapping] How should an appointment choose its Zoho Bookings destination? -> One service
- [Fields] Which appointment details should the app capture? -> Standard details
- [Edit policy] After an appointment has synced, what should happen if its customer details or time are edited in Creator? -> Flag for review
