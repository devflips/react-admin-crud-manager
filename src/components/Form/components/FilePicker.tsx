import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import { useSnackbar } from "notistack";
import Button from "../../Button/Button";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";
import InputLabel from "./InputLabel";

const ButtonComponent = Button as React.ComponentType<any>;

type FileValue = File | { file?: File; preview?: string } | string | null;

interface FilePickerProps {
  label?: string;
  value: FileValue;
  onChange: (file: File | null) => void;
  required?: boolean;
  accept?: string;
  id: string;
  dragDrop?: boolean;
  name: string;
  parentClass?: string;
  maxSize?: number;
  errorMessage?: string;
}

const getFileExtension = (name: string) => {
  const parts = name.split(".");
  return parts.length > 1 ? parts.pop()?.toLowerCase() || "" : "";
};

const getFileIcon = (name: string) => {
  const extension = getFileExtension(name);

  if (["pdf"].includes(extension)) return "mdi:file-pdf-box";
  if (["doc", "docx"].includes(extension)) return "mdi:file-word-box";
  if (["xls", "xlsx", "csv"].includes(extension)) return "mdi:file-excel-box";
  if (["ppt", "pptx"].includes(extension)) return "mdi:file-powerpoint-box";
  if (["zip", "rar", "7z", "tar", "gz"].includes(extension)) {
    return "mdi:folder-zip";
  }
  if (["txt", "md", "json", "xml"].includes(extension)) {
    return "mdi:file-document-outline";
  }

  return "mdi:file-outline";
};

const normalizeAcceptRules = (accept: string) =>
  accept
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);

const matchesAccept = (file: File, accept: string) => {
  if (!accept.trim()) return true;

  const rules = normalizeAcceptRules(accept);
  const mimeType = (file.type || "").toLowerCase();
  const extension = `.${getFileExtension(file.name)}`;

  return rules.some((rule) => {
    if (rule === "*/*") return true;
    if (rule.startsWith(".")) return extension === rule;
    if (rule.endsWith("/*")) {
      const typePrefix = rule.slice(0, -1);
      return mimeType.startsWith(typePrefix);
    }
    return mimeType === rule;
  });
};

const getFileNameFromValue = (value: FileValue) => {
  if (!value) return "";

  if (value instanceof File) return value.name;
  if (typeof value === "string") {
    const parts = value.split("/");
    return parts[parts.length - 1] || "selected-file";
  }

  if (typeof value === "object" && value.file?.name) {
    return value.file.name;
  }

  return "selected-file";
};

const FilePicker = ({
  label = "",
  value = null,
  onChange,
  required = false,
  accept = "*/*",
  id,
  dragDrop = false,
  name = "",
  parentClass = "",
  maxSize = 0,
  errorMessage = "",
}: FilePickerProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const [selectedFile, setSelectedFile] = useState<FileValue>(value);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const maxSizeBytes = maxSize * 1024 * 1024;

  useEffect(() => {
    setSelectedFile(value);
  }, [value]);

  const handleFileChange = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];

    if (!matchesAccept(file, accept)) {
      enqueueSnackbar(`Only ${accept} files are allowed`, {
        variant: "warning",
      });
      return;
    }

    if (maxSizeBytes && file.size > maxSizeBytes) {
      enqueueSnackbar(
        `File is too large. Maximum allowed size is ${maxSize} MB`,
        {
          variant: "warning",
        },
      );
      return;
    }

    setSelectedFile(file);
    onChange?.(file);
  };

  const removeFile = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) e.stopPropagation();

    setSelectedFile(null);
    onChange?.(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    if (!dragDrop) return;
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (!dragDrop) return;
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (!dragDrop) return;
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files);
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const fileName = getFileNameFromValue(selectedFile);

  return (
    <div
      key={name}
      className={joinClasses(
        crudClasses.mediaPicker.audio,
        crudClasses.field.wrapper,
        parentClass || "col-span-12",
      )}
    >
      <InputLabel label={label} required={required} />

      <div
        className={joinClasses(
          crudClasses.mediaPicker.dropzone,
          "relative rounded-lg p-2 transition-all",
          isDragging
            ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20"
            : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
          errorMessage ? "border-red-500" : "",
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        id={`field-${name}`}
      >
        <input
          ref={inputRef}
          id={id}
          type="file"
          accept={accept}
          onChange={(e) => handleFileChange(e.target.files)}
          required={required && !selectedFile}
          className="absolute opacity-0 pointer-events-none h-[10px]"
        />

        <div
          className={`flex items-center space-x-4 transition-all ${
            isDragging ? "opacity-50" : ""
          }`}
        >
          {selectedFile ? (
            <div className="flex items-center space-x-4">
              <div className="relative rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center">
                {!required && (
                  <button
                    type="button"
                    onClick={removeFile}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 z-10"
                    aria-label="Remove file"
                  >
                    <Icon icon="mdi:close" className="w-3 h-3" />
                  </button>
                )}
                <Icon
                  icon={getFileIcon(fileName)}
                  className="text-gray-500 w-10 h-10"
                />
              </div>

              <div className="space-y-1 max-w-[280px]">
                <p
                  className="text-sm text-gray-700 dark:text-gray-300 truncate"
                  title={fileName}
                >
                  {fileName}
                </p>
                <ButtonComponent type="button" onClick={handleButtonClick}>
                  Change File
                </ButtonComponent>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-4">
              <div className="rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center">
                <Icon
                  icon="mdi:file-upload-outline"
                  className="text-gray-400 w-10 h-10"
                />
              </div>

              <div className="space-y-1">
                <ButtonComponent
                  type="button"
                  onClick={handleButtonClick}
                  variant="outlined"
                >
                  Choose File
                </ButtonComponent>

                {dragDrop && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    or drag and drop your file here
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {dragDrop && isDragging && !selectedFile && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
              Drop file here
            </span>
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

export default FilePicker;
