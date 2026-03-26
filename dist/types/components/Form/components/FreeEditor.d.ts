interface FreeEditorProps {
    value: string;
    name: string;
    onChange: (content: string) => void;
    label?: string;
    required?: boolean;
    placeholder?: string;
    parentClass?: string;
    height?: number;
    disabled?: boolean;
    errorMessage?: string;
}
declare const FreeEditor: ({ value, name, onChange, label, required, placeholder, parentClass, height, disabled, errorMessage, }: FreeEditorProps) => import("react/jsx-runtime").JSX.Element;
export default FreeEditor;
