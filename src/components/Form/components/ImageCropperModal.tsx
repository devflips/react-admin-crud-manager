import React, { useCallback, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Cropper from "react-easy-crop";
import type { Area } from "react-easy-crop";
import Button from "../../Button/Button";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

const ButtonComponent = Button as React.ComponentType<any>;

const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url;
  });

const getRadianAngle = (degreeValue: number) => {
  return (degreeValue * Math.PI) / 180;
};

const rotateSize = (width: number, height: number, rotation: number) => {
  const rotRad = getRadianAngle(rotation);
  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  };
};

const getCroppedImageBlob = async (
  imageSrc: string,
  pixelCrop: Area,
  fileType = "image/jpeg",
  rotation = 0,
): Promise<Blob> => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas context is not available");
  }

  const rotRad = getRadianAngle(rotation);
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation,
  );

  canvas.width = bBoxWidth;
  canvas.height = bBoxHeight;

  ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
  ctx.rotate(rotRad);
  ctx.translate(-image.width / 2, -image.height / 2);
  ctx.drawImage(image, 0, 0);

  const croppedCanvas = document.createElement("canvas");
  const croppedCtx = croppedCanvas.getContext("2d");

  if (!croppedCtx) {
    throw new Error("Canvas context is not available");
  }

  croppedCanvas.width = pixelCrop.width;
  croppedCanvas.height = pixelCrop.height;

  croppedCtx.drawImage(
    canvas,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height,
  );

  return new Promise((resolve, reject) => {
    croppedCanvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Image cropping failed"));
          return;
        }
        resolve(blob);
      },
      fileType,
      0.95,
    );
  });
};

interface ImageCropperModalProps {
  isOpen: boolean;
  imageSrc: string;
  fileType?: string;
  fileName?: string;
  aspect?: number;
  title?: string;
  onClose: () => void;
  onApply: (file: File) => void;
}

const ImageCropperModal = ({
  isOpen,
  imageSrc,
  fileType = "image/jpeg",
  fileName = "cropped-image",
  aspect = 1 / 1,
  title = "Crop Image",
  onClose,
  onApply,
}: ImageCropperModalProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  useEffect(() => {
    if (isOpen) {
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setCroppedAreaPixels(null);
    }
  }, [isOpen]);

  const onCropComplete = useCallback((_area: Area, croppedPixels: Area) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleApply = async () => {
    if (!imageSrc || !croppedAreaPixels) {
      return;
    }

    try {
      const blob = await getCroppedImageBlob(
        imageSrc,
        croppedAreaPixels,
        fileType,
      );
      const fileExtension =
        fileType?.split("/")?.[1]?.replace("jpeg", "jpg") || "jpg";
      const croppedFile = new File([blob], `${fileName}.${fileExtension}`, {
        type: fileType,
      });
      onApply?.(croppedFile);
    } catch {
      onClose?.();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={joinClasses(
        crudClasses.mediaPicker.cropModal,
        "fixed inset-0 z-50 flex items-center justify-center p-4",
      )}
    >
      <div
        className="fixed inset-0 bg-gray-500 opacity-75"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col dark:bg-gray-800">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            aria-label="Close crop modal"
          >
            <Icon icon="mdi:close" className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div className="relative h-72 w-full bg-gray-900 rounded-md overflow-hidden">
            {imageSrc && (
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={aspect}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Zoom
            </label>
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(event) => setZoom(Number(event.target.value))}
              className="w-full"
            />
          </div>
        </div>

        <div className="px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6">
          <ButtonComponent
            type="button"
            onClick={onClose}
            variant="outlined"
            color="default"
          >
            Cancel
          </ButtonComponent>
          <ButtonComponent
            type="button"
            onClick={handleApply}
            variant="contained"
            color="primary"
          >
            Apply Crop
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default ImageCropperModal;
