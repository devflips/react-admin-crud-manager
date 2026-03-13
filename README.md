# React Admin CRUD Manager

A reusable React CRUD admin template with modular components for rapid admin dashboard development.

## Features

- Plug-and-play CRUD page component
- Modular, customizable UI components (Table, Modal, Form, etc.)
- Built with React 18+ and TypeScript
- Tailwind CSS for styling
- Server-side and client-side data handling
- Sorting, filtering, searching, and pagination support
- Rich form fields including text, select, image upload, rich text editor, and more

## Installation

```sh
npm install react-admin-crud-manager
```

## Usage

### 1. Use the component

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

## Props

Below is a complete reference of the public props accepted by this package (types, accepted values and defaults). The library exposes a single primary component (`Crud`) that receives a single `config` prop — most configuration lives inside that object.

---

### Crud (default export)

`<Crud config={config} />`

- `config` (object) — required. Top-level configuration object used by the CRUD page.

#### Key properties of `config`

| Property          | Type     | Required | Description                                                                                                                                                                                                                                                                                                                                                         |
| ----------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`           | string   | Yes      | Title of the CRUD page                                                                                                                                                                                                                                                                                                                                              |
| `description`     | string   | No       | Optional description text                                                                                                                                                                                                                                                                                                                                           |
| `buttonText`      | string   | No       | Custom text for add button                                                                                                                                                                                                                                                                                                                                          |
| `fetchData`       | function | Yes      | Async function to fetch data. Signature: `async ({ search, rows_per_page, current_page, sort_by, sort_order, ...filters }) => Promise<{ data: Array, pagination?: { current_page: number, rows_per_page: number, total_pages: number, total_records: number } }>`. Component expects `resp.data` (array) and optional `resp.pagination` for server-side pagination. |
| `fetchRowDetails` | function | No       | Async function to fetch additional details for a row. Signature: `async (item) => Promise<any>`. Used for view modal or details.                                                                                                                                                                                                                                    |
| `isStaticData`    | boolean  | No       | Default: `false`. If true, add/edit/delete apply client-side instead of re-fetching                                                                                                                                                                                                                                                                                 |
| `tableConfig`     | object   | Yes      | Table configuration — [see tableConfig](#tableconfig-configuration)                                                                                                                                                                                                                                                                                                 |
| `modalConfig`     | object   | No       | Modal definitions — [see modalConfig](#modalconfig-definitions)                                                                                                                                                                                                                                                                                                     |
| `filterConfig`    | object   | No       | Filter drawer configuration — [see Form Field Schema](#form-field-schema)                                                                                                                                                                                                                                                                                           |

---

### tableConfig Configuration

#### Table Configuration Keys

| Key          | Type                    | Description                 | Accepted Values / Example                                                                                                                       |
| ------------ | ----------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `table_head` | array of column objects | Column definitions          | Array of table column objects (see [Table column object](#table-column-object-table_head))                                                      |
| `search`     | object                  | Search functionality config | `{ enabled: true, useServerSideSearch?: false, searchKeys?: ["name", "email"] }`                                                                |
| `filter`     | object                  | Filter drawer config        | `{ enabled: true, useServerSideFilters?: false }`                                                                                               |
| `pagination` | object                  | Pagination controls         | `{ enabled: true, useServerSidePagination?: false }`                                                                                            |
| `sort`       | object                  | Sorting configuration       | `{ enabled: true, useServerSideSorting?: false, autoGenerate: true, onChange?: (payload) => void, options?: [...], clearLabel?: "Clear Sort" }` |
| `exportCSV`  | object                  | Export data as CSV          | `{ enabled: true, fileName: "users.csv", fields: [{ label: "Name", key: "name" }, ...] }`                                                       |
| `rowClick`   | function or boolean     | Callback on table row click | `(row: object, rowIndex: number) => void` or `true` (setting true will open details)                                                            |

<br>

#### Table Column Object (`table_head[]`)

| Key              | Type     | Description                                                                                                        | Accepted Values / Example                                                                                                      |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `key`            | string   | Property name in row objects                                                                                       | `"id"`, `"name"`, `"email"` (must exist in data objects)                                                                       |
| `title`          | string   | Column header text                                                                                                 | `"User ID"`, `"Full Name"`, `"Email Address"`                                                                                  |
| `type`           | string   | Column renderer type                                                                                               | `"plain"` (default), `"index"` (row number), `"group"` (avatar+text), `"chip"` (badge), `"date"`, `"avatar"`, `"menu_actions"` |
| `imageKey`       | string   | Image property for avatar/group types                                                                              | `"profileImage"`, `"avatarUrl"` (path to image in data object)                                                                 |
| `titleKey`       | string   | Title property for group/avatar types                                                                              | `"name"`, `"fullName"` (property key in data object)                                                                           |
| `subtitleKey`    | string   | Subtitle property for group/avatar types                                                                           | `"email"`, `"department"` (property key in data object)                                                                        |
| `onClickDetails` | boolean  | Clicking cell opens view details modal                                                                             | `true`, `false` (default: `false`)                                                                                             |
| `variant`        | string   | Chip styling variant                                                                                               | `"contained"`, `"outline"`, `"soft"` (used with `type: "chip"`)                                                                |
| `chipOptions`    | array    | Map values to chip labels and colors; array of `{ value: string\|number\|boolean, label: string, color?: string }` | `[{ value: "active", label: "Active", color: "green" }, { value: "inactive", label: "Inactive", color: "red" }]`               |
| `defaultColor`   | string   | Default color for chips (if no match in chipOptions)                                                               | `"green"`, `"red"`, `"blue"`, `"yellow"`, `"purple"`, `"gray"`, etc.                                                           |
| `className`      | string   | Custom CSS class for cell content                                                                                  | Tailwind classes: `"font-bold text-sm text-gray-600"`                                                                          |
| `format`         | string   | Date format pattern                                                                                                | `"DD MMM YYYY"`, `"YYYY-MM-DD"`, `"DD/MM/YYYY HH:mm"` (uses date-fns patterns)                                                 |
| `menuList`       | array    | Action menu items; array of `{ title: string, type: string, variant?: string, icon?: ReactNode }`                  | `[{ title: "Edit", type: "edit", icon: <EditIcon /> }, { title: "Delete", type: "delete", icon: <TrashIcon /> }]`              |
| `render`         | function | Custom cell renderer (overrides built-in logic)                                                                    | `(row: object, rowIndex: number) => ReactNode`; e.g., `(row) => <span>{row.name.toUpperCase()}</span>`                         |

---

### modalConfig Definitions

#### Add & Edit Modal (`addModal`, `editModal`)

| Property        | Type      | Required | Description                            | Accepted Values / Example                                                                                                                                       |
| --------------- | --------- | -------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`         | string    | Yes      | Modal title                            | `"Add New User"`, `"Edit User Profile"`                                                                                                                         |
| `icon`          | ReactNode | No       | Icon element displayed in modal header | `<PlusIcon />`, `<EditIcon />`                                                                                                                                  |
| `size`          | string    | No       | Modal width                            | `"sm"`, `"md"` (default), `"lg"`, `"xl"`, `"full"`                                                                                                              |
| `formClass`     | string    | No       | Custom CSS class for form wrapper      | Tailwind classes: `"grid grid-cols-12 gap-4"`                                                                                                                   |
| `formFields`    | array     | Yes      | Form field objects                     | Array of form field objects (see [Form Field Schema](#form-field-schema))                                                                                       |
| `handleSubmit`  | function  | Yes      | Async callback on form submission      | `async (formData) => Promise<{ newObject, message?: string }>` (add), `async (formData, item) => Promise<{ newObject, targetObject, message?: string }>` (edit) |
| `actionButtons` | array     | No       | Custom action buttons                  | `[{ type: "submit", label: "Save", color: "primary", variant: "contained", onClick?: (e, item) => void, disabled?: boolean }]`                                  |

#### Delete Modal (`deleteModal`)

| Property        | Type      | Required | Description                                       | Accepted Values / Example                                                                                                                              |
| --------------- | --------- | -------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`         | string    | No       | Modal title                                       | `"Delete User"`, `"Confirm Delete"`                                                                                                                    |
| `icon`          | ReactNode | No       | Icon element displayed in modal header            | `<TrashIcon />`, `<WarningIcon />`                                                                                                                     |
| `size`          | string    | No       | Modal width                                       | `"sm"` (default), `"md"`, `"lg"`, `"xl"`, `"full"`                                                                                                     |
| `confirmText`   | string    | No       | Confirmation message text                         | `"Are you sure you want to delete this user?"`, `"This action cannot be undone."`                                                                      |
| `referenceKey`  | string    | No       | Property key to display as confirmation reference | `"name"`, `"email"` (shows the value from selected item)                                                                                               |
| `actionButtons` | array     | No       | Custom action buttons                             | `[{ type: "button", label: "Delete", color: "error", variant: "contained", onClick: async (event  , selectedItem) => Promise<{ targetObject }>},... ]` |

#### View Modal (`viewModal`)

| Property          | Type            | Required | Description                                        | Accepted Values / Example                                                                             |
| ----------------- | --------------- | -------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `title`           | string          | Yes      | Modal title                                        | `"User Details"`, `"View Profile"`                                                                    |
| `icon`            | ReactNode       | No       | Icon element displayed in modal header             | `<EyeIcon />`, `<InfoIcon />`                                                                         |
| `size`            | string          | No       | Modal width                                        | `"sm"`, `"md"` (default), `"lg"`, `"xl"`, `"full"`                                                    |
| `component`       | React component | No       | Custom component to render (receives `data` prop)  | `(props) => <CustomViewComponent data={props.data} />`                                                |
| `variant`         | string          | No       | View layout style                                  | `"default"`, `"card"`, `"split"`                                                                      |
| `fields`          | array           | No       | View field objects (if not using custom component) | Array of field objects (see [View Field Schema](#view-field-schema))                                  |
| `styles`          | object          | No       | Custom CSS classes for various view elements       | `{ containerClass: "...", rowClass: "...", labelClass: "...", valueClass: "...", ... }`               |
| `modalClassNames` | object          | No       | Custom classes for modal structure                 | `{ overlay: "...", container: "...", header: "...", body: "...", footer: "...", closeButton: "..." }` |
| `footer`          | object          | No       | Footer configuration                               | `{ cancelButton: true, cancelText: "Close" }`                                                         |

---

### Form Field Schema

Used by `modalConfig.*.formFields`, `filterConfig.fields`, and `viewModal.fields`. All form fields follow the `FormField` shape.

#### Common Field Properties (All Types)

| Key                | Type     | Required | Description                                 | Accepted Values / Example                                                                                                                                                           |
| ------------------ | -------- | -------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`              | string   | Yes      | Property name/identifier for form data      | `"username"`, `"email"`, `"birth_date"`                                                                                                                                             |
| `label`            | string   | No       | Human-readable label for the field          | `"User Name"`, `"Email Address"`, `"Date of Birth"`                                                                                                                                 |
| `type`             | string   | Yes      | Field type determining the input/renderer   | `"text"`, `"number"`, `"email"`, `"password"`, `"select"`, `"checkbox"`, `"radio"`, `"switch"`, `"phone"`, `"textarea"`, `"image"`, `"video"`, `"audio"`, `"tinyEditor"`, `"group"` |
| `required`         | boolean  | No       | Field must have a value for form submission | `true`, `false` (default: `false`)                                                                                                                                                  |
| `minLength`        | number   | No       | Minimum character length (for text fields)  | `5`, `10`, `50`                                                                                                                                                                     |
| `placeholder`      | string   | No       | Placeholder text shown in empty field       | `"Enter your name"`, `"user@example.com"`                                                                                                                                           |
| `disabled`         | boolean  | No       | Field is disabled and read-only             | `true`, `false` (default: `false`)                                                                                                                                                  |
| `parentClass`      | string   | No       | Custom CSS classes for field wrapper (grid) | Tailwind classes: `"col-span-6"`, `"col-span-12"`                                                                                                                                   |
| `renderCondition`  | function | No       | Show field based on form data               | `(formData: Record<string, any>) => boolean`; e.g., `(data) => data.userType === 'admin'`                                                                                           |
| `customValidation` | function | No       | Custom validation logic                     | `(value: any) => boolean \| string`; return `false` for invalid, error message string, or `true` for valid                                                                          |
| `className`        | string   | No       | Custom CSS class for input element          | Tailwind classes: `"bg-gray-100 rounded-lg"`                                                                                                                                        |

#### Type-Specific Properties

##### `"text"` Field

| Property           | Type    | Description               | Example                                                                      |
| ------------------ | ------- | ------------------------- | ---------------------------------------------------------------------------- |
| `pattern`          | string  | Regex validation pattern  | `"^[a-zA-Z ]*$"` (letters and spaces only)                                   |
| `mask`             | string  | Input mask pattern        | `"(99) 99999-9999"` (format: 9=digit, A=letter, X=alphanumeric, \*=any char) |
| `maskApplyOnValue` | boolean | Apply mask formData value | `true`, `false` (default: `true`)                                            |

##### `"number"` Field

| Property              | Type    | Description            | Example                            |
| --------------------- | ------- | ---------------------- | ---------------------------------- |
| `negativeNumberAllow` | boolean | Allow negative numbers | `true`, `false` (default: `false`) |

##### `"select"` Field

| Property            | Type    | Description                                  | Accepted Values / Example                                                                                        |
| ------------------- | ------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `options`           | array   | Select options; `{ value, label, color? }[]` | `[{ value: "active", label: "Active", color: "green" }, { value: "inactive", label: "Inactive", color: "red" }]` |
| `countriesList`     | boolean | Country selector dropdown                    | `true`, `false` (default: `false`)                                                                               |
| `multiple`          | boolean | Allow selecting multiple options             | `true`, `false` (default: `false`)                                                                               |
| `search`            | boolean | Enable searchable dropdown                   | `true`, `false` (default: `false`)                                                                               |
| `dropdownMaxHeight` | number  | Max height of dropdown in pixels             | `300`, `400`                                                                                                     |
| `defaultValue`      | any     | Initial value for the field                  | `"John"`, `25`, `true`, `["option1", "option2"]`                                                                 |

##### `"checkbox"` Field

| Property   | Type    | Description                            | Accepted Values / Example                                                        |
| ---------- | ------- | -------------------------------------- | -------------------------------------------------------------------------------- |
| `options`  | array   | Checkbox options; `{ value, label }[]` | `[{ value: "read", label: "Can Read" }, { value: "write", label: "Can Write" }]` |
| `multiple` | boolean | Allow selecting multiple values        | `true` (default: `true`); affects how data is stored                             |

##### `"radio"` Field

| Property  | Type  | Description                                | Accepted Values / Example                                                                                      |
| --------- | ----- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `options` | array | Radio button options; `{ value, label }[]` | `[{ value: "male", label: "Male" }, { value: "female", label: "Female" }, { value: "other", label: "Other" }]` |

##### `"switch"` Field

| Property  | Type   | Description                                  | Accepted Values / Example                                        |
| --------- | ------ | -------------------------------------------- | ---------------------------------------------------------------- |
| `text`    | string | Description/label shown next to switch       | `"Enable notifications"`, `"Is admin"`                           |
| `options` | array  | Optional radio-like options (radio fallback) | `[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]` |

##### `"phone"` Field

| Property         | Type    | Description                            | Accepted Values / Example              |
| ---------------- | ------- | -------------------------------------- | -------------------------------------- |
| `countriesList`  | boolean | Show country selector dropdown         | `true`, `false` (default: `false`)     |
| `defaultCountry` | string  | Default country ISO code               | `"US"`, `"GB"`, `"IN"`, `"CA"`, `"AU"` |
| `search`         | boolean | Enable searching countries in selector | `true`, `false` (default: `false`)     |
| `placeholder`    | string  | Placeholder text                       | `"+1 (555) 000-0000"`                  |

##### `"textarea"` Field

| Property | Type   | Description            | Accepted Values / Example |
| -------- | ------ | ---------------------- | ------------------------- |
| `rows`   | number | Number of visible rows | `3`, `5`, `10`            |

##### `"image"` Field

| Property      | Type    | Description                      | Accepted Values / Example                       |
| ------------- | ------- | -------------------------------- | ----------------------------------------------- |
| `accept`      | string  | MIME type filter                 | `"image/*"` (default), `"image/jpeg,image/png"` |
| `dragDrop`    | boolean | Enable drag-and-drop upload      | `true`, `false` (default: `false`)              |
| `cropImage`   | boolean | Enable image cropping modal      | `true`, `false` (default: `false`)              |
| `aspectRatio` | number  | Crop aspect ratio (width:height) | `1` (1:1 square), `16/9`, `4/3`, `1.5`          |
| `multiple`    | boolean | Allow selecting images           | `true`, `false` (default: `false`)              |
| `maxImages`   | number  | Limit the multiple select images | `8`, `4`                                        |

##### `"video"` Field

| Property   | Type    | Description                 | Accepted Values / Example                       |
| ---------- | ------- | --------------------------- | ----------------------------------------------- |
| `accept`   | string  | MIME type filter            | `"video/*"` (default), `"video/mp4,video/webm"` |
| `dragDrop` | boolean | Enable drag-and-drop upload | `true`, `false` (default: `false`)              |
| `maxSize`  | number  | Maximum file size in bytes  | `5242880` (5MB), `10485760` (10MB)              |

##### `"audio"` Field

| Property   | Type    | Description                 | Accepted Values / Example                       |
| ---------- | ------- | --------------------------- | ----------------------------------------------- |
| `accept`   | string  | MIME type filter            | `"audio/*"` (default), `"audio/mpeg,audio/wav"` |
| `dragDrop` | boolean | Enable drag-and-drop upload | `true`, `false` (default: `false`)              |
| `maxSize`  | number  | Maximum file size in bytes  | `5242880` (5MB), `10485760` (10MB)              |

##### `"tinyEditor"` Field

| Property     | Type   | Description                   | Accepted Values / Example                                   |
| ------------ | ------ | ----------------------------- | ----------------------------------------------------------- |
| `editorKey`  | string | TinyMCE API key (required)    | Get from `import.meta.env.VITE_EDITOR_KEY` or pass directly |
| `fontFamily` | string | Default font family in editor | `"Arial"`, `"Georgia"`, `"Courier New"`                     |
| `height`     | number | Editor height in pixels       | `300`, `500`                                                |

---

### View Field Schema

Used by `viewModal.fields` to display data in view/details modals.

| Key               | Type      | Description                                | Accepted Values / Example                                                     |
| ----------------- | --------- | ------------------------------------------ | ----------------------------------------------------------------------------- |
| `key`             | string    | Property name to display                   | `"username"`, `"email"`, `"birth_date"`                                       |
| `label`           | string    | Display label for the field                | `"User Name"`, `"Email Address"`                                              |
| `type`            | string    | Display type (similar to form field types) | `"text"`, `"date"`, `"chip"`, `"image"`, `"avatar"`, `"group"`, `"cardGroup"` |
| `format`          | string    | Date format pattern                        | `"DD MMM YYYY"`, `"YYYY-MM-DD"`, `"DD/MM/YYYY HH:mm"`                         |
| `imageKey`        | string    | Image property for avatar types            | `"profileImage"`, `"avatarUrl"`                                               |
| `titleKey`        | string    | Title property for group/avatar types      | `"name"`, `"fullName"`                                                        |
| `subtitleKey`     | string    | Subtitle property for group/avatar types   | `"email"`, `"department"`                                                     |
| `variant`         | string    | Chip display variant                       | `"contained"`, `"outline"`, `"soft"`                                          |
| `chipOptions`     | array     | Map values to chip labels and colors       | `[{ value: "active", label: "Active", color: "green" }]`                      |
| `defaultColor`    | string    | Default chip color                         | `"green"`, `"red"`, `"blue"`, `"yellow"`, `"purple"`, `"gray"`                |
| `className`       | string    | Custom CSS class for display element       | Tailwind classes                                                              |
| `blockClass`      | string    | Custom CSS class for field block/wrapper   | Tailwind classes                                                              |
| `icon`            | ReactNode | Icon element to display with field         | `<UserIcon />`, `<MailIcon />`                                                |
| `renderCondition` | function  | Show field based on data                   | `(data: Record<string, any>) => boolean`                                      |

---

## Advanced Features

### 1. Export CSV

Export table data as a CSV file with custom field selection:

```js
const config = {
  // ... other config
  tableConfig: {
    table_head: [...],
    data: [...]
    exportCSV: {
      enabled: true,
      fileName: "users_export.csv",
      fields: [
        { label: "ID", key: "id" },
        { label: "Name", key: "name" },
        { label: "Email", key: "email" },
        { label: "Status", key: "status" }
      ]
    }
  }
};
```

### 2. Conditional Field Rendering

Show/hide form fields based on other field values using `renderCondition`:

```js
const formFields = [
  {
    key: "userType",
    label: "User Type",
    type: "select",
    options: [
      { value: "admin", label: "Administrator" },
      { value: "user", label: "Regular User" },
    ],
  },
  {
    key: "adminLevel",
    label: "Admin Level",
    type: "select",
    renderCondition: (formData) => formData.userType === "admin", // Only show if userType is admin
    options: [
      { value: "superadmin", label: "Super Admin" },
      { value: "moderator", label: "Moderator" },
    ],
  },
  {
    key: "department",
    label: "Department",
    type: "text",
    renderCondition: (formData) => formData.userType === "user", // Only show if userType is user
  },
];
```

### 3. Custom Field Validation

Add custom validation logic to form fields:

```js
const formFields = [
  {
    key: "email",
    label: "Email",
    type: "email",
    customValidation: (value) => {
      // Return true/false or custom error message
      if (!value.includes("@company.com")) {
        return "Email must be a company email"; // Error message
      }
      return true; // Valid
    },
  },
  {
    key: "age",
    label: "Age",
    type: "number",
    customValidation: (value) => {
      if (value < 18) return "Must be 18 or older";
      if (value > 120) return "Please enter a valid age";
      return true;
    },
  },
];
```

### 4. Custom Table Cell Rendering

Use the `render` function for complex cell display:

```js
const tableConfig = {
  table_head: [
    { key: "id", title: "ID", type: "index" },
    {
      key: "name",
      title: "Name",
      render: (row, rowIndex) => (
        <div className="font-bold text-blue-600">{row.name.toUpperCase()}</div>
      )
    },
    {
      key: "price",
      title: "Price",
      render: (row) => (
        <span className="text-green-600 font-semibold">
          ${row.price.toFixed(2)}
        </span>
      )
    },
    {
      key: "actions",
      title: "Actions",
      render: (row) => (
        <button onClick={() => console.log(row)}>
          Custom Action
        </button>
      )
    }
  ],
  data: [...]
};
```

### 5. View Modal Variants

Display details in different layouts with view modal variants:

```js
// Default variant - standard grid layout
const config = {
  modalConfig: {
    viewModal: {
      title: "User Details",
      variant: "default", // Standard grid layout
      fields: [
        { key: "name", label: "Full Name", type: "text" },
        { key: "email", label: "Email", type: "text" }
      ]
    }
  }
};

// Card variant - each field in an elevated card
const cardConfig = {
  modalConfig: {
    viewModal: {
      title: "User Details",
      variant: "card", // Each field is a separate card
      styles: {
        containerClass: "grid grid-cols-12 gap-4",
        cardGroupClass: "col-span-6 bg-white rounded-lg shadow p-4"
      },
      fields: [...]
    }
  }
};

// Split variant - property sheet style with dividing lines
const splitConfig = {
  modalConfig: {
    viewModal: {
      title: "User Details",
      variant: "split", // Clean property-sheet layout
      fields: [...]
    }
  }
};
```

### 6. Custom View Component

Use a fully custom component for the view modal:

```js
const CustomUserView = ({ data }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-4">
      <img
        src={data.avatarUrl}
        alt={data.name}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="text-xl font-bold">{data.name}</h2>
        <p className="text-gray-600">{data.email}</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="text-sm font-semibold">Phone</label>
        <p>{data.phone}</p>
      </div>
      <div>
        <label className="text-sm font-semibold">Status</label>
        <p>{data.status}</p>
      </div>
    </div>
  </div>
);

const config = {
  modalConfig: {
    viewModal: {
      title: "User Details",
      component: CustomUserView, // Use custom component
    },
  },
};
```

### 7. Row Click Handler

Handle clicks on table rows:

```js
// For a custom function
const config = {
  tableConfig: {
    table_head: [...],
    data: [...],
    rowClick: (row, rowIndex) => {
      console.log(`Row ${rowIndex} clicked:`, row);
      // Open custom drawer, navigate, or perform any action
    }
  }
};

// For open details on row click
const config = {
  tableConfig: {
    table_head: [...],
    data: [...],
    rowClick: true,
  }
};

```

### 8. Server-Side Filtering

Implement server-side filtering with custom filter fields:

```js
const config = {
  tableConfig: {
    filter: {
      enabled: true,
      useServerSideFilters: true, // Enable server-side filtering
    },
    filterConfig: {
      fields: [
        {
          key: "status",
          label: "Status",
          type: "select",
          options: [
            { value: "active", label: "Active" },
            { value: "inactive", label: "Inactive" },
          ],
        },
        {
          key: "createdFrom",
          label: "Created From",
          type: "date",
        },
        {
          key: "createdTo",
          label: "Created To",
          type: "date",
        },
      ],
    },
  },
  fetchData: async ({
    search,
    rows_per_page,
    current_page,
    sort_by,
    sort_order,
    ...filters // Additional filter params passed here
  }) => {
    const resp = await api.get("/users", {
      params: {
        q: search,
        limit: rows_per_page,
        page: current_page,
        sort_by,
        sort_order,
        ...filters, // Include filters in API call
      },
    });
    return { data: resp.items, pagination: resp.pagination };
  },
};
```

### 9. Input Masking

Format input with masks using pattern syntax:

```js
const formFields = [
  {
    key: "phone",
    label: "Phone Number",
    type: "text",
    mask: "(99) 99999-9999", // Mask pattern
    maskApplyOnValue: true, // Apply mask to default value
    placeholder: "(00) 00000-0000",
  },
  {
    key: "zipCode",
    label: "ZIP Code",
    type: "text",
    mask: "99999-999", // Pattern: 9 = digit, A = letter, X = alphanumeric, * = any
    placeholder: "00000-000",
  },
  {
    key: "creditCard",
    label: "Credit Card",
    type: "text",
    mask: "9999 9999 9999 9999",
    placeholder: "0000 0000 0000 0000",
  },
];
```

**Mask Pattern Reference:**

- `9` — Digit (0-9)
- `A` — Letter (a-zA-Z)
- `X` — Alphanumeric (a-zA-Z0-9)
- `*` — Any character
- Any other character is literal (e.g., `-`, `/`, ` `)

### 10. Image Cropping

Enable image cropping in image picker:

```js
const formFields = [
  {
    key: "profileImage",
    label: "Profile Picture",
    type: "image",
    cropImage: true, // Enable cropping modal
    aspectRatio: 1, // 1:1 square ratio
    dragDrop: true,
  },
  {
    key: "bannerImage",
    label: "Banner Image",
    type: "image",
    cropImage: true,
    aspectRatio: 16 / 9, // 16:9 widescreen ratio
    dragDrop: true,
  },
];
```

### 11. Sortable Columns

Configure sorting with custom options and auto-generation:

```js
const config = {
  tableConfig: {
    sort: {
      enabled: true,
      useServerSideSorting: false, // Client-side sorting
      autoGenerate: true, // Auto-generate sort options from table headers
      fields: ["name", "email", "createdAt"], // Fields to make sortable
      defaultValue: "name", // Default sort field
      clearLabel: "Clear Sort",
      onChange: (payload) => {
        console.log("Sort changed:", payload);
        // payload contains: { value, option, key, order, type }
      },
    },
    table_head: [
      { key: "name", title: "Name" },
      { key: "email", title: "Email" },
      { key: "createdAt", title: "Created Date" },
    ],
  },
};
```

### Examples

#### Example 1: Minimal Client-Side CRUD

```js
import Crud from "react-admin-crud-manager";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "inactive" },
];

function App() {
  const config = {
    title: "Users",
    fetchData: async () => ({ data: users, pagination: null }),
    isStaticData: true,
    tableConfig: {
      table_head: [
        { key: "id", title: "ID", type: "index" },
        { key: "name", title: "Name" },
        { key: "email", title: "Email" },
        {
          key: "status",
          title: "Status",
          type: "chip",
          chipOptions: [
            { value: "active", label: "Active", color: "green" },
            { value: "inactive", label: "Inactive", color: "red" },
          ],
        },
      ],
      search: { enabled: true, searchKeys: ["name", "email"] },
      pagination: { enabled: true },
    },
    modalConfig: {
      addModal: {
        title: "Add User",
        formFields: [
          { key: "name", label: "Name", type: "text", required: true },
          { key: "email", label: "Email", type: "email", required: true },
          {
            key: "status",
            label: "Status",
            type: "select",
            options: [
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ],
          },
        ],
        handleSubmit: async (formData) => ({
          newObject: {
            ...formData,
            id: Math.max(...users.map((u) => u.id)) + 1,
          },
        }),
      },
    },
  };

  return <Crud config={config} />;
}

export default App;
```

#### Example 2: Server-Side CRUD with Advanced Features

```js
import Crud from "react-admin-crud-manager";
import axios from "axios";
import { PlusIcon, EditIcon, TrashIcon } from "lucide-react";

function App() {
  const api = axios.create({ baseURL: "https://api.example.com" });

  const config = {
    title: "Products",
    description: "Manage your products inventory",
    buttonText: "Add Product",
    fetchData: async ({
      search,
      rows_per_page,
      current_page,
      sort_by,
      sort_order,
      category,
      minPrice,
      maxPrice,
    }) => {
      const resp = await api.get("/products", {
        params: {
          q: search,
          limit: rows_per_page,
          page: current_page,
          sort_by,
          sort_order,
          category,
          minPrice,
          maxPrice,
        },
      });
      return {
        data: resp.data.items,
        pagination: {
          current_page: resp.data.page,
          rows_per_page: resp.data.limit,
          total_pages: resp.data.totalPages,
          total_records: resp.data.total,
        },
      };
    },
    tableConfig: {
      table_head: [
        { key: "id", title: "ID", type: "index" },
        {
          key: "image",
          title: "Image",
          type: "avatar",
          imageKey: "image",
          titleKey: "name",
        },
        { key: "name", title: "Product Name" },
        {
          key: "price",
          title: "Price",
          render: (row) => `$${row.price.toFixed(2)}`,
        },
        {
          key: "category",
          title: "Category",
          type: "chip",
          variant: "soft",
          chipOptions: [
            { value: "electronics", label: "Electronics", color: "blue" },
            { value: "clothing", label: "Clothing", color: "purple" },
          ],
        },
      ],
      search: {
        enabled: true,
        useServerSideSearch: true,
      },
      filter: { enabled: true, useServerSideFilters: true },
      pagination: { enabled: true, useServerSidePagination: true },
      sort: { enabled: true, useServerSideSorting: true, autoGenerate: true },
      exportCSV: {
        enabled: true,
        fileName: "products.csv",
        fields: [
          { label: "ID", key: "id" },
          { label: "Name", key: "name" },
          { label: "Price", key: "price" },
        ],
      },
      filterConfig: {
        fields: [
          {
            key: "category",
            label: "Category",
            type: "select",
            options: [
              { value: "electronics", label: "Electronics" },
              { value: "clothing", label: "Clothing" },
            ],
          },
          { key: "minPrice", label: "Min Price", type: "number" },
          { key: "maxPrice", label: "Max Price", type: "number" },
        ],
      },
    },
    modalConfig: {
      addModal: {
        title: "Add Product",
        size: "lg",
        icon: <PlusIcon />,
        formFields: [
          {
            key: "name",
            label: "Product Name",
            type: "text",
            required: true,
            parentClass: "col-span-12",
          },
          {
            key: "price",
            label: "Price",
            type: "number",
            required: true,
            parentClass: "col-span-6",
          },
          {
            key: "category",
            label: "Category",
            type: "select",
            required: true,
            parentClass: "col-span-6",
            options: [
              { value: "electronics", label: "Electronics" },
              { value: "clothing", label: "Clothing" },
            ],
          },
          {
            key: "stock",
            label: "Stock",
            type: "number",
            required: true,
            parentClass: "col-span-6",
          },
          {
            key: "description",
            label: "Description",
            type: "textarea",
            rows: 4,
            parentClass: "col-span-12",
          },
          {
            key: "image",
            label: "Product Image",
            type: "image",
            cropImage: true,
            aspectRatio: 1,
            dragDrop: true,
            parentClass: "col-span-12",
          },
        ],
        handleSubmit: async (formData) => {
          const resp = await api.post("/products", formData);
          return {
            newObject: resp.data,
            message: "Product added successfully!",
          };
        },
      },
      editModal: {
        title: "Edit Product",
        size: "lg",
        icon: <EditIcon />,
        formFields: [
          {
            key: "name",
            label: "Product Name",
            type: "text",
            required: true,
            parentClass: "col-span-12",
          },
          {
            key: "price",
            label: "Price",
            type: "number",
            required: true,
            parentClass: "col-span-6",
          },
          {
            key: "stock",
            label: "Stock",
            type: "number",
            required: true,
            parentClass: "col-span-6",
          },
        ],
        handleSubmit: async (formData, item) => {
          const resp = await api.put(`/products/${item.id}`, formData);
          return { newObject: resp.data, targetObject: item };
        },
      },
      deleteModal: {
        title: "Delete Product",
        icon: <TrashIcon />,
        confirmText: "Are you sure you want to delete this product?",
        referenceKey: "name",
        actionButtons: [
          {
            type: "button",
            label: "Delete",
            color: "error",
            variant: "contained",
            onClick: async (event, item) => {
              event.preventDefault();
              await api.delete(`/products/${item.id}`);
              return { targetObject: item };
            },
          },
        ],
      },
      viewModal: {
        title: "Product Details",
        variant: "card",
        fields: [
          { key: "id", label: "ID" },
          { key: "name", label: "Product Name" },
          { key: "price", label: "Price" },
          { key: "stock", label: "Stock" },
          { key: "category", label: "Category", type: "chip" },
        ],
      },
    },
  };

  return <Crud config={config} />;
}

export default App;
```

#### Example 3: Complex Form with Conditional Fields and Validation

```js
const config = {
  title: "Advanced User Registration",
  tableConfig: {
    table_head: [
      { key: "id", title: "ID", type: "index" },
      { key: "name", title: "Full Name" },
      { key: "email", title: "Email" },
      { key: "userType", title: "Type", type: "chip" },
    ],
  },
  modalConfig: {
    addModal: {
      title: "Register New User",
      formFields: [
        {
          key: "name",
          label: "Full Name",
          type: "text",
          required: true,
          parentClass: "col-span-12",
          customValidation: (value) => {
            if (value.trim().split(" ").length < 2) {
              return "Please enter your full name";
            }
            return true;
          },
        },
        {
          key: "email",
          label: "Email Address",
          type: "email",
          required: true,
          parentClass: "col-span-12",
          customValidation: (value) => {
            if (!value.includes("@company.com")) {
              return "Must use company email";
            }
            return true;
          },
        },
        {
          key: "phone",
          label: "Phone",
          type: "phone",
          countriesList: true,
          mask: "(99) 99999-9999",
          parentClass: "col-span-12",
        },
        {
          key: "userType",
          label: "User Type",
          type: "select",
          required: true,
          parentClass: "col-span-6",
          options: [
            { value: "admin", label: "Administrator" },
            { value: "user", label: "Regular User" },
          ],
        },
        {
          key: "adminLevel",
          label: "Admin Level",
          type: "select",
          parentClass: "col-span-6",
          renderCondition: (data) => data.userType === "admin",
          options: [
            { value: "superadmin", label: "Super Admin" },
            { value: "moderator", label: "Moderator" },
          ],
        },
        {
          key: "permissions",
          label: "Permissions",
          type: "checkbox",
          parentClass: "col-span-12",
          multiple: true,
          renderCondition: (data) => data.userType === "admin",
          options: [
            { value: "read", label: "Can Read" },
            { value: "write", label: "Can Write" },
            { value: "delete", label: "Can Delete" },
          ],
        },
      ],
      handleSubmit: async (formData) => {
        const resp = await api.post("/users", formData);
        return {
          newObject: resp.data,
          message: `User ${formData.name} created successfully!`,
        };
      },
    },
  },
};
```

---

## Best Practices & Common Patterns

### 1. State Management with Static Data

For client-side CRUD operations, use `isStaticData: true` and manage data updates through modal handlers:

```js
const [users, setUsers] = useState(initialUsers);

const config = {
  fetchData: async () => ({ data: users, pagination: null }),
  isStaticData: true,
  modalConfig: {
    addModal: {
      handleSubmit: async (formData) => {
        const newUser = { ...formData, id: Date.now() };
        setUsers([...users, newUser]);
        return { newObject: newUser };
      },
    },
    editModal: {
      handleSubmit: async (formData, item) => {
        const updated = { ...item, ...formData };
        setUsers(users.map((u) => (u.id === item.id ? updated : u)));
        return { newObject: updated, targetObject: item };
      },
    },
  },
};
```

### 2. Server-Side Operations Best Practices

```js
// Always provide pagination info back to the component
const fetchData = async (params) => {
  const resp = await api.get("/items", { params });
  return {
    data: resp.data.items || [],
    pagination: {
      current_page: resp.data.meta.currentPage,
      rows_per_page: resp.data.meta.perPage,
      total_pages: resp.data.meta.totalPages,
      total_records: resp.data.meta.total,
    },
  };
};
```

### 3. Error Handling in Modal Submissions

```js
const handleSubmit = async (formData) => {
  try {
    const resp = await api.post("/items", formData);
    return {
      newObject: resp.data,
      message: "Item created successfully!", // Optional success message
    };
  } catch (error) {
    // Throw error to trigger snackbar error notification
    throw new Error(error.response?.data?.message || "Failed to create item");
  }
};
```

### 4. Dynamic Form Fields Based on Data

Combine `renderCondition` and `defaultValue` for dynamic forms:

```js
const formFields = [
  {
    key: "type",
    type: "select",
    options: [
      { value: "personal", label: "Personal" },
      { value: "business", label: "Business" },
    ],
  },
  {
    key: "companyName",
    label: "Company Name",
    type: "text",
    renderCondition: (data) => data.type === "business",
  },
  {
    key: "phone",
    type: "phone",
    renderCondition: (data) => data.type === "personal",
  },
];
```

### 5. Custom Table Rendering for Complex Data

```js
const tableConfig = {
  table_head: [
    {
      key: "user",
      title: "User",
      render: (row) => (
        <div className="flex items-center gap-3">
          <img src={row.avatar} className="w-8 h-8 rounded-full" />
          <div>
            <p className="font-semibold">{row.name}</p>
            <p className="text-xs text-gray-500">{row.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: "metrics",
      title: "Performance",
      render: (row) => (
        <div className="flex gap-2">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
            {row.completed}%
          </span>
        </div>
      ),
    },
  ],
};
```

### 6. Validation Patterns

```js
const formFields = [
  {
    key: "email",
    type: "email",
    customValidation: (value) => {
      // Async validation example
      const exists = checkEmailExists(value);
      if (exists) return "Email already in use";
      return true;
    },
  },
  {
    key: "password",
    type: "password",
    customValidation: (value) => {
      if (value.length < 8) return "Password must be at least 8 characters";
      if (!/[A-Z]/.test(value)) return "Must contain uppercase letter";
      if (!/[0-9]/.test(value)) return "Must contain a number";
      return true;
    },
  },
];
```

### 7. Handling File Uploads

```js
const handleImageUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const resp = await api.post("/upload", formData);
  return resp.data.url;
};

const config = {
  modalConfig: {
    addModal: {
      formFields: [
        {
          key: "image",
          type: "image",
          dragDrop: true,
          cropImage: true,
          aspectRatio: 1,
        },
      ],
      handleSubmit: async (formData) => {
        // Image data includes base64 or file data
        const imageUrl = await handleImageUpload(formData.image);
        const resp = await api.post("/items", {
          ...formData,
          image: imageUrl,
        });
        return { newObject: resp.data };
      },
    },
  },
};
```

### 8. Conditional Rendering with Row Data

```js
const viewModal = {
  fields: [
    {
      key: "status",
      label: "Status",
      type: "chip",
      renderCondition: (data) => data.status !== null,
      chipOptions: [
        { value: "active", label: "Active", color: "green" },
        { value: "suspended", label: "Suspended", color: "red" },
      ],
    },
    {
      key: "suspendReason",
      label: "Suspension Reason",
      renderCondition: (data) => data.status === "suspended", // Only show if suspended
    },
  ],
};
```

### 9. Multiple Sort Options (Server-Side)

```js
const tableConfig = {
  sort: {
    enabled: true,
    useServerSideSorting: true,
    options: [
      {
        value: "recent",
        label: "Most Recent",
        key: "createdAt",
        order: "desc",
      },
      { value: "oldest", label: "Oldest", key: "createdAt", order: "asc" },
      { value: "name-asc", label: "Name (A-Z)", key: "name", order: "asc" },
      { value: "name-desc", label: "Name (Z-A)", key: "name", order: "desc" },
      { value: "popular", label: "Most Popular", key: "views", order: "desc" },
    ],
    onChange: (payload) => {
      console.log(`Sorted by: ${payload.option?.label}`);
    },
  },
};
```

---

## License

MIT
