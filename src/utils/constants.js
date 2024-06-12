const API_URL = "http://localhost:8000";
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/register`,
  SIGN_IN: `${API_URL}/api/login`,
  GET_USER: `${API_URL}/api/user`,
  ADD_EMPLOYEE: `${API_URL}/api/customers`,
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
  TRIPS: "/dashboard/trips",
};
