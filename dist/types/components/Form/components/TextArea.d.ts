import React from "react";
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: React.ReactNode;
    required?: boolean;
    parentClass?: string;
    className?: string;
    errorMessage?: string;
    name: string;
}
declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { TextArea };
