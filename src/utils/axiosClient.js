import axios from "axios";
import { API_URL } from "./constants";
import { getTokenFromLocalStorage } from "./common";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: getTokenFromLocalStorage(),
  },
});

export default axiosClient;
