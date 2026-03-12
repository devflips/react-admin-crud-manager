import { crudClasses, joinClasses } from "../../../lib/crudClasses";
import InputLabel from "./InputLabel";

interface RadioOption {
  label: string;
  value: any;
}

interface RadioProps {
  value: any;
  onChange: (value: any) => void;
  text?: string;
  options: RadioOption[];
  label?: string;
  required?: boolean;
  name: string;
  disabled?: boolean;
  parentClass?: string;
  errorMessage?: string;
}

const Radio = ({
  value = true,
  onChange,
  text,
  options = [],
  label,
  required,
  name = "",
  disabled = false,
  parentClass = "",
  errorMessage = "",
}: RadioProps) => {
  const radioOptions: RadioOption[] =
    options.length > 0
      ? options
      : [
          { label: "Active", value: true },
          { label: "Inactive", value: false },
        ];

  return (
    <>
      <div
        key={name}
        className={joinClasses(
          crudClasses.field.wrapper,
          parentClass || "col-span-12",
        )}
      >
        <InputLabel label={label} required={required} />
        <div
          className={`flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600
          ${errorMessage ? "border-red-500" : ""}`}
        >
          {text && (
            <p className="text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]">
              {text}
            </p>
          )}

          <div className="flex items-center gap-6">
            {radioOptions.map((opt, idx) => (
              <label
                key={idx}
                className="flex items-center gap-2 cursor-pointer select-none"
              >
                <input
                  type="radio"
                  name="switch-field"
                  required={required && idx === 0}
                  value={String(opt.value)}
                  disabled={disabled}
                  id={`field-${name}`}
                  checked={value === opt.value}
                  onChange={() => onChange?.(opt.value)}
                  className={joinClasses(
                    crudClasses.field.input,
                    "w-4 h-4 border-gray-300 cursor-pointer",
                  )}
                />
                <span className="text-sm text-gray-700 dark:text-white">
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
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
    </>
  );
};

export default Radio;
