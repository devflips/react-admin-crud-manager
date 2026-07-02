# react-admin-crud-manager

A plug-and-play React CRUD admin component with full support for tables, modals, forms, filters, sorting, pagination, and more — all driven by a single `config` object.

🌐 **[Live Demo](https://crudmanager.devflips.com/)** - See all features in action!

---

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Config Reference](#config-reference)
  - [Top-Level Config](#top-level-config)
  - [Routes Integration](#routes-integration)
  - [tableConfig](#tableconfig)
  - [Table Column Object](#table-column-object-table_head)
  - [Tabs Configuration](#tabs-configuration-tabs)
  - [Sorting](#sorting-sort)
  - [modalConfig](#modalconfig)
  - [Add & Edit Modal](#add--edit-modal)
  - [Delete Modal](#delete-modal)
  - [View Modal](#view-modal)
  - [Form Field Schema](#form-field-schema)
  - [View Field Schema](#view-field-schema)
- [Features & Examples](#features--examples)
  - [Client-Side CRUD](#1-client-side-crud-minimal-setup)
  - [Server-Side CRUD](#2-server-side-crud-with-advanced-features)
  - [Conditional Fields & Validation](#3-conditional-fields--custom-validation)
  - [Export CSV](#4-export-csv)
  - [Server-Side Filtering](#5-server-side-filtering)
  - [Image Cropping](#6-image-cropping)
  - [Input Masking](#7-input-masking)
  - [Custom Table Cell Rendering](#8-custom-table-cell-rendering)
  - [Custom Toolbar Buttons](#9-custom-toolbar-buttons)
  - [Row Click Handler](#10-row-click-handler)
  - [View Modal Variants](#11-view-modal-variants)
  - [Custom View Component](#12-custom-view-component)
  - [Sorting Examples](#13-sorting-examples)
  - [Date Field Support](#14-date-field-support)
  - [Modal Action Buttons](#15-modal-action-buttons)
  - [Complete Field Types Showcase](#16-complete-field-types-showcase)
  - [Tabs Feature](#17-tabs-feature)
  - [React Router Integration](#18-react-router-integration)
  - [Custom Filter Component](#19-custom-filter-component)
- [CSS Customization](#css-customization)
  - [Primary Color Override](#primary-color-override)
  - [CSS Class Reference](#css-class-reference)
- [License](#license)

---

## Installation

```bash
npm install react-admin-crud-manager
```

---

## Quick Start

```jsx
import Crud from "react-admin-crud-manager";

function App() {
  const config = {
    title: "Users",
    fetchData: async () => ({ data: [] }),
    tableConfig: {
      table_head: [
        { key: "id", title: "ID", type: "index" },
        { key: "name", title: "Name" },
        { key: "email", title: "Email" },
      ],
    },
  };

  return <Crud config={config} />;
}
```

---

## Config Reference

### Top-Level Config

| Property          | Type     | Required | Description                                                                   |
| ----------------- | -------- | :------: | ----------------------------------------------------------------------------- |
| `title`           | string   |    ✅    | Page title                                                                    |
| `description`     | string   |    —     | Optional subtitle / description                                               |
| `buttonText`      | string   |    —     | Label for the Add button (default: `"Add"`)                                   |
| `fetchData`       | function |    ✅    | Async function to load data — see signature below                             |
| `fetchRowDetails` | function |    —     | Async function to load extra details for a row (used by view modal)           |
| `isStaticData`    | boolean  |    —     | `false` (default). Set `true` for client-side-only add / edit / delete        |
| `routes`          | object   |    —     | React Router routes config — [see Routes Integration](#routes-integration)    |
| `tableConfig`     | object   |    ✅    | Table configuration — [see tableConfig](#tableconfig)                         |
| `modalConfig`     | object   |    —     | Modal definitions — [see modalConfig](#modalconfig)                           |
| `filterConfig`    | object   |    —     | Filter drawer field definitions — [see Form Field Schema](#form-field-schema) |

**`fetchData` signature:**

```js
async ({
  search,
  rows_per_page,
  current_page,
  sort_by,
  sort_order,
  ...filters // any extra keys from filterConfig
}) => ({
  data: [], // array of row objects
  pagination: {
    // omit for client-side pagination
    current_page,
    rows_per_page,
    total_pages,
    total_records,
  },
});
```

---

### Routes Integration

Enable React Router integration for full-page Add/Edit/View forms instead of modals.

| Property | Type   | Description                                      |
| -------- | ------ | ------------------------------------------------ |
| `add`    | string | Route pattern for add page (e.g. `"/users/add"`) |
| `edit`   | string | Route pattern with param (e.g. `"/users/:id/edit"`) |
| `view`   | string | Route pattern with param (e.g. `"/users/:id"`) |

**Example:**

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crud from "react-admin-crud-manager";

const config = {
  title: "Users",
  fetchData: async () => ({ data: users }),
  routes: {
    add: "/users/add",
    edit: "/users/:id/edit",
    view: "/users/:id",
  },
  tableConfig: {
    table_head: [
      { key: "id", title: "ID", type: "index" },
      { key: "name", title: "Name" },
      { key: "email", title: "Email" },
    ],
  },
  modalConfig: {
    addModal: {
      title: "Add User",
      formFields: [
        { key: "name", label: "Name", type: "text", required: true },
        { key: "email", label: "Email", type: "email", required: true },
      ],
      handleSubmit: async (formData) => {
        const response = await api.post("/users", formData);
        return { newObject: response.data };
      },
    },
    editModal: {
      title: "Edit User",
      formFields: [
        { key: "name", label: "Name", type: "text", required: true },
        { key: "email", label: "Email", type: "email", required: true },
      ],
      handleSubmit: async (formData, item) => {
        const response = await api.put(`/users/${item.id}`, formData);
        return { newObject: response.data, targetObject: item };
      },
    },
    viewModal: {
      title: "User Details",
      fields: [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
      ],
    },
  },
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/*" element={<Crud config={config} />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**How it works:**
- Clicking "Add" button navigates to `/users/add` (full-page form)
- Clicking "Edit" in action menu navigates to `/users/:id/edit` (full-page form)
- Clicking "View" navigates to `/users/:id` (full-page details)
- All routes include a back button to return to the table
- Form submissions automatically navigate back to the list

---

### tableConfig

| Key               | Type               | Description                                                                                  |
| ----------------- | ------------------ | -------------------------------------------------------------------------------------------- |
| `table_head`      | array              | Column definitions — [see Table Column Object](#table-column-object-table_head)              |
| `search`          | object             | `{ enabled, useServerSideSearch?, searchKeys?, placeholder? }`                               |
| `filter`          | object             | `{ enabled, useServerSideFilters?, label?, icon? }`                                          |
| `pagination`      | object             | `{ enabled, useServerSidePagination? }`                                                      |
| `tabs`            | object             | Tab filtering config — [see Tabs Configuration](#tabs-configuration-tabs)                    |
| `sort`            | object             | Sorting config — [see Sorting](#sorting-sort)                                                |
| `exportCSV`       | object             | `{ enabled, fileName, label?, icon?, fields: [{ label, key }] }`                             |
| `emptyMessage`    | string             | Message displayed when no data (default: `"No data available"`)                              |
| `rowClick`        | function \| `true` | Called on row click `(row, rowIndex) => void`, or `true` to open the view details modal      |
| `customButtons`   | array              | Extra buttons in the table toolbar — [see Custom Toolbar Buttons](#9-custom-toolbar-buttons) |
| `customMenuItems` | array              | Items in the 3-dot overflow menu in the toolbar                                              |

---

### Table Column Object (`table_head[]`)

| Key              | Type     | Description                                                                             |
| ---------------- | -------- | --------------------------------------------------------------------------------------- |
| `key`            | string   | Property name in the row data object                                                    |
| `title`          | string   | Column header text                                                                      |
| `type`           | string   | Renderer: `plain` (default), `index`, `group`, `chip`, `date`, `avatar`, `audio`, `image`, `multiImage`, `menu_actions` |
| `imageKey`       | string   | Property path to image URL (for `avatar` / `group` types)                               |
| `titleKey`       | string   | Property path to title text (for `avatar` / `group` types)                              |
| `subtitleKey`    | string   | Property path to subtitle text (for `avatar` / `group` types)                           |
| `onClickDetails` | boolean  | Opens view modal when cell is clicked                                                   |
| `handleClick`    | function | Custom click handler: `(row) => void`                                                   |
| `variant`        | string   | Chip style: `contained`, `outline`, `soft`                                              |
| `chipOptions`    | array    | `[{ value, label, color? }]` — maps data values to chip labels/colors                   |
| `defaultColor`   | string   | Fallback chip color when no `chipOptions` match                                         |
| `className`      | string   | Tailwind classes for the cell content                                                   |
| `format`         | string   | Date format pattern (e.g. `"DD MMM YYYY"`) — used with `type: "date"`                   |
| `menuList`       | array    | `[{ title, type, variant?, icon?, onClick? }]` — used with `type: "menu_actions"`       |
| `fallback_icon`  | ReactNode/function | Fallback icon for `avatar` type when image is missing. Can be component or `(row) => ReactNode` |
| `maxPreview`     | number   | Maximum number of images to show (for `multiImage` type, default: 3)                   |
| `alt`            | string   | Alt text for avatar/image types                                                         |
| `render`         | function | Custom cell renderer: `(row, rowIndex) => ReactNode`                                    |

#### Custom Render Function Example

```jsx
table_head: [
  {
    key: "status",
    title: "Status",
    render: (row, rowIndex) => (
      <div className="flex items-center gap-2">
        <span className={row.active ? "text-green-600" : "text-red-600"}>
          ● {row.status}
        </span>
      </div>
    ),
  },
]
```

---

### Tabs Configuration (`tabs`)

Enable tab-based filtering in your table.

| Property            | Type     | Description                                                         |
| ------------------- | -------- | ------------------------------------------------------------------- |
| `enabled`           | boolean  | Enable tabs feature                                                 |
| `useServerSideTabs` | boolean  | Pass tab params to `fetchData` instead of filtering client-side    |
| `filterKey`         | string   | Default property name to filter by (can be overridden per tab)     |
| `defaultValue`      | string/number/boolean | Default selected tab value                            |
| `options`           | array    | Tab definitions — see below                                         |
| `onChange`          | function | `({ value, option, key, useServerSide, serverValue }) => void`     |

#### Tab Option Object

| Property      | Type     | Description                                                |
| ------------- | -------- | ---------------------------------------------------------- |
| `value`       | string/number/boolean | Tab identifier                                |
| `label`       | string   | Display label                                              |
| `count`       | number   | Optional badge count                                       |
| `className`   | string   | Custom CSS classes                                         |
| `filterKey`   | string   | Property name to filter (overrides global `filterKey`)     |
| `serverValue` | string/number/boolean | Value sent to server (for server-side tabs) |

#### Client-Side Tabs Example

```jsx
tableConfig: {
  tabs: {
    enabled: true,
    filterKey: "status",  // Filter by "status" field
    defaultValue: "all",
    options: [
      { value: "all", label: "All", count: 150 },
      { value: "active", label: "Active", count: 120 },
      { value: "inactive", label: "Inactive", count: 30 },
    ],
  },
  table_head: [
    { key: "id", title: "ID", type: "index" },
    { key: "name", title: "Name" },
    { key: "status", title: "Status" },
  ],
}
```

#### Server-Side Tabs Example

```jsx
tableConfig: {
  tabs: {
    enabled: true,
    useServerSideTabs: true,
    filterKey: "status",
    defaultValue: "all",
    options: [
      { value: "all", label: "All" },
      { value: "active", label: "Active", serverValue: "1" },
      { value: "inactive", label: "Inactive", serverValue: "0" },
    ],
    onChange: ({ value, option, key, serverValue }) => {
      console.log("Tab changed:", { value, key, serverValue });
    },
  },
},
fetchData: async ({ active_tab, active_tab_value, ...params }) => {
  // active_tab = "active"
  // active_tab_value = "1" (serverValue)
  const response = await api.get("/users", {
    params: { ...params, status: active_tab_value }
  });
  return {
    data: response.data.items,
    pagination: response.data.pagination,
  };
},
```

#### Custom Filter Key Per Tab

```jsx
tableConfig: {
  tabs: {
    enabled: true,
    options: [
      { value: "all", label: "All Users" },
      { 
        value: "admin", 
        label: "Admins", 
        filterKey: "role",  // Custom key for this tab
        count: 5 
      },
      { 
        value: "true", 
        label: "Verified", 
        filterKey: "verified",  // Different key
        count: 80 
      },
    ],
  },
}
```

---

### Sorting (`sort`)

| Property               | Type     | Description                                                     |
| ---------------------- | -------- | --------------------------------------------------------------- |
| `enabled`              | boolean  | Enable sorting (default: `true`)                                |
| `useServerSideSorting` | boolean  | Pass sort params to `fetchData` instead of sorting client-side  |
| `fields`               | string[] | Sortable field keys (used when not auto-generating)             |
| `autoGenerate`         | boolean  | Auto-generate sort options from table column headers            |
| `defaultValue`         | string   | Default selected sort option (e.g. `"createdAt_desc"`)          |
| `clearLabel`           | string   | Label for the "clear sort" option                               |
| `label`                | string   | Button label displayed next to sort icon                        |
| `icon`                 | ReactNode | Custom icon for sort button                                     |
| `onChange`             | function | `({ value, option, key, order, type }) => void` — called on sort change |
| `options`              | array    | `[{ value, label, key, order, type }]` — custom sort options    |

#### Client-Side Sorting

Client-side sorting automatically sorts data in the browser based on the selected column.

```jsx
tableConfig: {
  sort: {
    enabled: true,
    autoGenerate: true, // Generates sort options from table columns
    defaultValue: "name_asc",
    clearLabel: "No Sort",
  },
  table_head: [
    { key: "name", title: "Name" },
    { key: "email", title: "Email" },
    { key: "createdAt", title: "Created", type: "date" },
  ],
}
```

#### Server-Side Sorting

Server-side sorting sends sort parameters to your `fetchData` function.

```jsx
tableConfig: {
  sort: {
    enabled: true,
    useServerSideSorting: true,
    autoGenerate: true,
  },
},
fetchData: async ({ sort_by, sort_order, ...otherParams }) => {
  // sort_by = column key (e.g., "name")
  // sort_order = "asc" or "desc"
  const response = await api.get("/users", {
    params: { sort_by, sort_order, ...otherParams }
  });
  return {
    data: response.data.items,
    pagination: response.data.pagination,
  };
},
```

**API Payload Example:**
```json
{
  "sort_by": "createdAt",
  "sort_order": "desc",
  "search": "",
  "rows_per_page": 50,
  "current_page": 1
}
```

#### Custom Sort Options

```jsx
tableConfig: {
  sort: {
    enabled: true,
    options: [
      { value: "newest", label: "Newest First", key: "createdAt", order: "desc" },
      { value: "oldest", label: "Oldest First", key: "createdAt", order: "asc" },
      { value: "name_az", label: "Name A-Z", key: "name", order: "asc" },
      { value: "name_za", label: "Name Z-A", key: "name", order: "desc" },
    ],
    defaultValue: "newest",
    clearLabel: "Default Order",
    onChange: ({ value, option, key, order }) => {
      console.log("Sort changed:", { value, key, order });
    },
  },
}
```

---

### modalConfig

Configure the add, edit, delete, and view modals under a single `modalConfig` object:

```js
modalConfig: {
  addModal:    { ... },
  editModal:   { ... },
  deleteModal: { ... },
  viewModal:   { ... },
}
```

---

### Add & Edit Modal

| Property        | Type      | Description                                                                                                                        |
| --------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `title`         | string    | Modal title                                                                                                                        |
| `icon`          | ReactNode | Icon in the modal header                                                                                                           |
| `size`          | string    | Width: `sm`, `md` (default), `lg`, `xl`, `full`                                                                                    |
| `formClass`     | string    | Tailwind classes for the form wrapper (e.g. `"grid grid-cols-12 gap-4"`)                                                           |
| `formFields`    | array     | Field definitions — [see Form Field Schema](#form-field-schema)                                                                    |
| `handleSubmit`  | function  | **Add:** `async (formData) => { newObject, message? }` **Edit:** `async (formData, item) => { newObject, targetObject, message? }` |
| `actionButtons` | array     | Custom footer buttons — [see Modal Action Buttons](#15-modal-action-buttons)                                                      |

#### Action Buttons Configuration

```jsx
actionButtons: [
  {
    type: "submit",        // Special type for form submission
    label: "Save",
    color: "primary",      // primary, success, error, warning, default
    variant: "contained",  // contained, outlined, text
    disabled: false,
  },
  {
    type: "button",
    label: "Cancel",
    color: "default",
    variant: "outlined",
    onClick: (event, item) => {
      // Custom handler
      console.log("Cancel clicked");
    },
  },
]
```

---

### Delete Modal

| Property        | Type      | Description                                                                           |
| --------------- | --------- | ------------------------------------------------------------------------------------- |
| `title`         | string    | Modal title                                                                           |
| `icon`          | ReactNode | Icon in the modal header                                                              |
| `size`          | string    | Width: `sm` (default), `md`, `lg`, `xl`, `full`                                       |
| `confirmText`   | string    | Confirmation message shown to the user                                                |
| `referenceKey`  | string    | Property from the selected row to display (e.g. `"name"`)                             |
| `actionButtons` | array     | `[{ type, label, color, variant, onClick: async (event, item) => { targetObject } }]` |

---

### View Modal

| Property          | Type            | Description                                                                        |
| ----------------- | --------------- | ---------------------------------------------------------------------------------- |
| `title`           | string          | Modal title                                                                        |
| `icon`            | ReactNode       | Icon in the modal header                                                           |
| `size`            | string          | Width: `sm`, `md` (default), `lg`, `xl`, `full`                                    |
| `variant`         | string          | Layout style: `default`, `card`, `split`                                           |
| `fields`          | array           | View field definitions — [see View Field Schema](#view-field-schema)               |
| `component`       | React component | Fully custom component — receives `{ data }` prop                                  |
| `styles`          | object          | Custom classes: `containerClass`, `rowClass`, `labelClass`, `valueClass`, etc.     |
| `modalClassNames` | object          | Custom classes for modal parts: `overlay`, `container`, `header`, `body`, `footer` |
| `footer`          | object          | `{ cancelButton: true, cancelText: "Close" }`                                      |

---

### Form Field Schema

Used in `addModal.formFields`, `editModal.formFields`, and `filterConfig.fields`.

#### Common Properties (all field types)

| Property           | Type     | Description                                                     |
| ------------------ | -------- | --------------------------------------------------------------- |
| `key`              | string   | Data property name — **required**                               |
| `label`            | string   | Display label                                                   |
| `type`             | string   | Field type — see list below — **required**                      |
| `required`         | boolean  | Marks the field as required                                     |
| `minLength`        | number   | Minimum character length                                        |
| `placeholder`      | string   | Input placeholder text                                          |
| `disabled`         | boolean  | Makes the field read-only                                       |
| `parentClass`      | string   | Tailwind class on the wrapper div (e.g. `"col-span-6"`)         |
| `className`        | string   | Tailwind class on the input element                             |
| `renderCondition`  | function | `(formData) => boolean` — show/hide field based on other values |
| `customValidation` | function | `(value) => true \| "error message"` — custom validation logic  |

#### Available Field Types

| Type          | Extra Properties                                                                      | Description                                    |
| ------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `text`        | `pattern` (regex), `mask` (e.g. `"(99) 99999-9999"`), `maskApplyOnValue`              | Standard text input                            |
| `number`      | `negativeNumberAllow`                                                                 | Numeric input field                            |
| `email`       | —                                                                                     | Email input with validation                    |
| `password`    | —                                                                                     | Password input (masked)                        |
| `date`        | —                                                                                     | Date picker input                              |
| `textarea`    | `rows`                                                                                | Multi-line text input                          |
| `select`      | `options`, `multiple`, `search`, `countriesList`, `dropdownMaxHeight`, `defaultValue` | Dropdown selection                             |
| `checkbox`    | `options`, `multiple`                                                                 | Checkbox input(s)                              |
| `radio`       | `options`                                                                             | Radio button group                             |
| `switch`      | `text`, `options`                                                                     | Toggle switch                                  |
| `phone`       | `countriesList`, `defaultCountry`, `search`                                           | Phone number with country code                 |
| `image`       | `accept`, `dragDrop`, `cropImage`, `aspectRatio`, `multiple`, `maxImages`             | Image upload (single)                          |
| `multiImage`  | `accept`, `dragDrop`, `cropImage`, `aspectRatio`, `maxImages`                         | Multiple image uploads                         |
| `video`       | `accept`, `dragDrop`, `maxSize` (MB)                                                  | Video file upload                              |
| `audio`       | `accept`, `dragDrop`, `maxSize` (MB)                                                  | Audio file upload                              |
| `file`        | `accept` (e.g. `".pdf,.docx"`), `dragDrop`, `maxSize` (MB), `multiple`, `maxFiles`    | Generic file upload                            |
| `tinyEditor`  | `editorKey`, `fontFamily`, `height`                                                   | Rich text editor (TinyMCE)                     |
| `freeEditor`  | `height`                                                                              | Simple rich text editor                        |
| `group`       | —                                                                                     | Grouped display of related fields              |

**Mask pattern characters:** `9` = digit, `A` = letter, `X` = alphanumeric, `*` = any character. All other characters are treated as literals.

---

#### Detailed Field Type Usage

##### Text Field with Pattern & Mask

```jsx
{
  key: "phone",
  label: "Phone Number",
  type: "text",
  mask: "(99) 99999-9999",           // Brazilian format
  maskApplyOnValue: true,            // Apply mask to stored value
  placeholder: "Enter phone number",
  required: true,
  parentClass: "col-span-6",
}
```

##### Number Field

```jsx
{
  key: "price",
  label: "Price",
  type: "number",
  negativeNumberAllow: false,        // Disallow negative numbers
  required: true,
  parentClass: "col-span-6",
}
```

##### Date Field

```jsx
{
  key: "birthDate",
  label: "Date of Birth",
  type: "date",
  required: true,
  parentClass: "col-span-12",
}
```

##### Select Dropdown

```jsx
{
  key: "category",
  label: "Category",
  type: "select",
  options: [
    { value: "electronics", label: "Electronics" },
    { value: "clothing", label: "Clothing" },
    { value: "food", label: "Food" },
  ],
  search: true,                      // Enable search in dropdown
  multiple: false,                   // Single selection
  dropdownMaxHeight: 300,            // Max height in pixels
  defaultValue: "electronics",
  required: true,
  parentClass: "col-span-6",
}
```

##### Multi-Select Dropdown

```jsx
{
  key: "tags",
  label: "Tags",
  type: "select",
  options: [
    { value: "new", label: "New" },
    { value: "featured", label: "Featured" },
    { value: "sale", label: "On Sale" },
  ],
  multiple: true,                    // Multiple selection
  search: true,
  parentClass: "col-span-12",
}
```

##### Checkbox (Single & Multiple)

```jsx
// Single checkbox
{
  key: "terms",
  label: "I agree to terms and conditions",
  type: "checkbox",
  required: true,
  parentClass: "col-span-12",
}

// Multiple checkboxes
{
  key: "interests",
  label: "Interests",
  type: "checkbox",
  multiple: true,
  options: [
    { value: "sports", label: "Sports" },
    { value: "music", label: "Music" },
    { value: "travel", label: "Travel" },
  ],
  parentClass: "col-span-12",
}
```

##### Radio Buttons

```jsx
{
  key: "gender",
  label: "Gender",
  type: "radio",
  options: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ],
  required: true,
  parentClass: "col-span-12",
}
```

##### Switch Toggle

```jsx
{
  key: "isActive",
  label: "Active Status",
  type: "switch",
  text: "Enable this item",           // Optional toggle label
  parentClass: "col-span-6",
}
```

##### Phone Input with Country Code

```jsx
{
  key: "phoneNumber",
  label: "Phone Number",
  type: "phone",
  countriesList: true,                // Show country selector
  defaultCountry: "US",               // Default country code
  search: true,                       // Search countries
  required: true,
  parentClass: "col-span-12",
}
```

##### Single Image Upload with Cropping

```jsx
{
  key: "profilePicture",
  label: "Profile Picture",
  type: "image",
  accept: "image/*",                  // Accept all image types
  dragDrop: true,                     // Enable drag & drop
  cropImage: true,                    // Enable cropping
  aspectRatio: 1,                     // 1:1 square crop
  required: true,
  parentClass: "col-span-12",
}
```

##### Multiple Image Upload

```jsx
{
  key: "gallery",
  label: "Gallery Images",
  type: "multiImage",                 // or type: "image" with multiple: true
  accept: "image/*",
  dragDrop: true,
  cropImage: true,
  aspectRatio: 16 / 9,                // 16:9 landscape crop
  maxImages: 5,                       // Maximum 5 images
  multiple: true,
  parentClass: "col-span-12",
}
```

##### Video Upload

```jsx
{
  key: "videoFile",
  label: "Upload Video",
  type: "video",
  accept: "video/*",
  dragDrop: true,
  maxSize: 100,                       // Maximum 100 MB
  parentClass: "col-span-12",
}
```

##### Audio Upload

```jsx
{
  key: "audioFile",
  label: "Upload Audio",
  type: "audio",
  accept: "audio/*",
  dragDrop: true,
  maxSize: 50,                        // Maximum 50 MB
  parentClass: "col-span-12",
}
```

##### File Upload (Generic)

```jsx
// Single file
{
  key: "document",
  label: "Upload Document",
  type: "file",
  accept: ".pdf,.docx,.xlsx",         // Specific file types
  dragDrop: true,
  maxSize: 10,                        // Maximum 10 MB
  parentClass: "col-span-12",
}

// Multiple files
{
  key: "attachments",
  label: "Attachments",
  type: "file",
  accept: "*/*",                      // All file types
  dragDrop: true,
  multiple: true,
  maxFiles: 5,                        // Maximum 5 files
  maxSize: 20,                        // 20 MB per file
  parentClass: "col-span-12",
}
```

##### Rich Text Editor (TinyMCE)

```jsx
{
  key: "description",
  label: "Description",
  type: "tinyEditor",
  editorKey: "your-tinymce-api-key",  // Get from https://www.tiny.cloud/
  fontFamily: "Arial, sans-serif",
  height: 400,                        // Editor height in pixels
  placeholder: "Enter description...",
  required: true,
  parentClass: "col-span-12",
}
```

##### Simple Rich Text Editor (Free)

```jsx
{
  key: "notes",
  label: "Notes",
  type: "freeEditor",
  height: 300,
  placeholder: "Enter notes...",
  parentClass: "col-span-12",
}
```

##### Textarea

```jsx
{
  key: "comments",
  label: "Comments",
  type: "textarea",
  rows: 5,                            // Number of visible rows
  placeholder: "Enter your comments...",
  required: true,
  parentClass: "col-span-12",
}
```

##### Conditional Fields

```jsx
{
  key: "employmentStatus",
  label: "Employment Status",
  type: "select",
  options: [
    { value: "employed", label: "Employed" },
    { value: "self-employed", label: "Self-Employed" },
    { value: "unemployed", label: "Unemployed" },
  ],
  parentClass: "col-span-12",
},
{
  key: "companyName",
  label: "Company Name",
  type: "text",
  renderCondition: (formData) => {
    // Only show if employed or self-employed
    return formData.employmentStatus === "employed" || 
           formData.employmentStatus === "self-employed";
  },
  required: true,
  parentClass: "col-span-12",
}
```

##### Custom Validation

```jsx
{
  key: "email",
  label: "Email",
  type: "email",
  required: true,
  customValidation: (value) => {
    if (!value.endsWith("@company.com")) {
      return "Email must be from company domain";
    }
    return true;  // Return true if valid
  },
  parentClass: "col-span-12",
},
{
  key: "age",
  label: "Age",
  type: "number",
  customValidation: (value) => {
    if (value < 18) return "Must be 18 or older";
    if (value > 100) return "Invalid age";
    return true;
  },
  parentClass: "col-span-6",
}
```

---

### View Field Schema

Used in `viewModal.fields`.

| Property          | Type      | Description                                                     |
| ----------------- | --------- | --------------------------------------------------------------- |
| `key`             | string    | Property name from row data                                     |
| `label`           | string    | Display label                                                   |
| `type`            | string    | `text`, `date`, `chip`, `image`, `avatar`, `group`, `cardGroup` |
| `format`          | string    | Date format (e.g. `"DD MMM YYYY"`)                              |
| `imageKey`        | string    | Property path to image URL                                      |
| `titleKey`        | string    | Property path to title text                                     |
| `subtitleKey`     | string    | Property path to subtitle text                                  |
| `variant`         | string    | Chip style: `contained`, `outline`, `soft`                      |
| `chipOptions`     | array     | `[{ value, label, color }]`                                     |
| `defaultColor`    | string    | Fallback chip color                                             |
| `className`       | string    | Tailwind class on the value element                             |
| `blockClass`      | string    | Tailwind class on the field wrapper                             |
| `icon`            | ReactNode | Icon displayed beside the field                                 |
| `renderCondition` | function  | `(data) => boolean` — show/hide based on row data               |

---

## Features & Examples

### 1. Client-Side CRUD (Minimal Setup)

```jsx
import Crud from "react-admin-crud-manager";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "inactive" },
];

function App() {
  const config = {
    title: "Users",
    isStaticData: true,
    fetchData: async () => ({ data: users }),
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
          newObject: { ...formData, id: Date.now() },
        }),
      },
    },
  };

  return <Crud config={config} />;
}
```

---

### 2. Server-Side CRUD with Advanced Features

```jsx
import Crud from "react-admin-crud-manager";
import axios from "axios";

const api = axios.create({ baseURL: "https://api.example.com" });

const config = {
  title: "Products",
  description: "Manage your product inventory",
  buttonText: "Add Product",

  fetchData: async ({
    search,
    rows_per_page,
    current_page,
    sort_by,
    sort_order,
    ...filters
  }) => {
    const resp = await api.get("/products", {
      params: {
        q: search,
        limit: rows_per_page,
        page: current_page,
        sort_by,
        sort_order,
        ...filters,
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
      { key: "name", title: "Name" },
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
      {
        key: "actions",
        title: "",
        type: "menu_actions",
        menuList: [
          { title: "Edit", type: "edit" },
          { title: "Delete", type: "delete" },
          { title: "View", type: "view" },
        ],
      },
    ],
    search: { enabled: true, useServerSideSearch: true },
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
      formFields: [
        {
          key: "name",
          label: "Name",
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
        {
          key: "description",
          label: "Description",
          type: "textarea",
          rows: 4,
          parentClass: "col-span-12",
        },
        {
          key: "image",
          label: "Image",
          type: "image",
          dragDrop: true,
          cropImage: true,
          aspectRatio: 1,
          parentClass: "col-span-12",
        },
      ],
      handleSubmit: async (formData) => {
        const resp = await api.post("/products", formData);
        return { newObject: resp.data, message: "Product added!" };
      },
    },

    editModal: {
      title: "Edit Product",
      size: "lg",
      formFields: [
        {
          key: "name",
          label: "Name",
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
      confirmText: "Are you sure you want to delete this product?",
      referenceKey: "name",
      actionButtons: [
        {
          type: "button",
          label: "Delete",
          color: "error",
          variant: "contained",
          onClick: async (event, item) => {
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
        { key: "name", label: "Name" },
        { key: "price", label: "Price" },
        { key: "stock", label: "Stock" },
        { key: "category", label: "Category", type: "chip" },
      ],
    },
  },
};
```

---

### 3. Conditional Fields & Custom Validation

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
    renderCondition: (data) => data.userType === "admin", // only shown for admins
    options: [
      { value: "superadmin", label: "Super Admin" },
      { value: "moderator", label: "Moderator" },
    ],
  },
  {
    key: "email",
    label: "Email",
    type: "email",
    required: true,
    customValidation: (value) => {
      if (!value.includes("@company.com")) return "Must be a company email";
      return true;
    },
  },
  {
    key: "password",
    label: "Password",
    type: "password",
    customValidation: (value) => {
      if (value.length < 8) return "Minimum 8 characters";
      if (!/[A-Z]/.test(value)) return "Must include an uppercase letter";
      if (!/[0-9]/.test(value)) return "Must include a number";
      return true;
    },
  },
];
```

---

### 4. Export CSV

```js
tableConfig: {
  exportCSV: {
    enabled: true,
    fileName: "users_export.csv",
    fields: [
      { label: "ID",    key: "id" },
      { label: "Name",  key: "name" },
      { label: "Email", key: "email" },
    ],
  },
}
```

---

### 5. Server-Side Filtering

```js
tableConfig: {
  filter: { enabled: true, useServerSideFilters: true },
  filterConfig: {
    fields: [
      {
        key: "status", label: "Status", type: "select",
        options: [
          { value: "active",   label: "Active" },
          { value: "inactive", label: "Inactive" },
        ],
      },
      { key: "createdFrom", label: "From", type: "date" },
      { key: "createdTo",   label: "To",   type: "date" },
    ],
  },
},
fetchData: async ({ search, rows_per_page, current_page, sort_by, sort_order, ...filters }) => {
  const resp = await api.get("/users", {
    params: { q: search, limit: rows_per_page, page: current_page, sort_by, sort_order, ...filters },
  });
  return { data: resp.data.items, pagination: resp.data.pagination };
},
```

---

### 6. Image Cropping

```js
{
  key: "profileImage", label: "Profile Picture", type: "image",
  cropImage: true,
  aspectRatio: 1,     // 1:1 square
  dragDrop: true,
}

{
  key: "banner", label: "Banner", type: "image",
  cropImage: true,
  aspectRatio: 16 / 9,
  dragDrop: true,
}
```

---

### 7. Input Masking

```js
// Pattern: 9 = digit | A = letter | X = alphanumeric | * = any | other = literal

{ key: "phone",      type: "text", mask: "(99) 99999-9999" }
{ key: "zip",        type: "text", mask: "99999-999" }
{ key: "creditCard", type: "text", mask: "9999 9999 9999 9999" }
```

---

### 8. Custom Table Cell Rendering

```jsx
table_head: [
  {
    key: "price",
    title: "Price",
    render: (row) => (
      <span className="text-green-600 font-semibold">
        ${row.price.toFixed(2)}
      </span>
    ),
  },
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
];
```

---

### 9. Custom Toolbar Buttons

```jsx
import { Upload, RefreshCw } from "lucide-react";

tableConfig: {
  customButtons: [
    {
      key: "import", label: "Import",
      icon: <Upload className="w-4 h-4" />,
      color: "primary", variant: "contained",
      onClick: (event, ctx) => {
        // ctx: { data, filteredData, sortedData, paginatedData,
        //        searchTerm, appliedFilters, currentPage, pageSize, totalRecords }
        console.log("Total records:", ctx.totalRecords);
      },
    },
    {
      key: "refresh", label: "Refresh",
      icon: <RefreshCw className="w-4 h-4" />,
      variant: "outlined",
      onClick: async () => { /* refresh logic */ },
    },
  ],
  customMenuItems: [
    {
      key: "bulk-delete", label: "Bulk Delete",
      onClick: (event, ctx) => console.log(ctx.filteredData),
    },
  ],
}
```

**Button properties:** `key`, `label`, `icon`, `variant` (`contained` / `outlined` / `text`), `color` (`primary` / `success` / `error` / `default`), `className`, `disabled`, `show`, `onClick`

**Menu item properties:** `key`, `label`, `icon`, `className`, `disabled`, `show`, `onClick`

---

### 10. Row Click Handler

```js
// Custom handler
tableConfig: {
  rowClick: (row, rowIndex) => {
    console.log("Clicked row:", row);
  },
}

// Open view modal on row click
tableConfig: {
  rowClick: true,
}
```

---

### 11. View Modal Variants

```js
// default — standard grid layout
viewModal: { title: "Details", variant: "default", fields: [...] }

// card — each field in its own elevated card
viewModal: {
  title: "Details", variant: "card",
  styles: { containerClass: "grid grid-cols-12 gap-4" },
  fields: [...],
}

// split — clean property-sheet with dividing lines
viewModal: { title: "Details", variant: "split", fields: [...] }
```

---

### 12. Custom View Component

```jsx
const UserProfile = ({ data }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-4">
      <img src={data.avatarUrl} className="w-16 h-16 rounded-full" />
      <div>
        <h2 className="text-xl font-bold">{data.name}</h2>
        <p className="text-gray-500">{data.email}</p>
      </div>
    </div>
  </div>
);

modalConfig: {
  viewModal: {
    title: "User Details",
    component: UserProfile,  // receives { data } prop
  },
}
```

---

### 13. Sorting Examples

#### Client-Side Sorting (Automatic)

```jsx
const config = {
  title: "Products",
  tableConfig: {
    table_head: [
      { key: "id", title: "ID", type: "index" },
      { key: "name", title: "Name" },
      { key: "price", title: "Price" },
      { key: "createdAt", title: "Created", type: "date" },
    ],
    sort: {
      enabled: true,
      autoGenerate: true,  // Auto-generates: name_asc, name_desc, price_asc, price_desc, etc.
      defaultValue: "name_asc",
      clearLabel: "No Sort",
      label: "Sort By",    // Label shown next to sort icon
    },
  },
};
```

#### Server-Side Sorting with Custom Options

```jsx
const config = {
  title: "Users",
  fetchData: async ({ sort_by, sort_order, ...params }) => {
    // Backend receives: sort_by = "created_date", sort_order = "desc"
    const response = await api.get("/users", {
      params: { sortBy: sort_by, order: sort_order, ...params }
    });
    return {
      data: response.data.items,
      pagination: response.data.pagination,
    };
  },
  tableConfig: {
    table_head: [
      { key: "name", title: "Name" },
      { key: "email", title: "Email" },
      { key: "created_date", title: "Joined" },
    ],
    sort: {
      enabled: true,
      useServerSideSorting: true,
      options: [
        { value: "newest", label: "Newest First", key: "created_date", order: "desc" },
        { value: "oldest", label: "Oldest First", key: "created_date", order: "asc" },
        { value: "name_asc", label: "Name (A-Z)", key: "name", order: "asc" },
        { value: "name_desc", label: "Name (Z-A)", key: "name", order: "desc" },
      ],
      defaultValue: "newest",
      clearLabel: "Default",
      onChange: ({ value, option, key, order, type }) => {
        console.log("Sort changed:", { value, key, order });
      },
    },
  },
};
```

**Server-Side API Payload Example:**
```json
{
  "search": "john",
  "rows_per_page": 50,
  "current_page": 1,
  "sort_by": "created_date",
  "sort_order": "desc"
}
```

---

### 14. Date Field Support

#### Date Input in Add/Edit Modal

```jsx
modalConfig: {
  addModal: {
    title: "Add Event",
    formFields: [
      { key: "title", label: "Title", type: "text", required: true },
      { 
        key: "startDate", 
        label: "Start Date", 
        type: "date",  // Date picker field
        required: true,
        parentClass: "col-span-6",
      },
      { 
        key: "endDate", 
        label: "End Date", 
        type: "date",
        required: true,
        parentClass: "col-span-6",
      },
    ],
    handleSubmit: async (formData) => {
      // formData.startDate and formData.endDate are in YYYY-MM-DD format
      const response = await api.post("/events", formData);
      return { newObject: response.data };
    },
  },
}
```

#### Date Display in Table

```jsx
table_head: [
  { key: "id", title: "ID", type: "index" },
  { key: "title", title: "Event" },
  { 
    key: "startDate", 
    title: "Start Date", 
    type: "date",
    format: "DD MMM YYYY",  // e.g., "25 Dec 2023"
  },
  { 
    key: "endDate", 
    title: "End Date", 
    type: "date",
    format: "DD/MM/YYYY",  // e.g., "25/12/2023"
  },
  { 
    key: "createdAt", 
    title: "Created", 
    type: "date",
    format: "DD MMM YYYY HH:mm",  // e.g., "25 Dec 2023 14:30"
  },
]
```

**Supported Date Format Tokens:**
- `DD` - Day (01-31)
- `MM` - Month (01-12)
- `MMM` - Month short name (Jan-Dec)
- `MMMM` - Month full name (January-December)
- `YYYY` - Year (e.g., 2023)
- `HH` - Hours (00-23)
- `mm` - Minutes (00-59)
- `ss` - Seconds (00-59)

---

### 15. Modal Action Buttons

#### Custom Action Buttons in Add/Edit Modal

```jsx
modalConfig: {
  addModal: {
    title: "Add Product",
    formFields: [
      { key: "name", label: "Name", type: "text", required: true },
      { key: "price", label: "Price", type: "number", required: true },
    ],
    handleSubmit: async (formData) => {
      const response = await api.post("/products", formData);
      return { newObject: response.data, message: "Product added!" };
    },
    actionButtons: [
      {
        type: "submit",       // Special type - triggers form submission
        label: "Save",
        color: "primary",     // primary, success, error, warning, default
        variant: "contained", // contained, outlined, text
      },
      {
        type: "button",
        label: "Save & Add Another",
        color: "success",
        variant: "outlined",
        onClick: async (event, item) => {
          // Custom logic - form stays open after save
          console.log("Save and continue");
        },
      },
    ],
  },
  editModal: {
    title: "Edit Product",
    formFields: [
      { key: "name", label: "Name", type: "text", required: true },
      { key: "price", label: "Price", type: "number", required: true },
    ],
    handleSubmit: async (formData, item) => {
      const response = await api.put(`/products/${item.id}`, formData);
      return { newObject: response.data, targetObject: item };
    },
    actionButtons: [
      {
        type: "submit",
        label: "Update",
        color: "primary",
        variant: "contained",
      },
      {
        type: "button",
        label: "Reset",
        color: "default",
        variant: "text",
        onClick: (event, item) => {
          // Reset form to original values
          console.log("Reset form");
        },
      },
    ],
  },
}
```

#### Delete Modal Action Buttons

```jsx
modalConfig: {
  deleteModal: {
    title: "Confirm Delete",
    icon: <Icon icon="ph:warning-bold" className="w-6 h-6 text-red-500" />,
    confirmText: "Are you sure you want to delete this item?",
    referenceKey: "name",  // Shows item.name in confirmation
    actionButtons: [
      {
        type: "button",
        label: "Cancel",
        color: "default",
        variant: "outlined",
        onClick: async (event, item) => {
          // Return null to close modal without deleting
          return { targetObject: null };
        },
      },
      {
        type: "button",
        label: "Delete",
        color: "error",
        variant: "contained",
        onClick: async (event, item) => {
          await api.delete(`/products/${item.id}`);
          // Return targetObject to remove from table
          return { targetObject: item };
        },
      },
    ],
  },
}
```

#### View Modal Footer Configuration

```jsx
modalConfig: {
  viewModal: {
    title: "Product Details",
    variant: "card",
    fields: [
      { key: "name", label: "Name" },
      { key: "price", label: "Price" },
      { key: "description", label: "Description" },
    ],
    footer: {
      cancelButton: true,        // Show close button
      cancelText: "Close",       // Close button label
    },
  },
}
```

---

### 16. Complete Field Types Showcase

```jsx
const config = {
  title: "Complete Example",
  modalConfig: {
    addModal: {
      title: "Add Item",
      size: "xl",
      formClass: "grid grid-cols-12 gap-4",
      formFields: [
        // Text fields
        { 
          key: "firstName", 
          label: "First Name", 
          type: "text", 
          required: true,
          parentClass: "col-span-6",
        },
        { 
          key: "lastName", 
          label: "Last Name", 
          type: "text", 
          required: true,
          parentClass: "col-span-6",
        },
        
        // Email & Password
        { 
          key: "email", 
          label: "Email", 
          type: "email", 
          required: true,
          parentClass: "col-span-6",
        },
        { 
          key: "password", 
          label: "Password", 
          type: "password", 
          required: true,
          minLength: 8,
          parentClass: "col-span-6",
        },
        
        // Number with validation
        { 
          key: "age", 
          label: "Age", 
          type: "number", 
          negativeNumberAllow: false,
          required: true,
          parentClass: "col-span-6",
          customValidation: (value) => {
            if (value < 18) return "Must be 18 or older";
            return true;
          },
        },
        
        // Date field
        { 
          key: "birthDate", 
          label: "Date of Birth", 
          type: "date", 
          required: true,
          parentClass: "col-span-6",
        },
        
        // Phone with country code
        { 
          key: "phone", 
          label: "Phone Number", 
          type: "phone",
          countriesList: true,
          defaultCountry: "US",
          search: true,
          parentClass: "col-span-6",
        },
        
        // Masked text input
        { 
          key: "ssn", 
          label: "SSN", 
          type: "text",
          mask: "999-99-9999",
          maskApplyOnValue: true,
          parentClass: "col-span-6",
        },
        
        // Select dropdown
        { 
          key: "country", 
          label: "Country", 
          type: "select",
          countriesList: true,
          search: true,
          required: true,
          parentClass: "col-span-6",
        },
        
        // Multi-select
        { 
          key: "skills", 
          label: "Skills", 
          type: "select",
          multiple: true,
          search: true,
          options: [
            { value: "js", label: "JavaScript" },
            { value: "react", label: "React" },
            { value: "node", label: "Node.js" },
            { value: "python", label: "Python" },
          ],
          parentClass: "col-span-6",
        },
        
        // Radio buttons
        { 
          key: "gender", 
          label: "Gender", 
          type: "radio",
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" },
          ],
          required: true,
          parentClass: "col-span-12",
        },
        
        // Checkboxes
        { 
          key: "interests", 
          label: "Interests", 
          type: "checkbox",
          multiple: true,
          options: [
            { value: "sports", label: "Sports" },
            { value: "music", label: "Music" },
            { value: "reading", label: "Reading" },
            { value: "travel", label: "Travel" },
          ],
          parentClass: "col-span-12",
        },
        
        // Switch toggle
        { 
          key: "newsletter", 
          label: "Newsletter", 
          type: "switch",
          text: "Subscribe to newsletter",
          parentClass: "col-span-6",
        },
        { 
          key: "notifications", 
          label: "Push Notifications", 
          type: "switch",
          text: "Enable notifications",
          parentClass: "col-span-6",
        },
        
        // Single image with crop
        { 
          key: "avatar", 
          label: "Profile Picture", 
          type: "image",
          dragDrop: true,
          cropImage: true,
          aspectRatio: 1,
          accept: "image/*",
          parentClass: "col-span-12",
        },
        
        // Multiple images
        { 
          key: "gallery", 
          label: "Gallery", 
          type: "multiImage",
          dragDrop: true,
          cropImage: true,
          aspectRatio: 16 / 9,
          maxImages: 5,
          parentClass: "col-span-12",
        },
        
        // Video upload
        { 
          key: "video", 
          label: "Video", 
          type: "video",
          dragDrop: true,
          maxSize: 100,
          accept: "video/*",
          parentClass: "col-span-6",
        },
        
        // Audio upload
        { 
          key: "audio", 
          label: "Audio", 
          type: "audio",
          dragDrop: true,
          maxSize: 50,
          accept: "audio/*",
          parentClass: "col-span-6",
        },
        
        // File upload
        { 
          key: "resume", 
          label: "Resume", 
          type: "file",
          dragDrop: true,
          maxSize: 10,
          accept: ".pdf,.doc,.docx",
          parentClass: "col-span-12",
        },
        
        // Textarea
        { 
          key: "bio", 
          label: "Biography", 
          type: "textarea",
          rows: 4,
          placeholder: "Tell us about yourself...",
          parentClass: "col-span-12",
        },
        
        // Rich text editor (Free)
        { 
          key: "notes", 
          label: "Notes", 
          type: "freeEditor",
          height: 300,
          parentClass: "col-span-12",
        },
        
        // Conditional field
        { 
          key: "employmentType", 
          label: "Employment Type", 
          type: "select",
          options: [
            { value: "full-time", label: "Full-time" },
            { value: "part-time", label: "Part-time" },
            { value: "freelance", label: "Freelance" },
          ],
          parentClass: "col-span-12",
        },
        { 
          key: "companyName", 
          label: "Company Name", 
          type: "text",
          renderCondition: (data) => data.employmentType !== "freelance",
          required: true,
          parentClass: "col-span-12",
        },
      ],
      handleSubmit: async (formData) => {
        const response = await api.post("/items", formData);
        return { 
          newObject: response.data, 
          message: "Item created successfully!" 
        };
      },
      actionButtons: [
        {
          type: "submit",
          label: "Save",
          color: "primary",
          variant: "contained",
        },
      ],
    },
  },
};
```

---

### 17. Tabs Feature

#### Client-Side Tabs with Counts

```jsx
const config = {
  title: "Orders",
  fetchData: async () => ({
    data: [
      { id: 1, order_no: "ORD-001", status: "pending", amount: 150 },
      { id: 2, order_no: "ORD-002", status: "completed", amount: 200 },
      { id: 3, order_no: "ORD-003", status: "cancelled", amount: 100 },
      { id: 4, order_no: "ORD-004", status: "completed", amount: 300 },
    ],
  }),
  tableConfig: {
    tabs: {
      enabled: true,
      filterKey: "status",
      defaultValue: "all",
      options: [
        { value: "all", label: "All Orders", count: 4 },
        { value: "pending", label: "Pending", count: 1 },
        { value: "completed", label: "Completed", count: 2 },
        { value: "cancelled", label: "Cancelled", count: 1 },
      ],
    },
    table_head: [
      { key: "order_no", title: "Order #" },
      { key: "amount", title: "Amount", render: (row) => `$${row.amount}` },
      {
        key: "status",
        title: "Status",
        type: "chip",
        chipOptions: [
          { value: "pending", label: "Pending", color: "yellow" },
          { value: "completed", label: "Completed", color: "green" },
          { value: "cancelled", label: "Cancelled", color: "red" },
        ],
      },
    ],
  },
};
```

#### Server-Side Tabs

```jsx
const config = {
  title: "Users",
  fetchData: async ({ active_tab, active_tab_value, ...params }) => {
    const response = await api.get("/users", {
      params: { 
        ...params, 
        status: active_tab_value  // Backend receives "1" or "0"
      }
    });
    return {
      data: response.data.items,
      pagination: response.data.pagination,
    };
  },
  tableConfig: {
    tabs: {
      enabled: true,
      useServerSideTabs: true,
      filterKey: "is_active",
      defaultValue: "all",
      options: [
        { value: "all", label: "All Users" },
        { 
          value: "active", 
          label: "Active", 
          serverValue: "1"  // Sent to backend
        },
        { 
          value: "inactive", 
          label: "Inactive", 
          serverValue: "0"
        },
      ],
      onChange: ({ value, serverValue, key }) => {
        console.log(`Tab changed to ${value}, backend value: ${serverValue}`);
      },
    },
    table_head: [
      { key: "name", title: "Name" },
      { key: "email", title: "Email" },
    ],
  },
};
```

---

### 18. React Router Integration

Full-page forms instead of modals using React Router.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crud from "react-admin-crud-manager";

const config = {
  title: "Products",
  fetchData: async () => {
    const response = await api.get("/products");
    return { data: response.data };
  },
  fetchRowDetails: async (item) => {
    const response = await api.get(`/products/${item.id}`);
    return { data: response.data };
  },
  routes: {
    add: "/products/add",
    edit: "/products/:id/edit",
    view: "/products/:id",
  },
  tableConfig: {
    table_head: [
      { key: "id", title: "ID", type: "index" },
      { key: "name", title: "Product Name" },
      { key: "price", title: "Price" },
    ],
  },
  modalConfig: {
    addModal: {
      title: "Add Product",
      formFields: [
        { key: "name", label: "Product Name", type: "text", required: true },
        { key: "price", label: "Price", type: "number", required: true },
        { key: "description", label: "Description", type: "textarea", rows: 4 },
      ],
      handleSubmit: async (formData) => {
        const response = await api.post("/products", formData);
        return { newObject: response.data, message: "Product added!" };
      },
    },
    editModal: {
      title: "Edit Product",
      formFields: [
        { key: "name", label: "Product Name", type: "text", required: true },
        { key: "price", label: "Price", type: "number", required: true },
        { key: "description", label: "Description", type: "textarea", rows: 4 },
      ],
      handleSubmit: async (formData, item) => {
        const response = await api.put(`/products/${item.id}`, formData);
        return { 
          newObject: response.data, 
          targetObject: item,
          message: "Product updated!" 
        };
      },
    },
    viewModal: {
      title: "Product Details",
      variant: "card",
      fields: [
        { key: "name", label: "Product Name" },
        { key: "price", label: "Price" },
        { key: "description", label: "Description" },
      ],
    },
  },
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products/*" element={<Crud config={config} />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**Features:**
- Clicking "Add New" → Navigates to `/products/add` (full page)
- Clicking "Edit" → Navigates to `/products/:id/edit` (full page)
- Clicking "View" → Navigates to `/products/:id` (full page details)
- Back button returns to the table
- URL parameters automatically extracted (`:id`)
- Form state preserved with React Router location state

---

### 19. Custom Filter Component

Create a completely custom filter UI instead of auto-generated filter fields.

```jsx
import { useState } from "react";

// Custom filter component
const CustomProductFilter = ({ filters, onFilterChange }) => {
  const categories = ["Electronics", "Clothing", "Food", "Books"];
  
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onFilterChange("category", cat)}
              className={`px-3 py-1 rounded-full text-sm ${
                filters.category === cat
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Price Range</label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice || ""}
            onChange={(e) => onFilterChange("minPrice", e.target.value)}
            className="flex-1 px-3 py-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice || ""}
            onChange={(e) => onFilterChange("maxPrice", e.target.value)}
            className="flex-1 px-3 py-2 border rounded-md"
          />
        </div>
      </div>
      
      <div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.inStock || false}
            onChange={(e) => onFilterChange("inStock", e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-sm">In Stock Only</span>
        </label>
      </div>
    </div>
  );
};

// Config with custom filter component
const config = {
  title: "Products",
  fetchData: async ({ category, minPrice, maxPrice, inStock, ...params }) => {
    const response = await api.get("/products", {
      params: { category, minPrice, maxPrice, inStock, ...params }
    });
    return {
      data: response.data.items,
      pagination: response.data.pagination,
    };
  },
  tableConfig: {
    filter: {
      enabled: true,
      useServerSideFilters: true,
    },
    table_head: [
      { key: "name", title: "Product" },
      { key: "category", title: "Category" },
      { key: "price", title: "Price" },
    ],
  },
  filterConfig: {
    component: CustomProductFilter,  // Use custom component
  },
};
```

---

## CSS Customization

### Primary Color Override

Add these CSS variables to your global stylesheet:

```css
:root {
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-200: #bfdbfe;
  --primary-300: #93c5fd;
  --primary-400: #60a5fa;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --primary-800: #1e40af;
  --primary-900: #1e3a8a;
}
```

---

### CSS Class Reference

All classes are prefixed with `crud_` and can be overridden in any stylesheet (CSS, SCSS, Tailwind `@apply`, or CSS-in-JS).

| Component         | Class Name                      | Description              |
| ----------------- | ------------------------------- | ------------------------ |
| **Page**          | `crud_page`                     | Main page wrapper        |
|                   | `crud_page_delete_content`      | Delete confirmation area |
| **Button**        | `crud_button`                   | Button element           |
| **Chip**          | `crud_chip`                     | Chip / badge element     |
| **Spinner**       | `crud_spinner`                  | Loading spinner          |
| **Modal**         | `crud_modal`                    | Modal root               |
|                   | `crud_modal_overlay`            | Backdrop overlay         |
|                   | `crud_modal_container`          | Modal box                |
|                   | `crud_modal_header`             | Modal header             |
|                   | `crud_modal_title`              | Modal title text         |
|                   | `crud_modal_close_button`       | Close (×) button         |
|                   | `crud_modal_body`               | Modal body               |
|                   | `crud_modal_footer`             | Modal footer             |
|                   | `crud_modal_action_button`      | Footer action buttons    |
|                   | `crud_modal_loading_indicator`  | Loading state overlay    |
| **Table**         | `crud_table`                    | Table wrapper            |
|                   | `crud_table_toolbar`            | Toolbar (search, filter) |
|                   | `crud_table_search_field`       | Search field wrapper     |
|                   | `crud_table_search_input`       | Search input             |
|                   | `crud_table_container`          | Table scroll container   |
|                   | `crud_table_element`            | `<table>` element        |
|                   | `crud_table_head`               | `<thead>`                |
|                   | `crud_table_head_row`           | Header `<tr>`            |
|                   | `crud_table_head_cell`          | Header `<th>`            |
|                   | `crud_table_body`               | `<tbody>`                |
|                   | `crud_table_row`                | Body `<tr>`              |
|                   | `crud_table_cell`               | Body `<td>`              |
|                   | `crud_table_no_data`            | Empty state              |
|                   | `crud_table_action_button`      | Row action button        |
|                   | `crud_table_menu`               | Action menu              |
|                   | `crud_table_menu_item`          | Menu item                |
|                   | `crud_table_pagination`         | Pagination controls      |
| **Tabs**          | `crud_tabs`                     | Tabs root container      |
|                   | `crud_tabs_tab`                 | Individual tab button    |
|                   | `crud_tabs_count`               | Tab count badge          |
| **Skeleton**      | `crud_table_skeleton`           | Skeleton wrapper         |
|                   | `crud_table_skeleton_table`     | Skeleton table           |
| **Sort**          | `crud_sort_dropdown`            | Sort dropdown root       |
|                   | `crud_sort_dropdown_trigger`    | Dropdown trigger button  |
|                   | `crud_sort_dropdown_menu`       | Dropdown menu            |
|                   | `crud_sort_dropdown_item`       | Dropdown item            |
| **Image Preview** | `crud_image_preview`            | Preview root             |
|                   | `crud_image_preview_container`  | Preview container        |
|                   | `crud_image_preview_image`      | Preview `<img>`          |
| **Filter Drawer** | `crud_filter_overlay`           | Drawer backdrop          |
|                   | `crud_filter_panel`             | Drawer panel             |
|                   | `crud_filter_header`            | Drawer header            |
|                   | `crud_filter_body`              | Drawer body              |
|                   | `crud_filter_footer`            | Drawer footer            |
| **Form**          | `crud_form`                     | Form wrapper             |
|                   | `crud_form_loading`             | Form loading overlay     |
| **Field**         | `crud_field_wrapper`            | Field wrapper            |
|                   | `crud_field_label`              | Field label              |
|                   | `crud_field_input`              | Input element            |
|                   | `crud_field_error`              | Error message            |
| **Media Picker**  | `crud_media_image_picker`       | Single image picker      |
|                   | `crud_media_multi_image_picker` | Multi-image picker       |
|                   | `crud_media_audio_picker`       | Audio file picker        |
|                   | `crud_media_video_picker`       | Video file picker        |
|                   | `crud_media_dropzone`           | Drag-and-drop zone       |
|                   | `crud_media_crop_modal`         | Image crop modal         |
| **Details**       | `crud_details`                  | Details root             |
|                   | `crud_details_container`        | Details container        |
|                   | `crud_details_row`              | Details row              |

---

## License

MIT
