# React Admin CRUD Manager

A reusable React CRUD admin template with modular components for rapid admin dashboard development.

## Features

- Plug-and-play CRUD page component
- Built with React 18+ and TypeScript
- Tailwind-based styling bundled inside the package
- Server-side and client-side data handling
- Sorting, filtering, searching, and pagination support
- Rich form fields including text, select, checkbox, radio, phone, image, audio, and TinyMCE editor

## Installation

```sh
npm install react-admin-crud-manager
```

## Usage

```tsx
import Crud from "react-admin-crud-manager";

function App() {
  const config = {
    title: "Users",
    fetchData: async () => ({
      data: [],
      pagination: {
        current_page: 1,
        rows_per_page: 10,
        total_pages: 1,
        total_records: 0,
      },
    }),
    tableConfig: {
      table_head: [{ key: "name", title: "Name" }],
    },
  };

  return <Crud config={config} />;
}
```

Styles are loaded automatically when you import the package. You do not need to add:

```ts
import "react-admin-crud-manager/dist/tailwind.css";
```

## Main Props

### Crud

`<Crud config={config} />`

| Property          | Type       | Required | Description                                         |
| ----------------- | ---------- | -------- | --------------------------------------------------- |
| `title`           | `string`   | Yes      | Page title                                          |
| `description`     | `string`   | No       | Optional description text                           |
| `buttonText`      | `string`   | No       | Custom text for add/action button                   |
| `fetchData`       | `function` | Yes      | Async function that returns `{ data, pagination? }` |
| `fetchRowDetails` | `function` | No       | Optional async function to fetch row details        |
| `isStaticData`    | `boolean`  | No       | If true, add/edit/delete run client-side            |
| `tableConfig`     | `object`   | Yes      | Table configuration                                 |
| `modalConfig`     | `object`   | No       | Modal definitions                                   |
| `filterConfig`    | `object`   | No       | Filter drawer configuration                         |

## Table Config

| Key            | Type       | Description              |
| -------------- | ---------- | ------------------------ |
| `table_head`   | `array`    | Column definitions       |
| `data`         | `array`    | Table rows               |
| `loading`      | `boolean`  | Shows skeleton loader    |
| `search`       | `object`   | Search configuration     |
| `filter`       | `object`   | Filter configuration     |
| `pagination`   | `object`   | Pagination configuration |
| `sort`         | `object`   | Sorting configuration    |
| `emptyMessage` | `string`   | Empty state message      |
| `onMenuAction` | `function` | Row action handler       |

## Supported Field Types

- `text`
- `number`
- `email`
- `password`
- `select`
- `checkbox`
- `radio`
- `switch`
- `phone`
- `textarea`
- `image`
- `audio`
- `tinyEditor`
- `group`
- `cardGroup`

## Build

```sh
npm run build
```

This generates:

- JavaScript bundles in `dist/`
- Type declarations in `dist/types/`

## License

MIT
