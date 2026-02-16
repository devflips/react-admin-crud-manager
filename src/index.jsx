import React from "react";
import CrudPage from "./components/CrudPage";
import "./index.css";

export default function Crud(props) {
  console.log(props, "props passed");
  return (
    <>
      <CrudPage config={props.config} />
    </>
  );
}
