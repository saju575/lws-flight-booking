import React from "react";
import { Setect } from "./Setect";

export const Guests = ({ values, img, getNumberOfGusts }) => {
  return (
    <div className="des-from">
      <p>Guests</p>
      <div className="flex flex-row">
        <img src={img} alt="" />
        <Setect values={values} getSelectedValue={getNumberOfGusts} />
      </div>
    </div>
  );
};
