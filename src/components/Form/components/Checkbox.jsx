import React from "react";
import InputLabel from "./InputLabel";

const Checkbox = ({
  name = "",
  label = "", // label for single checkbox
  options = [], // array of { label, value } for multiple
  value = null, // boolean for single, array for multiple, or string for single select
  onChange,
  disabled = false,
  required = false,
  parentClass = "col-span-12",
  className = "",
  multiSelect = false, // ✅ if true, only one option can be selected (like radio)
}) => {
  // Detect if multiple options are present
  const multiple = Array.isArray(options) && options.length > 0;

  // Check if a value is selected
  const isChecked = (optionValue) => {
    if (multiple) {
      if (!multiSelect) return value === optionValue;
      return Array.isArray(value) && value.includes(optionValue);
    }
    return Boolean(value);
  };

  // Handle change for single checkbox
  const handleSingleChange = (e) => {
    onChange?.(e.target.checked, name);
  };

  // Handle change for multiple checkboxes
  const handleMultipleChange = (optionValue, checked) => {
    if (!onChange) return;

    if (!multiSelect) {
      if (checked) {
        onChange(optionValue, name);
      } else {
        onChange("", name);
      }
      // Only allow one selected
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

  // ---------------- JSX ----------------
  if (multiple) {
    // Multiple options
    return (
      <>
        <div className={`${parentClass}`}>
          <InputLabel label={label} required={required} />
          <div className={`flex flex-col space-y-2`}>
            {options.map((opt, idx) => (
              <div key={opt.value || opt.label} className="flex items-center">
                <input
                  type="checkbox"
                  name={name}
                  value={opt.value}
                  checked={isChecked(opt.value)}
                  disabled={disabled || opt.disabled}
                  required={required && idx === 0}
                  onChange={(e) =>
                    handleMultipleChange(opt.value, e.target.checked)
                  }
                  key={name}
                  className={`h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${className}`}
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
        </div>
      </>
    );
  }

  // Single checkbox
  return (
    <div className={`flex items-center ${parentClass}`}>
      <input
        type="checkbox"
        name={name}
        checked={isChecked()}
        disabled={disabled}
        required={required}
        onChange={handleSingleChange}
        className={`h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${className}`}
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
