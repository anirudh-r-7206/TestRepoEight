# Student Directory

## Application Overview
Student Directory stores core student information, including name, age, gender, and a student photograph. Users can browse the directory and print a polished profile for each student.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Capture student details and image | None |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | The app uses native form and report screens | — |

## Design Decisions
- Inclusive gender choices are presented as radio buttons.
- Age is mandatory but has no fixed range.
- Student images support upload and camera capture.
- The printable A4 student profile is linked to the All Students report.
- Built-in Creator profiles are used instead of custom roles.