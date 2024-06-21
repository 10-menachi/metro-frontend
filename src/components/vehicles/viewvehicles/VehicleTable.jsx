import React, { useContext, useState } from "react";
import VehicleTableRow from "../vehicledetails/VehicleTableRow";
import VehicleDetails from "../vehicledetails/VehicleDetails";
import EditVehicle from "../vehicledetails/EditVehicle";
import DeleteVehicle from "../vehicledetails/DeleteVehicle";
import { deleteVehicleFromApi } from "../../../utils/vehicleUtils";
import { VehicleContext } from "../../../context/VehicleContext";

const VehicleTable = () => {
  const { vehicles } = useContext(VehicleContext);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const { deleteVehicle } = useContext(VehicleContext);

  const handleOpen = (vehicle) => {
    setSelectedVehicle(vehicle);
    setDetailModalOpen(true);
  };

  const handleEditOpen = (vehicle) => {
    setSelectedVehicle(vehicle);
    setEditModalOpen(true);
  };

  const handleDeleteOpen = (vehicle) => {
    setSelectedVehicle(vehicle);
    setDeleteModalOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    setSelectedVehicle(null);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
    setSelectedVehicle(null);
  };

  const handleClose = () => {
    setDetailModalOpen(false);
    setSelectedVehicle(null);
  };

  const handleDeleteVehicle = async (id) => {
    const response = await deleteVehicleFromApi(id);
    console.log(response);
    deleteVehicle(id);
    setDeleteModalOpen(false);
    setSelectedVehicle(null);
  };

  return (
    <div className="relative overflow-x-auto">
      {vehicles.length === 0 ? (
        <div className="text-center py-6 text-gray-500 dark:text-gray-400">
          No vehicles found.
        </div>
      ) : (
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
                handleEditOpen={handleEditOpen}
                handleDeleteOpen={handleDeleteOpen}
              />
            ))}
          </tbody>
        </table>
      )}
      {isDetailModalOpen && (
        <VehicleDetails
          vehicle={selectedVehicle}
          handleClose={handleClose}
          isOpen={isDetailModalOpen}
        />
      )}
      {isEditModalOpen && (
        <EditVehicle
          vehicle={selectedVehicle}
          handleClose={handleEditClose}
          isOpen={isEditModalOpen}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteVehicle
          vehicle={selectedVehicle}
          handleClose={handleDeleteClose}
          isOpen={isDeleteModalOpen}
          handleDeleteVehicle={handleDeleteVehicle}
        />
      )}
    </div>
  );
};

export default VehicleTable;
