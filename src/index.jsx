import React, { useEffect } from "react";
import libraryStyles from "./index.css?inline";
import CrudPage from "./components/CrudPage";
import OptionalSnackbarProvider from "./OptionalSnackbarProvider";

const injectStyles = () => {
  if (typeof document === "undefined") return;
  if (document.getElementById("react-admin-crud-manager-styles")) return;

  const style = document.createElement("style");
  style.id = "react-admin-crud-manager-styles";
  style.textContent = libraryStyles;
  document.head.appendChild(style);
};

export default function Crud(props) {
  useEffect(() => {
    injectStyles();
  }, []);

  return (
    <OptionalSnackbarProvider>
      <CrudPage config={props.config} />
    </OptionalSnackbarProvider>
  );
}
