import React, { createContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const showAlert = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  return (
    <AlertContext.Provider value={{ show, showAlert, handleClose }}>
      {children}
    </AlertContext.Provider>
  );
};
