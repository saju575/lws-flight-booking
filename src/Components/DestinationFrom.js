import React from "react";
import { Setect } from "./Setect";

export const DestinationFrom = ({
  initialValue,
  values,
  img,
  getDestinationFromLocation,
}) => {
  return (
    <div className="des-from">
      <p>Destination From</p>
      <div className="flex flex-row">
        <img src={img} alt="" />
        <Setect
          initialValue={initialValue}
          values={values}
          getSelectedValue={getDestinationFromLocation}
        />
      </div>
    </div>
  );
};
