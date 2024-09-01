import { Api } from "../api/Api";

const ApiClient = () => {
  const apiClient = new Api();
  apiClient.baseUrl = import.meta.env.VITE_BASE_API_URL;

  return apiClient;
};

export default ApiClient;
