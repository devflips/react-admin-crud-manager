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

#### Key properties of `config`

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | string | Yes | Title of the CRUD page |
| `description` | string | No | Optional description text |
| `buttonText` | string | No | Custom text for action buttons |
| `fetchData` | function | Yes | Async function to fetch data. Signature: `async ({ search, rows_per_page, current_page, ...filters }) => Promise<{ data: Array, pagination?: { current_page: number, rows_per_page: number, total_pages: number, total_records: number } }>`. Component expects `resp.data` (array) and optional `resp.pagination` for server-side pagination. |
| `isStaticData` | boolean | No | Default: `false`. If true, add/edit/delete apply client-side instead of re-fetching |
| `tableConfig` | object | Yes | Table configuration — [see tableConfig](#tableconfig-configuration) |
| `modalConfig` | object | No | Modal definitions — [see modalConfig](#modalconfig-definitions) |
| `filterConfig` | object | No | Filter drawer configuration — [see Form Field Schema](#form-field-schema) |

---

### tableConfig Configuration

#### Table Configuration Keys

| Key | Type | Required | Description |
|-----|------|----------|-------------|
| `table_head` | array of column objects | Yes | Column definitions — [see Table column object](#table-column-object-table_head) |
| `data` | array | No | Rows shown in the table |
| `loading` | boolean | No | Show skeleton loader when true |
| `search` | object | No | `{ enabled?: boolean, placeholder?: string, useServerSideSearch?: boolean, searchKeys?: string[] }` |
| `filter` | object | No | `{ enabled?: boolean, useServerSideFilters?: boolean }` |
| `pagination` | object | No | `{ enabled?: boolean, rows_per_page?: number, useServerSidePagination?: boolean, current_page?: number, total_pages?: number, total_records?: number }` |
| `emptyMessage` | string | No | Message shown when table has no rows |
| `onMenuAction` | function | No | Callback: `(actionType: string, item: object)` |
| `setServerSidePaginationData` | function | No | Used to update server-side pagination/search state |
| `onFilterApply` | function | No | Callback: `(filters: object)` |
| `filterConfig` | object | No | Fields array rendered in the FilterDrawer |

#### Table Column Object (`table_head[]`)

| Key | Type | Required | Description |
|-----|------|----------|-------------|
| `key` | string | Yes | Property name in row objects |
| `title` | string | No | Column header text |
| `type` | string | No | Column type: `plain` (default), `index`, `group`, `chip`, `date`, `avatar`, `menu_actions` |
| `imageKey` | string | No | Used with `group`/`avatar` types |
| `titleKey` | string | No | Used with `group`/`avatar` types |
| `subtitleKey` | string | No | Used with `group`/`avatar` types |
| `onClickDetails` | boolean | No | If true, clicking cell triggers view action |
| `variant` | string | No | For chips: `contained`, `outline`, `soft` |
| `chipOptions` | array | No | Array of `{ value: string|number|boolean, label: string, color?: string }` |
| `defaultColor` | string | No | Default chip color key (e.g., `green`) |
| `className` | string | No | Custom CSS class for cell |
| `format` | string | No | Date format (e.g., `DD MMM YYYY`) |
| `menuList` | array | No | Menu action objects: `{ title, type, variant?, icon? }` |
| `render` | function | No | Custom renderer: `(row, rowIndex) => ReactNode`. Overrides built-in renderers |

---

### modalConfig Definitions

#### Add & Edit Modal (`addModal`, `editModal`)

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | string | Yes | Modal title |
| `size` | string | No | Modal size: `sm`, `md` (default), `lg`, `xl`, `full` |
| `formClass` | string | No | Custom CSS class for form |
| `formFields` | array | Yes | Form field objects — [see Form Field Schema](#form-field-schema) |
| `handleSubmit` | function | Yes | Async callback: `(formData) => Promise<{ newObject, targetObject? }>`. For add: return `{ newObject }`. For edit: return `{ newObject, targetObject }` |
| `actionButtons` | array | No | Action button objects: `[{ type, label, color, variant, onClick, disabled, className }]` |

#### Delete Modal (`deleteModal`)

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | string | No | Modal title |
| `size` | string | No | Modal size: `sm`, `md` (default), `lg`, `xl`, `full` |
| `confirmText` | string | No | Confirmation message text |
| `referenceKey` | string | No | Property key of selectedItem to display as reference |
| `action` | function | Yes | Async callback: `(selectedItem) => Promise<{ targetObject }>`. Should return the deleted row |
| `actionButtons` | array | No | Action button objects: `[{ type, label, color, variant, onClick, disabled, className }]` |

#### View Modal (`viewModal`)

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | string | Yes | Modal title |
| `size` | string | No | Modal size: `sm`, `md` (default), `lg`, `xl`, `full` |
| `component` | React component | No | Custom component to render. Receives `data` prop with row data |
| `fields` | array | No | View field objects for displaying data |
| `footer` | object | No | `{ cancelButton?: boolean, cancelText?: string }` |

---

### Form Field Schema

Used by `modalConfig.*.formFields` and `filterConfig.fields`. Form fields follow the `formFieldType` shape used throughout the UI.

#### Common Field Keys (All Types)

| Key | Type | Required | Description |
|-----|------|----------|-------------|
| `key` | string | Yes | Property name for form data |
| `label` | string | No | Human-readable label |
| `type` | string | Yes | Field type: `text`, `number`, `email`, `password`, `select`, `checkbox`, `switch`, `phone`, `textarea`, `image`, `tinyEditor` |
| `required` | boolean | No | Field is required for form submission |
| `minLength` | number | No | Minimum character length |
| `parentClass` | string | No | Tailwind grid class (e.g., `col-span-6`) |
| `placeholder` | string | No | Placeholder text |
| `disabled` | boolean | No | Field is disabled |

#### Type-Specific Keys

##### Select Field

| Key | Type | Description |
|-----|------|-------------|
| `options` | array | `{ value: string|number|boolean, label: string }[]` |
| `multiple` | boolean | Allow multiple selections |
| `search` | boolean | Show search input inside dropdown |
| `dropdownMaxHeight` | string | CSS height value (e.g., `300px`) |

##### Checkbox Field

| Key | Type | Description |
|-----|------|-------------|
| `options` | array | `{ value, label }[]` |
| `multiple` | boolean | Allow selecting multiple values (component prop: `multiSelect`) |

##### Switch Field

| Key | Type | Description |
|-----|------|-------------|
| `options` | array | Optional radio-like options: `[{ label, value }]` |
| `text` | string | Description text shown next to switch |

##### Phone Field

| Key | Type | Description |
|-----|------|-------------|
| `countriesList` | boolean | Show country selector |
| `defaultCountry` | string | ISO country code (e.g., `US`) |
| `search` | boolean | Enable searching countries |
| `placeholder` | string | Placeholder text |

##### Textarea Field

| Key | Type | Description |
|-----|------|-------------|
| `rows` | number | Number of visible rows |

##### Image Field

| Key | Type | Description |
|-----|------|-------------|
| `accept` | string | MIME type filter (default: `image/*`) |
| `dragDrop` | boolean | Enable drag-and-drop upload |

##### TinyEditor Field

| Key | Type | Description |
|-----|------|-------------|
| `editorKey` | string | TinyMCE API key |
| `fontFamily` | string | Default font family |
| `height` | number | Editor height in pixels |
| `imageUploadHandler` | function | `(blobInfo) => Promise<string>`. Returns image URL |

#### Return Values / onSubmit Handler

`onSubmit(formData)` receives an object keyed by `field.key` values.

---

### Small/UI components (props summary)

| Component | Key Props | Purpose |
|-----------|-----------|----------|
| **Button** | `variant`, `color`, `size`, `fullWidth`, `className`, `onClick`, `type`, `disabled` | Reusable button with multiple style variants (`contained`, `outlined`, `text`) and colors |
| **Chip** | `label`, `variant`, `color` | Display small labeled badges with `contained`, `outline`, or `soft` styles |
| **Modal** | `isOpen`, `onClose`, `icon`, `title`, `size`, `actionButtons`, `loadingBtn` | Modal dialog for forms, confirmations, and views with flexible sizing |
| **FilterDrawer** | `isOpen`, `onClose`, `config`, `onApply` | Side panel for applying filters with customizable form fields |

#### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | string | `contained` | Style variant: `contained`, `outlined`, `text` |
| `color` | string | `primary` | Color: `primary`, `success`, `error`, `default` |
| `size` | string | `default` | Size: `sm`, `md`, `lg`, `xl`, `default` |
| `fullWidth` | boolean | `false` | Stretch button to full width |
| `className` | string | — | Custom CSS class |
| `onClick` | function | — | Click event handler |
| `type` | string | `button` | HTML button type: `button`, `submit`, `reset` |
| `disabled` | boolean | `false` | Disable button interaction |

#### Chip Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | Required | Badge text |
| `variant` | string | `contained` | Style variant: `contained`, `outline`, `soft` |
| `color` | string | `blue` | Color: `blue`, `teal`, `purple`, `yellow`, `green`, `red`, `gray` |

#### Modal Props (Direct Usage)

| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | boolean | Show/hide modal |
| `onClose` | function | Callback when modal closes |
| `icon` | React node | Icon element displayed in modal header |
| `title` | string | Modal title |
| `size` | string | Size: `sm`, `md`, `lg`, `xl`, `full` |
| `actionButtons` | array | `[{ type, label, color, variant, onClick, disabled }]` |
| `loadingBtn` | boolean | Show loading state on action button |

#### FilterDrawer Props

| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | boolean | Show/hide filter drawer |
| `onClose` | function | Callback when drawer closes |
| `config` | object | Fields array using `formFieldType` schema |
| `onApply` | function | Callback: `(filters: object) => void` |

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

## License
MIT
