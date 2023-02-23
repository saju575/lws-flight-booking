import React from "react";
import { Setect } from "./Setect";

export const JourneyClass = ({ values, img, getClassValue }) => {
  return (
    <div className="des-from !border-r-0">
      <p>Class</p>
      <div className="flex flex-row">
        <img src={img} alt="" />
        <Setect values={values} getSelectedValue={getClassValue} />
      </div>
    </div>
  );
};
