import React from "react";
import InputLabel from "./InputLabel";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

interface SwitchProps {
  label?: React.ReactNode;
  required?: boolean;
  parentClass?: string;
  className?: string;
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  name: string;
  errorMessage?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      required,
      parentClass = "col-span-12",
      className = "",
      value = false,
      onChange,
      disabled = false,
      errorMessage = "",
      name,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={joinClasses(
          crudClasses.field.wrapper,
          "flex justify-between",
          parentClass,
        )}
      >
        {label && <InputLabel label={label} required={required} />}

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            ref={ref}
            id={`field-${name}`}
            className={joinClasses(crudClasses.field.input, "sr-only peer")}
            checked={value}
            onChange={(e) => onChange?.(e.target.checked)}
            disabled={disabled}
            {...props}
          />

          <div
            className={`
              w-11 h-6 bg-gray-200 peer-focus:outline-none
              rounded-full peer dark:bg-gray-700
              peer-checked:bg-primary-600
              peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
              transition-colors duration-200
              ${errorMessage ? "border-red-500" : ""}
              ${className}
            `}
          ></div>

          <div
            className="
              absolute left-1 top-1
              w-4 h-4 bg-white rounded-full
              transition-transform duration-200
              peer-checked:translate-x-5
            "
          ></div>
        </label>
        {errorMessage && (
          <span
            className={joinClasses(
              crudClasses.field.error,
              "text-red-500 text-xs mt-1",
            )}
          >
            {errorMessage}
          </span>
        )}
      </div>
    );
  },
);

Switch.displayName = "Switch";

export { Switch };
