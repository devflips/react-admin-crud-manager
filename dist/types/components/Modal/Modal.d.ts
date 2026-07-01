import React from "react";
import { ActionButton } from "../../types/crudtypes";
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
    classNames?: {
        overlay?: string;
        container?: string;
        header?: string;
        title?: string;
        body?: string;
        footer?: string;
        closeButton?: string;
    };
}
declare const Modal: ({ isOpen, onClose, icon, title, children, size, actionButtons, onFormSubmit, loadingBtn, executeFunction, selectedItem, footerConfig, classNames, }: ModalProps) => React.JSX.Element | null;
export default Modal;
