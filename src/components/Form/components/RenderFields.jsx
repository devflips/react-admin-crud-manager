import React from "react";
import Select from "./Select";
import Switch from "./Switch";
import PhoneInput from "./PhoneInput";
import { TextArea } from "./TextArea";
import ImagePicker from "./ImagePicker";
import { Input } from "./Input";
import TinyEditor from "./TinyEditor";
import Checkbox from "./Checkbox";
import AudioPicker from "./AudioPicker";

const RenderFields = ({ field, formData, handleChange }) => {
  const {
    key,
    label,
    type,
    options,
    placeholder,
    rows,
    inputClass,
    search,
    accept,
    text,
    required = false,
    minLength,
    dragDrop,
    parentClass,
    countriesList,
    defaultCountry,
    multiple,
    dropdownMaxHeight,
    editorKey,
    fontFamily,
    disabled,
    negativeNumberAllow,
  } = field;

  let value = formData?.[key];
  if (value === undefined || value === null) {
    value = "";
  }

  const finalPlaceholder =
    placeholder || (type === "select" ? `Select ${label}` : `Enter ${label}`);

  const baseClass =
    "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";

  switch (type) {
    case "select":
      return (
        <Select
          options={options || []}
          value={value}
          onChange={(val) => handleChange(key, val)}
          placeholder={finalPlaceholder}
          className={inputClass || ""}
          search={search}
          required={required}
          label={label}
          name={key}
          disabled={disabled}
          parentClass={parentClass}
          multiple={multiple}
          dropdownMaxHeight={dropdownMaxHeight}
        />
      );

    case "checkbox":
      return (
        <Checkbox
          name={key}
          label={label}
          options={options || []}
          value={value}
          onChange={(val) => handleChange(key, val)}
          required={required}
          parentClass={parentClass}
          className={inputClass || ""}
          multiSelect={multiple}
          disabled={disabled}
        />
      );

    case "switch":
      return (
        <Switch
          value={value}
          onChange={(val) => handleChange(key, val)}
          text={text}
          options={options || []}
          label={label}
          required={required}
          name={key}
          disabled={disabled}
          parentClass={parentClass}
        />
      );

    case "phone":
      return (
        <PhoneInput
          value={value}
          onChange={(val) => handleChange(key, val)}
          countriesList={countriesList}
          defaultCountry={defaultCountry}
          required={required}
          placeholder={finalPlaceholder}
          search={search}
          label={label}
          name={key}
          disabled={disabled}
          parentClass={parentClass}
        />
      );

    case "textarea":
      return (
        <TextArea
          value={value}
          onChange={(e) => handleChange(key, e.target.value)}
          placeholder={finalPlaceholder}
          rows={rows || 3}
          className={`${baseClass} ${inputClass || ""}`}
          required={required}
          name={key}
          label={label}
          disabled={disabled}
          parentClass={parentClass}
        />
      );

    case "image":
      return (
        <ImagePicker
          value={value}
          onChange={(imgObj) => handleChange(key, imgObj)}
          required={required}
          accept={accept || "image/*"}
          id={`file-${key}`}
          dragDrop={dragDrop}
          label={label}
          name={key}
          parentClass={parentClass}
        />
      );
    case "audio":
      return (
        <AudioPicker
          value={value}
          onChange={(audio) => handleChange(key, audio)}
          required={required}
          accept={accept || "audio/*"}
          id={`file-${key}`}
          dragDrop={dragDrop}
          label={label}
          name={key}
          parentClass={parentClass}
        />
      );

    case "tinyEditor":
      return (
        <TinyEditor
          value={value}
          onChange={(newValue) => handleChange(key, newValue)}
          required={required}
          key={`editor-${key}`}
          placeholder={finalPlaceholder}
          label={label}
          parentClass={parentClass}
          fontFamily={fontFamily}
          editorKey={editorKey}
          disabled={disabled}
        />
      );

    default:
      return (
        <Input
          type={type || "text"}
          value={value}
          onChange={(e) => handleChange(key, e.target.value)}
          placeholder={finalPlaceholder}
          className={`${baseClass} ${inputClass || ""}`}
          required={required}
          name={key}
          minLength={minLength}
          label={label}
          negativeNumberAllow={negativeNumberAllow}
          parentClass={parentClass}
          disabled={disabled}
        />
      );
  }
};

export default RenderFields;
