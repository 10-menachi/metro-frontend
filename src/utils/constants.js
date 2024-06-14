const API_URL = "http://localhost:8000";
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/register`,
  SIGN_IN: `${API_URL}/api/login`,
  GET_USER: `${API_URL}/api/user`,
  CUSTOMERS: `${API_URL}/api/customers`,
  TRIPS: `${API_URL}/api/trips`,
  ROUTES: `${API_URL}/api/routes`,
  VEHICLES: `${API_URL}/api/vehicles`,
  ORGANISATIONS: `${API_URL}/api/organisation`,
  DRIVERS: `${API_URL}/api/drivers`,
  ADD_TRIP: `${API_URL}/api/trip`,
};

export const APP_ROUTES = {
  SIGN_UP: "/register",
  SIGN_IN: "/login",
  LANDING_PAGE: "/",
  DASHBOARD: "/dashboard",
  FORGOT_PASSWORD: "/forgot-password",
  NOT_FOUND: "*",
  PROFILE: "/profile",
  EMPLOYEES: "/dashboard/employees",
  DRIVERS: "/dashboard/drivers",
  VEHICLES: "/dashboard/vehicles",
  SCHEDULED_TRIPS: "/dashboard/scheduled-trips",
  COMPLETED_TRIPS: "/dashboard/completed-trips",
};
