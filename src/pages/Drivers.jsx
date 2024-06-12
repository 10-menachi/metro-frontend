import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import { useUser } from "../hooks/useUser";
import DriverContent from "../components/drivers/DriverContent";

const Employees = () => {
  const { user, authenticated } = useUser();

  if (!authenticated) {
    return <Loading />;
  }

  const { permitted_to } = user;
  return (
    <div>
      <NavBar user={user} />
      <Sidebar permitted_to={permitted_to} />
      <DriverContent user={user} />
    </div>
  );
};

export default Employees;
