import React from "react";

const DashboardContentCard = ({ icon, title, employee_count }) => {
  return (
    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
      <p className="text-2xl text-gray-400 dark:text-gray-500 flex items-center flex-col justify-center">
        <div className="flex gap-3 items-center justify-center">
          <i className={`fas fa-${icon}`}></i>
          <span>{title}</span>
        </div>
        <p>{employee_count}</p>
      </p>
    </div>
  );
};

export default DashboardContentCard;
