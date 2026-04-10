import { Icon } from "@iconify/react";
import React, { useState, useEffect, useRef } from "react";
import InputLabel from "./InputLabel";
import Button from "../../Button/Button";
import { useSnackbar } from "notistack";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

const ButtonComponent = Button as React.ComponentType<any>;

type MediaValue = File | { file?: File; preview?: string } | string | null;

interface VideoPickerProps {
  label: string;
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

const VideoPicker = ({
  label = "",
  value = null,
  onChange,
  required = false,
  accept = "video/*",
  id,
  dragDrop = false,
  name = "",
  parentClass = "",
  maxSize = 0,
  errorMessage = "",
}: VideoPickerProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const [video, setVideo] = useState<{ file?: File; preview?: string } | null>(
    null,
  );
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const maxSizeBytes = maxSize * 1024 * 1024;

  useEffect(() => {
    if (!value) {
      cleanupVideo();
      setVideo(null);
      return;
    }

    if (value instanceof File) {
      const preview = URL.createObjectURL(value);
      setVideo({ file: value, preview });

      return () => {
        URL.revokeObjectURL(preview);
      };
    } else if (typeof value === "string") {
      setVideo({ preview: value });
    } else if (value?.preview) {
      setVideo(value);
    }
  }, [value]);

  const cleanupVideo = () => {
    if (video?.preview && video.preview.startsWith("blob:")) {
      URL.revokeObjectURL(video.preview);
    }
  };

  const handleFileChange = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];

    if (maxSizeBytes && file.size > maxSizeBytes) {
      enqueueSnackbar(
        `File is too large. Maximum allowed size is ${maxSize} MB`,
        {
          variant: "warning",
        },
      );
      return;
    }

    const preview = URL.createObjectURL(file);
    cleanupVideo();
    setVideo({ file, preview });
    onChange?.(file);
  };
  const removeVideo = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) e.stopPropagation();
    cleanupVideo();
    setVideo(null);
    onChange?.(null);
    if (inputRef.current) inputRef.current.value = "";
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
    if (e.dataTransfer?.files?.[0]?.type?.includes("video/")) {
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
        crudClasses.mediaPicker.video,
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
          required={required && !video}
          className="absolute opacity-0 pointer-events-none h-[10px]"
        />

        <div
          className={`flex items-center space-x-4 transition-all ${
            isDragging ? "opacity-50" : ""
          }`}
        >
          {video ? (
            <div className="flex items-center space-x-4">
              <div className="relative">
                {!required && (
                  <button
                    type="button"
                    onClick={removeVideo}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 z-10"
                  >
                    <Icon icon="mdi:close" className="w-3 h-3" />
                  </button>
                )}
                <video
                  key={video.preview}
                  src={video.preview}
                  controls
                  controlsList="nodownload"
                  className="w-[260px] h-[150px] rounded-md object-cover"
                />
              </div>
              <ButtonComponent type="button" onClick={handleButtonClick}>
                Change Video File
              </ButtonComponent>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-4">
              <div className="rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center">
                <Icon icon="mdi:video" className="text-gray-400 w-10 h-10" />
              </div>

              <div className="space-y-1">
                <ButtonComponent
                  type="button"
                  onClick={handleButtonClick}
                  variant="outlined"
                >
                  Choose Video File
                </ButtonComponent>

                {dragDrop && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    or drag and drop your video here
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {dragDrop && isDragging && !video && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
              Drop video here
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

export default VideoPicker;
