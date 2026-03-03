import React from "react";
import InputLabel from "./InputLabel";

const Switch = React.forwardRef(
  (
    {
      label,
      required,
      parentClass = "col-span-12",
      className = "",
      value,
      onChange,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={`flex justify-between ${parentClass}`}>
        {label && <InputLabel label={label} required={required} />}

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            ref={ref}
            className="sr-only peer"
            checked={value}
            onChange={(e) => onChange(e.target.checked)}
            disabled={disabled}
            {...props}
          />

          {/* Switch Track */}
          <div
            className={`
              w-11 h-6 bg-gray-200 peer-focus:outline-none
              rounded-full peer dark:bg-gray-700
              peer-checked:bg-primary-600
              peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
              transition-colors duration-200
              ${className}
            `}
          ></div>

          {/* Switch Thumb */}
          <div
            className="
              absolute left-1 top-1
              w-4 h-4 bg-white rounded-full
              transition-transform duration-200
              peer-checked:translate-x-5
            "
          ></div>
        </label>
      </div>
    );
  },
);

Switch.displayName = "Switch";

export { Switch };
