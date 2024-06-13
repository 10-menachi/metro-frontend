import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import { useUser } from "../hooks/useUser";

const Vehicles = ({ user, authenticated }) => {
  if (!authenticated) {
    return <Loading />;
  }

  const { permitted_to } = user;
  return (
    <div>
      <NavBar user={user} />
      <Sidebar permitted_to={permitted_to} />
    </div>
  );
};

export default Vehicles;
