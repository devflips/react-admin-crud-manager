import React from "react";
import { type FieldConfig } from "../Form/components/RenderFields";
interface FilterConfig {
    component: React.ComponentType<{
        filters: Record<string, any>;
        onFilterChange: (key: string, value: any) => void;
    }>;
    fields: FieldConfig[];
}
interface FilterDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    config: FilterConfig;
    onApply: (filters: Record<string, any>) => void;
}
declare const FilterDrawer: ({ isOpen, onClose, config, onApply, }: FilterDrawerProps) => import("react/jsx-runtime").JSX.Element;
export default FilterDrawer;
