import { Icon } from "@iconify/react";
import React, { useState, useEffect, useRef } from "react";
import InputLabel from "./InputLabel";

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
    setImage(value);
  }, [value]);

  const handleFileChange = (files) => {
    if (!files || files.length === 0) {
      setImage(null);
      onChange?.(null);
      return;
    }

    const file = files[0];
    const preview = URL.createObjectURL(file);
    const imgObj = { file, preview };

    setImage(imgObj);
    onChange?.(preview);
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

  return (
    <>
      <div key={name} className={parentClass || "col-span-12"}>
        <InputLabel label={label} required={required} />
        <div
          className={`relative  rounded-md p-2 transition-all ${
            isDragging
              ? "border border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900"
              : "border bg-gray-50 dark:bg-gray-700"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Blur entire content when dragging */}
          <div
            className={`flex items-center space-x-3 transition-all ${
              isDragging ? "filter blur-sm" : ""
            }`}
          >
            {/* Left: preview clickable */}
            <div
              className="cursor-pointer"
              onClick={() => inputRef.current.click()}
            >
              {image ? (
                <img
                  src={image.preview || image}
                  alt="preview"
                  className="object-cover w-20 h-20 rounded-full"
                />
              ) : (
                <>
                  <div className="rounded-full bg-gray-200 dark:bg-gray-800 h-20 w-20 flex items-center justify-center">
                    <Icon
                      icon="ri:image-add-fill"
                      className="text-gray-400 w-10 h-10"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Right: upload input */}
            <input
              ref={inputRef}
              id={id}
              type="file"
              accept={accept}
              onChange={(e) => handleFileChange(e.target.files)}
              required={required && !image}
              className="inline-flex items-center justify-center p-2 text-gray-400 text-sm file:cursor-pointer"
            />
          </div>

          {/* Overlay text */}
          {dragDrop && isDragging && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-blue-500 font-semibold text-xl">
                Drop here
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImagePicker;
