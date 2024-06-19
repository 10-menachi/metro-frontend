import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import OrganisationContent from "../components/organisations/OrganisationContent";

const Organisations = ({ user, authenticated }) => {
  if (!authenticated) {
    return <Loading />;
  }

  const { permitted_to } = user;
  return (
    <div>
      <NavBar user={user} />
      <Sidebar permitted_to={permitted_to} />
      <OrganisationContent />
    </div>
  );
};

export default Organisations;
