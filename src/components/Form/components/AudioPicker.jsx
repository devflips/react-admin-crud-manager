import { Icon } from "@iconify/react";
import React, { useState, useEffect, useRef } from "react";
import InputLabel from "./InputLabel";
import Button from "../../Button/Button";

const AudioPicker = ({
  label = "",
  value = null,
  onChange,
  required = false,
  accept = "audio/*",
  id,
  dragDrop = false,
  name = "",
  parentClass = "",
  buttonComponent: ButtonComponent = null,
  buttonProps = {},
}) => {
  const [audio, setAudio] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  // Sync external value
  useEffect(() => {
    if (!value) {
      cleanupAudio();
      setAudio(null);
      return;
    }

    if (value instanceof File) {
      const preview = URL.createObjectURL(value);
      setAudio({ file: value, preview });

      return () => {
        URL.revokeObjectURL(preview);
      };
    } else if (typeof value === "string") {
      setAudio({ preview: value });
    } else if (value?.preview) {
      setAudio(value);
    }
  }, [value]);

  // Cleanup function
  const cleanupAudio = () => {
    if (audio?.preview && audio.preview.startsWith("blob:")) {
      URL.revokeObjectURL(audio.preview);
    }
  };

  const handleFileChange = (files) => {
    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];
    const preview = URL.createObjectURL(file);

    // Cleanup previous preview
    cleanupAudio();
    setAudio({ file, preview });
    onChange?.(file);
  };

  const removeAudio = (e) => {
    if (e) {
      e.stopPropagation();
    }

    cleanupAudio();
    setAudio(null);
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
    <div key={name} className={parentClass || "col-span-12"}>
      <InputLabel label={label} required={required} />

      <div
        className={`relative rounded-lg p-2 transition-all ${
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
          required={required && !audio}
          className="absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
        />

        {/* Content */}
        <div
          className={`flex items-center space-x-4 transition-all ${
            isDragging ? "opacity-50" : ""
          }`}
        >
          {audio ? (
            // Audio player with close button and change button
            <div className="flex items-center space-x-6">
              {/* Close button */}
              <div className="relative w-full">
                <button
                  type="button"
                  onClick={removeAudio}
                  className="absolute top-0 -right-3 bg-red-500 text-white rounded-full p-1.5 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  aria-label="Remove audio"
                >
                  <Icon icon="mdi:close" className="w-3 h-3" />
                </button>

                {/* Audio player */}
                <audio key={audio.preview} src={audio.preview} controls />
              </div>

              <Button type="button" onClick={handleButtonClick}>
                <span>Change Audio File</span>
              </Button>
            </div>
          ) : (
            // Empty state with upload button
            <div className="flex items-center justify-center space-x-4">
              <div className="rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center">
                <Icon icon="mdi:music" className="text-gray-400 w-10 h-10" />
              </div>

              <Button
                type="button"
                onClick={handleButtonClick}
                variant="outlined"
              >
                <span>Choose Audio File</span>
              </Button>

              {/* Drag & drop hint */}
              {dragDrop && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  or drag and drop your audio file here
                </p>
              )}
            </div>
          )}
        </div>

        {/* Drag overlay */}
        {dragDrop && isDragging && !audio && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
              Drop audio here
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioPicker;
