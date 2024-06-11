import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { APP_ROUTES } from "./utils/constants";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import Users from "./pages/Users";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path={APP_ROUTES.PROFILE} element={<Profile />} />
      <Route path={APP_ROUTES.SIGN_UP} exact element={<SignUp />} />
      <Route path={APP_ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={APP_ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={APP_ROUTES.NOT_FOUND} element={<NotFound />} />
      <Route path={APP_ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={APP_ROUTES.USERS} element={<Users />} />
    </Routes>
  );
};

export default App;
