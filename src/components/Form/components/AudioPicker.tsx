import { Icon } from "@iconify/react";
import React, { useState, useEffect, useRef } from "react";
import InputLabel from "./InputLabel";
import Button from "../../Button/Button";
import { enqueueSnackbar } from "notistack";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

const ButtonComponent = Button as React.ComponentType<any>;

type MediaValue = File | { file?: File; preview?: string } | string | null;

interface AudioPickerProps {
  label?: string;
  value: MediaValue;
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
  errorMessage = "",
  maxSize = 0,
}: AudioPickerProps) => {
  const [audio, setAudio] = useState<{ file?: File; preview?: string } | null>(
    null,
  );
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const maxSizeBytes = maxSize * 1024 * 1024;

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

  const cleanupAudio = () => {
    if (audio?.preview && audio.preview.startsWith("blob:")) {
      URL.revokeObjectURL(audio.preview);
    }
  };

  const handleFileChange = (files: FileList | null) => {
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];

    if (maxSizeBytes && file.size > maxSizeBytes) {
      enqueueSnackbar(
        `Audio is too large. Maximum allowed size is ${maxSize} MB`,
        { variant: "warning" },
      );
      return;
    }

    const preview = URL.createObjectURL(file);

    cleanupAudio();
    setAudio({ file, preview });
    onChange?.(file);
  };

  const removeAudio = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.stopPropagation();
    }

    cleanupAudio();
    setAudio(null);
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
    if (e.dataTransfer?.files?.[0]?.type?.includes("audio/")) {
      handleFileChange(e.dataTransfer.files);
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

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
          required={required && !audio}
          className="absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
        />

        <div
          className={`flex items-center space-x-4 transition-all ${
            isDragging ? "opacity-50" : ""
          }`}
        >
          {audio ? (
            <div className="flex items-center space-x-4">
              <div className="relative w-full">
                {!required && (
                  <button
                    type="button"
                    onClick={removeAudio}
                    className="absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    aria-label="Remove audio"
                  >
                    <Icon icon="mdi:close" className="w-3 h-3" />
                  </button>
                )}

                <audio
                  key={audio.preview}
                  src={audio.preview}
                  controls
                  controlsList="nodownload"
                />
              </div>
              <ButtonComponent type="button" onClick={handleButtonClick}>
                <span>Change Audio File</span>
              </ButtonComponent>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-4">
              <div className="rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center">
                <Icon icon="mdi:music" className="text-gray-400 w-10 h-10" />
              </div>
              <div className="space-y-1">
                <ButtonComponent
                  type="button"
                  onClick={handleButtonClick}
                  variant="outlined"
                >
                  <span>Choose Audio File</span>
                </ButtonComponent>

                {dragDrop && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    or drag and drop your audio file here
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {dragDrop && isDragging && !audio && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
              Drop audio here
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

export default AudioPicker;
