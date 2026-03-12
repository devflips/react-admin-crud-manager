type ImageValueItem = File | {
    file?: File;
    preview?: string;
} | string;
interface MultiImagePickerProps {
    label?: string;
    value: ImageValueItem[];
    onChange: (files: ImageValueItem[]) => void;
    required?: boolean;
    accept?: string;
    aspect?: number | string;
    id: string;
    dragDrop?: boolean;
    cropImage?: boolean;
    name: string;
    parentClass?: string;
    maxImages?: number;
    errorMessage?: string;
}
declare const MultiImagePicker: ({ label, value, onChange, required, accept, aspect, id, dragDrop, cropImage, name, parentClass, maxImages, errorMessage, }: MultiImagePickerProps) => import("react/jsx-runtime").JSX.Element;
export default MultiImagePicker;
