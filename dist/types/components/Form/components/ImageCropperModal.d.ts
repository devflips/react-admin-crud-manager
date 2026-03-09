interface ImageCropperModalProps {
    isOpen: boolean;
    imageSrc: string;
    fileType?: string;
    fileName?: string;
    aspect?: number;
    title?: string;
    onClose: () => void;
    onApply: (file: File) => void;
}
declare const ImageCropperModal: ({ isOpen, imageSrc, fileType, fileName, aspect, title, onClose, onApply, }: ImageCropperModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default ImageCropperModal;
