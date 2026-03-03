import React from "react";
import Chip from "../../Chip/Chip";
import { formatDate } from "../../../lib/utils";

const DetailRow = ({ col, data }) => {
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
              className="shadow-md rounded-full mt-1"
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
export default DetailRow;
