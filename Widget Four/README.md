## Application Overview

Student Alphabet Learning is a compact education app for storing student names and ages. It also includes an interactive A–Z widget where learners select a letter to reveal a matching emoji and phrase, such as “A for Apple.”

## Forms

| Form Name | Purpose | Key Lookups |
|---|---|---|
| Students | Stores each student’s name and age | None |

## Reports

| Report Name | Type | Source Form |
|---|---|---|
| All Students | List | Students |

## Pages

| Page Name | Purpose | Key Components |
|---|---|---|
| Alphabet Learning | Interactive alphabet practice | AlphabetExplorer widget, A–Z buttons, emoji reveal card |

## Design Decisions

- Uses Creator’s built-in profiles instead of unnecessary custom roles.
- Keeps the student data model intentionally simple.
- Uses a responsive ZET widget for immediate click and keyboard interaction.
- Includes all 26 letters with child-friendly words and emoji, without external image hosting.
- Provides web navigation and an education-themed visual identity.
