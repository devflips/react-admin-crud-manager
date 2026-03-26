import ReactEditor from "react-text-editor-kit/react-editor/build/index.js";
import InputLabel from "./InputLabel";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

interface FreeEditorProps {
  value: string;
  name: string;
  onChange: (content: string) => void;
  label?: string;
  required?: boolean;
  placeholder?: string;
  parentClass?: string;
  height?: number;
  disabled?: boolean;
  errorMessage?: string;
}

const FreeEditor = ({
  value = "",
  name = "",
  onChange,
  label = "",
  required = false,
  placeholder = "",
  parentClass = "col-span-12",
  height = 300,
  disabled = false,
  errorMessage = "",
}: FreeEditorProps) => {
  const getEditorRef = (_ref: unknown) => {};

  return (
    <div
      className={joinClasses(crudClasses.field.wrapper, parentClass)}
      id={`field-${name}`}
    >
      {label && <InputLabel label={label} required={required} />}

      <ReactEditor
        value={value}
        onChange={(content: string) => onChange?.(content || "")}
        getEditorRef={getEditorRef}
        placeholder={placeholder}
        mainProps={{
          className: `${disabled ? "pointer-events-none opacity-70" : ""}`,
          style: { minHeight: `${height}px` },
        }}
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
  );
};

export default FreeEditor;
