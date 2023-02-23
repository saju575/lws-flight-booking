import React from "react";

export const Setect = ({ initialValue, values, getSelectedValue }) => {
  return (
    <select
      className="outline-none px-2 py-2 w-full"
      name="guests"
      id="lws-guests"
      required
      //value={initialValue}
      onChange={getSelectedValue}
    >
      <option value="" hidden>
        Please Select
      </option>
      {/* <option value="1">1 Person</option>
      <option value="2">2 Persons</option>
      <option value="3">3 Persons</option>
      <option value="4">4 Persons</option> */}
      {values.map((option, id) => (
        <option value={option.value} key={id}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
