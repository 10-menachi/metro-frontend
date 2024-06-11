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
  return (
    <>
      <NavBar user={user} />
      <Sidebar permitted_to={permitted_to} />
      <DashboardContent />
    </>
  );
};

export default Dashboard;
