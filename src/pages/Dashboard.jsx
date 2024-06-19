import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";
import DashboardContent from "../components/DashboardContent";
import { AppContext } from "../context/AppContext";

const Dashboard = ({ user, authenticated }) => {
  if (!authenticated) {
    return <Loading />;
  }
  const { permitted_to } = user;
  return (
    <>
      <NavBar user={user} />
      <Sidebar permitted_to={permitted_to} />
      {permitted_to.includes("view dashboard") && <DashboardContent />}
    </>
  );
};

export default Dashboard;
