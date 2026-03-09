import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import InputLabel from "./InputLabel";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: any;
  required: boolean;
  parentClass?: string;
  className?: string;
  type: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  negativeNumberAllow?: boolean;
  defaultValue?: any;
  field: Record<string, any>;
  onChange: (value: any) => void;
  mask?: string;
  maskApplyOnValue?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      value,
      required,
      parentClass = "",
      className = "",
      type = "text",
      onKeyDown,
      negativeNumberAllow = true,
      defaultValue = "",
      field = {},
      onChange,
      mask = "",
      maskApplyOnValue = true,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (type === "number") {
        const blockedKeys = ["e", "E", "+"];

        if (blockedKeys.includes(e.key)) {
          e.preventDefault();
          return;
        }

        if (negativeNumberAllow == false && e.key === "-") {
          e.preventDefault();
          return;
        }

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

    function applyMask(rawValue: any, maskValue: string) {
      if (!rawValue) return rawValue;
      const cleanValue = String(rawValue).replace(/[^a-zA-Z0-9]/g, "");
      let result = "";
      let valueIndex = 0;

      for (
        let i = 0;
        i < maskValue?.length && valueIndex < cleanValue.length;
        i++
      ) {
        const maskChar = maskValue[i];
        const valueChar = cleanValue[valueIndex];

        if (maskChar === "9") {
          if (/\d/.test(valueChar)) {
            result += valueChar;
            valueIndex++;
          } else {
            valueIndex++;
            i--;
          }
        } else if (maskChar === "A") {
          if (/[a-zA-Z]/.test(valueChar)) {
            result += valueChar;
            valueIndex++;
          } else {
            valueIndex++;
            i--;
          }
        } else if (maskChar === "X") {
          if (/[a-zA-Z0-9]/.test(valueChar)) {
            result += valueChar;
            valueIndex++;
          } else {
            valueIndex++;
            i--;
          }
        } else if (maskChar === "*") {
          result += valueChar;
          valueIndex++;
        } else {
          result += maskChar;

          if (valueChar === maskChar) {
            valueIndex++;
          }
        }
      }

      return result;
    }

    useEffect(() => {
      if (defaultValue) {
        const localValue = value || defaultValue;
        setTimeout(() => {
          onChange?.(localValue);
        }, 100);
      }
    }, [defaultValue]);

    return (
      <>
        <div key={props.name} className={parentClass || "col-span-12"}>
          <InputLabel
            label={label}
            required={required}
            infoText={field?.infoText}
          />
          <div className="relative">
            <input
              type={type === "password" && showPassword ? "text" : type}
              ref={ref}
              required={required}
              onKeyDown={handleKeyDown}
              className={combinedClassName}
              value={mask ? applyMask(value, mask) : value}
              onChange={(e) => {
                mask && maskApplyOnValue
                  ? onChange(applyMask(e.target.value, mask))
                  : onChange(e.target.value);
              }}
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
