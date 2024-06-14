import React, { useState, useEffect } from "react";
import AddOrganisationButton from "./AddOrganisationButton";
import AddOrganisation from "./AddOrganisation";
import OrganisationTable from "./OrganisationTable";
import { getOrganisations } from "../../utils/common";

const OrganisationContent = () => {
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
      <AddOrganisationButton handleOpen={handleOpen} />
      <AddOrganisation
        isOpen={isOpen}
        handleClose={handleClose}
        organisations={organisations}
      />
      <div className="mt-4">
        <OrganisationTable organisations={organisations} />
      </div>
    </div>
  );
};

export default OrganisationContent;
