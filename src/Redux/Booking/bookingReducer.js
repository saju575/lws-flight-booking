import { BOOKING_CANCEL, BOOKING_SUCCESS } from "./actionTypes";

const initialState = [];

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING_SUCCESS:
      return [...state, action.payload];

    case BOOKING_CANCEL:
      return state.filter((booking) => booking.id !== action.id);

    default:
      return [...state];
  }
};
export default bookingReducer;
