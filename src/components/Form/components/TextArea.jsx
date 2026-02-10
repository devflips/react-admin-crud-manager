import React, { useState } from "react";
import InputLabel from "./InputLabel";

const TextArea = React.forwardRef(
  ({ className = "", label, required, ...props }, ref) => {
    const combinedClassName = `
      placeholder-gray-400 dark:placeholder-gray-400
      ${className}
    `.trim();

    return (
      <>
        <div key={props.name} className={props.parentClass || "col-span-12"}>
          <InputLabel label={label} required={required} />
          <div className="relative">
            <textarea
              className={combinedClassName}
              ref={ref}
              required={required}
              {...props}
            />
          </div>
        </div>
      </>
    );
  },
);

TextArea.displayName = "TextArea";

export { TextArea };
