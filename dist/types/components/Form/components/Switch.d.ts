import React from "react";
interface SwitchProps {
    label?: React.ReactNode;
    required?: boolean;
    parentClass?: string;
    className?: string;
    value: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    name: string;
    errorMessage?: string;
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export { Switch };
