import React from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";
import DashboardContent from "../components/DashboardContent";

const Dashboard = ({ user, authenticated }) => {
  if (!authenticated) {
    return <Loading />;
  }
  const { permitted_to } = user;
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
