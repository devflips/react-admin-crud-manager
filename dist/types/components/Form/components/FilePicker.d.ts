import React from "react";
type FileValueItem = File | {
    file?: File | string | Record<string, any>;
    preview?: string;
} | Record<string, any> | string;
type FileValue = FileValueItem | FileValueItem[] | null;
interface FilePickerProps {
    label?: string;
    value: FileValue;
    onChange: (file: FileValue) => void;
    required?: boolean;
    accept?: string;
    id: string;
    dragDrop?: boolean;
    multiple?: boolean;
    cropImage?: boolean;
    aspect?: number | string;
    name: string;
    parentClass?: string;
    maxSize?: number;
    maxFiles?: number;
    errorMessage?: string;
}
declare const FilePicker: ({ label, value, onChange, required, accept, id, dragDrop, multiple, cropImage, aspect, name, parentClass, maxSize, maxFiles, errorMessage, }: FilePickerProps) => React.JSX.Element;
export default FilePicker;
