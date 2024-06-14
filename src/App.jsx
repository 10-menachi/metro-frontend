import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { APP_ROUTES } from "./utils/constants";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Employees from "./pages/Employees";
import Drivers from "./pages/Drivers";
import Vehicles from "./pages/Vehicles";
import ScheduledTrips from "./pages/trips/ScheduledTrips";
import CompletedTrips from "./pages/trips/CompletedTrips";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import { AuthContext, AuthProvider } from "./context/AuthContext";

const App = () => {
  const { user, authenticated } = useContext(AuthContext);
  console.log(user, authenticated);
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route
          path={APP_ROUTES.PROFILE}
          element={<Profile user={user} authenticated={authenticated} />}
        />
        <Route path={APP_ROUTES.SIGN_UP} exact element={<SignUp />} />
        <Route path={APP_ROUTES.SIGN_IN} element={<SignIn />} />
        <Route
          path={APP_ROUTES.DASHBOARD}
          element={<Dashboard user={user} authenticated={authenticated} />}
        />
        <Route path={APP_ROUTES.NOT_FOUND} element={<NotFound />} />
        <Route path={APP_ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={APP_ROUTES.USERS} element={<Users />} />
        <Route
          path={APP_ROUTES.EMPLOYEES}
          element={<Employees user={user} authenticated={authenticated} />}
        />
        <Route
          path={APP_ROUTES.DRIVERS}
          element={<Drivers user={user} authenticated={authenticated} />}
        />
        <Route
          path={APP_ROUTES.VEHICLES}
          element={<Vehicles user={user} authenticated={authenticated} />}
        />
        <Route
          path={APP_ROUTES.SCHEDULED_TRIPS}
          element={<ScheduledTrips user={user} authenticated={authenticated} />}
        />
        <Route
          path={APP_ROUTES.COMPLETED_TRIPS}
          element={<CompletedTrips user={user} authenticated={authenticated} />}
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
