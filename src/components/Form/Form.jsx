import React, { useState, useEffect } from "react";
import RenderFields from "./components/RenderFields";
import { enqueueSnackbar } from "notistack";

const Form = ({
  config,
  onSubmit,
  initialData = {},
  fetchRowDetails,
  type = "add",
}) => {
  const { formClass = "grid grid-cols-12 gap-4", formFields = [] } =
    config || {};

  const [formData, setFormData] = useState(initialData);

  const [dataLoading, setDataLoading] = useState(true);

  const handleGetDetails = async () => {
    fetchRowDetails?.(initialData)
      .then((resp) => {
        setFormData(resp.data);
      })
      .catch((error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      })
      .finally(() => {
        setDataLoading(false);
      });
  };

  useEffect(() => {
    if (fetchRowDetails instanceof Function) {
      handleGetDetails();
    } else {
      setFormData(initialData);
      setDataLoading(false);
    }
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

  if (dataLoading) {
    return (
      // spinner loader
      <div className="flex items-center justify-center h-64">
        <div
          className={`rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8 border-4`}
          style={{
            borderTopColor: "border-primary-500",
          }}
        />
      </div>
    );
  }

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
