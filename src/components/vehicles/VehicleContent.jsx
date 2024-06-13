import React, { useState } from "react";
import AddVehicleButton from "./AddVehicleButton";
import VehicleTable from "./VehicleTable";
const VehiclesContent = ({ user }) => {
  const { vehicles } = user.organisation;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="p-4 py-20 sm:ml-64 flex flex-col relative">
      <AddVehicleButton handleOpen={handleOpen} />
      <VehicleTable vehicles={vehicles} />
    </div>
  );
};

export default VehiclesContent;
