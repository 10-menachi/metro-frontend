import axios from "axios";
import { API_URL } from "./constants";
import { getTokenFromLocalStorage } from "./common";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage()}`,
  },
});

export default axiosClient;
