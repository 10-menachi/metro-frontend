import React, { createContext, useEffect, useState } from "react";
import { getCustomers, getDrivers, getOrganisations } from "../utils/common";
import { getVehicles } from "../utils/vehicleUtils";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [organisations, setOrganisations] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [customersData, organisationsData, vehiclesData, driversData] =
          await Promise.all([
            getCustomers(),
            getOrganisations(),
            getVehicles(),
            getDrivers(),
          ]);
        setCustomers(customersData.customers);
        setOrganisations(organisationsData.organisations);
        setVehicles(vehiclesData.vehicles);
        setDrivers(driversData.drivers);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const updateVehicle = (id, newData) => {
    setVehicles(
      vehicles.map((vehicle) =>
        vehicle.id === id ? { ...vehicle, ...newData } : vehicle
      )
    );
  };

  const deleteVehicle = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  const addVehicleToState = (vehicle) => {
    setVehicles([...vehicles, vehicle]);
  };

  return (
    <AppContext.Provider
      value={{
        customers,
        organisations,
        vehicles,
        drivers,
        updateVehicle,
        deleteVehicle,
        addVehicleToState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
