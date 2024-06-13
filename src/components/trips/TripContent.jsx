import React, { useState } from "react";
import TripsTable from "./TripsTable";
import AddTrip from "./AddTrip";

const TripContent = ({ trips, customers, routes, sch_page }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 py-20 sm:ml-64 flex flex-col">
      {sch_page && (
        <div className="flex justify-end mb-4">
          <button
            className="text-white bg-blue-600 hover:bg-primary-700 outline-none font-medium rounded-md text-sm px-4 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={openModal}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      )}
      <TripsTable trips={trips} customers={customers} routes={routes} />
      <AddTrip isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default TripContent;
