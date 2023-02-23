import React from "react";
import { Setect } from "./Setect";

export const DestinationTo = ({ values, img, getDestinationToLocation }) => {
  return (
    <div className="des-from">
      <p>Destination To</p>
      <div className="flex flex-row">
        <img src={img} alt="" />
        <Setect values={values} getSelectedValue={getDestinationToLocation} />
      </div>
    </div>
  );
};
