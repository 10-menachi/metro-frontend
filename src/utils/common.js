import axios from "axios";
import { API_ROUTES } from "../utils/constants";
import axiosClient from "./axiosClient";

export function storeTokenInLocalStorage(token) {
  localStorage.setItem("token", token);
}

export function getTokenFromLocalStorage() {
  const token = localStorage.getItem("token");
  return token;
}

export async function registerUser(userData) {
  try {
    const response = await axios.post(API_ROUTES.SIGN_UP, userData);
    const { access_token, token_type } = await response.data;
    storeTokenInLocalStorage(`${token_type} ${access_token}`);
    getAuthenticatedUser();
    return true;
  } catch (error) {
    const { data } = error.response;
    throw new Error(data.message);
  }
}

export async function loginUser(credentials) {
  try {
    const response = await axios.post(API_ROUTES.SIGN_IN, credentials);
    const { access_token, token_type } = response.data;
    storeTokenInLocalStorage(`${token_type} ${access_token}`);
    await getAuthenticatedUser();
    return true;
  } catch (error) {
    if (error.response) {
      const { data } = error.response;
      throw new Error(data.message);
    } else if (error.request) {
      console.error("No response received: ", error.request);
      throw new Error("No response from the server. Please try again later.");
    } else {
      console.error("Error: ", error.message);
      throw new Error("Network error or server is not responding.");
    }
  }
}

export async function registerEmployee(employeeData) {
  return axiosClient
    .post("/api/customers", employeeData)
    .then((response) => {
      const { employee } = response.data;
      console.log("Employee Added Successfully", employee);
      return true;
    })
    .catch((error) => {
      const { data } = error.response;
      throw new Error(data.message);
    });
}

export async function registerDriver(driverData) {
  return axiosClient
    .post("/api/drivers", driverData)
    .then((response) => {
      const { driver } = response.data;
      console.log("Driver Added Successfully", driver);
      return true;
    })
    .catch((error) => {
      const { data } = error.response;
      throw new Error(data.message);
    });
}

export async function addVehicle(vehicleData) {
  return axiosClient
    .post("/api/vehicles", vehicleData)
    .then((response) => {
      const { vehicle } = response.data;
      console.log("Vehicle Added Successfully", vehicle);
      return true;
    })
    .catch((error) => {
      const { data } = error.response;
      throw new Error(data.message);
    });
}

export async function addOrganisation(organisationData) {
  return axiosClient
    .post("/api/organisation", organisationData)
    .then((response) => {
      console.log(response);
      const { organisation } = response.data;
      console.log("Organisation Added Successfully", organisation);
      return true;
    })
    .catch((error) => {
      const { data } = error.response;
      throw new Error(data.message);
    });
}

export async function getTrips() {
  const trips = await axios.get(API_ROUTES.TRIPS, {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
  return trips.data;
}

export async function getCustomers() {
  const response = await axios.get(API_ROUTES.CUSTOMERS, {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
  return response.data;
}

export async function getOrganisations() {
  const response = await axios.get(API_ROUTES.ORGANISATIONS, {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
  return response.data;
}

export async function getRoutes() {
  const response = await axios.get(API_ROUTES.ROUTES, {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
  return response.data;
}

export async function getVehicles() {
  const response = await axios.get(API_ROUTES.VEHICLES, {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
  return response.data;
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getTokenFromLocalStorage();
    if (!token) {
      return defaultReturnObject;
    }
    const response = await axiosClient.get("/api/user");
    const user = response.data;
    const authenticated = user ? true : false;
    return { authenticated, user };
  } catch (err) {
    console.log("getAuthenticatedUser, Something Went Wrong", err);
    return defaultReturnObject;
  }
}

export async function addTrip(tripData) {
  return axios
    .post(API_ROUTES.ADD_TRIP, tripData, {
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    })
    .then((response) => {
      return true;
    })
    .catch((error) => {
      const { data } = error.response;
      throw new Error(data.message);
    });
}
