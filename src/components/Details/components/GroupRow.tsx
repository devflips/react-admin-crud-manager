import { User } from "lucide-react";
import { useState } from "react";
import ImagePreview from "../../Table/components/ImagePreview";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

interface GroupRowProps {
  col: Record<string, any>;
  data: Record<string, any>;
  uiVariant?: "default" | "card" | "split";
  styleConfig?: {
    rowClass?: string;
    groupClass?: string;
    labelClass?: string;
    valueClass?: string;
    iconClass?: string;
  };
}

const GroupRow = ({
  col,
  data,
  uiVariant = "default",
  styleConfig = {},
}: GroupRowProps) => {
  const title = data[col.titleKey];
  const subtitle = data[col.subtitleKey];
  const image = data[col.imageKey];
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

  const renderAvatar = (size: "sm" | "md" | "lg") => {
    const sizeMap = {
      sm: { img: "w-8 h-8", wrap: "w-8 h-8", icon: "w-4 h-4" },
      md: { img: "w-12 h-12", wrap: "w-12 h-12", icon: "w-6 h-6" },
      lg: { img: "w-16 h-16", wrap: "w-16 h-16", icon: "w-8 h-8" },
    };
    const s = sizeMap[size];
    if (image) {
      return (
        <img
          src={image instanceof File ? URL.createObjectURL(image) : image}
          alt={title}
          onClick={() => openPreview({ src: image, alt: title })}
          className={`${s.img} cursor-pointer rounded-full object-cover border-2 border-white dark:border-gray-700 shadow flex-shrink-0`}
        />
      );
    }
    if (fallback_icon) {
      return fallback_icon instanceof Function
        ? fallback_icon(data)
        : fallback_icon;
    }
    return (
      <div
        className={`${s.wrap} flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 flex-shrink-0`}
      >
        <User className={`${s.icon} text-gray-400`} />
      </div>
    );
  };

  // â”€â”€ CARD variant â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Full-width profile banner card with gradient + decorative circle
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
            "col-span-12 relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 border border-primary/20 dark:border-primary/30 p-5 flex items-center gap-4",
            styleConfig.rowClass || "",
            styleConfig.groupClass || "",
            col.blockClass || "",
          )}
        >
          {/* Decorative background circle */}
          <div className="pointer-events-none absolute -right-6 -top-6 w-32 h-32 rounded-full bg-primary/8 dark:bg-primary/12" />
          <div className="pointer-events-none absolute -right-2 -bottom-4 w-20 h-20 rounded-full bg-primary/5" />
          {renderAvatar("lg")}
          <div className="min-w-0 z-10">
            <h3
              className={`text-lg font-bold text-gray-900 dark:text-white truncate ${styleConfig.valueClass || ""}`}
            >
              {title}
            </h3>
            <p
              className={`text-sm text-primary/70 dark:text-primary/60 font-medium truncate ${styleConfig.labelClass || ""}`}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </>
    );
  }

  // â”€â”€ SPLIT variant â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Header row: full-width soft gradient banner before the property rows
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
            "flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-primary/8 via-primary/4 to-transparent dark:from-primary/15 dark:via-primary/8",
            styleConfig.rowClass || "",
            styleConfig.groupClass || "",
            col.blockClass || "",
          )}
        >
          {renderAvatar("md")}
          <div className="min-w-0">
            <h3
              className={`text-base font-bold text-gray-900 dark:text-white truncate ${styleConfig.valueClass || ""}`}
            >
              {title}
            </h3>
            <p
              className={`text-xs font-semibold text-primary/70 dark:text-primary/60 truncate ${styleConfig.labelClass || ""}`}
            >
              {subtitle}
            </p>
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
          styleConfig.groupClass || "",
          col.blockClass || "",
        )}
      >
        {renderAvatar("lg")}
        <div>
          <h3
            className={`text-xl font-semibold text-gray-900 dark:text-white ${styleConfig.valueClass || ""}`}
          >
            {title}
          </h3>
          <p
            className={`text-sm text-gray-500 dark:text-gray-400 ${styleConfig.labelClass || ""}`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default GroupRow;
