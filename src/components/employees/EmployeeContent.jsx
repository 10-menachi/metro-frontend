import React, { useState } from "react";
import EmployeeTable from "./EmployeeTable";
import EmployeeModal from "./EmployeeModal";
import AddEmployeeButton from "./AddEmployeeButton";

const EmployeeContent = ({ user }) => {
  const { customers } = user.organisation;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="p-4 py-20 sm:ml-64 flex flex-col relative">
      {/* Relative positioning for z-index */}
      <AddEmployeeButton handleOpen={handleOpen} />

      <EmployeeModal isOpen={isOpen} handleClose={handleClose} />

      {/* Render EmployeeTable outside the modal */}
      <div className="mt-4">
        <EmployeeTable customers={customers} />
      </div>
    </div>
  );
};

export default EmployeeContent;
