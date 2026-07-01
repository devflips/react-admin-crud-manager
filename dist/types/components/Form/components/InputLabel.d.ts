import React from "react";
interface InputLabelProps {
    label: React.ReactNode;
    required?: boolean;
    infoText?: string;
}
export default function InputLabel({ label, required, infoText, }: InputLabelProps): React.JSX.Element;
export {};
