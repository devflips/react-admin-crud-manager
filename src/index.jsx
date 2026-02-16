import React from "react";
import CrudPage from "./components/CrudPage";
import "./index.css";

export default function Crud(props) {
  return (
    <>
      <CrudPage config={props.config} />
    </>
  );
}
