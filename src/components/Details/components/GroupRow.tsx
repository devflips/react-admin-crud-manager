import { User } from "lucide-react";
import { useState } from "react";
import ImagePreview from "../../Table/components/ImagePreview";

interface GroupRowProps {
  col: Record<string, any>;
  data: Record<string, any>;
}

const GroupRow = ({ col, data }: GroupRowProps) => {
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
