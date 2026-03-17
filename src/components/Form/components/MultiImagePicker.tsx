import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import InputLabel from "./InputLabel";
import ImageCropperModal from "./ImageCropperModal";
import Button from "../../Button/Button";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

const ButtonComponent = Button as React.ComponentType<any>;

type ImageValueItem = File | { file?: File; preview?: string } | string;

interface GalleryItem {
  id: string;
  file: File | null;
  preview: string;
  createdBlobUrl?: string;
}

interface MultiImagePickerProps {
  label?: string;
  value: ImageValueItem[];
  onChange: (files: ImageValueItem[]) => void;
  required?: boolean;
  accept?: string;
  aspect?: number | string;
  id: string;
  dragDrop?: boolean;
  cropImage?: boolean;
  name: string;
  parentClass?: string;
  maxImages?: number;
  errorMessage?: string;
}

const toGalleryItem = (item: ImageValueItem): GalleryItem | null => {
  if (!item) {
    return null;
  }

  if (item instanceof File) {
    const preview = URL.createObjectURL(item);
    return {
      id: `${Date.now()}-${Math.random()}`,
      file: item,
      preview,
      createdBlobUrl: preview,
    };
  }

  if (typeof item === "string") {
    return {
      id: `${Date.now()}-${Math.random()}`,
      file: null,
      preview: item,
    };
  }

  if (typeof item === "object") {
    if (item.preview) {
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: item.file || null,
        preview: item.preview,
      };
    }
    if (item.file) {
      const preview = URL.createObjectURL(item.file);
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: item.file,
        preview,
        createdBlobUrl: preview,
      };
    }
  }

  return null;
};

const MultiImagePicker = ({
  label = "",
  value = [],
  onChange,
  required = false,
  accept = "image/*",
  aspect = "1",
  id,
  dragDrop = false,
  cropImage = false,
  name = "",
  parentClass = "",
  maxImages,
  errorMessage = "",
}: MultiImagePickerProps) => {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [cropSource, setCropSource] = useState("");
  const [selectedFileType, setSelectedFileType] = useState("image/jpeg");
  const [selectedFileName, setSelectedFileName] = useState("cropped-image");
  const [cropTargetId, setCropTargetId] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const replaceInputRef = useRef<HTMLInputElement | null>(null);
  const cropSourceUrlRef = useRef("");
  const imagesRef = useRef<GalleryItem[]>([]);

  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  useEffect(() => {
    return () => {
      imagesRef.current.forEach((img) => {
        if (img.createdBlobUrl) {
          URL.revokeObjectURL(img.createdBlobUrl);
        }
      });
      if (cropSourceUrlRef.current) {
        URL.revokeObjectURL(cropSourceUrlRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!Array.isArray(value)) {
      setImages([]);
      return;
    }

    const nextItems = value
      .map((item) => toGalleryItem(item))
      .filter(Boolean) as GalleryItem[];

    setImages((prev) => {
      prev.forEach((img) => {
        if (img.createdBlobUrl) {
          URL.revokeObjectURL(img.createdBlobUrl);
        }
      });
      return nextItems;
    });
  }, [value]);

  const remainingSlots =
    typeof maxImages === "number" && maxImages > 0
      ? Math.max(maxImages - images.length, 0)
      : Number.POSITIVE_INFINITY;

  const closeCropModal = () => {
    setCropModalOpen(false);
    if (cropSourceUrlRef.current) {
      URL.revokeObjectURL(cropSourceUrlRef.current);
      cropSourceUrlRef.current = "";
    }
    setCropSource("");
    setCropTargetId(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const openCropModal = (item: GalleryItem) => {
    setCropSource(item.preview);
    setSelectedFileType(item.file?.type || "image/jpeg");
    setSelectedFileName(
      (item.file?.name || "cropped-image").replace(/\.[^/.]+$/, ""),
    );
    setCropTargetId(item.id);
    setCropModalOpen(true);
  };

  const handleCroppedImage = (croppedFile: File) => {
    const preview = URL.createObjectURL(croppedFile);

    setImages((prev) => {
      const next = prev.map((img) => {
        if (img.id !== cropTargetId) {
          return img;
        }

        if (img.createdBlobUrl) {
          URL.revokeObjectURL(img.createdBlobUrl);
        }

        return {
          ...img,
          file: croppedFile,
          preview,
          createdBlobUrl: preview,
        };
      });

      onChange?.(
        next.map((img) => {
          if (img.file) {
            return img.file;
          }
          return img.preview;
        }),
      );

      return next;
    });

    closeCropModal();
  };

  const addFiles = (files: FileList | null) => {
    if (!files || files.length === 0 || remainingSlots === 0) {
      return;
    }

    const selected = Array.from(files)
      .filter((file) => file.type.includes("image/"))
      .slice(0, remainingSlots);

    if (selected.length === 0) {
      return;
    }

    const mapped: GalleryItem[] = selected.map((file) => {
      const preview = URL.createObjectURL(file);
      return {
        id: `${Date.now()}-${Math.random()}`,
        file,
        preview,
        createdBlobUrl: preview,
      };
    });

    setImages((prev) => {
      const next = [...prev, ...mapped];
      onChange?.(
        next.map((img) => {
          if (img.file) {
            return img.file;
          }
          return img.preview;
        }),
      );
      return next;
    });

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const removeImage = (idToRemove: string) => {
    setImages((prev) => {
      const target = prev.find((img) => img.id === idToRemove);
      if (target?.createdBlobUrl) {
        URL.revokeObjectURL(target.createdBlobUrl);
      }
      const next = prev.filter((img) => img.id !== idToRemove);
      onChange?.(
        next.map((img) => {
          if (img.file) {
            return img.file;
          }
          return img.preview;
        }),
      );
      return next;
    });

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleReplaceClick = (idToReplace: string) => {
    setCropTargetId(idToReplace);
    replaceInputRef.current?.click();
  };

  const handleReplaceImage = (files: FileList | null) => {
    if (!files || files.length === 0 || !cropTargetId) {
      return;
    }

    const file = Array.from(files).find((item) => item.type.includes("image/"));
    if (!file) {
      return;
    }

    const preview = URL.createObjectURL(file);

    setImages((prev) => {
      const next = prev.map((img) => {
        if (img.id !== cropTargetId) {
          return img;
        }

        if (img.createdBlobUrl) {
          URL.revokeObjectURL(img.createdBlobUrl);
        }

        return {
          ...img,
          file,
          preview,
          createdBlobUrl: preview,
        };
      });

      onChange?.(
        next.map((img) => {
          if (img.file) {
            return img.file;
          }
          return img.preview;
        }),
      );

      return next;
    });

    setCropTargetId(null);
    if (replaceInputRef.current) {
      replaceInputRef.current.value = "";
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
    addFiles(e.dataTransfer?.files || null);
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const canSelectMore =
    typeof maxImages === "number" && maxImages > 0
      ? images.length < maxImages
      : true;

  return (
    <>
      <div
        key={name}
        className={joinClasses(
          crudClasses.mediaPicker.multiImage,
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
            multiple
            onChange={(e) => addFiles(e.target.files)}
            required={required && images.length === 0}
            className="absolute opacity-0 pointer-events-none h-1 w-1"
          />
          <input
            ref={replaceInputRef}
            type="file"
            accept={accept}
            onChange={(e) => handleReplaceImage(e.target.files)}
            className="absolute opacity-0 pointer-events-none h-1 w-1"
          />

          {images.length === 0 ? (
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center">
                <Icon
                  icon="ri:multi-image-fill"
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
                  <span className="text-sm font-medium">Choose Images</span>
                </ButtonComponent>

                {dragDrop && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    or drag and drop your images here
                  </p>
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between gap-2 mb-3">
                <ButtonComponent
                  type="button"
                  onClick={handleButtonClick}
                  disabled={!canSelectMore}
                  variant="outlined"
                  color="default"
                >
                  <span className="text-sm font-medium">Upload Images</span>
                </ButtonComponent>

                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {maxImages
                    ? `${images.length}/${maxImages}`
                    : `${images.length} selected`}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {images.map((img) => (
                  <div
                    key={img.id}
                    className="relative group rounded-md overflow-hidden border border-gray-200 dark:border-gray-700"
                  >
                    <img
                      src={img.preview}
                      alt="preview"
                      className="w-full h-28 object-cover"
                    />
                    <div className="absolute top-2 right-2 flex items-center gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                      <button
                        type="button"
                        onClick={() => handleReplaceClick(img.id)}
                        className="w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow"
                        aria-label="Replace image"
                      >
                        <Icon icon="solar:refresh-bold" className="w-4 h-4" />
                      </button>
                      {cropImage && (
                        <button
                          type="button"
                          onClick={() => openCropModal(img)}
                          className="w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow"
                          aria-label="Crop image"
                        >
                          <Icon icon="solar:crop-bold" className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => removeImage(img.id)}
                        className="w-7 h-7 rounded-full bg-red-500/95 text-white hover:bg-red-600 flex items-center justify-center shadow"
                        aria-label="Delete image"
                      >
                        <Icon
                          icon="solar:trash-bin-trash-bold"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {dragDrop && isDragging && images.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg">
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
                Drop images here
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

export default MultiImagePicker;
