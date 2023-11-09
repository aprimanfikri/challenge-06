import * as actionTypes from "../actions/carActionTypes";

export const initialState = {
  cars: [],
  filteredData: [],
  driverType: "default",
  passengerCount: "",
  selectedDate: "",
  loading: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CARS:
      return { ...state, cars: action.payload };
    case actionTypes.SET_FILTERED_DATA:
      return { ...state, filteredData: action.payload };
    case actionTypes.SET_DRIVER_TYPE:
      return { ...state, driverType: action.payload };
    case actionTypes.SET_PASSENGER_COUNT:
      return { ...state, passengerCount: action.payload };
    case actionTypes.SET_SELECTED_DATE:
      return { ...state, selectedDate: action.payload };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
