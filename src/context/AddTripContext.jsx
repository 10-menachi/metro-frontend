import React, { createContext, useContext, useReducer, useEffect } from "react";
import { getCustomers, getRoutes } from "../utils/common";

const initialState = {
  customers: [],
  routes: [],
  formData: {
    customer: "",
    route: "",
    trip_date: "",
    start_time: "",
    end_time: "",
    pickup_location: "home",
    dropoff_location: "home",
  },
  error: null,
};

const StateContext = createContext();

const stateReducer = (state, action) => {
  switch (action.type) {
    case "SET_CUSTOMERS":
      return { ...state, customers: action.payload };
    case "SET_ROUTES":
      return { ...state, routes: action.payload };
    case "SET_FORM_DATA":
      return { ...state, formData: { ...state.formData, ...action.payload } };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customersData = await getCustomers();
        dispatch({ type: "SET_CUSTOMERS", payload: customersData.customers });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: "No customers found" });
      }
    };

    const fetchRoutes = async () => {
      try {
        const routesData = await getRoutes();
        dispatch({ type: "SET_ROUTES", payload: routesData.routes });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: "No routes found" });
      }
    };

    fetchCustomers();
    fetchRoutes();
  }, []);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
