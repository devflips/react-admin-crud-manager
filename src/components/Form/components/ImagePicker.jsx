import { Icon } from "@iconify/react";
import React, { useState, useEffect, useRef } from "react";
import InputLabel from "./InputLabel";
import Button from "../../Button/Button";

const ImagePicker = ({
  label = "",
  value = null,
  onChange,
  required = false,
  accept = "image/*",
  id,
  dragDrop = false,
  name = "",
  parentClass = "",
}) => {
  const [image, setImage] = useState(value);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (value instanceof File) {
      setImage({ file: value, preview: URL.createObjectURL(value) });
    } else if (value?.preview) {
      setImage(value);
    } else {
      setImage(value);
    }

    // Cleanup function
    return () => {
      if (image?.preview && image.preview.startsWith("blob:")) {
        URL.revokeObjectURL(image.preview);
      }
    };
  }, [value]);

  const handleFileChange = (files) => {
    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];
    const preview = URL.createObjectURL(file);
    const imgObj = { file, preview };

    // Cleanup previous preview
    if (image?.preview && image.preview.startsWith("blob:")) {
      URL.revokeObjectURL(image.preview);
    }

    setImage(imgObj);
    onChange?.(file);
  };

  const removeImage = (e) => {
    if (e) {
      e.stopPropagation(); // Prevent triggering the parent click
    }

    // Cleanup preview
    if (image?.preview && image.preview.startsWith("blob:")) {
      URL.revokeObjectURL(image.preview);
    }

    setImage(null);
    onChange?.(null);

    // Reset input value
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  // Drag events
  const handleDragOver = (e) => {
    if (!dragDrop) return;
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    if (!dragDrop) return;
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    if (!dragDrop) return;
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files);
  };

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <div key={name} className={parentClass || "col-span-12"}>
        <InputLabel label={label} required={required} />
        <div
          className={`relative rounded-md p-2 transition-all ${
            isDragging
              ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20"
              : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Hidden file input */}
          <input
            ref={inputRef}
            id={id}
            type="file"
            accept={accept}
            onChange={(e) => handleFileChange(e.target.files)}
            required={required && !image}
            className="absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
          />

          {/* Content */}
          <div
            className={`flex items-center space-x-4 transition-all ${
              isDragging ? "opacity-50" : ""
            }`}
          >
            {image ? (
              // Image preview with close button
              <div className="relative group">
                <img
                  src={image.preview || image}
                  alt="preview"
                  className="object-cover w-20 h-20 rounded-full shadow-md"
                />
                {/* Close button */}
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
              // Placeholder icon
              <div className="rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center">
                <Icon
                  icon="ri:image-add-fill"
                  className="text-gray-400 w-10 h-10"
                />
              </div>
            )}

            <div className="flex flex-col items-center space-y-1">
              <Button
                type="button"
                onClick={handleButtonClick}
                variant="outlined"
                color="default"
              >
                {image ? "Change Image" : "Select Image"}
              </Button>

              {/* Optional drag & drop hint */}
              {dragDrop && !image && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  or drag and drop
                </p>
              )}
            </div>
          </div>

          {/* Drag overlay text */}
          {dragDrop && isDragging && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md">
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                Drop image here
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImagePicker;
