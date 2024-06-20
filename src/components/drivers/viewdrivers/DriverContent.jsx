import React, { useContext, useState } from "react";
import DriverTable from "../viewdrivers/DriverTable";
import AddDriver from "../adddriver/AddDriver";
import AddDriverButton from "../adddriver/AddDriverButton";
import { AppContext } from "../../../context/AppContext";

const DriverContent = () => {
  const { drivers } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="p-4 py-20 sm:ml-64 flex flex-col relative">
      <AddDriverButton handleOpen={handleOpen} />
      <DriverTable drivers={drivers} />
      <AddDriver isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

export default DriverContent;
