import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Search, Check } from "lucide-react";
import InputLabel from "./InputLabel";

const Select = ({
  options = [],
  value = "",
  defaultValue = "",
  onChange,
  placeholder = "Select option",
  className = "",
  disabled = false,
  search = false,
  label = "",
  required = false,
  name = "",
  parentClass = "",
  multiple = false, // ✅ NEW
  dropdownMaxHeight = "",
}) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAboveState, setShowAboveState] = useState(true);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  let initialVal = value || value === false ? value : defaultValue;

  const normalize = (val) => {
    if (val === null || val === undefined || val === "") return "";
    return typeof val === "boolean" ? String(val) : String(val ?? "");
  };

  const normalizedValue = multiple
    ? (initialVal || []).map(normalize)
    : normalize(initialVal);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const isSelected = (optionValue) => {
    const normalized = normalize(optionValue);
    if (multiple) {
      return normalizedValue.includes(normalized);
    }
    return normalized === normalizedValue;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const dropdownHeight = 200;
      setShowAboveState(spaceBelow < dropdownHeight);
    }
  }, [open]);

  useEffect(() => {
    if (open && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [open]);

  const handleOptionClick = (optionValue) => {
    let finalValue = optionValue;
    if (optionValue === "true") finalValue = true;
    else if (optionValue === "false") finalValue = false;

    if (multiple) {
      const exists = normalizedValue.includes(normalize(optionValue));

      let newValues;
      if (exists) {
        newValues = value.filter(
          (v) => normalize(v) !== normalize(optionValue),
        );
      } else {
        newValues = [...(value || []), finalValue];
      }

      onChange(newValues);
    } else {
      onChange(finalValue);
      setOpen(false);
    }

    setSearchTerm("");
  };

  const selectedLabels = multiple
    ? options
        .filter((opt) => isSelected(opt.value))
        .map((opt) => opt.label)
        .join(", ")
    : options.find((opt) => isSelected(opt.value))?.label;

  return (
    <div key={name} className={parentClass || "col-span-12"}>
      <InputLabel label={label} required={required} />

      <div className={`relative ${className}`} ref={dropdownRef}>
        <select
          name="hidden_select_for_validation"
          value={selectedLabels || ""}
          required={required}
          multiple={multiple}
          className="absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]"
        >
          <option hidden value={selectedLabels}>
            {selectedLabels}
          </option>
        </select>
        <button
          type="button"
          onClick={() => !disabled && setOpen(!open)}
          disabled={disabled}
          className={`w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${
            !selectedLabels
              ? "text-gray-500 dark:text-gray-400"
              : "dark:text-white"
          } 
          ${disabled ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}`}
        >
          <span className="truncate">{selectedLabels || placeholder}</span>

          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div
            className={`absolute z-50 w-full border rounded-md bg-white dark:bg-gray-700 shadow-lg 
            ${showAboveState ? "bottom-full mb-1" : "top-full mt-1"}`}
          >
            {search && (
              <div className="p-2 border-b border-gray-200 dark:border-gray-600">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div
              className={`max-h-40 overflow-y-auto`}
              style={{
                maxHeight: dropdownMaxHeight || "",
              }}
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <button
                    key={String(option.value)}
                    type="button"
                    onClick={() => handleOptionClick(String(option.value))}
                    className={`w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${
                      isSelected(option.value)
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                        : ""
                    }`}
                  >
                    <span>{option.label}</span>

                    {multiple && isSelected(option.value) && (
                      <Check className="w-4 h-4" />
                    )}
                  </button>
                ))
              ) : (
                <div className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
                  No options found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
