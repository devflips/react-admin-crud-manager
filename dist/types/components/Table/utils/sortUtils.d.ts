interface SortOption {
    value: string;
    label: string;
    key: string;
    order: "asc" | "desc";
    type?: string;
}
interface FieldRule {
    key?: string;
    type?: string;
    label?: string;
}
interface SortChangePayload {
    value: string;
    option: SortOption | null;
    key: string;
    order: string;
    type: string;
}
interface SortConfig {
    enabled?: boolean;
    useServerSideSorting?: boolean;
    options?: SortOption[];
    fields?: (string | FieldRule)[];
    defaultValue?: string;
    autoGenerate?: boolean;
    clearLabel?: string;
    onChange?: ((payload: SortChangePayload) => void) | null;
}
interface NormalizedSortConfig {
    enabled: boolean;
    useServerSideSorting: boolean;
    options: SortOption[];
    fields: (string | FieldRule)[];
    defaultValue: string;
    autoGenerate: boolean;
    clearLabel: string;
    label: string;
    icon: string;
    onChange: ((payload: SortChangePayload) => void) | null;
}
interface TableColumn {
    key: string;
    type?: string;
    title?: string;
    sortKey?: string;
    sortType?: string;
    sortLabel?: string;
    titleKey?: string;
    chipOptions?: Array<{
        value: any;
        label: string;
    }>;
}
export declare const normalizeSortConfig: (sortConfig: boolean | SortConfig | null | undefined) => NormalizedSortConfig;
export declare const getSortableColumns: (tableHead?: TableColumn[]) => TableColumn[];
export declare const buildDefaultSortOptions: (columns?: TableColumn[]) => SortOption[];
export declare const getNormalizedSortOptions: (normalizedSortConfig: NormalizedSortConfig, sortableColumns?: TableColumn[]) => SortOption[];
export declare const sortTableData: (filteredData: any[] | undefined, sortBy: string | undefined, normalizedSortConfig: NormalizedSortConfig | null, normalizedSortOptions?: SortOption[]) => any[];
export {};
