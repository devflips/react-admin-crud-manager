import React from "react";
interface SelectOption {
    label: string;
    value: any;
    code?: string;
}
interface SelectProps {
    options?: SelectOption[] | ((formData: Record<string, any>) => Promise<SelectOption[]> | SelectOption[]);
    value: any;
    defaultValue?: any;
    onChange: (value: any) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    search?: boolean;
    label?: React.ReactNode;
    required?: boolean;
    name: string;
    parentClass?: string;
    multiple?: boolean;
    dropdownMaxHeight?: string | number;
    formData: Record<string, any>;
    dependencyKey?: string;
    countriesList?: boolean;
    errorMessage?: string;
}
declare const Select: ({ options, value, defaultValue, onChange, placeholder, className, disabled, search, label, required, name, parentClass, multiple, dropdownMaxHeight, formData, countriesList, dependencyKey, errorMessage, }: SelectProps) => React.JSX.Element;
export default Select;
