import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { useUser } from "../hooks/useUser";
import Loading from "../components/Loading";

const Profile = () => {
  const { user, authenticated } = useUser();

  if (!authenticated) {
    return <Loading />;
  }

  const { permitted_to } = user;
  return (
    <>
      <NavBar user={user} />
      <Sidebar permitted_to={permitted_to} />
    </>
  );
};

export default Profile;
