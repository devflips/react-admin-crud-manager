import React from "react";
import { X } from "lucide-react";
import Button from "../Button/Button";
import { ActionButton } from "../../types/crudtypes";
import { crudClasses, joinClasses } from "../../lib/crudClasses";

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
  footerConfig,
  classNames,
}: ModalProps) => {
  if (!isOpen) return null;

  const sizeClasses: Record<string, string> = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full",
  };

  const shouldShowFooter =
    actionButtons.length > 0 || Boolean(footerConfig?.cancelButton);

  return (
    <div
      className={joinClasses(
        crudClasses.modal.root,
        "fixed inset-0 z-50 flex items-center justify-center p-4",
      )}
    >
      <div
        className={joinClasses(
          crudClasses.modal.overlay,
          "fixed inset-0 bg-gray-500 opacity-75",
          classNames?.overlay,
        )}
        onClick={() => onClose()}
      ></div>

      <div
        className={joinClasses(
          crudClasses.modal.container,
          "relative bg-white rounded-lg shadow-xl w-full max-h-[90vh] flex flex-col dark:bg-gray-800",
          sizeClasses[size] || sizeClasses.md,
          classNames?.container,
        )}
      >
        <div
          className={joinClasses(
            crudClasses.modal.header,
            "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0",
            classNames?.header,
          )}
        >
          <div className="flex items-center gap-1">
            {icon && <span>{icon}</span>}
            <h3
              className={joinClasses(
                crudClasses.modal.title,
                "text-lg font-medium text-gray-900 dark:text-white",
                classNames?.title,
              )}
            >
              {title}
            </h3>
          </div>

          <button
            onClick={() => onClose()}
            className={joinClasses(
              crudClasses.modal.closeButton,
              "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
              classNames?.closeButton,
            )}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div
          className={joinClasses(
            crudClasses.modal.body,
            "flex-1 overflow-y-auto p-4",
            classNames?.body,
          )}
        >
          {children}
        </div>

        {shouldShowFooter && (
          <div
            className={joinClasses(
              crudClasses.modal.footer,
              "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6",
              classNames?.footer,
            )}
          >
            {footerConfig?.cancelButton && (
              <Button
                onClick={() => onClose()}
                variant="outlined"
                color="default"
                className={joinClasses(
                  crudClasses.modal.actionButton,
                  "min-w-[100px]",
                )}
                type="button"
              >
                {footerConfig?.cancelText || "Cancel"}
              </Button>
            )}
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
                className={joinClasses(
                  crudClasses.modal.actionButton,
                  "min-w-[100px]",
                  btn.className || "",
                )}
                type={(btn.type as "button" | "submit" | "reset") || "button"}
              >
                {loadingBtn ? (
                  <div
                    className={joinClasses(
                      crudClasses.modal.loadingIndicator,
                      "flex items-center",
                    )}
                  >
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
