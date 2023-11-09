import * as actionTypes from "./carActionTypes";

export const setCars = (payload) => ({
  type: actionTypes.SET_CARS,
  payload,
});

export const setFilteredData = (payload) => ({
  type: actionTypes.SET_FILTERED_DATA,
  payload,
});

export const setDriverType = (payload) => ({
  type: actionTypes.SET_DRIVER_TYPE,
  payload,
});

export const setPassengerCount = (payload) => ({
  type: actionTypes.SET_PASSENGER_COUNT,
  payload,
});

export const setSelectedDate = (payload) => ({
  type: actionTypes.SET_SELECTED_DATE,
  payload,
});

export const setLoading = (payload) => ({
  type: actionTypes.SET_LOADING,
  payload,
});
