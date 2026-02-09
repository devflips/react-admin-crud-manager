import React from "react";

export default function InputLabel({ label, required = false }) {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
        {required && <span className="ml-1">*</span>}
      </label>
    </>
  );
}
