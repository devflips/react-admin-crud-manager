import { Icon } from "@iconify/react";
import React, { useState, useEffect, useRef } from "react";
import InputLabel from "./InputLabel";

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
}) => {
  const [audio, setAudio] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  // Sync external value
  useEffect(() => {
    if (!value) {
      setAudio(null);
      return;
    }

    if (value instanceof File) {
      const preview = URL.createObjectURL(value);
      setAudio({ file: value, preview });

      return () => {
        URL.revokeObjectURL(preview);
      };
    } else {
      setAudio({ preview: value });
    }
  }, [value]);

  const handleFileChange = (files) => {
    if (!files || files.length === 0) {
      if (audio?.preview) {
        URL.revokeObjectURL(audio.preview);
      }
      setAudio(null);
      onChange?.(null);
      return;
    }

    const file = files[0];
    const preview = URL.createObjectURL(file);

    // Cleanup previous preview
    if (audio?.preview) {
      URL.revokeObjectURL(audio.preview);
    }

    setAudio({ file, preview });
    onChange?.(file);
  };

  // Drag Events
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
    <div key={name} className={parentClass || "col-span-12"}>
      <InputLabel label={label} required={required} />

      <div
        className={`relative rounded-md p-3 transition-all ${
          isDragging
            ? "border border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900"
            : "border bg-gray-50 dark:bg-gray-700"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div
          className={`flex items-center space-x-4 transition-all ${
            isDragging ? "filter blur-sm" : ""
          }`}
        >
          {/* Audio Preview / Icon */}
          <div
            className="cursor-pointer"
            onClick={() => inputRef.current?.click()}
          >
            {audio ? (
              <audio
                key={audio.preview} // 🔥 forces reload when changed
                controls
                src={audio.preview}
                className="w-64"
              />
            ) : (
              <div className="rounded-md bg-gray-200 dark:bg-gray-800 h-16 w-16 flex items-center justify-center">
                <Icon
                  icon="mdi:music"
                  className="text-gray-400 w-8 h-8"
                />
              </div>
            )}
          </div>

          {/* File Input */}
          <input
            ref={inputRef}
            id={id}
            type="file"
            accept={accept}
            onChange={(e) => handleFileChange(e.target.files)}
            required={required && !audio}
            className="inline-flex items-center justify-center p-2 text-gray-400 text-sm file:cursor-pointer"
          />
        </div>

        {/* Drag Overlay */}
        {dragDrop && isDragging && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-blue-500 font-semibold text-xl">
              Drop audio here
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioPicker;