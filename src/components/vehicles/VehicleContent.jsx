import React, { useContext, useState } from "react";
import AddVehicleButton from "./AddVehicleButton";
import VehicleTable from "./VehicleTable";
import AddVehicle from "./AddVehicle";
import { AppContext } from "../../context/AppContext";
const VehiclesContent = () => {
  const { vehicles } = useContext(AppContext);
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
