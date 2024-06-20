import { createContext, useEffect, useState } from "react";
import { getDrivers } from "../utils/driverUtils";

export const DriverContext = createContext();

export const DriverProvider = ({ children }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const driversData = await getDrivers();
        setDrivers(driversData.drivers);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const updateDriver = (id, newData) => {
    setDrivers(
      drivers.map((driver) =>
        driver.id === id ? { ...driver, ...newData } : driver
      )
    );
  };

  const deleteDriver = (id) => {
    setVehicles(drivers.filter((driver) => driver.id !== id));
  };

  const addDriverToState = (driver) => {
    setVehicles([...drivers, driver]);
  };

  return (
    <DriverContext.Provider
      value={{
        drivers,
        updateDriver,
        deleteDriver,
        addDriverToState,
      }}
    >
      {children}
    </DriverContext.Provider>
  );
};
