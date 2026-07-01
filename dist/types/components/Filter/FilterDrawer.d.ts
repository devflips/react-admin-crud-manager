import React from "react";
import { FormField } from "../../types/crudtypes";
interface FilterConfig {
    component: React.ComponentType<{
        filters: Record<string, any>;
        onFilterChange: (key: string, value: any) => void;
    }>;
    fields: Array<FormField>;
}
interface FilterDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    config: FilterConfig;
    onApply: (filters: Record<string, any>) => void;
}
declare const FilterDrawer: ({ isOpen, onClose, config, onApply, }: FilterDrawerProps) => React.JSX.Element;
export default FilterDrawer;
