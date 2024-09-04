import Cookies from "js-cookie";
import { Api } from "../api/Api";

export const createApiClient = () => {
  let apiClient;
  const token = Cookies.get("jwt");
  if (token) {
    apiClient = new Api();
    apiClient.setSecurityData({ token });
  }
  if (apiClient) {
    apiClient.baseUrl = import.meta.env.VITE_BASE_API_URL;
  }

  return apiClient;
};
