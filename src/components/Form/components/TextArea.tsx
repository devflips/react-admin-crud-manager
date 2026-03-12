import React from "react";
import InputLabel from "./InputLabel";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  required?: boolean;
  parentClass?: string;
  className?: string;
  errorMessage?: string;
  name: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { className = "", label, required, errorMessage = "", name, ...props },
    ref,
  ) => {
    const combinedClassName = joinClasses(
      crudClasses.field.input,
      "placeholder-gray-400 dark:placeholder-gray-400",
      errorMessage ? "border-red-500" : "",
      className,
    );

    return (
      <>
        <div
          key={name}
          className={joinClasses(
            crudClasses.field.wrapper,
            props.parentClass || "col-span-12",
          )}
        >
          <InputLabel label={label} required={required} />
          <div className="relative">
            <textarea
              className={combinedClassName}
              ref={ref}
              id={`field-${name}`}
              required={required}
              {...props}
            />
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
        </div>
      </>
    );
  },
);

TextArea.displayName = "TextArea";

export { TextArea };
