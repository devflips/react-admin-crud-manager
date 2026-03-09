import React from "react";
interface FormField {
    key: string;
    [key: string]: any;
}
interface FormConfig {
    formClass?: string;
    formFields?: FormField[];
}
interface FormProps {
    config: FormConfig;
    onSubmit: (data: Record<string, any>) => void;
    initialData: Record<string, any> | null;
    fetchRowDetails?: (item: Record<string, any>) => Promise<{
        data: Record<string, any>;
    }>;
    type: "add" | "edit" | string;
    loading?: boolean;
}
declare const Form: React.FC<FormProps>;
export default Form;
