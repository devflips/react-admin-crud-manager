import { Icon } from "@iconify/react";
import React, { useState, useEffect, useRef } from "react";
import InputLabel from "./InputLabel";
import Button from "../../Button/Button";
import ImageCropperModal from "./ImageCropperModal";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

const ButtonComponent = Button as React.ComponentType<any>;

const revokeBlobUrl = (url?: string) => {
  if (typeof url === "string" && url.startsWith("blob:")) {
    URL.revokeObjectURL(url);
  }
};

type ImageValue = File | { file?: File; preview?: string } | string | null;

interface ImagePickerProps {
  label?: string;
  value: ImageValue;
  onChange: (file: File | null) => void;
  required?: boolean;
  accept?: string;
  aspect?: number | string;
  id: string;
  dragDrop?: boolean;
  cropImage?: boolean;
  name: string;
  parentClass?: string;
  errorMessage?: string;
}

const ImagePicker = ({
  label = "",
  value = null,
  onChange,
  required = false,
  accept = "image/*",
  aspect = "1",
  id,
  dragDrop = false,
  cropImage = false,
  name = "",
  parentClass = "",
  errorMessage = "",
}: ImagePickerProps) => {
  const [image, setImage] = useState<ImageValue>(value);
  const [isDragging, setIsDragging] = useState(false);
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [cropSource, setCropSource] = useState("");
  const [selectedFileType, setSelectedFileType] = useState("image/jpeg");
  const [selectedFileName, setSelectedFileName] = useState("cropped-image");

  const inputRef = useRef<HTMLInputElement | null>(null);
  const sourceUrlRef = useRef("");
  const previewUrlRef = useRef("");

  useEffect(() => {
    if (value instanceof File) {
      const preview = URL.createObjectURL(value);
      revokeBlobUrl(previewUrlRef.current);
      previewUrlRef.current = preview;
      setImage({ file: value, preview });
    } else if (value && typeof value === "object" && "preview" in value) {
      setImage(value);
    } else {
      setImage(value);
    }
  }, [value]);

  useEffect(() => {
    return () => {
      revokeBlobUrl(previewUrlRef.current);
      revokeBlobUrl(sourceUrlRef.current);
    };
  }, []);

  const closeCropModal = () => {
    setCropModalOpen(false);
    revokeBlobUrl(sourceUrlRef.current);
    sourceUrlRef.current = "";
    setCropSource("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleCroppedImage = (croppedFile: File) => {
    const preview = URL.createObjectURL(croppedFile);
    revokeBlobUrl(previewUrlRef.current);
    previewUrlRef.current = preview;

    setImage({ file: croppedFile, preview });
    onChange?.(croppedFile);
    closeCropModal();
  };

  const handleFileChange = (files: FileList | null) => {
    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];

    if (cropImage) {
      const source = URL.createObjectURL(file);
      revokeBlobUrl(sourceUrlRef.current);
      sourceUrlRef.current = source;
      setCropSource(source);
      setSelectedFileType(file.type || "image/jpeg");
      setSelectedFileName(
        (file.name || "cropped-image").replace(/\.[^/.]+$/, ""),
      );
      setCropModalOpen(true);
      return;
    }

    const preview = URL.createObjectURL(file);

    revokeBlobUrl(previewUrlRef.current);
    previewUrlRef.current = preview;

    setImage({ file, preview });
    onChange?.(file);
  };

  const removeImage = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.stopPropagation();
    }

    revokeBlobUrl(previewUrlRef.current);
    previewUrlRef.current = "";

    setImage(null);
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
    if (e.dataTransfer?.files?.[0]?.type?.includes("image/")) {
      handleFileChange(e.dataTransfer.files);
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const imagePreview =
    image && typeof image === "object" && "preview" in image
      ? image.preview
      : typeof image === "string"
        ? image
        : "";

  return (
    <>
      <div
        key={name}
        className={joinClasses(
          crudClasses.mediaPicker.image,
          crudClasses.field.wrapper,
          parentClass || "col-span-12",
        )}
      >
        <InputLabel label={label} required={required} />
        <div
          className={joinClasses(
            crudClasses.mediaPicker.dropzone,
            "relative rounded-md p-2 transition-all",
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
            onChange={(e) => handleFileChange(e.target.files)}
            required={required && !image}
            className="absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
          />

          <div
            className={`flex items-center space-x-4 transition-all ${
              isDragging ? "opacity-50" : ""
            }`}
          >
            {image ? (
              <div className="relative group">
                <img
                  src={imagePreview}
                  alt="preview"
                  className="object-cover w-20 h-20 rounded-full shadow-md"
                />
                {!required && (
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    aria-label="Remove image"
                  >
                    <Icon icon="mdi:close" className="w-3 h-3" />
                  </button>
                )}
              </div>
            ) : (
              <div className="rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center">
                <Icon
                  icon="ri:image-add-fill"
                  className="text-gray-400 w-10 h-10"
                />
              </div>
            )}

            <div className="space-y-1">
              <ButtonComponent
                type="button"
                onClick={handleButtonClick}
                variant="outlined"
                color="default"
              >
                {image ? "Change Image" : "Select Image"}
              </ButtonComponent>

              {dragDrop && !image && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  or drag and drop
                </p>
              )}
            </div>
          </div>

          {dragDrop && isDragging && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-primary-500/10 rounded-md">
              <span className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                Drop image here
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
        fileType={selectedFileType}
        fileName={selectedFileName}
        onClose={closeCropModal}
        onApply={handleCroppedImage}
        aspect={Number(aspect)}
      />
    </>
  );
};

export default ImagePicker;
