import { createContext, useEffect, useState } from "react";
import { getVehicles } from "../utils/vehicleUtils";

export const VehicleContext = createContext();

export const VehicleProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vehiclesData = Promise.all([getVehicles()]);
        setVehicles(vehiclesData.vehicles);
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
    <VehicleContext.Provider
      value={{
        vehicles,
        updateVehicle,
        deleteVehicle,
        addVehicleToState,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};
