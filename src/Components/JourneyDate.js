import React from "react";

export const JourneyDate = ({ getJourneyDate }) => {
  return (
    <div className="des-from">
      <p>Journey Date</p>
      <input
        type="date"
        className="outline-none px-2 py-2 w-full date"
        name="date"
        id="lws-date"
        required
        onChange={getJourneyDate}
      />
    </div>
  );
};
