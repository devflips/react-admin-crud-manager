import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import { useSnackbar } from "notistack";
import Button from "../../Button/Button";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";
import InputLabel from "./InputLabel";
import ImageCropperModal from "./ImageCropperModal";

const ButtonComponent = Button as React.ComponentType<any>;

type FileValueItem =
  | File
  | { file?: File | string | Record<string, any>; preview?: string }
  | Record<string, any>
  | string;

type FileValue = FileValueItem | FileValueItem[] | null;

type FileInfo = {
  name: string;
  url: string;
};

type DisplayEntry = {
  id: string;
  name: string;
  preview: string;
  createdBlobUrl?: string;
  isImage: boolean;
  fileType: string;
};

const createDisplayEntry = (
  item: FileValueItem,
  index: number,
): DisplayEntry => {
  const info = getFileInfoFromValue(item);
  const image = isImageValue(item);

  if (item instanceof File) {
    const preview = URL.createObjectURL(item);
    return {
      id: `${index}-${item.name}-${item.size}`,
      name: info.name || item.name,
      preview,
      createdBlobUrl: preview,
      isImage: image,
      fileType: item.type || "image/jpeg",
    };
  }

  if (typeof item === "object" && item.file instanceof File) {
    const preview = URL.createObjectURL(item.file);
    return {
      id: `${index}-${item.file.name}-${item.file.size}`,
      name: info.name || item.file.name,
      preview,
      createdBlobUrl: preview,
      isImage: image,
      fileType: item.file.type || "image/jpeg",
    };
  }

  const preview = info.url || info.name;
  return {
    id: `${index}-${info.name || preview}`,
    name: info.name || preview,
    preview,
    isImage: image,
    fileType: image ? "image/jpeg" : "",
  };
};

interface FilePickerProps {
  label?: string;
  value: FileValue;
  onChange: (file: FileValue) => void;
  required?: boolean;
  accept?: string;
  id: string;
  dragDrop?: boolean;
  multiple?: boolean;
  cropImage?: boolean;
  aspect?: number | string;
  name: string;
  parentClass?: string;
  maxSize?: number;
  maxFiles?: number;
  errorMessage?: string;
}

const IMAGE_EXTENSIONS = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "webp",
  "bmp",
  "svg",
  "avif",
  "tif",
  "tiff",
  "heic",
  "heif",
];

const getFileExtension = (name: string) => {
  const parts = name.split(".");
  return parts.length > 1 ? parts.pop()?.toLowerCase() || "" : "";
};

const getFileNameFromPath = (pathValue: string): string => {
  if (!pathValue) return "";

  const hasFileExtension = (value: string) =>
    /\.[a-z0-9]{1,10}$/i.test(value || "");

  const extractFileNameFromText = (value: string): string => {
    if (!value) return "";

    const normalizedValue = value.replace(/\\/g, "/");
    const matches = normalizedValue.match(
      /[^/?#]+\.[a-z0-9]{1,10}(?=($|[?#/]))/gi,
    );

    return matches?.[matches.length - 1] || "";
  };

  let normalized = pathValue.split(/[?#]/)[0];

  try {
    const url = new URL(pathValue);
    normalized = url.pathname;
  } catch {
    // Ignore invalid URL parsing and continue with raw input value.
  }

  const parts = normalized.split(/[\\/]/);
  const lastPart = parts[parts.length - 1] || "";

  if (!lastPart) return "";

  const getLastSegment = (value: string) => {
    const segmentParts = value.split("/");
    return segmentParts[segmentParts.length - 1] || value;
  };

  try {
    const decoded = decodeURIComponent(lastPart);
    const cleanName = getLastSegment(decoded);

    if (hasFileExtension(cleanName)) {
      return cleanName;
    }
  } catch {
    const cleanName = getLastSegment(lastPart);

    if (hasFileExtension(cleanName)) {
      return cleanName;
    }
  }

  const possibleSources = [pathValue, normalized];

  for (const source of possibleSources) {
    const directMatch = extractFileNameFromText(source);
    if (directMatch) return directMatch;

    try {
      const decodedSource = decodeURIComponent(source);
      const decodedMatch = extractFileNameFromText(decodedSource);
      if (decodedMatch) return decodedMatch;
    } catch {
      // Ignore malformed URI values and continue fallback search.
    }
  }

  return getLastSegment(lastPart);
};

const getObjectStringValue = (value: Record<string, any>): string => {
  const knownKeys = [
    "name",
    "fileName",
    "filename",
    "originalName",
    "originalname",
    "url",
    "downloadUrl",
    "downloadURL",
    "uri",
    "path",
    "filePath",
    "preview",
    "location",
    "src",
    "href",
    "link",
  ];

  for (const key of knownKeys) {
    const candidate = value?.[key];
    if (typeof candidate === "string" && candidate.trim()) {
      return candidate;
    }
  }

  return "";
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

const isImageType = (type: string) => type.toLowerCase().startsWith("image/");

const isImageName = (name: string) =>
  IMAGE_EXTENSIONS.includes(getFileExtension(name));

const isImageValue = (value: FileValueItem) => {
  if (value instanceof File) {
    return isImageType(value.type) || isImageName(value.name);
  }

  if (typeof value === "string") {
    return isImageName(getFileNameFromPath(value)) || isImageName(value);
  }

  if (typeof value === "object") {
    if (value.file instanceof File) {
      return isImageType(value.file.type) || isImageName(value.file.name);
    }

    if (typeof value.file === "string") {
      return isImageName(getFileNameFromPath(value.file));
    }

    const objectString = getObjectStringValue(value as Record<string, any>);
    if (objectString) {
      return isImageName(getFileNameFromPath(objectString));
    }
  }

  return false;
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

const getFileNameFromValue = (value: FileValue): string => {
  if (!value) return "";

  if (value instanceof File) return value.name;
  if (typeof value === "string") {
    return getFileNameFromPath(value);
  }

  if (Array.isArray(value)) {
    return getFileNameFromValue(value[0] as FileValue);
  }

  if (typeof value === "object") {
    if (value.file instanceof File) {
      return value.file.name;
    }

    if (typeof value.file === "string") {
      return getFileNameFromPath(value.file);
    }

    if (value.file && typeof value.file === "object") {
      const nestedFileName = getFileNameFromValue(value.file as FileValue);
      if (nestedFileName) return nestedFileName;
    }

    const objectString = getObjectStringValue(value as Record<string, any>);
    if (objectString) {
      return getFileNameFromPath(objectString);
    }
  }

  return "";
};

const getFileInfoFromValue = (value: FileValue): FileInfo => {
  const fileName = getFileNameFromValue(value);

  if (!value) {
    return { name: "", url: "" };
  }

  if (typeof value === "string") {
    return {
      name: fileName,
      url: value,
    };
  }

  if (value instanceof File) {
    return {
      name: value.name,
      url: "",
    };
  }

  if (Array.isArray(value)) {
    return getFileInfoFromValue(value[0] as FileValue);
  }

  if (typeof value === "object") {
    if (value.file instanceof File) {
      return {
        name: value.file.name,
        url: "",
      };
    }

    if (typeof value.file === "string") {
      return {
        name: getFileNameFromPath(value.file),
        url: value.file,
      };
    }

    if (value.file && typeof value.file === "object") {
      const nestedInfo = getFileInfoFromValue(value.file as FileValue);
      if (nestedInfo.name || nestedInfo.url) {
        return nestedInfo;
      }
    }

    const objectString = getObjectStringValue(value as Record<string, any>);
    if (objectString) {
      return {
        name: getFileNameFromPath(objectString),
        url: objectString,
      };
    }
  }

  return {
    name: fileName,
    url: "",
  };
};

const FilePicker = ({
  label = "",
  value = null,
  onChange,
  required = false,
  accept = "*/*",
  id,
  dragDrop = false,
  multiple = false,
  cropImage = false,
  aspect = 1,
  name = "",
  parentClass = "",
  maxSize = 0,
  maxFiles,
  errorMessage = "",
}: FilePickerProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const [selectedFile, setSelectedFile] = useState<FileValue>(value);
  const [isDragging, setIsDragging] = useState(false);
  const [selectionMode, setSelectionMode] = useState<"add" | "replace">("add");
  const [replaceTargetIndex, setReplaceTargetIndex] = useState<number | null>(
    null,
  );
  const [cropTargetIndex, setCropTargetIndex] = useState<number | null>(null);
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [cropSource, setCropSource] = useState("");
  const [cropFileType, setCropFileType] = useState("image/jpeg");
  const [cropFileName, setCropFileName] = useState("cropped-image");
  const [displayEntries, setDisplayEntries] = useState<DisplayEntry[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const normalizedSelectedFile = multiple
    ? selectedFile
    : Array.isArray(selectedFile)
      ? (selectedFile[0] ?? null)
      : selectedFile;

  const selectedFiles = Array.isArray(normalizedSelectedFile)
    ? normalizedSelectedFile
    : normalizedSelectedFile
      ? [normalizedSelectedFile]
      : [];

  const maxSizeBytes = maxSize * 1024 * 1024;
  const canSelectMore =
    typeof maxFiles === "number" && maxFiles > 0
      ? selectedFiles.length < maxFiles
      : true;

  const commitFiles = (nextFiles: FileValueItem[]) => {
    const nextValue = multiple
      ? nextFiles
      : nextFiles.length > 0
        ? nextFiles[0]
        : null;

    setSelectedFile(nextValue);
    onChange?.(nextValue);
  };

  const closeCropModal = () => {
    setCropModalOpen(false);
    setCropSource("");
    setCropTargetIndex(null);
    setCropFileName("cropped-image");
    setCropFileType("image/jpeg");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    const nextValue = multiple
      ? value
      : Array.isArray(value)
        ? (value[0] ?? null)
        : value;

    setSelectedFile(nextValue);

    if (!multiple && Array.isArray(value)) {
      onChange?.(nextValue);
    }
  }, [multiple, value]);

  useEffect(() => {
    const nextEntries = selectedFiles.map((item, index) =>
      createDisplayEntry(item, index),
    );

    setDisplayEntries(nextEntries);

    return () => {
      nextEntries.forEach((entry) => {
        if (entry.createdBlobUrl) {
          URL.revokeObjectURL(entry.createdBlobUrl);
        }
      });
    };
  }, [normalizedSelectedFile]);

  const handleFileChange = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    if (!canSelectMore && selectionMode === "add") {
      enqueueSnackbar(
        maxFiles
          ? `You can upload up to ${maxFiles} files`
          : "File limit reached",
        { variant: "warning" },
      );
      return;
    }

    const pickedFiles = Array.from(files);
    const validFiles = pickedFiles.filter((file) => {
      const matchesType = matchesAccept(file, accept);
      const matchesSize = !maxSizeBytes || file.size <= maxSizeBytes;
      return matchesType && matchesSize;
    });

    if (validFiles.length === 0) {
      enqueueSnackbar(`Only ${accept} files are allowed`, {
        variant: "warning",
      });
      return;
    }

    if (validFiles.length < pickedFiles.length) {
      enqueueSnackbar(
        maxSizeBytes
          ? `Some files were skipped because they are not allowed or exceed ${maxSize} MB`
          : `Some files were skipped because they are not allowed`,
        {
          variant: "warning",
        },
      );
    }

    if (selectionMode === "replace" && replaceTargetIndex !== null) {
      const nextFiles = [...selectedFiles];
      const replacement = validFiles[0] as FileValueItem | undefined;

      if (replacement) {
        nextFiles[replaceTargetIndex] = replacement;
        commitFiles(nextFiles);
      }
    } else {
      const nextFiles = multiple
        ? [...selectedFiles, ...validFiles].slice(0, maxFiles || undefined)
        : [validFiles[0]];
      commitFiles(nextFiles as FileValueItem[]);
    }

    setSelectionMode("add");
    setReplaceTargetIndex(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
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
    setSelectionMode("add");
    setReplaceTargetIndex(null);
    inputRef.current?.click();
  };

  const handleReplaceClick = (indexToReplace: number) => {
    setSelectionMode("replace");
    setReplaceTargetIndex(indexToReplace);
    inputRef.current?.click();
  };

  const handleCropClick = (indexToCrop: number) => {
    const entry = displayEntries[indexToCrop];
    if (!entry) return;

    setCropTargetIndex(indexToCrop);
    setCropSource(entry.preview);
    setCropFileType(entry.fileType || "image/jpeg");
    setCropFileName((entry.name || "cropped-image").replace(/\.[^/.]+$/, ""));
    setCropModalOpen(true);
  };

  const handleCroppedImage = (croppedFile: File) => {
    if (cropTargetIndex === null) {
      closeCropModal();
      return;
    }

    const nextFiles = [...selectedFiles];
    nextFiles[cropTargetIndex] = croppedFile;
    commitFiles(nextFiles);
    closeCropModal();
  };

  const fileInfo = getFileInfoFromValue(selectedFiles[0] as FileValue);
  const fileName = fileInfo.name;
  const fileUrl = fileInfo.url;
  const hasSelectedFile = selectedFiles.length > 0;
  const firstEntry = displayEntries[0];
  const selectedCountLabel = `${selectedFiles.length} file${selectedFiles.length === 1 ? "" : "s"} selected`;

  return (
    <>
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
              ? "border-2 border-dashed border-primary-500 bg-primary-50 dark:bg-primary-900/20"
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
            multiple={multiple}
            onChange={(e) => handleFileChange(e.target.files)}
            required={required && !hasSelectedFile}
            className="absolute opacity-0 pointer-events-none h-[10px]"
          />

          <div
            className={`flex items-center space-x-4 transition-all ${
              isDragging ? "opacity-50" : ""
            }`}
          >
            {hasSelectedFile ? (
              multiple ? (
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex items-center justify-between gap-2">
                    <ButtonComponent
                      type="button"
                      onClick={handleButtonClick}
                      disabled={!canSelectMore}
                      variant="outlined"
                      color="default"
                    >
                      {multiple ? "Add More Files" : "Change File"}
                    </ButtonComponent>

                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {maxFiles
                        ? `${selectedFiles.length}/${maxFiles}`
                        : selectedCountLabel}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                    {displayEntries.map((entry, index) => (
                      <div
                        key={entry.id}
                        className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
                      >
                        <div className="relative h-28 overflow-hidden bg-gray-100 dark:bg-gray-700">
                          {entry.isImage ? (
                            <img
                              src={entry.preview}
                              alt={entry.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <Icon
                                icon={getFileIcon(entry.name)}
                                className="text-gray-500 w-12 h-12"
                              />
                            </div>
                          )}

                          <div className="absolute top-2 right-2 flex items-center gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                            <button
                              type="button"
                              onClick={() => handleReplaceClick(index)}
                              className="w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow"
                              aria-label="Replace file"
                            >
                              <Icon
                                icon="solar:refresh-bold"
                                className="w-4 h-4"
                              />
                            </button>

                            {cropImage && entry.isImage && (
                              <button
                                type="button"
                                onClick={() => handleCropClick(index)}
                                className="w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow"
                                aria-label="Crop file"
                              >
                                <Icon
                                  icon="solar:crop-bold"
                                  className="w-4 h-4"
                                />
                              </button>
                            )}

                            {!required && (
                              <button
                                type="button"
                                onClick={() => {
                                  const nextFiles = selectedFiles.filter(
                                    (_item, fileIndex) => fileIndex !== index,
                                  );
                                  commitFiles(nextFiles);
                                  if (inputRef.current) {
                                    inputRef.current.value = "";
                                  }
                                }}
                                className="w-7 h-7 rounded-full bg-red-500/95 text-white hover:bg-red-600 flex items-center justify-center shadow"
                                aria-label="Remove file"
                              >
                                <Icon
                                  icon="solar:trash-bin-trash-bold"
                                  className="w-4 h-4"
                                />
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="p-3">
                          <p
                            className="text-sm text-gray-700 dark:text-gray-300 truncate"
                            title={entry.name}
                          >
                            {entry.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-4 w-full">
                  <div className="relative rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center overflow-hidden">
                    {firstEntry?.isImage ? (
                      <img
                        src={firstEntry.preview}
                        alt={firstEntry.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Icon
                        icon={getFileIcon(fileName || fileUrl)}
                        className="text-gray-500 w-10 h-10"
                      />
                    )}

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
                  </div>

                  <div className="space-y-1 max-w-[280px]">
                    <p
                      className="text-sm text-gray-700 dark:text-gray-300 truncate"
                      title={fileName || fileUrl}
                    >
                      {fileName || fileUrl}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {cropImage && firstEntry?.isImage && (
                        <ButtonComponent
                          type="button"
                          onClick={() => handleCropClick(0)}
                          variant="outlined"
                          color="default"
                        >
                          Crop
                        </ButtonComponent>
                      )}

                      <ButtonComponent
                        type="button"
                        onClick={handleButtonClick}
                      >
                        Change File
                      </ButtonComponent>
                    </div>
                  </div>
                </div>
              )
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
                    color="default"
                  >
                    {multiple ? "Choose Files" : "Choose File"}
                  </ButtonComponent>

                  {dragDrop && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      or drag and drop your {multiple ? "files" : "file"} here
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {dragDrop && isDragging && !selectedFile && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-primary-500/10 rounded-lg">
              <span className="text-primary-600 dark:text-primary-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
                Drop {multiple ? "files" : "file"} here
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

      <ImageCropperModal
        isOpen={cropModalOpen}
        imageSrc={cropSource}
        fileType={cropFileType}
        fileName={cropFileName}
        onClose={closeCropModal}
        onApply={handleCroppedImage}
        aspect={Number(aspect)}
      />
    </>
  );
};

export default FilePicker;
