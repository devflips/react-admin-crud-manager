type RouteEntry = {
    path: string;
    element: React.ReactNode;
};
export declare const crudRouteRegistry: {
    register(entry: RouteEntry): void;
    unregister(path: string): void;
    getAll(): RouteEntry[];
    subscribe(fn: () => void): () => void;
};
export {};
