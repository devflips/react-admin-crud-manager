// Global registry — CrudPage apni routes yahan register karta hai
// AppRoutes yahan se read karta hai

type RouteEntry = {
  path: string;
  element: React.ReactNode;
};

const registry: RouteEntry[] = [];
const listeners: (() => void)[] = [];

export const crudRouteRegistry = {
  register(entry: RouteEntry) {
    // duplicate check
    if (!registry.find((r) => r.path === entry.path)) {
      registry.push(entry);
      listeners.forEach((fn) => fn());
    }
  },
  unregister(path: string) {
    const idx = registry.findIndex((r) => r.path === path);
    if (idx !== -1) {
      registry.splice(idx, 1);
      listeners.forEach((fn) => fn());
    }
  },
  getAll() {
    return [...registry];
  },
  subscribe(fn: () => void) {
    listeners.push(fn);
    return () => {
      const i = listeners.indexOf(fn);
      if (i !== -1) listeners.splice(i, 1);
    };
  },
};
