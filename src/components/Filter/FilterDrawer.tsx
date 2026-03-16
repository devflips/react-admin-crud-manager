import React, { useState } from "react";
import { X } from "lucide-react";
import Button from "../Button/Button";
import RenderFields from "../Form/components/RenderFields";
import { crudClasses, joinClasses } from "../../lib/crudClasses";
import { FormField } from "../../types/crudtypes";

interface FilterConfig {
  component: React.ComponentType<{
    filters: Record<string, any>;
    onFilterChange: (key: string, value: any) => void;
  }>;
  fields: Array<FormField>;
}

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: FilterConfig;
  onApply: (filters: Record<string, any>) => void;
}

const FilterDrawer = ({
  isOpen,
  onClose,
  config,
  onApply,
}: FilterDrawerProps) => {
  const [filters, setFilters] = useState<Record<string, any>>({});

  const handleChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({});
    onApply({});
    onClose();
  };

  const DynamicComponent = config?.component;

  return (
    <>
      <div
        className={joinClasses(
          crudClasses.filterDrawer.overlay,
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        // onClick={onClose}
      />

      <div
        className={joinClasses(
          crudClasses.filterDrawer.panel,
          "fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div
          className={joinClasses(
            crudClasses.filterDrawer.header,
            "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700",
          )}
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Filters
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {isOpen && (
          <div
            className={joinClasses(
              crudClasses.filterDrawer.body,
              "flex-1 overflow-y-auto px-4 py-3",
            )}
          >
            {DynamicComponent ? (
              <DynamicComponent
                filters={filters}
                onFilterChange={handleChange}
              />
            ) : (
              <div className="space-y-4">
                {config?.fields?.map((field) => (
                  <RenderFields
                    key={field.key}
                    field={field}
                    formData={filters}
                    handleChange={handleChange}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div
          className={joinClasses(
            crudClasses.filterDrawer.footer,
            "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700",
          )}
        >
          <Button
            onClick={handleApply}
            variant="contained"
            color="primary"
            fullWidth
          >
            Apply Filters
          </Button>
          <Button
            onClick={handleReset}
            variant="contained"
            className="min-w-[150px]"
          >
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterDrawer;
