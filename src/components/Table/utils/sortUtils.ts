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
  chipOptions?: Array<{ value: any; label: string }>;
}

const BASE_SORT_CONFIG: NormalizedSortConfig = {
  enabled: false,
  useServerSideSorting: false,
  options: [],
  fields: [],
  defaultValue: "",
  autoGenerate: true,
  clearLabel: "",
  onChange: null,
};

export const normalizeSortConfig = (
  sortConfig: boolean | SortConfig | null | undefined,
): NormalizedSortConfig => {
  if (sortConfig === true) {
    return { ...BASE_SORT_CONFIG, enabled: true };
  }

  if (!sortConfig || typeof sortConfig !== "object") {
    return BASE_SORT_CONFIG;
  }

  return {
    ...BASE_SORT_CONFIG,
    ...sortConfig,
    enabled: sortConfig.enabled ?? true,
    autoGenerate: sortConfig.autoGenerate ?? true,
  };
};

export const getSortableColumns = (
  tableHead: TableColumn[] = [],
): TableColumn[] => {
  return tableHead.filter((col) => {
    const blockedTypes = ["menu_actions", "index", "audio", "avatar"];
    if (col.type && blockedTypes.includes(col.type)) return false;

    const effectiveKey =
      col.sortKey || (col.type === "group" ? col.titleKey : col.key);
    return Boolean(effectiveKey);
  });
};

const detectSortType = (col: TableColumn): string => {
  if (col.sortType) return col.sortType;
  if (col.type === "date") return "date";
  if (col.type === "number") return "number";

  const sortKeyName = String(
    col.sortKey || (col.type === "group" ? col.titleKey : col.key) || "",
  ).toLowerCase();

  const isPhoneLike = ["phone", "mobile", "contact", "tel", "whatsapp"].some(
    (keyword) => sortKeyName.includes(keyword),
  );

  if (isPhoneLike) return "phone";

  if (Array.isArray(col.chipOptions) && col.chipOptions.length > 0) {
    const allBoolean = col.chipOptions.every(
      (opt) => typeof opt.value === "boolean",
    );

    if (allBoolean) return "boolean";
  }

  return "string";
};

export const buildDefaultSortOptions = (
  columns: TableColumn[] = [],
): SortOption[] => {
  return columns.flatMap((col) => {
    const key = col.sortKey || (col.type === "group" ? col.titleKey : col.key);
    const label = col.sortLabel || col.title || key;
    const type = detectSortType(col);

    if (!key) return [];

    if (type === "number") {
      return [
        {
          value: `${key}_asc`,
          label: `${label} (Low-High)`,
          key,
          order: "asc" as const,
          type,
        },
        {
          value: `${key}_desc`,
          label: `${label} (High-Low)`,
          key,
          order: "desc" as const,
          type,
        },
      ];
    }

    if (type === "phone") {
      return [
        {
          value: `${key}_asc`,
          label: `${label} (0-9)`,
          key,
          order: "asc" as const,
          type,
        },
        {
          value: `${key}_desc`,
          label: `${label} (9-0)`,
          key,
          order: "desc" as const,
          type,
        },
      ];
    }

    if (type === "date") {
      return [
        {
          value: `${key}_desc`,
          label: `${label} (Newest First)`,
          key,
          order: "desc" as const,
          type,
        },
        {
          value: `${key}_asc`,
          label: `${label} (Oldest First)`,
          key,
          order: "asc" as const,
          type,
        },
      ];
    }

    if (type === "boolean") {
      return [
        {
          value: `${key}_desc`,
          label: `${label} (True First)`,
          key,
          order: "desc" as const,
          type,
        },
        {
          value: `${key}_asc`,
          label: `${label} (False First)`,
          key,
          order: "asc" as const,
          type,
        },
      ];
    }

    return [
      {
        value: `${key}_asc`,
        label: `${label} (A-Z)`,
        key,
        order: "asc" as const,
        type,
      },
      {
        value: `${key}_desc`,
        label: `${label} (Z-A)`,
        key,
        order: "desc" as const,
        type,
      },
    ];
  });
};

export const getNormalizedSortOptions = (
  normalizedSortConfig: NormalizedSortConfig,
  sortableColumns: TableColumn[] = [],
): SortOption[] => {
  const hasExplicitOptions =
    Array.isArray(normalizedSortConfig.options) &&
    normalizedSortConfig.options.length > 0;

  if (hasExplicitOptions) {
    return normalizedSortConfig.options.map((option) => ({
      ...option,
      type: option.type || "string",
      order: (option.order === "desc" ? "desc" : "asc") as "asc" | "desc",
    }));
  }

  const fieldRules = Array.isArray(normalizedSortConfig.fields)
    ? normalizedSortConfig.fields
    : [];

  if (fieldRules.length > 0) {
    const fieldColumns: TableColumn[] = fieldRules
      .map((field) => {
        const fieldKey = typeof field === "string" ? field : field.key;
        const targetCol = sortableColumns.find(
          (col) =>
            col.key === fieldKey ||
            col.sortKey === fieldKey ||
            (col.type === "group" && col.titleKey === fieldKey),
        );

        if (!targetCol) return null;

        return {
          ...targetCol,
          sortKey:
            typeof field === "object" && field.key
              ? field.key
              : targetCol.sortKey,
          sortType:
            typeof field === "object" && field.type
              ? field.type
              : targetCol.sortType,
          sortLabel:
            typeof field === "object" && field.label
              ? field.label
              : targetCol.sortLabel,
        } as TableColumn;
      })
      .filter((col) => col !== null) as TableColumn[];

    return buildDefaultSortOptions(fieldColumns);
  }

  if (!normalizedSortConfig.autoGenerate) return [];
  return buildDefaultSortOptions(sortableColumns);
};

export const sortTableData = (
  filteredData: any[] = [],
  sortBy: string = "",
  normalizedSortConfig: NormalizedSortConfig | null,
  normalizedSortOptions: SortOption[] = [],
): any[] => {
  if (
    !normalizedSortConfig?.enabled ||
    !sortBy ||
    normalizedSortConfig?.useServerSideSorting
  ) {
    return filteredData;
  }

  const selectedOption = normalizedSortOptions?.find(
    (opt) => opt.value === sortBy,
  );
  if (!selectedOption?.key) {
    return filteredData;
  }

  const direction = selectedOption.order === "desc" ? "desc" : "asc";
  const sortKey = selectedOption.key;
  const sortType = selectedOption.type || "string";

  const normalizePhone = (value: any): string =>
    String(value ?? "")
      .replace(/[^\d]/g, "")
      .trim();

  return [...filteredData].sort((a, b) => {
    const aValue = a?.[sortKey];
    const bValue = b?.[sortKey];

    if (aValue == null && bValue == null) return 0;
    if (aValue == null) return direction === "asc" ? 1 : -1;
    if (bValue == null) return direction === "asc" ? -1 : 1;

    let comparison = 0;

    if (sortType === "number") {
      comparison = Number(aValue) - Number(bValue);
    } else if (sortType === "phone") {
      comparison = normalizePhone(aValue).localeCompare(
        normalizePhone(bValue),
        undefined,
        {
          numeric: true,
        },
      );
    } else if (sortType === "date") {
      comparison = new Date(aValue).getTime() - new Date(bValue).getTime();
    } else if (sortType === "boolean") {
      comparison = Number(Boolean(aValue)) - Number(Boolean(bValue));
    } else {
      comparison = String(aValue).localeCompare(String(bValue));
    }

    return direction === "asc" ? comparison : -comparison;
  });
};
