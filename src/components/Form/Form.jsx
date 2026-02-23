import React, { useState, useEffect } from "react";
import RenderFields from "./components/RenderFields";

const Form = ({ config, onSubmit, initialData = {}, type = "add" }) => {
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

  return (
    <form
      id={
        type == "add" ? "addForm" : type == "edit" ? "editForm" : "defaultForm"
      }
      onSubmit={handleSubmit}
      className={formClass}
      noValidate={false} // enables native validation
    >
      {formFields.map((field) => (
        <>
          <RenderFields
            key={field.key}
            field={field}
            formData={formData}
            handleChange={handleChange}
          />
        </>
      ))}
    </form>
  );
};

export default Form;
