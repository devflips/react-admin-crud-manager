import { useEffect } from "react";
import { X } from "lucide-react";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

interface ImagePreviewProps {
  src: string;
  alt?: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const ImagePreview = ({
  src,
  alt = "preview",
  isOpen,
  setIsOpen,
}: ImagePreviewProps) => {
  const closePreview = () => setIsOpen(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreview();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={joinClasses(
          crudClasses.imagePreview.root,
          "fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",
        )}
        onClick={closePreview}
      >
        <button
          onClick={closePreview}
          className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition"
        >
          <X size={20} />
        </button>

        <div
          className={joinClasses(
            crudClasses.imagePreview.container,
            "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={src}
            alt={alt}
            className={joinClasses(
              crudClasses.imagePreview.image,
              "w-full max-h-[90vh] object-contain rounded-xl",
            )}
          />
        </div>
      </div>
    </>
  );
};

export default ImagePreview;
