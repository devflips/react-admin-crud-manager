import React from "react";
type MediaValue = File | {
    file?: File;
    preview?: string;
} | string | null;
interface VideoPickerProps {
    label: string;
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
declare const VideoPicker: ({ label, value, onChange, required, accept, id, dragDrop, name, parentClass, maxSize, errorMessage, }: VideoPickerProps) => React.JSX.Element;
export default VideoPicker;
