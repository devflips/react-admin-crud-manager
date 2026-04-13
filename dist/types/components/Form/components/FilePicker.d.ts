type FileValue = File | {
    file?: File | string | Record<string, any>;
    preview?: string;
} | Record<string, any> | string | FileValue[] | null;
interface FilePickerProps {
    label?: string;
    value: FileValue;
    onChange: (file: File | null) => void;
    required?: boolean;
    accept?: string;
    id: string;
    dragDrop?: boolean;
    name: string;
    parentClass?: string;
    maxSize?: number;
    errorMessage?: string;
}
declare const FilePicker: ({ label, value, onChange, required, accept, id, dragDrop, name, parentClass, maxSize, errorMessage, }: FilePickerProps) => import("react/jsx-runtime").JSX.Element;
export default FilePicker;
