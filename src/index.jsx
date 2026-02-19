import React, { useEffect } from "react";
import CrudPage from "./components/CrudPage";

// Inject styles dynamically
const injectStyles = () => {
  if (typeof document === "undefined") return;
  
  // Check if styles already loaded
  if (document.getElementById("react-admin-crud-manager-styles")) return;
  
  // Create style tag
  const style = document.createElement("style");
  style.id = "react-admin-crud-manager-styles";
  
  // Add all CSS rules
  const cssRules = `
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
  
  style.textContent = cssRules;
  document.head.appendChild(style);
};

export default function Crud(props) {
  useEffect(() => {
    injectStyles();
  }, []);

  return (
    <>
      <CrudPage config={props.config} />
    </>
  );
}
