import React, { useContext, useState } from "react";
import VehicleTableRow from "../vehicledetails/VehicleTableRow";
import VehicleDetails from "../vehicledetails/VehicleDetails";
import { AppContext } from "../../../context/AppContext";

const VehicleTable = () => {
  const { vehicles } = useContext(AppContext);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleOpen = (vehicle) => {
    setSelectedVehicle(vehicle);
    setDetailModalOpen(true);
  };

  const handleClose = () => {
    setDetailModalOpen(false);
    setSelectedVehicle(null);
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Make
            </th>
            <th scope="col" className="px-6 py-3">
              Model
            </th>
            <th scope="col" className="px-6 py-3">
              Year
            </th>
            <th scope="col" className="px-6 py-3">
              Plate Number
            </th>
            <th scope="col" className="px-6 py-3">
              Seats
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <VehicleTableRow
              key={vehicle.id}
              vehicle={vehicle}
              handleOpen={handleOpen}
            />
          ))}
        </tbody>
      </table>
      {isDetailModalOpen && (
        <VehicleDetails
          vehicle={selectedVehicle}
          handleClose={handleClose}
          isOpen={isDetailModalOpen}
        />
      )}
    </div>
  );
};

export default VehicleTable;
