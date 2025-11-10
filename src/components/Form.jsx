import React, { useState, useEffect } from "react";
import { Input } from "./Input";
import Select from "./Select";
import Switch from "./Switch";
import PhoneInput from "./PhoneInput";
import ImagePicker from "./ImagePicker";

const Form = ({ config, onSubmit, initialData = {} }) => {
  const {
    formFields: {
      config: fields = [],
      gridClass = "grid grid-cols-12 gap-4",
    } = {},
  } = config || {};

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
      showFlag,
      required,
      minLength,
      dragDrop
    } = field;
    const value = formData[key] || "";

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
            name={key}
          />
        );

      case "switch":
        return (
          <Switch
            value={formData[key]}
            onChange={(val) => handleChange(key, val)}
            text={text}
            colClass={field.colClass}
            options={options || []}
          />
        );

      case "phone":
        return (
          <PhoneInput
            value={formData[key] || ""}
            onChange={(val) => handleChange(key, val)}
            showFlag={showFlag}
            required={required}
            placeholder={finalPlaceholder}
            name={key}
            search={search}
          />
        );

      case "textarea":
        return (
          <textarea
            value={value}
            onChange={(e) => handleChange(key, e.target.value)}
            placeholder={finalPlaceholder}
            rows={rows || 3}
            className={`${baseClass} ${inputClass || ""}`}
            required={required}
            name={key}
          />
        );

      case "image":
        return (
          <ImagePicker
            value={formData[key]}
            onChange={(imgObj) => handleChange(key, imgObj)}
            required={required}
            accept={accept || "image/*"}
            id={`file-${key}`}
            dragDrop={dragDrop}
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
          />
        );
    }
  };

  return (
    <form
      id={config.title?.toLowerCase().includes("edit") ? "editForm" : "addForm"}
      onSubmit={handleSubmit}
      className={gridClass}
      noValidate={false} // enables native validation
    >
      {fields.map((field) => (
        <div key={field.key} className={field.colClass || "col-span-12"}>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {field.label}
            {field.required && <span className="ml-1">*</span>}
          </label>
          {renderField(field)}
        </div>
      ))}
    </form>
  );
};

export default Form;
