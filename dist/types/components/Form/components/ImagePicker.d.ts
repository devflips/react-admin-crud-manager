import React from "react";
type ImageValue = File | {
    file?: File;
    preview?: string;
} | string | null;
interface ImagePickerProps {
    label?: string;
    value: ImageValue;
    onChange: (file: File | null) => void;
    required?: boolean;
    accept?: string;
    aspect?: number | string;
    id: string;
    dragDrop?: boolean;
    cropImage?: boolean;
    name: string;
    parentClass?: string;
    errorMessage?: string;
}
declare const ImagePicker: ({ label, value, onChange, required, accept, aspect, id, dragDrop, cropImage, name, parentClass, errorMessage, }: ImagePickerProps) => React.JSX.Element;
export default ImagePicker;
