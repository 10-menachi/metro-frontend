import axios from "axios";
import { API_ROUTES } from "../utils/constants";

export function storeTokenInLocalStorage(token) {
  localStorage.setItem("token", token);
}

export function getTokenFromLocalStorage() {
  return localStorage.getItem("token");
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
  return axios
    .post(API_ROUTES.SIGN_IN, credentials)
    .then((response) => {
      const { access_token, token_type } = response.data;
      storeTokenInLocalStorage(`${token_type} ${access_token}`);
      getAuthenticatedUser();
      return true;
    })
    .catch((error) => {
      const { data } = error.response;
      throw new Error(data.message);
    });
}

export async function registerEmployee(employeeData) {
  return axios
    .post(API_ROUTES.ADD_EMPLOYEE, {
      headers: {
        Authorization: getTokenFromLocalStorage(),
      },
      data: employeeData,
    })
    .then((response) => {
      console.log(response);
      const { user } = response.data;
      console.log("Employee Added Successfully", user);
      return true;
    })
    .catch((error) => {
      console.log(error);
      const { data } = error.response;
      throw new Error(data.message);
    });
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getTokenFromLocalStorage();
    if (!token) {
      return defaultReturnObject;
    }
    const response = await axios({
      method: "GET",
      url: API_ROUTES.GET_USER,
      headers: {
        Authorization: token,
      },
    });
    const user = response.data;
    const authenticated = user ? true : false;
    return { authenticated, user };
  } catch (err) {
    console.log("getAuthenticatedUser, Something Went Wrong", err);
    return defaultReturnObject;
  }
}
