import { type ReactNode } from "react";

export interface CrudPageProps {
  config: Config;
}

export interface Option {
  value: string | number | boolean;
  label: string;
  color?: string;
}

export interface ActionButton {
  type: string;
  label: string;
  color?: string;
  variant?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent, item: any) => void | Promise<any>;
}

export interface MenuAction {
  title: string;
  type: string;
  variant?: string;
  icon?: ReactNode;
}

export interface TableHead {
  key: string;
  title?: string;
  type?: string;
  imageKey?: string;
  titleKey?: string;
  subtitleKey?: string;
  onClickDetails?: boolean;
  variant?: string;
  chipOptions?: Option[];
  defaultColor?: string;
  className?: string;
  format?: string;
  menuList?: MenuAction[];
}

export interface FormField {
  key: string;
  label?: string;
  type?: string;
  options?: any[];
  placeholder?: string;
  rows?: number;
  inputClass?: string;
  search?: boolean;
  accept?: string;
  text?: string;
  required?: boolean;
  minLength?: number;
  dragDrop?: boolean;
  parentClass?: string;
  countriesList?: boolean;
  defaultCountry?: string;
  multiple?: boolean;
  dropdownMaxHeight?: number;
  editorKey?: string;
  fontFamily?: string;
  disabled?: boolean;
  negativeNumberAllow?: boolean;
  defaultValue?: any;
  renderCondition?: (formData: Record<string, any>) => boolean;
  pattern?: string;
  renderType?: string;
  cropImage?: boolean;
  aspectRatio?: number;
  dependencyKey?: string;
  mask?: string;
  maskApplyOnValue?: boolean;
  maxSize?: number;
  [key: string]: any;
  customValidation?: (value: any) => boolean | string;
}

export interface ViewField {
  key?: string;
  label?: string;
  type?: string;
  imageKey?: string;
  titleKey?: string;
  subtitleKey?: string;
  blockClass?: string;
  icon?: ReactNode;
  variant?: string;
  chipOptions?: Option[];
  defaultColor?: string;
  className?: string;
  format?: string;
}

export interface ViewStyleConfig {
  containerClass?: string;
  rowClass?: string;
  groupClass?: string;
  cardGroupClass?: string;
  labelClass?: string;
  valueClass?: string;
  iconClass?: string;
  mediaGridClass?: string;
}

export interface ModalClassNames {
  overlay?: string;
  container?: string;
  header?: string;
  title?: string;
  body?: string;
  footer?: string;
  closeButton?: string;
}

export interface SearchConfig {
  enabled?: boolean;
  useServerSideSearch?: boolean;
  searchKeys?: string[];
}

export interface PaginationConfig {
  enabled?: boolean;
  useServerSidePagination?: boolean;
}

export interface FilterConfig {
  enabled?: boolean;
  useServerSideFilters?: boolean;
}

export interface SortChangePayload {
  value: string;
  option: {
    value: string;
    label: string;
    key: string;
    order: string;
    type?: string;
  } | null;
  key: string;
  order: string;
  type: string;
}

export interface SortConfig {
  enabled?: boolean;
  useServerSideSorting?: boolean;
  options?: Array<{
    value: string;
    label: string;
    key: string;
    order: string;
    type?: string;
  }>;
  fields?: string[];
  defaultValue?: string;
  autoGenerate?: boolean;
  clearLabel?: string;
  onChange?: (payload: SortChangePayload) => void;
}

export interface exportCSVConfig {
  enabled?: boolean;
  fileName?: string;
  fields?: Array<{
    label: string;
    key: string;
  }>;
}

export interface SortConfig {
  enabled?: boolean;
  useServerSideSorting?: boolean;
  options?: Array<{
    value: string;
    label: string;
    key: string;
    order: string;
    type?: string;
  }>;
  fields?: string[];
  defaultValue?: string;
  autoGenerate?: boolean;
  clearLabel?: string;
  onChange?: (payload: SortChangePayload) => void;
}

export interface TableConfig {
  table_head: TableHead[];
  search?: SearchConfig;
  pagination?: PaginationConfig;
  filter?: FilterConfig;
  sort?: SortConfig;
  exportCSV?: exportCSVConfig;
}

export interface ModalConfig {
  addModal?: {
    title: string;
    size?: string;
    formClass?: string;
    formFields?: FormField[];
    handleSubmit: (
      formData: Record<string, any>,
    ) => Promise<{ newObject: any; message?: string }>;
    actionButtons?: ActionButton[];
    icon?: ReactNode;
  };
  editModal?: {
    title: string;
    size?: string;
    formClass?: string;
    formFields?: FormField[];
    handleSubmit: (
      formData: Record<string, any>,
      item: any,
    ) => Promise<{ newObject: any; targetObject: any; message?: string }>;
    actionButtons?: ActionButton[];
    icon?: ReactNode;
  };
  deleteModal?: {
    title: string;
    size?: string;
    confirmText?: string;
    referenceKey?: string;
    actionButtons?: ActionButton[];
    icon?: ReactNode;
  };
  viewModal?: {
    title: string;
    size?: string;
    component?: React.ComponentType<{ data: any }>;
    fields?: ViewField[];
    variant?: "default" | "card" | "split";
    styles?: ViewStyleConfig;
    modalClassNames?: ModalClassNames;
    footer?: {
      cancelButton?: boolean;
      cancelText?: string;
    };
    icon?: ReactNode;
  };
}

export interface FilterConfigProps {
  fields?: FormField[];
}

export interface Config {
  title: string;
  description?: string;
  buttonText?: string;

  fetchData: (params: {
    search: string;
    rows_per_page: number;
    current_page: number;
    sort_by: string;
    sort_order: string;
    [key: string]: any;
  }) => Promise<{
    data: any[];
    pagination: any;
  }>;

  fetchRowDetails?: (item: any) => Promise<any>;
  isStaticData?: boolean;
  tableConfig: TableConfig;
  modalConfig?: ModalConfig;
  filterConfig?: FilterConfigProps;
}
export interface ServerSidePaginationData {
  search: string;
  rows_per_page: number;
  current_page: number;
  sort_by: string;
  sort_order: string;
}
