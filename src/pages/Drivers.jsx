import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import DriverContent from "../components/drivers/viewdrivers/DriverContent";

const Drivers = ({ user, authenticated }) => {
  if (!authenticated) {
    return <Loading />;
  }

  const { permitted_to } = user;
  return (
    <div>
      <NavBar user={user} />
      <Sidebar permitted_to={permitted_to} />
      <DriverContent />
    </div>
  );
};

export default Drivers;
