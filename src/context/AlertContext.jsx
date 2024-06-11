import React, { createContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);

  const handleClose = () => {
    setShow(false);
  };

  const showAlert = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ show, showAlert, handleClose }}>
      {children}
    </AlertContext.Provider>
  );
};
