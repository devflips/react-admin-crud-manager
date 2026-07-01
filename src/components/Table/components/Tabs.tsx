import React from "react";
import Button from "../../Button/Button";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

export interface TabOption {
  value: string | number | boolean;
  label: string;
  count?: number;
  className?: string;
}

interface TabsProps {
  options: TabOption[];
  value: string | number | boolean;
  onChange: (option: TabOption) => void;
  className?: string;
}

const Tabs = ({ options, value, onChange, className = "" }: TabsProps) => {
  if (!options?.length) return null;

  return (
    <div
      className={joinClasses(
        crudClasses.tabs.root,
        "inline-flex w-full flex-wrap gap-2",
        className,
      )}
      role="tablist"
      aria-label="Table tabs"
    >
      {options.map((option, index) => {
        const isActive = option.value == value;

        return (
          <Button
            key={`${String(option.value)}-${index}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option)}
            variant={isActive ? "contained" : "outlined"}
            color="primary"
            size="sm"
            className={joinClasses(
              crudClasses.tabs.tab,
              "rounded-full px-4 py-2 shadow-none transition-all duration-200",
              !isActive
                ? "bg-white/90 text-primary hover:bg-primary/10 dark:bg-gray-950/80 dark:text-primary dark:hover:bg-primary/15"
                : "ring-1 ring-primary/10",
              option.className || "",
            )}
          >
            <span className="inline-flex items-center gap-2">
              <span>{option.label}</span>
              {typeof option.count === "number" && (
                <span
                  className={joinClasses(
                    crudClasses.tabs.count,
                    "inline-flex min-w-6 items-center justify-center rounded-full px-2 py-0.5 text-xs font-semibold",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-primary/10 text-primary dark:bg-primary/20",
                  )}
                >
                  {option.count}
                </span>
              )}
            </span>
          </Button>
        );
      })}
    </div>
  );
};

export default Tabs;
