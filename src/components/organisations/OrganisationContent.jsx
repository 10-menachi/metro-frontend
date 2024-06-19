import React, { useState, useContext } from "react";
import AddOrganisationButton from "./AddOrganisationButton";
import AddOrganisation from "./AddOrganisation";
import OrganisationTable from "./OrganisationTable";
import { AppContext } from "../../context/AppContext";

const OrganisationContent = () => {
  const { organisations } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="p-4 py-20 sm:ml-64 flex flex-col relative">
      <AddOrganisationButton handleOpen={handleOpen} />
      <AddOrganisation isOpen={isOpen} handleClose={handleClose} />
      <div className="mt-4">
        <OrganisationTable organisations={organisations} />
      </div>
    </div>
  );
};

export default OrganisationContent;
