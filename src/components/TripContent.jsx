import React from "react";
import TripsTable from "../components/TripsTable";

const TripContent = () => {
  return (
    <div className="p-4 py-20 sm:ml-64 flex flex-col">
      <div className="flex justify-end mb-4">
        <button className="text-white bg-blue-600 hover:bg-primary-700 outline-none font-medium rounded-md text-sm px-4 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <TripsTable />
    </div>
  );
};

export default TripContent;
