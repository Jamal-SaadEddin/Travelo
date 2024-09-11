import Cookies from "js-cookie";
import { Api } from "../api/Api";

export const createApiClient = () => {
  const apiClient = new Api();
  apiClient.baseUrl = import.meta.env.VITE_BASE_API_URL;

  const token = Cookies.get("jwt");
  if (token) {
    apiClient.setSecurityData({ token });
  }

  return apiClient;
};
