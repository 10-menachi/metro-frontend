import React, { createContext, useEffect, useState } from "react";
import { getCustomers, getOrganisations } from "../utils/common";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [organisations, setOrganisations] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [customersData, organisationsData] = await Promise.all([
          getCustomers(),
          getOrganisations(),
        ]);
        setCustomers(customersData.customers);
        setOrganisations(organisationsData.organisations);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        customers,
        organisations,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
