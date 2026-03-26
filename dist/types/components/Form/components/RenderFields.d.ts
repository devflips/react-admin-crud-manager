interface FieldConfig {
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
    editorVariant?: "tiny" | "free";
    [key: string]: any;
}
interface RenderFieldsProps {
    field: FieldConfig;
    errorMessage?: string;
    formData: Record<string, any>;
    handleChange: (key: string, value: any) => void;
}
declare const RenderFields: ({ field, formData, handleChange, errorMessage, }: RenderFieldsProps) => import("react/jsx-runtime").JSX.Element | null;
export default RenderFields;
