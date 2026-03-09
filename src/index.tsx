import React, { useEffect } from "react";
import CrudPage from "./components/CrudPage";
import OptionalSnackbarProvider from "./OptionalSnackbarProvider";

interface CrudProps {
  config: any;
}

const injectStyles = () => {
  if (typeof document === "undefined") return;
  if (document.getElementById("react-admin-crud-manager-styles")) return;

  const style = document.createElement("style");
  style.id = "react-admin-crud-manager-styles";
  style.textContent = `
    .no-spinner::-webkit-outer-spin-button,
    .no-spinner::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .no-spinner {
      -moz-appearance: textfield;
    }

    .tox.tox-tinymce .tox-edit-area::before {
      border: 0 !important;
      box-shadow: none !important;
    }
  `;
  document.head.appendChild(style);
};

export default function Crud({ config }: CrudProps) {
  useEffect(() => {
    injectStyles();
  }, []);

  return (
    <OptionalSnackbarProvider>
      <CrudPage config={config} />
    </OptionalSnackbarProvider>
  );
}
