import { useEffect } from "react";
import { X } from "lucide-react";

const ImagePreview = ({ src, alt = "preview", isOpen, setIsOpen }) => {
  const closePreview = () => setIsOpen(false);

  // Handle ESC key + prevent body scroll
  useEffect(() => {
    const handleEsc = (e) => {
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
      {/* Fullscreen Preview */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 
                   backdrop-blur-sm animate-in fade-in duration-200"
        onClick={closePreview}
      >
        {/* Close Button */}
        <button
          onClick={closePreview}
          className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition"
        >
          <X size={20} />
        </button>

        {/* Image Container */}
        <div
          className="max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Large Image */}
          <img
            src={src}
            alt={alt}
            className="w-full max-h-[90vh] object-contain rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default ImagePreview;
