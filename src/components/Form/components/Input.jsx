import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import InputLabel from "./InputLabel";

const Input = React.forwardRef(
  (
    {
      label,
      required,
      parentClass = "",
      className = "",
      type = "text",
      onKeyDown,
      negativeNumberAllow = true,
      defaultValue = "",
      field = {},
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleKeyDown = (e) => {
      if (type === "number") {
        const blockedKeys = ["e", "E", "+"];

        // Block e, E, +
        if (blockedKeys.includes(e.key)) {
          e.preventDefault();
          return;
        }

        // Block negative sign if not allowed
        if (negativeNumberAllow == false && e.key === "-") {
          e.preventDefault();
          return;
        }

        // Block arrow up/down from changing value
        if (["ArrowUp", "ArrowDown"].includes(e.key)) {
          e.preventDefault();
          return;
        }
      }

      onKeyDown?.(e);
    };

    const combinedClassName = `
      h-10 placeholder-gray-400 dark:placeholder-gray-400
      ${type === "password" ? "pr-10" : ""}
      ${type === "number" ? "no-spinner" : ""}
      ${className}
    `.trim();

    useEffect(() => {
      if (defaultValue) {
        let value = props.value || defaultValue;
        setTimeout(() => {
          props.onChange?.({ target: { value: value } });
        }, 100);
      }
    }, [defaultValue]);

    return (
      <>
        <div key={props.name} className={parentClass || "col-span-12"}>
          <InputLabel
            label={label}
            required={required}
            infoText={field.infoText}
          />
          <div className="relative">
            <input
              type={type === "password" && showPassword ? "text" : type}
              ref={ref}
              required={required}
              onKeyDown={handleKeyDown}
              className={combinedClassName}
              {...props}
            />

            {type === "password" && (
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <Icon
                  icon={
                    showPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"
                  }
                  className="w-5 h-5"
                />
              </button>
            )}
          </div>
        </div>
      </>
    );
  },
);

Input.displayName = "Input";

export { Input };
