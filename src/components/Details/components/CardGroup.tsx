import { User } from "lucide-react";
import { useState } from "react";
import ImagePreview from "../../Table/components/ImagePreview";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

interface CardGroupProps {
  col: Record<string, any>;
  data: Record<string, any>;
  uiVariant?: "default" | "card" | "split";
  styleConfig?: {
    rowClass?: string;
    cardGroupClass?: string;
    labelClass?: string;
    valueClass?: string;
    iconClass?: string;
  };
}

const CardGroup = ({
  col,
  data,
  uiVariant = "default",
  styleConfig = {},
}: CardGroupProps) => {
  const title = data[col.titleKey];
  const subtitle = data[col.subtitleKey];
  const image = data[col.imageKey];
  const label = col.label;
  const Icon = col?.icon;
  const fallback_icon = col.fallback_icon;

  const [targetImage, setTargetImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPreview = (img: { src: any; alt: string }) => {
    let imageObj = img;
    if (img && img.src instanceof File) {
      imageObj = { ...img, src: URL.createObjectURL(img.src) };
    }
    setTargetImage(imageObj as { src: string; alt: string });
    setIsOpen(true);
  };

  const renderMiniAvatar = () => {
    if (image) {
      return (
        <img
          src={image instanceof File ? URL.createObjectURL(image) : image}
          alt={title}
          onClick={() => openPreview({ src: image, alt: title })}
          className="w-8 h-8 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 flex-shrink-0"
        />
      );
    }
    if (fallback_icon) {
      return fallback_icon instanceof Function
        ? fallback_icon(data)
        : fallback_icon;
    }
    return (
      <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 flex-shrink-0">
        <User className="w-5 h-5 text-gray-400" />
      </div>
    );
  };

  // â”€â”€ CARD variant â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Standalone card: icon badge top-left, label, then inline mini avatar + name
  if (uiVariant === "card") {
    return (
      <>
        {isOpen && targetImage && (
          <ImagePreview
            src={targetImage.src}
            alt={targetImage.alt}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
        <div
          className={joinClasses(
            crudClasses.details.row,
            col.blockClass || "col-span-6",
            "group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4 flex flex-col gap-2.5",
            styleConfig.rowClass || "",
            styleConfig.cardGroupClass || "",
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
          <div className="flex items-center gap-2 mt-auto">
            {renderMiniAvatar()}
            <div className="min-w-0">
              <p
                className={`text-sm font-semibold text-gray-800 dark:text-gray-100 truncate ${styleConfig.valueClass || ""}`}
              >
                {title}
              </p>
              {subtitle && (
                <p className="text-xs text-gray-400 dark:text-gray-500 truncate">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  // â”€â”€ SPLIT variant â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Property-sheet row: left label band | right value band with mini avatar
  if (uiVariant === "split") {
    return (
      <>
        {isOpen && targetImage && (
          <ImagePreview
            src={targetImage.src}
            alt={targetImage.alt}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
        <div
          className={joinClasses(
            crudClasses.details.row,
            "flex items-stretch min-h-[52px]",
            styleConfig.rowClass || "",
            styleConfig.cardGroupClass || "",
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
          {/* Value band with mini avatar */}
          <div className="flex-1 flex items-center gap-2.5 px-4 py-3 bg-white dark:bg-gray-900">
            {renderMiniAvatar()}
            <div className="min-w-0">
              <p
                className={`text-sm text-gray-800 dark:text-gray-100 break-words ${styleConfig.valueClass || ""}`}
              >
                {title}
              </p>
              {subtitle && (
                <p className="text-xs text-gray-400 dark:text-gray-500 truncate">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  // â”€â”€ DEFAULT variant â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  return (
    <>
      {isOpen && targetImage && (
        <ImagePreview
          src={targetImage.src}
          alt={targetImage.alt}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      <div
        className={joinClasses(
          crudClasses.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          styleConfig.rowClass || "",
          styleConfig.cardGroupClass || "",
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
          <div className="flex items-center mt-1">
            {renderMiniAvatar()}
            <div className="ml-2">
              <p
                className={`mb-0 text-sm text-gray-900 dark:text-white break-words ${styleConfig.valueClass || ""}`}
              >
                {title}
              </p>
              <p
                className={`text-xs text-gray-500 dark:text-gray-400 ${styleConfig.labelClass || ""}`}
              >
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardGroup;
