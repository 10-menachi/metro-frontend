import React, { createContext, useContext, useState, useEffect } from "react";
import { getCustomers, getRoutes, getTrips } from "../utils/common";

const TripsContext = createContext();

export const useTrips = () => useContext(TripsContext);

export const TripsProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripsData = await getTrips();
        const { trips } = tripsData;
        setTrips(trips);
      } catch (error) {
        console.error("Error fetching trips:", error.message);
      }
    };

    const fetchCustomers = async () => {
      try {
        const customersData = await getCustomers();
        const { customers } = customersData;
        setCustomers(customers);
      } catch (error) {
        console.error("Error fetching customers:", error.message);
      }
    };

    const fetchRoutes = async () => {
      try {
        const routesData = await getRoutes();
        const { routes } = routesData;
        setRoutes(routes);
      } catch (error) {
        console.error("Error fetching routes:", error.message);
      }
    };

    fetchTrips();
    fetchCustomers();
    fetchRoutes();
  }, []);

  return (
    <TripsContext.Provider value={{ trips, customers, routes }}>
      {children}
    </TripsContext.Provider>
  );
};
