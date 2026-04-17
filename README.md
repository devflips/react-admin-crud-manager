# react-admin-crud-manager

A plug-and-play React CRUD admin component with full support for tables, modals, forms, filters, sorting, pagination, and more — all driven by a single `config` object.

---

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Config Reference](#config-reference)
  - [Top-Level Config](#top-level-config)
  - [tableConfig](#tableconfig)
  - [Table Column Object](#table-column-object-table_head)
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

### tableConfig

| Key               | Type               | Description                                                                                  |
| ----------------- | ------------------ | -------------------------------------------------------------------------------------------- |
| `table_head`      | array              | Column definitions — [see Table Column Object](#table-column-object-table_head)              |
| `search`          | object             | `{ enabled, useServerSideSearch?, searchKeys? }`                                             |
| `filter`          | object             | `{ enabled, useServerSideFilters? }`                                                         |
| `pagination`      | object             | `{ enabled, useServerSidePagination? }`                                                      |
| `sort`            | object             | Sorting config — [see Sorting](#sorting-sort)                                                |
| `exportCSV`       | object             | `{ enabled, fileName, fields: [{ label, key }] }`                                            |
| `rowClick`        | function \| `true` | Called on row click `(row, rowIndex) => void`, or `true` to open the view details modal      |
| `customButtons`   | array              | Extra buttons in the table toolbar — [see Custom Toolbar Buttons](#9-custom-toolbar-buttons) |
| `customMenuItems` | array              | Items in the 3-dot overflow menu in the toolbar                                              |

---

### Table Column Object (`table_head[]`)

| Key              | Type     | Description                                                                             |
| ---------------- | -------- | --------------------------------------------------------------------------------------- |
| `key`            | string   | Property name in the row data object                                                    |
| `title`          | string   | Column header text                                                                      |
| `type`           | string   | Renderer: `plain` (default), `index`, `group`, `chip`, `date`, `avatar`, `menu_actions` |
| `imageKey`       | string   | Property path to image URL (for `avatar` / `group` types)                               |
| `titleKey`       | string   | Property path to title text (for `avatar` / `group` types)                              |
| `subtitleKey`    | string   | Property path to subtitle text (for `avatar` / `group` types)                           |
| `onClickDetails` | boolean  | Opens view modal when cell is clicked                                                   |
| `variant`        | string   | Chip style: `contained`, `outline`, `soft`                                              |
| `chipOptions`    | array    | `[{ value, label, color? }]` — maps data values to chip labels/colors                   |
| `defaultColor`   | string   | Fallback chip color when no `chipOptions` match                                         |
| `className`      | string   | Tailwind classes for the cell content                                                   |
| `format`         | string   | Date format pattern (e.g. `"DD MMM YYYY"`) — used with `type: "date"`                   |
| `menuList`       | array    | `[{ title, type, variant?, icon?, onClick? }]` — used with `type: "menu_actions"`       |
| `render`         | function | Custom cell renderer: `(row, rowIndex) => ReactNode`                                    |

---

### Sorting (`sort`)

| Property               | Type     | Description                                                     |
| ---------------------- | -------- | --------------------------------------------------------------- |
| `enabled`              | boolean  | Enable sorting (default: `true`)                                |
| `useServerSideSorting` | boolean  | Pass sort params to `fetchData` instead of sorting client-side  |
| `fields`               | string[] | Sortable field keys                                             |
| `autoGenerate`         | boolean  | Auto-generate sort options from table column headers            |
| `defaultValue`         | string   | Default selected sort option (e.g. `"createdAt_desc"`)          |
| `clearLabel`           | string   | Label for the "clear sort" option                               |
| `onChange`             | function | `({ value, key, order, type }) => void` — called on sort change |
| `options`              | array    | `[{ value, label, key, order, type }]` — custom sort options    |

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
| `actionButtons` | array     | Custom footer buttons                                                                                                              |

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

| Type         | Extra Properties                                                                      |
| ------------ | ------------------------------------------------------------------------------------- |
| `text`       | `pattern` (regex), `mask` (e.g. `"(99) 99999-9999"`), `maskApplyOnValue`              |
| `number`     | `negativeNumberAllow`                                                                 |
| `email`      | —                                                                                     |
| `password`   | —                                                                                     |
| `textarea`   | `rows`                                                                                |
| `select`     | `options`, `multiple`, `search`, `countriesList`, `dropdownMaxHeight`, `defaultValue` |
| `checkbox`   | `options`, `multiple`                                                                 |
| `radio`      | `options`                                                                             |
| `switch`     | `text`, `options`                                                                     |
| `phone`      | `countriesList`, `defaultCountry`, `search`                                           |
| `image`      | `accept`, `dragDrop`, `cropImage`, `aspectRatio`, `multiple`, `maxImages`             |
| `video`      | `accept`, `dragDrop`, `maxSize` (MB)                                                  |
| `audio`      | `accept`, `dragDrop`, `maxSize` (MB)                                                  |
| `file`       | `accept` (e.g. `".pdf,.docx"`), `dragDrop`, `maxSize` (MB)                            |
| `tinyEditor` | `editorKey`, `fontFamily`, `height`                                                   |
| `group`      | —                                                                                     |

**Mask pattern characters:** `9` = digit, `A` = letter, `X` = alphanumeric, `*` = any character. All other characters are treated as literals.

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
