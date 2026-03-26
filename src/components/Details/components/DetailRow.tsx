import { useState } from "react";
import Chip from "../../Chip/Chip";
import { formatDate } from "../../../lib/utils";
import ImagePreview from "../../Table/components/ImagePreview";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

interface DetailRowProps {
  col: Record<string, any>;
  data: Record<string, any>;
  uiVariant?: "default" | "card" | "split";
  styleConfig?: {
    rowClass?: string;
    labelClass?: string;
    valueClass?: string;
    iconClass?: string;
    mediaGridClass?: string;
  };
}

const DetailRow = ({
  col,
  data,
  uiVariant = "default",
  styleConfig = {},
}: DetailRowProps) => {
  const [targetImage, setTargetImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const Icon = col?.icon;
  const label = col.label;
  let value = data[col.key];
  const type = col.type;
  const variant = col.variant || "outline";
  let color = col.defaultColor;

  if (type === "chip" && col.chipOptions?.length > 0) {
    const chipObj = col?.chipOptions.find((obj: any) => obj.value == value);
    if (chipObj) {
      value = chipObj.label;
      color = chipObj.color;
    }
  }

  const getImageSource = (image: any): string => {
    if (!image) return "";
    if (typeof image === "string") return image;
    if (image instanceof File) return URL.createObjectURL(image);
    if (typeof image === "object") {
      if (typeof image.preview === "string") return image.preview;
      if (typeof image.src === "string") return image.src;
      if (image.src instanceof File) return URL.createObjectURL(image.src);
      if (image.file instanceof File) return URL.createObjectURL(image.file);
    }
    return "";
  };

  const openPreview = (src: string, alt: string) => {
    setTargetImage({ src, alt });
    setIsOpen(true);
  };

  const renderValue = (
    wrapClass = "text-sm text-gray-900 dark:text-white break-words",
  ) => {
    if (typeof col.render === "function") {
      const customValue = col.render(data, value);
      return <div className={styleConfig.valueClass || ""}>{customValue}</div>;
    }

    if (type === "chip") {
      return (
        <Chip label={value} variant={variant} color={color} className="mt-1" />
      );
    }
    if (type === "tinyEditor") {
      return (
        <p
          className={`${wrapClass} ${styleConfig.valueClass || ""}`}
          dangerouslySetInnerHTML={{ __html: value }}
        />
      );
    }
    if (type === "video") {
      return value ? (
        <video
          key={value instanceof File ? URL.createObjectURL(value) : value}
          controls
          src={value instanceof File ? URL.createObjectURL(value) : value}
          onClick={(e) => e.stopPropagation()}
          className="shadow-sm mt-1 w-full max-w-xs max-h-[250px] rounded-md "
        />
      ) : (
        <p className="text-sm text-gray-400">N/A</p>
      );
    }
    if (type === "audio") {
      return value ? (
        <audio
          key={value instanceof File ? URL.createObjectURL(value) : value}
          controls
          src={value instanceof File ? URL.createObjectURL(value) : value}
          onClick={(e) => e.stopPropagation()}
          className="shadow-sm rounded-full mt-1 w-full max-w-xs"
        />
      ) : (
        <p className="text-sm text-gray-400">N/A</p>
      );
    }
    if (type === "image") {
      const src = getImageSource(value);
      return src ? (
        <button
          type="button"
          onClick={() => openPreview(src, label || "Image")}
          className="mt-1 w-16 h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          <img
            src={src}
            alt={label || "image"}
            className="w-full h-full object-cover"
          />
        </button>
      ) : (
        <p className="text-sm text-gray-400">N/A</p>
      );
    }
    if (type === "multiImage") {
      return Array.isArray(value) && value.length > 0 ? (
        <div
          className={`mt-1 grid grid-cols-3 sm:grid-cols-4 gap-2 ${styleConfig.mediaGridClass || ""}`}
        >
          {value.map((img: any, idx: number) => {
            const src = getImageSource(img);
            if (!src) return null;
            return (
              <button
                key={`${src}-${idx}`}
                type="button"
                onClick={() => openPreview(src, `Gallery ${idx + 1}`)}
                className="w-full h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors"
              >
                <img
                  src={src}
                  alt={`gallery-${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      ) : (
        <p className="text-sm text-gray-400">N/A</p>
      );
    }
    return (
      <p className={`${wrapClass} ${styleConfig.valueClass || ""}`}>
        {type === "date" ? (
          <span>{formatDate(value, col.format || "DD MMM YYYY")}</span>
        ) : (
          <span>{value || "N/A"}</span>
        )}
      </p>
    );
  };

  // â”€â”€ CARD variant â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Standalone elevated card per field â€” icon badge top-left, label, bold value
  if (uiVariant === "card") {
    return (
      <>
        <div
          className={joinClasses(
            crudClasses.details.row,
            col.blockClass || "col-span-6",
            "group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4 flex flex-col gap-2.5",
            styleConfig.rowClass || "",
          )}
        >
          {Icon && (
            <div
              className={`w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4 ${styleConfig.iconClass || ""}`}
            >
              {Icon}
            </div>
          )}
          <p
            className={`text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 leading-none ${styleConfig.labelClass || ""}`}
          >
            {label}
          </p>
          <div className="mt-auto">
            {renderValue(
              "text-sm font-semibold text-gray-800 dark:text-gray-100 break-words leading-snug",
            )}
          </div>
        </div>
        {isOpen && targetImage && (
          <ImagePreview
            src={targetImage.src}
            alt={targetImage.alt}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </>
    );
  }

  // â”€â”€ SPLIT variant â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Property-sheet row: left=muted label band | right=white value band
  if (uiVariant === "split") {
    return (
      <>
        <div
          className={joinClasses(
            crudClasses.details.row,
            "flex items-stretch min-h-[52px]",
            styleConfig.rowClass || "",
            col.blockClass || "",
          )}
        >
          {/* Label band */}
          <div className="w-[42%] flex-shrink-0 flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border-r border-gray-200 dark:border-gray-700">
            {Icon && (
              <span
                className={`text-primary/60 dark:text-primary/50 flex-shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 ${styleConfig.iconClass || ""}`}
              >
                {Icon}
              </span>
            )}
            <p
              className={`text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 leading-tight ${styleConfig.labelClass || ""}`}
            >
              {label}
            </p>
          </div>
          {/* Value band */}
          <div className="flex-1 flex items-center px-4 py-3 bg-white dark:bg-gray-900">
            {renderValue(
              "text-sm text-gray-800 dark:text-gray-100 break-words",
            )}
          </div>
        </div>
        {isOpen && targetImage && (
          <ImagePreview
            src={targetImage.src}
            alt={targetImage.alt}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </>
    );
  }

  // â”€â”€ DEFAULT variant â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  return (
    <>
      <div
        className={joinClasses(
          crudClasses.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          styleConfig.rowClass || "",
          col.blockClass || "",
        )}
      >
        {Icon && (
          <div className={`flex-shrink-0 ${styleConfig.iconClass || ""}`}>
            {Icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p
            className={`text-sm font-medium text-gray-500 dark:text-gray-400 ${styleConfig.labelClass || ""}`}
          >
            {label}
          </p>
          {renderValue(
            "mt-1 text-sm text-gray-900 dark:text-white break-words",
          )}
        </div>
      </div>
      {isOpen && targetImage && (
        <ImagePreview
          src={targetImage.src}
          alt={targetImage.alt}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

export default DetailRow;
