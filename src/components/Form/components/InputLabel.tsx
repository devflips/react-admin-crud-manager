import { Info } from "lucide-react";
import React from "react";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

interface InputLabelProps {
  label: React.ReactNode;
  required?: boolean;
  infoText?: string;
}

export default function InputLabel({
  label,
  required = false,
  infoText = "",
}: InputLabelProps) {
  return (
    <>
      <label
        className={joinClasses(
          crudClasses.field.label,
          "flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
        )}
      >
        {label}
        {required && <span className="ml-1">*</span>}

        {infoText && (
          <span className="ml-2 relative group inline-flex items-center cursor-pointer">
            <Info className="w-4 h-4 text-gray-500 dark:text-gray-400" />

            <span
              className="absolute left-1/2 top-full mt-2
                   w-max max-w-xs bg-white text-black dark:bg-black dark:text-white text-xs
                   rounded px-2 py-1 opacity-0 shadow-lg
                   group-hover:opacity-100 transition-opacity
                   duration-200 pointer-events-none z-50"
            >
              {infoText}
            </span>
          </span>
        )}
      </label>
    </>
  );
}
