import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import VehiclesContent from "../components/vehicles/viewvehicles/VehicleContent";

const Vehicles = ({ user, authenticated }) => {
  if (!authenticated) {
    return <Loading />;
  }

  const { permitted_to } = user;
  return (
    <div>
      <NavBar user={user} />
      <Sidebar permitted_to={permitted_to} />
      <VehiclesContent />
    </div>
  );
};

export default Vehicles;
