import { User } from "lucide-react";
import React, { useState } from "react";
import ImagePreview from "../../Table/components/ImagePreview";

const GroupRow = ({ col, data }) => {
  let title = data[col.titleKey];
  let subtitle = data[col.subtitleKey];
  let image = data[col.imageKey];
  let fallback_icon = col.fallback_icon;

  // image preview
  const [targetImage, setTargetImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPreview = (image) => {
    if (image && image.src instanceof File) {
      image = { ...image, src: URL.createObjectURL(image.src) };
    }
    setTargetImage(image);
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <ImagePreview
          src={targetImage.src}
          alt={targetImage.alt}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}

      <div
        className={`col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      ${col.blockClass}`}
      >
        {image ? (
          <img
            src={image instanceof File ? URL.createObjectURL(image) : image}
            alt={title}
            onClick={() => openPreview({ src: image, alt: title })}
            className="w-16 h-16 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
          />
        ) : fallback_icon ? (
          fallback_icon instanceof Function ? (
            fallback_icon(data)
          ) : (
            fallback_icon
          )
        ) : (
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600">
            <User className="w-8 h-8 text-gray-400" />
          </div>
        )}

        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default GroupRow;
