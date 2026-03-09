import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    value: any;
    required: boolean;
    parentClass?: string;
    className?: string;
    type: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    negativeNumberAllow?: boolean;
    defaultValue?: any;
    field: Record<string, any>;
    onChange: (value: any) => void;
    mask?: string;
    maskApplyOnValue?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
