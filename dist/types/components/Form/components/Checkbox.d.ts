import React from "react";
interface CheckboxOption {
    label: string;
    value: any;
    disabled?: boolean;
}
interface CheckboxProps {
    name: string;
    label?: string;
    options: CheckboxOption[];
    value: any;
    onChange: (value: any, name?: string) => void;
    disabled?: boolean;
    required?: boolean;
    parentClass?: string;
    className?: string;
    multiSelect?: boolean;
    errorMessage?: string;
}
declare const Checkbox: ({ name, label, options, value, onChange, disabled, required, parentClass, className, errorMessage, multiSelect, }: CheckboxProps) => React.JSX.Element;
export default Checkbox;
