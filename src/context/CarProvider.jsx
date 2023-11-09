import React, {
  createContext,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
} from "react";
import { fetchData } from "./api";
import { reducer, initialState } from "./reducers/carReducers";
import * as actions from "./actions/carActions";

export const carContext = createContext(initialState);

const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchDataAndSetCars = async () => {
    try {
      dispatch(actions.setLoading(true));
      const data = await fetchData();
      dispatch(actions.setCars(data));
    } catch (error) {
      console.error("Error fetching and setting car data: ", error);
    } finally {
      setTimeout(() => {
        dispatch(actions.setLoading(false));
      }, 2000);
    }
  };

  useEffect(() => {
    fetchDataAndSetCars();
  }, []);

  useEffect(() => {
    dispatch(actions.setFilteredData(state.cars));
  }, [state.cars]);

  const handleFilterCars = useCallback(() => {
    dispatch(actions.setLoading(true));

    setTimeout(() => {
      if (state.cars) {
        const filteredCars = state.cars.filter((car) => {
          const isDriverTypeMatch =
            state.driverType === "default" ||
            car.available === (state.driverType === "true");
          const isPassengerCountValid =
            !state.passengerCount ||
            car.capacity >= parseInt(state.passengerCount, 10);
          const isDateValid =
            !state.selectedDate ||
            new Date(car.availableAt) <= new Date(state.selectedDate);

          return isDriverTypeMatch && isPassengerCountValid && isDateValid;
        });

        dispatch(actions.setFilteredData(filteredCars));
      }

      dispatch(actions.setLoading(false));
    }, 2000);
  }, [state.cars, state.driverType, state.passengerCount, state.selectedDate]);

  const ctxValue = useMemo(
    () => ({
      loading: state.loading,
      filteredData: state.filteredData,
      driverType: state.driverType,
      passengerCount: state.passengerCount,
      handleFilterCars,
      setDriverType: (driverType) =>
        dispatch(actions.setDriverType(driverType)),
      setPassengerCount: (passengerCount) =>
        dispatch(actions.setPassengerCount(passengerCount)),
      setSelectedDate: (selectedDate) =>
        dispatch(actions.setSelectedDate(selectedDate)),
    }),
    [
      state.loading,
      state.filteredData,
      state.driverType,
      state.passengerCount,
      state.selectedDate,
      handleFilterCars,
    ]
  );

  return <carContext.Provider value={ctxValue}>{children}</carContext.Provider>;
};

export default CarProvider;
