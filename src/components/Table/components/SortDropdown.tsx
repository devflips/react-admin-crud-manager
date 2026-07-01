import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ArrowUpDown } from "lucide-react";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

interface SortOption {
  value: string;
  label: string;
  [key: string]: any;
}

interface SortDropdownProps {
  options: SortOption[];
  value: string;
  onChange: (value: string, option: SortOption | null) => void;
  clearLabel?: string;
  label?: string;
  icon?: ReactNode | null;
}

const SortDropdown = ({
  options = [],
  value = "",
  onChange,
  clearLabel = "",
  label,
  icon,
}: SortDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement | null>(null);
  const isSortApplied = Boolean(value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSelect = (selectedValue: string) => {
    const selectedOption = options.find((opt) => opt.value === selectedValue);
    onChange(selectedValue, selectedOption || null);
    setIsOpen(false);
  };

  if (!options?.length) return null;

  return (
    <div
      className={joinClasses(crudClasses.sortDropdown.root, "relative")}
      ref={sortRef}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={joinClasses(
          crudClasses.sortDropdown.trigger,
          label
            ? "relative inline-flex items-center justify-center h-[36px] px-3 gap-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition text-sm font-medium"
            : "relative inline-flex items-center justify-center h-[36px] w-[36px] rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition",
        )}
        aria-label="Open sort options"
      >
        {icon !== undefined ? (
          icon !== null ? icon : null
        ) : (
          <ArrowUpDown className="w-4 h-4" />
        )}
        {label && <span>{label}</span>}
        {isSortApplied && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        )}
      </button>

      {isOpen && (
        <div
          className={joinClasses(
            crudClasses.sortDropdown.menu,
            "absolute right-0 mt-2 z-20 min-w-[220px] max-h-[260px] overflow-auto rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg",
          )}
        >
          {Boolean(clearLabel?.trim()) && (
            <button
              type="button"
              onClick={() => handleSelect("")}
              className={joinClasses(
                crudClasses.sortDropdown.item,
                "w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700",
                !value
                  ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-gray-200",
              )}
            >
              {clearLabel}
            </button>
          )}

          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={joinClasses(
                crudClasses.sortDropdown.item,
                "w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700",
                value === option.value
                  ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-gray-200",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
