import React from "react";
interface ActionButton {
    type?: string;
    variant?: string;
    color?: string;
    className?: string;
    disabled?: boolean;
    label?: string;
    onClick?: (e?: React.MouseEvent, selectedItem?: any) => Promise<any> | any;
}
interface ModalProps {
    isOpen: boolean;
    onClose: (resp?: any) => void;
    icon?: React.ReactNode;
    title: React.ReactNode;
    children: React.ReactNode;
    size?: string;
    actionButtons?: ActionButton[];
    footerConfig?: any;
    onFormSubmit?: (e?: any) => void;
    onCancel?: () => void;
    loadingBtn?: boolean;
    loading?: boolean;
    executeFunction?: (...args: any[]) => void;
    selectedItem?: any;
}
declare const Modal: ({ isOpen, onClose, icon, title, children, size, actionButtons, onFormSubmit, loadingBtn, executeFunction, selectedItem, }: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default Modal;
