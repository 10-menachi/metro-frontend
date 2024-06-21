import axios from "axios";
import axiosClient from "./axiosClient";
import { API_ROUTES } from "./constants";
import { getTokenFromLocalStorage } from "./common";

export async function addVehicle(vehicleData) {
  return axiosClient
    .post("/api/vehicles", vehicleData)
    .then((response) => {
      const { vehicle } = response.data;
      return vehicle;
    })
    .catch((error) => {
      const { data } = error.response;
      throw new Error(data.message);
    });
}

export async function getVehicles() {
  const response = await axios.get(API_ROUTES.VEHICLES, {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
  console.log(response);
  return response.data;
}

export async function getVehicle(id) {
  const response = await axiosClient.get(`/api/vehicles/${id}`);
  return response.data;
}

export const activateVehicle = async (vehicle) => {
  if (!vehicle) return;
  const response = await axiosClient.post(`/api/activate-vehicle/${vehicle}`);
  return response.data;
};

export const deactivateVehicle = async (vehicle) => {
  if (!vehicle) return;
  try {
    const response = await axiosClient.post(
      `/api/deactivate-vehicle/${vehicle}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const assignDriverToVehicle = async (vehicleId, driver_id) => {
  try {
    const response = await axiosClient.post(`/api/assign-driver/${vehicleId}`, {
      driver_id,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const editVehicle = async (id, vehicleData) => {
  try {
    const response = await axiosClient.put(`/api/vehicles/${id}`, vehicleData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteVehicleFromApi = async (id) => {
  try {
    const response = await axiosClient.delete(`/api/vehicles/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
