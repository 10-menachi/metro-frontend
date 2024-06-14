import React, { useState } from "react";
import AddDriverButton from "./AddDriverButton";
import DriverTable from "./DriverTable";
import AddDriver from "./AddDriver";

const DriverContent = ({ user }) => {
  const { drivers } = user.organisation;
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
