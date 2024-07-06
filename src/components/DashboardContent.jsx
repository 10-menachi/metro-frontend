import React, { useContext } from "react";
import DashboardContentCard from "./DashboardContentCard";
import { AppContext } from "../context/AppContext";
import { AuthContext } from "../context/AuthContext";
import { VehicleContext } from "../context/VehicleContext";
import { DriverContext } from "../context/DriverContext";

const DashboardContent = () => {
  const { user } = useContext(AuthContext);
  const { customers, organisations } = useContext(AppContext);
  const { vehicles } = useContext(VehicleContext);
  const { drivers } = useContext(DriverContext);
  const isAdmin = user.role === "admin";
  return (
    <div className="p-4 py-20 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <DashboardContentCard
            icon="users"
            title="Employees"
            count={customers.length}
          />
          <DashboardContentCard
            icon="car"
            title="Vehicles"
            count={vehicles.length}
          />
          <DashboardContentCard
            icon="id-card"
            title="Drivers"
            count={drivers.length}
          />
          {isAdmin && (
            <DashboardContentCard
              icon="building"
              title="Organisations"
              count={organisations.length}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
