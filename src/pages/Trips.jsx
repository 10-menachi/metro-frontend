import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import { useUser } from "../hooks/useUser";
import TripContent from "../components/TripContent";
import { getCustomers, getRoutes, getTrips } from "../utils/common";

const Trips = () => {
  const { user, authenticated } = useUser();
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
        console.error("Error fetching customers:", error.message);
      }
    };

    fetchTrips();
    fetchCustomers();
    fetchRoutes();
  }, []);

  if (!authenticated || !trips.length || !customers.length || !routes.length) {
    return <Loading />;
  }

  const { permitted_to } = user;
  return (
    <div>
      <NavBar user={user} />
      <Sidebar permitted_to={permitted_to} />
      <TripContent trips={trips} customers={customers} routes={routes} />
    </div>
  );
};

export default Trips;
