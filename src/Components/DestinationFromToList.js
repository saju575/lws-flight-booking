import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookingCancel } from "../Redux/Booking/actions";
import { SingleRow } from "./SingleRow";

export const DestinationFromToList = () => {
  const totalBookings = useSelector((store) => store.booking);
  const dispatch = useDispatch();
  const handleCancle = (id) => {
    dispatch(bookingCancel(id));
  };
  return (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">Class</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
          {totalBookings.map((booking) => (
            <SingleRow
              key={booking.id}
              data={booking}
              deleteRow={handleCancle}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
