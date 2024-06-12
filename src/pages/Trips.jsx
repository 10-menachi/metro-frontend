import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import { useUser } from "../hooks/useUser";
import TripContent from "../components/TripContent";

const Trips = () => {
  const { user, authenticated } = useUser();

  if (!authenticated) {
    return <Loading />;
  }

  const { permitted_to } = user;
  return (
    <div>
      <NavBar user={user} />
      <Sidebar permitted_to={permitted_to} />
      <TripContent />
    </div>
  );
};

export default Trips;
