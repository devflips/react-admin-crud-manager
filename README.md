# React Admin CRUD Manager

A reusable React CRUD admin template with modular components for rapid admin dashboard development.

## Features
- Plug-and-play CRUD page component
- Modular, customizable UI components (Table, Modal, Form, etc.)
- Built with React 18+
- Tailwind CSS for styling

## Installation

```
npm install react-admin-crud-manager
```

## Usage

```
import { CrudPage } from 'react-admin-crud-manager';

function App() {
  const config = {
    title: 'Users',
    fetchData: async () => { /* fetch logic */ },
    // ...other config options
  };
  return <CrudPage config={config} />;
}
```

## Components
- `CrudPage`: Main CRUD page component
- `Table`, `Modal`, `Form`, etc.: Available for advanced use

## Props
See the source or future documentation for full prop details.

## License
MIT
