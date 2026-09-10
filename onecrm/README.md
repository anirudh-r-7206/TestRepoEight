## Application Overview
This app provides a simple Creator form for selecting an existing Contact from Zoho CRM. It uses a Zoho CRM V1 connection and Contacts datasource, with the lookup displaying each contact’s Last Name.

## Forms
| Form Name | Purpose | Key Lookups |
|---|---|---|
| CRM Contact Selection | Save a CRM contact selection with optional notes | Zoho CRM Contacts |

## Reports
| Report Name | Type | Source Form |
|---|---|---|
| CRM Contact Selections | List | CRM Contact Selection |

## Pages
| Page Name | Purpose | Key Components |
|---|---|---|
| None | No custom dashboard required | — |

## Design Decisions
- Uses the stable Zoho CRM V1 connector and generated Contacts datasource metadata.
- The integration field is single-select and lookup-only.
- Last Name is used because integration lookup display formats support exactly one datasource field.
- Creator’s built-in profiles are retained; no custom roles or sharing rules were added.
