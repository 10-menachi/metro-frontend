import React, { useState, useEffect } from "react";
import EmployeeTable from "./EmployeeTable";
import EmployeeModal from "./EmployeeModal";
import AddEmployeeButton from "./AddEmployeeButton";
import { getOrganisations } from "../../utils/common";

const EmployeeContent = ({ user }) => {
  const { customers } = user.organisation;
  const [organisations, setOrganisations] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const fetchOrganisations = async () => {
      const response = await getOrganisations();
      setOrganisations(response.organisations);
    };
    fetchOrganisations();
  });

  return (
    <div className="p-4 py-20 sm:ml-64 flex flex-col relative">
      <AddEmployeeButton handleOpen={handleOpen} />
      <EmployeeModal
        isOpen={isOpen}
        handleClose={handleClose}
        organisations={organisations}
      />
      <div className="mt-4">
        <EmployeeTable customers={customers} />
      </div>
    </div>
  );
};

export default EmployeeContent;
