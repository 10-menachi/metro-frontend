import React, { useContext, useState } from "react";
import AddVehicleButton from "../addvehicle/AddVehicleButton";
import VehicleTable from "./VehicleTable";
import AddVehicle from "../addvehicle/AddVehicle";
import { VehicleContext } from "../../../context/VehicleContext";
const VehiclesContent = () => {
  const { vehicles } = useContext(VehicleContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="p-4 py-20 sm:ml-64 flex flex-col relative">
      <AddVehicleButton handleOpen={handleOpen} />
      <VehicleTable vehicles={vehicles} />
      <AddVehicle isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

export default VehiclesContent;
