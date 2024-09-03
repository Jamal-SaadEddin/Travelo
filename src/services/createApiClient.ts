import { Api } from "../api/Api";

export const createApiClient = () => {
  const apiClient = new Api();
  apiClient.baseUrl = import.meta.env.VITE_BASE_API_URL;

  return apiClient;
};
