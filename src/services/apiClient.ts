import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL as string,
});
axios.defaults.withCredentials = true;

class APIClient<T, U = undefined> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  static setAuthorizationHeader = (token: string) => {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  get = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post<U>(this.endpoint, data).then((res) => res.data);
  };

  put = (data: T) => {
    return axiosInstance.put<U>(this.endpoint, data).then((res) => res.data);
  };

  delete = () => {
    return axiosInstance.delete<U>(this.endpoint).then((res) => res.data);
  };
}

export default APIClient;
