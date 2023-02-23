import { BOOKING_CANCEL, BOOKING_SUCCESS } from "./actionTypes";

export const booking = (id, data) => {
  return {
    type: BOOKING_SUCCESS,
    payload: data,
    id,
  };
};

export const bookingCancel = (id) => {
  return {
    type: BOOKING_CANCEL,
    id,
  };
};
