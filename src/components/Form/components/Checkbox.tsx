import React, { useEffect } from "react";
import InputLabel from "./InputLabel";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

interface CheckboxOption {
  label: string;
  value: any;
  disabled?: boolean;
}

interface CheckboxProps {
  name: string;
  label?: string;
  options: CheckboxOption[];
  value: any;
  onChange: (value: any, name?: string) => void;
  disabled?: boolean;
  required?: boolean;
  parentClass?: string;
  className?: string;
  multiSelect?: boolean;
  errorMessage?: string;
}

const Checkbox = ({
  name = "",
  label = "",
  options = [],
  value = null,
  onChange,
  disabled = false,
  required = false,
  parentClass = "col-span-12",
  className = "",
  errorMessage = "",
  multiSelect = false,
}: CheckboxProps) => {
  const multiple = Array.isArray(options) && options.length > 0;

  const isChecked = (optionValue?: any) => {
    if (multiple) {
      if (!multiSelect) return value === optionValue;
      return Array.isArray(value) && value.includes(optionValue);
    }
    return Boolean(value);
  };

  const handleSingleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked, name);
  };

  const handleMultipleChange = (optionValue: any, checked: boolean) => {
    if (!onChange) return;

    if (!multiSelect) {
      if (checked) {
        onChange(optionValue, name);
      } else {
        onChange("", name);
      }
    } else {
      const newValue = Array.isArray(value) ? [...value] : [];
      if (checked) {
        if (!newValue.includes(optionValue)) newValue.push(optionValue);
      } else {
        const index = newValue.indexOf(optionValue);
        if (index > -1) newValue.splice(index, 1);
      }
      onChange(newValue, name);
    }
  };

  useEffect(() => {
    let initialVal;

    if (multiple) {
      if (multiSelect) {
        // Ensure array for multiselect
        initialVal = Array.isArray(value) ? value : [];
      } else {
        // Single select from multiple options
        initialVal = value || "";
      }
    } else {
      // Single checkbox
      initialVal = Boolean(value);
    }

    setTimeout(() => {
      onChange?.(initialVal, name);
    }, 100);
  }, []);

  if (multiple) {
    return (
      <>
        <div className={joinClasses(crudClasses.field.wrapper, parentClass)}>
          <InputLabel label={label} required={required} />
          <div className="flex flex-col space-y-2">
            {options.map((opt, idx) => (
              <div key={opt.value || opt.label} className="flex items-center">
                <input
                  type="checkbox"
                  name={name}
                  id={`field-${name}`}
                  value={opt.value}
                  checked={isChecked(opt.value)}
                  disabled={disabled || Boolean(opt.disabled)}
                  required={required && idx === 0}
                  onChange={(e) =>
                    handleMultipleChange(opt.value, e.target.checked)
                  }
                  key={name}
                  className={joinClasses(
                    crudClasses.field.input,
                    "h-4 w-4 cursor-pointer text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
                    className,
                  )}
                />
                {opt.label && (
                  <label
                    htmlFor={name}
                    className="ml-2 text-sm text-gray-700 dark:text-gray-200 select-none"
                  >
                    {opt.label}
                  </label>
                )}
              </div>
            ))}
          </div>
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
      </>
    );
  }

  return (
    <div
      className={joinClasses(
        crudClasses.field.wrapper,
        "flex items-center",
        parentClass,
      )}
    >
      <input
        type="checkbox"
        name={name}
        checked={isChecked()}
        disabled={disabled}
        required={required}
        onChange={handleSingleChange}
        className={joinClasses(
          crudClasses.field.input,
          "h-4 w-4 text-primary-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
          className,
        )}
      />
      {label && (
        <label
          htmlFor={name}
          className="ml-2 text-sm text-gray-700 dark:text-gray-200 select-none"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
