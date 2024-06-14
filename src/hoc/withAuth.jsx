import React from "react";
import { useAuth } from "../hooks/useAuth";
import Loading from "../components/Loading";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user, authenticated } = useAuth();

    if (!authenticated) {
      return <Loading />;
    }

    return (
      <WrappedComponent user={user} authenticated={authenticated} {...props} />
    );
  };
};

export default withAuth;
