import React, { useState, useEffect } from "react";
import RenderFields from "./components/RenderFields";
import { enqueueSnackbar } from "notistack";

interface FormField {
  key: string;
  [key: string]: any;
}

interface FormConfig {
  formClass?: string;
  formFields?: FormField[];
}

interface FormProps {
  config: FormConfig;
  onSubmit: (data: Record<string, any>) => void;
  initialData: Record<string, any> | null;
  fetchRowDetails?: (
    item: Record<string, any>,
  ) => Promise<{ data: Record<string, any> }>;
  type: "add" | "edit" | string;
  loading?: boolean;
}

const Form: React.FC<FormProps> = ({
  config,
  onSubmit,
  initialData,
  fetchRowDetails,
  type,
}) => {
  const safeInitialData = initialData || {};

  const { formClass = "grid grid-cols-12 gap-4", formFields = [] } =
    config || {};

  const [formData, setFormData] =
    useState<Record<string, any>>(safeInitialData);
  const [dataLoading, setDataLoading] = useState<boolean>(true);

  const handleGetDetails = async (): Promise<void> => {
    fetchRowDetails?.(safeInitialData)
      .then((resp) => {
        setFormData(resp.data);
      })
      .catch((error: Error) => {
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
      setFormData(safeInitialData);
      setDataLoading(false);
    }
  }, []);

  const handleChange = (key: string, value: any): void => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    onSubmit(formData);
  };

  if (dataLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div
          className="rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8"
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
        type === "add"
          ? "addForm"
          : type === "edit"
            ? "editForm"
            : "defaultForm"
      }
      onSubmit={handleSubmit}
      className={formClass}
      noValidate={false}
    >
      {formFields.map((field) => (
        <RenderFields
          key={field.key}
          field={field}
          formData={formData}
          handleChange={handleChange}
        />
      ))}
    </form>
  );
};

export default Form;
