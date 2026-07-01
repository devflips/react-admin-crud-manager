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

  // ─── Safe value: File / object / array ko string mein convert karo ────────
  // React sirf string/number/boolean render kar sakta hai — File ya plain object
  // directly render karne se "Objects are not valid as React child" crash aata hai
  const toDisplayString = (val: any): string => {
    if (val === null || val === undefined) return "N/A";
    if (typeof val === "string") return val || "N/A";
    if (typeof val === "number" || typeof val === "boolean") return String(val);
    if (val instanceof File) return val.name || "File";
    if (Array.isArray(val)) {
      if (val.length === 0) return "N/A";
      return val
        .map((item) => {
          if (typeof item === "string") return item;
          if (item instanceof File) return item.name;
          if (item && typeof item === "object") {
            return (item as any).name || (item as any).label || "File";
          }
          return String(item);
        })
        .join(", ");
    }
    if (typeof val === "object") {
      return (
        (val as any).name || (val as any).label || (val as any).preview || "N/A"
      );
    }
    return "N/A";
  };
  // ──────────────────────────────────────────────────────────────────────────

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
          className="shadow-sm mt-1 w-full max-w-xs max-h-[250px] rounded-md"
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
    if (type === "file") {
      const files = Array.isArray(value) ? value : value ? [value] : [];
      if (files.length === 0)
        return <p className="text-sm text-gray-400">N/A</p>;

      // File type helpers
      const getMimeType = (f: any): string => {
        if (f instanceof File) return f.type || "";
        if (typeof f === "string") {
          const ext = f.split(".").pop()?.toLowerCase() || "";
          if (["jpg", "jpeg", "png", "gif", "webp", "svg", "bmp"].includes(ext))
            return "image/";
          if (ext === "pdf") return "application/pdf";
          if (["doc", "docx"].includes(ext)) return "application/word";
          if (["xls", "xlsx"].includes(ext)) return "application/excel";
          if (["mp4", "mov", "avi", "webm"].includes(ext)) return "video/";
          if (["mp3", "wav", "ogg", "m4a"].includes(ext)) return "audio/";
        }
        return (f as any)?.type || "";
      };

      const getFileUrl = (f: any): string => {
        if (f instanceof File) return URL.createObjectURL(f);
        if (typeof f === "string") return f;
        return (f as any)?.preview || (f as any)?.url || "";
      };

      const getFileName = (f: any, idx: number): string => {
        if (f instanceof File) return f.name;
        if (typeof f === "string") return f.split("/").pop() || f;
        return (f as any)?.name || `File ${idx + 1}`;
      };

      // SVG icons for file types
      const FileIcon = ({ mime }: { mime: string }) => {
        if (mime.startsWith("application/pdf"))
          return (
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-red-500 flex-shrink-0"
              fill="currentColor"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8.5 17.5h-1v-5h1.8c1.1 0 1.7.6 1.7 1.6 0 1-.6 1.6-1.7 1.6H8.5v1.8zm0-2.8h.7c.5 0 .8-.3.8-.8s-.3-.8-.8-.8H8.5v1.6zm4.5 2.8h-1.5v-5H13c1.4 0 2.2.9 2.2 2.5s-.8 2.5-2.2 2.5zm-.5-4v3h.4c.8 0 1.3-.5 1.3-1.5S13.2 13.5 12.4 13.5H12zm4.5 4h-1v-5h2.8v1h-1.8v1.1h1.6v1h-1.6v1.9z" />
            </svg>
          );
        if (mime.startsWith("application/word") || mime.includes("doc"))
          return (
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-blue-500 flex-shrink-0"
              fill="currentColor"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM7 17l1.5-5h1l1 3.5 1-3.5h1L14 17h-1l-1-3.3-1 3.3H7z" />
            </svg>
          );
        if (mime.startsWith("video/"))
          return (
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-purple-500 flex-shrink-0"
              fill="currentColor"
            >
              <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" />
            </svg>
          );
        if (mime.startsWith("audio/"))
          return (
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-green-500 flex-shrink-0"
              fill="currentColor"
            >
              <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
            </svg>
          );
        // generic file
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-gray-400 flex-shrink-0"
            fill="currentColor"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5z" />
          </svg>
        );
      };

      // Separate images from other files
      const imageFiles = files.filter((f) =>
        getMimeType(f).startsWith("image/"),
      );
      const otherFiles = files.filter(
        (f) => !getMimeType(f).startsWith("image/"),
      );

      return (
        <div className="mt-1 space-y-3">
          {/* Image previews — same grid as multiImage */}
          {imageFiles.length > 0 && (
            <div
              className={`grid grid-cols-3 sm:grid-cols-4 gap-2 ${styleConfig.mediaGridClass || ""}`}
            >
              {imageFiles.map((f: any, idx: number) => {
                const src = getFileUrl(f);
                const name = getFileName(f, idx);
                if (!src) return null;
                return (
                  <button
                    key={`img-${idx}`}
                    type="button"
                    onClick={() => openPreview(src, name)}
                    className="w-full h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors"
                  >
                    <img
                      src={src}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}

          {/* Non-image files — icon + filename + link */}
          {otherFiles.length > 0 && (
            <div className="flex flex-col gap-1.5">
              {otherFiles.map((f: any, idx: number) => {
                const mime = getMimeType(f);
                const url = getFileUrl(f);
                const name = getFileName(f, idx);
                return (
                  <a
                    key={`file-${idx}`}
                    href={url || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors max-w-xs group"
                  >
                    <FileIcon mime={mime} />
                    <span className="text-sm text-gray-700 dark:text-gray-300 truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {name}
                    </span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    // ─── Default: safely convert any value to a renderable string ─────────
    return (
      <p className={`${wrapClass} ${styleConfig.valueClass || ""}`}>
        {type === "date" ? (
          <span>{formatDate(value, col.format || "DD MMM YYYY")}</span>
        ) : (
          <span>{toDisplayString(value)}</span>
        )}
      </p>
    );
    // ──────────────────────────────────────────────────────────────────────
  };

  // ── CARD variant ──────────────────────────────────────────────────────────
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

  // ── SPLIT variant ─────────────────────────────────────────────────────────
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

  // ── DEFAULT variant ───────────────────────────────────────────────────────
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
