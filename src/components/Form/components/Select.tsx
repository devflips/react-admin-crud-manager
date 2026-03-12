import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Search, Check } from "lucide-react";
import InputLabel from "./InputLabel";
import { countries } from "../../../data/countries";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

interface SelectOption {
  label: string;
  value: any;
  code?: string;
}

interface SelectProps {
  options?:
    | SelectOption[]
    | ((
        formData: Record<string, any>,
      ) => Promise<SelectOption[]> | SelectOption[]);
  value: any;
  defaultValue?: any;
  onChange: (value: any) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  search?: boolean;
  label?: React.ReactNode;
  required?: boolean;
  name: string;
  parentClass?: string;
  multiple?: boolean;
  dropdownMaxHeight?: string | number;
  formData: Record<string, any>;
  dependencyKey?: string;
  countriesList?: boolean;
  errorMessage?: string;
}

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
  multiple = false,
  dropdownMaxHeight = "",
  formData = {},
  countriesList = false,
  dependencyKey = "",
  errorMessage = "",
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAboveState, setShowAboveState] = useState(true);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [normalizedOptions, setNormalizedOptions] = useState<SelectOption[]>(
    [],
  );

  const initialVal = value || value === false ? value : defaultValue;

  const normalize = (val: any) => {
    if (val === null || val === undefined || val === "") return "";
    return typeof val === "boolean" ? String(val) : String(val ?? "");
  };

  const getCountrieslist = () => {
    const list = countries.map((obj) => ({
      value: obj.code,
      label: obj.label,
      code: obj.code,
    }));
    return list;
  };

  useEffect(
    () => {
      const loadOptions = async () => {
        if (countriesList == true) {
          setNormalizedOptions(getCountrieslist());
        } else if (typeof options === "function") {
          const result = await options(formData);
          setNormalizedOptions(result || []);
        } else {
          setNormalizedOptions(options || []);
        }
      };

      loadOptions();
    },
    dependencyKey ? [options, formData?.[dependencyKey]] : [options],
  );

  const normalizedValue = multiple
    ? (initialVal || []).map(normalize)
    : normalize(initialVal);

  const filteredOptions = normalizedOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const isSelected = (optionValue: any) => {
    const normalized = normalize(optionValue);
    if (multiple) {
      return (normalizedValue as string[]).includes(normalized);
    }
    return normalized === normalizedValue;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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

  const handleOptionClick = (optionValue: any) => {
    let finalValue = optionValue;
    if (optionValue === "true") finalValue = true;
    else if (optionValue === "false") finalValue = false;

    if (multiple) {
      const exists = (normalizedValue as string[]).includes(
        normalize(optionValue),
      );

      let newValues: any[];
      if (exists) {
        newValues = (Array.isArray(value) ? value : []).filter(
          (v) => normalize(v) !== normalize(optionValue),
        );
      } else {
        newValues = [...(Array.isArray(value) ? value : []), finalValue];
      }

      onChange?.(newValues);
    } else {
      onChange?.(finalValue);
      setOpen(false);
    }

    setSearchTerm("");
  };

  const selectedLabels = multiple
    ? normalizedOptions
        .filter((opt) => isSelected(opt.value))
        .map((opt) => opt.label)
        .join(", ")
    : normalizedOptions.find((opt) => isSelected(opt.value))?.label;

  useEffect(() => {
    if (initialVal || initialVal === false) {
      setTimeout(() => {
        onChange?.(initialVal);
      }, 100);
    }
  }, []);

  return (
    <div
      key={name}
      className={joinClasses(
        crudClasses.field.wrapper,
        parentClass || "col-span-12",
      )}
    >
      <InputLabel label={label} required={required} />

      <div
        className={joinClasses(crudClasses.field.input, "relative", className)}
        ref={dropdownRef}
      >
        <select
          name="hidden_select_for_validation"
          value={selectedLabels || ""}
          required={required}
          multiple={multiple}
          id={`field-${name}`}
          className="absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]"
          onChange={() => {}}
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
          ${disabled ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}
          ${errorMessage ? "border-red-500" : ""}`}
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
              className="max-h-40 overflow-y-auto"
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
                    <div className="flex gap-2 items-center">
                      {countriesList && option?.code && (
                        <img
                          src={`https://flagcdn.com/w20/${option?.code.toLowerCase()}.png`}
                          alt={option.code}
                          className="w-5 h-3 object-cover"
                        />
                      )}
                      <span>{option.label}</span>
                    </div>

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
  );
};

export default Select;
