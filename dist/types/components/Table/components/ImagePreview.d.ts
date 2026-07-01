interface ImagePreviewProps {
    src: string;
    alt?: string;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}
declare const ImagePreview: ({ src, alt, isOpen, setIsOpen, }: ImagePreviewProps) => import("react").JSX.Element;
export default ImagePreview;
