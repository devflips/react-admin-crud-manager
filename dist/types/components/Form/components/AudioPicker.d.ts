type MediaValue = File | {
    file?: File;
    preview?: string;
} | string | null;
interface AudioPickerProps {
    label?: string;
    value: MediaValue;
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
declare const AudioPicker: ({ label, value, onChange, required, accept, id, dragDrop, name, parentClass, errorMessage, maxSize, }: AudioPickerProps) => import("react/jsx-runtime").JSX.Element;
export default AudioPicker;
