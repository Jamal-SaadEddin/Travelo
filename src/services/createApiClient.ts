import { Api } from "@src/api/Api";
import Cookies from "js-cookie";

export const createApiClient = () => {
  const apiClient = new Api();
  apiClient.baseUrl = import.meta.env.VITE_BASE_API_URL;

  const token = Cookies.get("jwt");
  if (token) {
    apiClient.setSecurityData({ token });
  }

  return apiClient;
};
