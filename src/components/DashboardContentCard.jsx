import React from "react";
import { Link } from "react-router-dom";

const DashboardContentCard = ({ icon, title, count }) => {
  const link = title.toLowerCase();
  return (
    <Link to={link}>
      <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 cursor-pointer">
        <div className="text-2xl text-gray-400 dark:text-gray-500 flex items-center flex-col justify-center">
          <div className="flex gap-3 items-center justify-center">
            <i className={`fas fa-${icon}`}></i>
            <span>{title}</span>
          </div>
          <span>{count}</span>
        </div>
      </div>
    </Link>
  );
};

export default DashboardContentCard;
