import React, { useState } from "react";
import { DestinationFrom } from "./DestinationFrom";
import { DestinationTo } from "./DestinationTo";
import { JourneyDate } from "./JourneyDate";
import { Guests } from "./Guests";
import { JourneyClass } from "./JourneyClass";
//image import
import locationImg from "../img/icons/Frame.svg";
import personImg from "../img/icons/Vector (1).svg";
import classImg from "../img/icons/Vector (3).svg";
import { useDispatch, useSelector } from "react-redux";
import { booking } from "../Redux/Booking/actions";

//from data
const locations = [
  { label: "Dhaka", value: "Dhaka" },
  { label: "Sylhet", value: "Sylhet" },
  { label: "Saidpur", value: "Saidpur" },
  { label: "Cox's Bazar", value: "Cox's Bazar" },
];

//class
const classes = [
  { label: "Business", value: "Business" },
  { label: "Economy", value: "Economy" },
];

const person = [
  { label: "1 Person", value: 1 },
  { label: "2 Persons", value: 2 },
  { label: "3 Persons", value: 3 },
  { label: "4 Persons", value: 4 },
];
// {
//     from: "Dhaka",
//     to: "Dhaka",
//     data: "02/06/2023",
//     guests: "1 Person",
//     seatClass: "Economy",
//   }
export const InputDataSetion = () => {
  const totalBookings = useSelector((store) => store.booking);
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  // console.log(totalBookings);

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId =
      Date.now().toString(36) + Math.random().toString(36).substr(2);
    dispatch(booking(uniqueId, { ...data, id: uniqueId }));
    //console.log(data);
  };
  const getDestinationFromLocation = (e) => {
    setData({ ...data, from: e.target.value });
  };
  const getDestinationToLocation = (e) => {
    setData({ ...data, to: e.target.value });
  };
  const getJourneyDate = (e) => {
    setData({ ...data, date: e.target.value });
  };
  const getNumberOfGuests = (e) => {
    setData({ ...data, guests: parseInt(e.target.value) });
  };
  const getClassValue = (e) => {
    setData({ ...data, bookedClass: e.target.value });
  };
  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
          {/* <!-- From --> */}
          <DestinationFrom
            initialValue={data.from}
            values={locations}
            img={locationImg}
            getDestinationFromLocation={getDestinationFromLocation}
          />

          {/* <!-- To --> */}
          <DestinationTo
            values={locations}
            img={locationImg}
            getDestinationToLocation={getDestinationToLocation}
          />

          {/* <!-- Date --> */}
          <JourneyDate getJourneyDate={getJourneyDate} />

          {/* <!-- Guests --> */}
          <Guests
            values={person}
            img={personImg}
            getNumberOfGusts={getNumberOfGuests}
          />

          {/* <!-- Class --> */}
          <JourneyClass
            values={classes}
            img={classImg}
            getClassValue={getClassValue}
          />

          <button
            disabled={totalBookings.length >= 3 ? true : false}
            className={`addCity ${totalBookings.length >= 3 ? "disable" : ""}`}
            type="submit"
            id="lws-addCity"
          >
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};
