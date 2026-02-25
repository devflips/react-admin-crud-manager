import { User } from "lucide-react";
import React, { useState } from "react";
import Chip from "../Chip/Chip";
import { formatDate } from "../../lib/utils";
import ImagePreview from "../Table/components/ImagePreview";

export default function Details({ data, config }) {
  const { fields, containerClass } = config;

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

  const DetailRow = ({ col }) => {
    let Icon = col?.icon;
    let label = col.label;
    let value = data[col.key];
    let type = col.type;
    let variant = col.variant || "outline";
    let color = col.defaultColor;

    if (type === "chip" && col.chipOptions?.length > 0) {
      let chipObj = col?.chipOptions.find((obj) => obj.value == value);
      if (chipObj) {
        value = chipObj.label;
        color = chipObj.color;
      }
    }

    return (
      <div
        className={`col-span-12 flex items-center space-x-4 p-4 rounded-xl 
                  bg-gray-100 dark:bg-gray-900 ${col.blockClass || ""}`}
      >
        {Icon && <div className="flex-shrink-0">{Icon}</div>}

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {label}
          </p>

          {/* CHIP */}
          {type === "chip" ? (
            <Chip
              label={value}
              variant={variant}
              color={color}
              className="mt-1"
            />
          ) : /* TINY EDITOR */
          type === "tinyEditor" ? (
            <p
              className="mt-1 text-sm text-gray-900 dark:text-white break-words"
              dangerouslySetInnerHTML={{
                __html: value,
              }}
            ></p>
          ) : type === "audio" ? (
            value ? (
              <audio
                key={value instanceof File ? URL.createObjectURL(value) : value}
                controls
                src={value instanceof File ? URL.createObjectURL(value) : value}
                onClick={(e) => e.stopPropagation()}
                className="shadow-md rounded-full"
              />
            ) : (
              <p className="mt-1 text-sm text-gray-400">N/A</p>
            )
          ) : (
            /* DEFAULT */
            <p className="mt-1 text-sm text-gray-900 dark:text-white break-words">
              {type == "date" ? (
                <span>{formatDate(value, col.format || "DD MMM YYYY")}</span>
              ) : (
                value || "N/A"
              )}
            </p>
          )}
        </div>
      </div>
    );
  };

  const GroupRow = ({ col }) => {
    let title = data[col.titleKey];
    let subtitle = data[col.subtitleKey];
    let image = data[col.imageKey];
    let fallback_icon = data[col.fallback_icon];

    return (
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
          fallback_icon
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
    );
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

      <div className={`grid grid-cols-12 gap-4 ${containerClass || ""}`}>
        {fields.map((col) =>
          col.type == "group" ? (
            <GroupRow col={col} />
          ) : (
            <DetailRow col={col} />
          ),
        )}
      </div>
    </>
  );
}
