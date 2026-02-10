import React, { useState, useEffect } from "react";
import { Input } from "./components/Input";
import Select from "./components/Select";
import Switch from "./components/Switch";
import PhoneInput from "./components/PhoneInput";
import ImagePicker from "./components/ImagePicker";
import { TextArea } from "./components/TextArea";

const Form = ({ config, onSubmit, initialData = {} }) => {
  const { formClass = "grid grid-cols-12 gap-4", formFields = [] } =
    config || {};

  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, []);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    onSubmit(formData);
  };

  const renderField = (field) => {
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
      required,
      minLength,
      dragDrop,
      parentClass,
      countries_list,
      default_country,
    } = field;
    let value = formData[key];
    if (value === undefined || value === null) {
      value = "";
    }

    const finalPlaceholder =
      placeholder || (type === "select" ? `Select ${label}` : `Enter ${label}`);

    const baseClass =
      "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white ";

    switch (type) {
      case "select":
        return (
          <Select
            options={options || []}
            value={value}
            onChange={(val) => handleChange(key, val)}
            placeholder={finalPlaceholder}
            className={`${inputClass || ""}`}
            search={search}
            required={required}
            label={label}
            name={key}
            parentClass={parentClass}
          />
        );

      case "switch":
        return (
          <>
            <Switch
              value={value}
              onChange={(val) => handleChange(key, val)}
              text={text}
              options={options || []}
              label={label}
              required={required}
              name={key}
              parentClass={parentClass}
            />
          </>
        );

      case "phone":
        return (
          <PhoneInput
            value={value || ""}
            onChange={(val) => handleChange(key, val)}
            countries_list={countries_list}
            default_country={default_country}
            required={required}
            placeholder={finalPlaceholder}
            search={search}
            label={label}
            name={key}
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

      default:
        return (
          <Input
            type={type}
            value={value}
            onChange={(e) => handleChange(key, e.target.value)}
            placeholder={finalPlaceholder}
            className={`${baseClass} ${inputClass || ""}`}
            required={required}
            name={key}
            minLength={minLength}
            label={label}
            parentClass={parentClass}
          />
        );
    }
  };

  return (
    <form
      id={config.title?.toLowerCase().includes("edit") ? "editForm" : "addForm"}
      onSubmit={handleSubmit}
      className={formClass}
      noValidate={false} // enables native validation
    >
      {formFields.map((field) => (
        <>{renderField(field)}</>
      ))}
    </form>
  );
};

export default Form;
