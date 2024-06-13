import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import { useUser } from "../hooks/useUser";
import EmployeeContent from "../components/employees/EmployeeContent";

const Employees = ({ user, authenticated }) => {
  if (!authenticated) {
    return <Loading />;
  }

  const { permitted_to } = user;
  return (
    <div>
      <NavBar user={user} />
      <Sidebar permitted_to={permitted_to} />
      <EmployeeContent user={user} />
    </div>
  );
};

export default Employees;
