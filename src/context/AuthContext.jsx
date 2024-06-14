import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthenticatedUser, loginUser, registerUser } from "../utils/common";
import { APP_ROUTES } from "../utils/constants";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const { authenticated, user } = await getAuthenticatedUser();
      setAuthenticated(authenticated);
      setUser(user);
    }
    fetchUser();
  }, []);

  const login = async (credentials) => {
    try {
      const user = await loginUser(credentials);
      setUser(user);
      setAuthenticated(true);
      navigate(APP_ROUTES.DASHBOARD);
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (userData) => {
    try {
      const user = await registerUser(userData);
      setUser(user);
      setAuthenticated(true);
      navigate(APP_ROUTES.DASHBOARD);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setUser(null);
    setAuthenticated(false);
    navigate(APP_ROUTES.LANDING_PAGE);
  };

  return (
    <AuthContext.Provider
      value={{ user, authenticated, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
