import axios from "axios";
import axiosClient from "./axiosClient";
import { getTokenFromLocalStorage } from "./common";
import { API_ROUTES } from "./constants";

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

export async function getDrivers() {
  const response = await axios.get(API_ROUTES.DRIVERS, {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
  return response.data;
}

export async function getDriver(id) {
  const response = await axios.get(`${API_ROUTES.DRIVERS}/${id}`, {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
  return response.data.driver;
}

export async function renewDriversLicense(id, renewData) {
  const response = await axiosClient.post(
    `/api/renew-license/${id}`,
    renewData
  );
  return response.data;
}

export async function activateDriver(id) {
  const response = await axiosClient.post(`/api/activate-driver/${id}`);
  return response.data;
}
