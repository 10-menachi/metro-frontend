import React from "react";
import DashboardContentCard from "./DashboardContentCard";

const DashboardContent = ({
  employee_count,
  vehicles_count,
  drivers_count,
}) => {
  return (
    <div className="p-4 py-20 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <DashboardContentCard
            icon="users"
            title="Employees"
            count={employee_count}
          />
          <DashboardContentCard
            icon="car"
            title="Vehicles"
            count={vehicles_count}
          />
          <DashboardContentCard
            icon="id-card"
            title="Drivers"
            count={drivers_count}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
