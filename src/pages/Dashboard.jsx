import React from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";
import { useUser } from "../hooks/useUser";
import DashboardContent from "../components/DashboardContent";

const Dashboard = () => {
  const { user, authenticated } = useUser();

  if (!authenticated) {
    return <Loading />;
  }
  const { permitted_to } = user;
  console.log(permitted_to);
  return (
    <>
      <NavBar user={user} />
      <Sidebar permitted_to={permitted_to} />
      {permitted_to.includes("view dashboard") && (
        <DashboardContent
          employee_count={user.organisation.customers.length}
          vehicles_count={user.organisation.vehicles.length}
          drivers_count={user.organisation.drivers.length}
        />
      )}
    </>
  );
};

export default Dashboard;
