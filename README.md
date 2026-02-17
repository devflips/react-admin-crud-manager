# React Admin CRUD Manager

A reusable React CRUD admin template with modular components for rapid admin dashboard development.

## Features
- Plug-and-play CRUD page component
- Modular, customizable UI components (Table, Modal, Form, etc.)
- Built with React 18+
- Tailwind CSS for styling


## Installation

```sh
npm install react-admin-crud-manager
```

## Usage

### 1. Import the built CSS for Tailwind styles

In your main entry file (e.g., `src/main.jsx` or `src/index.js`):

```js
import 'react-admin-crud-manager/dist/tailwind.css';
```

### 2. Use the component

```
import Crud from 'react-admin-crud-manager';

function App() {
  const config = {
    title: 'Users',
    fetchData: async () => { /* fetch logic */ },
    // ...other config options
  };
  return <Crud config={config} />;
}
```

## Components
- `Crud`: Main CRUD page component
- `Table`, `Modal`, `Form`, etc.: Available for advanced use

## Props
Below is a complete reference of the public props accepted by this package (types, accepted values and defaults). The library exposes a single primary component (`Crud`) that receives a single `config` prop — most configuration lives inside that object.

---

### Crud (default export)
`<Crud config={config} />`
- `config` (object) — required. Top-level configuration object used by the CRUD page.

Key properties of `config` (types & accepted values):

- `title` — string (required)
- `description` — string (optional)
- `buttonText` — string (optional)
- `fetchData` — function (required)
  - Signature: async ({ search, rows_per_page, current_page, ...filters }) => Promise<{ data: Array, pagination?: { current_page: number, rows_per_page: number, total_pages: number, total_records: number } }>
  - The component expects `resp.data` (array) and optional `resp.pagination` when server-side pagination is used.
- `isStaticData` — boolean (default: false)
  - If true, add/edit/delete are applied client-side on local state instead of re-fetching.
- `tableConfig` — object (required) — see "Table / tableConfig" below.
- `modalConfig` — object — see "Modal / modalConfig" below.
- `filterConfig` — object — used by the filter drawer (see Form field schema below).

---

### Table / `tableConfig` (inside `config`)
Type: object

Common keys:
- `table_head` — array of column objects (required)
- `data` — array — rows shown in the table
- `loading` — boolean — show skeleton when true
- `search` — object: { enabled?: boolean, placeholder?: string, useServerSideSearch?: boolean, searchKeys?: string[] }
- `filter` — object: { enabled?: boolean, useServerSideFilters?: boolean }
- `pagination` — object: { enabled?: boolean, rows_per_page?: number, useServerSidePagination?: boolean, current_page?: number, total_pages?: number, total_records?: number }
- `emptyMessage` — string — message when no rows
- `onMenuAction` — function(actionType: string, item: object)
- `setServerSidePaginationData` — function — used to update server-side pagination/search state
- `onFilterApply` — function(filters: object)
- `filterConfig` — object (fields array) — rendered in the FilterDrawer

Table column object (`table_head[]`) — accepted keys:
- `key` — string (required) — property name in row objects
- `title` — string — column header
- `type` — string — accepted values: (plain default) | `index` | `group` | `chip` | `date` | `avatar` | `menu_actions`
- `imageKey`, `titleKey`, `subtitleKey` — string — used by `group`/`avatar` types
- `onClickDetails` — boolean — if true clicking the cell triggers a view action
- `variant` — string — used for chips (`contained` | `outline` | `soft`)
- `chipOptions` — array of { value: string|number|boolean, label: string, color?: string }
- `defaultColor` — string — default chip color key (e.g., `green`)
- `className` — string — custom class for cell
- `format` — string — date format (e.g. `DD MMM YYYY`)
- `menuList` — array of menu action objects: { title: string, type: string, variant?: string, icon?: ReactNode }
- `render` — function(row, rowIndex) — custom renderer; if present it overrides built-in renderers

---

### Modal / `modalConfig`
`modalConfig` groups modal definitions used by the CRUD page.

Common modal shapes:
- `addModal`, `editModal` (object)
  - `title` — string (required)
  - `size` — string (`sm` | `md` | `lg` | `xl` | `full`) (default `md`)
  - `formClass` — string (optional)
  - `formFields` — array of form-field objects (see Form schema)
  - `handleSubmit` — function(formData) — required; should perform API call and return an object used by the parent (see notes)
  - `actionButtons` — array of actionButton objects ({ type, label, color, variant, onClick, disabled, className })

- `deleteModal` (object)
  - `title` — string
  - `size` — string
  - `confirmText` — string
  - `referenceKey` — string — key of selectedItem to show as reference in delete dialog
  - `action` — function(selectedItem) — function called to perform delete (should return a response used by the parent)
  - `actionButtons` — array of actionButton objects

- `viewModal` (object)
  - `title` — string (required)
  - `size` — string
  - `component` — React component (elementType) — optional, receives `data` prop when provided
  - `fields` — array of view-field objects (see View fields below)
  - `footer` — { cancelButton?: boolean, cancelText?: string }

Notes on modal handlers (expected response shapes):
- `addModal.handleSubmit` should return an object containing `newObject` (the created row) so Crud can insert it into the list when `isStaticData` is true or refresh server-side listing.
- `editModal.handleSubmit` should return `{ newObject, targetObject }` where `targetObject` identifies which row was updated.
- `deleteModal.action` should return an object containing `targetObject` (the deleted row) or an appropriate success response.

---

### Form / Form fields (used by `modalConfig.*.formFields` and `filterConfig.fields`)
Form fields follow the `formFieldType` shape used throughout the UI. Each field is an object with these keys:

Common field keys (all field types):
- `key` — string (required) — the property name for form data
- `label` — string — human-readable label
- `type` — string (required) — accepted values:
  - `text` (default input), `number`, `email`, `password`, `select`, `checkbox`, `switch`, `phone`, `textarea`, `image`, `tinyEditor`
- `required` — boolean
- `minLength` — number
- `parentClass` — string — grid class (e.g. `col-span-6`)
- `placeholder` — string
- `disabled` — boolean

Type-specific keys:
- select
  - `options` — array of { value: string|number|boolean, label: string }
  - `multiple` — boolean — allow multiple selection
  - `search` — boolean — show search inside dropdown
  - `dropdownMaxHeight` — string (CSS height value)
- checkbox
  - `options` — array of { value, label }
  - `multiple` — boolean — when true allows selecting multiple values (component prop `multiSelect`)
- switch
  - `options` — optional array of radio-like options [{ label, value }]
  - `text` — optional description text shown next to the switch
- phone
  - `countriesList` — boolean — show country selector
  - `defaultCountry` — string (ISO country code like `US`)
  - `search` — boolean — enable searching countries
  - `placeholder` — string
- textarea
  - `rows` — number
- image
  - `accept` — string (default: `image/*`)
  - `dragDrop` — boolean
- tinyEditor
  - `editorKey` — string (TinyMCE api key)
  - `fontFamily` — string
  - `height` — number
  - `imageUploadHandler` — function(blobInfo) => Promise<string> (returns URL)

Return values / onSubmit handlers
- `onSubmit(formData)` receives an object keyed by `field.key` values.

---

### Small/UI components (props summary)
- `Button` props
  - `variant` — `contained` | `outlined` | `text` (default `contained`)
  - `color` — `primary` | `success` | `error` | `default`
  - `size` — `sm` | `md` | `lg` | `xl` | `default`
  - `fullWidth` — boolean
  - `className`, `onClick`, `type`, `disabled` (standard button props)

- `Chip` props
  - `label` — string (required)
  - `variant` — `contained` | `outline` | `soft` (default `contained`)
  - `color` — `blue` | `teal` | `purple` | `yellow` | `green` | `red` | `gray`

- `Modal` props (when used directly)
  - `isOpen` — boolean
  - `onClose` — function
  - `icon` — React node
  - `title` — string
  - `size` — `sm` | `md` | `lg` | `xl` | `full`
  - `actionButtons` — array of { type, label, color, variant, onClick, disabled }
  - `loadingBtn` — boolean

- `FilterDrawer` props
  - `isOpen` — boolean
  - `onClose` — function
  - `config` — object (fields array — same `formFieldType`)
  - `onApply` — function(filters: object)

---

### Examples
Minimal CRUD config (client-side):

```js
const config = {
  title: 'Users',
  fetchData: async () => ({ data: users, pagination: null }),
  isStaticData: true,
  tableConfig: {
    table_head: [ { key: 'id', title: 'ID', type: 'index' }, { key: 'name', title: 'Name' } ],
    pagination: { enabled: true }
  },
  modalConfig: {
    addModal: { title: 'Add user', handleSubmit: async (formData)=>({ newObject: formData }), formFields: [ { key: 'name', label: 'Name', type: 'text', required: true } ] }
  }
};
```

Server-side listing (fetchData must return { data, pagination }):

```js
const fetchData = async ({ search, rows_per_page, current_page }) => {
  const resp = await api.get('/users', { params: { q: search, limit: rows_per_page, page: current_page } });
  return { data: resp.items, pagination: { current_page: resp.page, rows_per_page: resp.limit, total_pages: resp.totalPages, total_records: resp.total } };
};
```

---

If you want me to add a TypeScript declaration snippet or a props table per component (or to document `table_head` examples), tell me which parts to expand and I will add them. ✅


## License
MIT
