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
  } catch (error) {
    console.error(error);
  }
}

export async function loginUser(credentials) {
  try {
    const response = await axios.post(API_ROUTES.SIGN_IN, credentials);
    const { access_token, token_type } = response.data;
    storeTokenInLocalStorage(`${token_type} ${access_token}`);
    getAuthenticatedUser();
  } catch (error) {
    console.error("Login failed:", error.response.data);
    throw error.response.data;
  }
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
