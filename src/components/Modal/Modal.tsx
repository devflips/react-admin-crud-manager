import React from "react";
import { X } from "lucide-react";
import Button from "../Button/Button";

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

const Modal = ({
  isOpen,
  onClose,
  icon,
  title,
  children,
  size = "md",
  actionButtons = [],
  onFormSubmit = () => {},
  loadingBtn = false,
  executeFunction = () => {},
  selectedItem = null,
}: ModalProps) => {
  if (!isOpen) return null;

  const sizeClasses: Record<string, string> = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-gray-500 opacity-75"
        onClick={() => onClose()}
      ></div>

      <div
        className={`relative bg-white rounded-lg shadow-xl w-full ${
          sizeClasses[size] || sizeClasses.md
        } max-h-[90vh] flex flex-col dark:bg-gray-800`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="flex items-center gap-1">
            {icon && <span>{icon}</span>}
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>

          <button
            onClick={() => onClose()}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">{children}</div>

        {actionButtons.length > 0 && (
          <div className="px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6">
            {actionButtons.map((btn, index) => (
              <Button
                key={`${btn.label || "action"}-${index}`}
                onClick={(e) => {
                  if (btn.type == "submit") {
                    onFormSubmit(e);
                  } else {
                    executeFunction(
                      () => Promise.resolve(btn?.onClick?.(e, selectedItem)),
                      (resp: any) => onClose?.(resp),
                    );
                  }
                }}
                disabled={loadingBtn || btn.disabled}
                variant={btn.variant || "contained"}
                color={btn.color || "primary"}
                className={`min-w-[100px] ${btn.className || ""}`}
                type={(btn.type as "button" | "submit" | "reset") || "button"}
              >
                {loadingBtn ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2"></div>
                    {btn.label || "Submit"}...
                  </div>
                ) : (
                  btn.label || "Submit"
                )}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
