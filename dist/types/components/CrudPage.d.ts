import React, { type ReactNode } from "react";
interface CrudPageProps {
    config: Config;
}
interface Option {
    value: string | number | boolean;
    label: string;
    color?: string;
}
interface ActionButton {
    type: string;
    label: string;
    color?: string;
    variant?: string;
    onClick?: (event?: React.MouseEvent, item?: any) => void | Promise<void>;
}
interface MenuAction {
    title: string;
    type: string;
    variant?: string;
    icon?: ReactNode;
}
interface TableHead {
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
interface FormField {
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
}
interface ViewField {
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
interface SearchConfig {
    enabled?: boolean;
    useServerSideSearch?: boolean;
    searchKeys?: string[];
}
interface PaginationConfig {
    enabled?: boolean;
    useServerSidePagination?: boolean;
}
interface FilterConfig {
    enabled?: boolean;
    useServerSideFilters?: boolean;
}
interface SortChangePayload {
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
interface SortConfig {
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
interface TableConfig {
    table_head: TableHead[];
    search?: SearchConfig;
    pagination?: PaginationConfig;
    filter?: FilterConfig;
    sort?: SortConfig;
}
interface ModalConfig {
    addModal?: {
        title: string;
        size?: string;
        formClass?: string;
        formFields?: FormField[];
        handleSubmit: (formData: Record<string, any>) => Promise<{
            newObject: any;
            message?: string;
        }>;
        actionButtons?: ActionButton[];
        icon?: ReactNode;
    };
    editModal?: {
        title: string;
        size?: string;
        formClass?: string;
        formFields?: FormField[];
        handleSubmit: (formData: Record<string, any>, item: any) => Promise<{
            newObject: any;
            targetObject: any;
            message?: string;
        }>;
        actionButtons?: ActionButton[];
        icon?: ReactNode;
    };
    deleteModal?: {
        title: string;
        size?: string;
        confirmText?: string;
        referenceKey?: string;
        actionButtons?: ActionButton[];
        action: (item: any) => Promise<{
            targetObject: any;
        } | null>;
        icon?: ReactNode;
    };
    viewModal?: {
        title: string;
        size?: string;
        component?: React.ComponentType<{
            data: any;
        }>;
        fields?: ViewField[];
        footer?: {
            cancelButton?: boolean;
            cancelText?: string;
        };
        icon?: ReactNode;
    };
}
interface FilterConfigProps {
    fields?: FormField[];
}
interface Config {
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
declare const CrudPage: React.FC<CrudPageProps>;
export default CrudPage;
