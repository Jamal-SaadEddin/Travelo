import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AuthRequest, AuthResponse } from "../entities/Auth";
import { createApiClient } from "../services/createApiClient";
import useAuthStore from "../store/auth.store";

const apiClient = createApiClient();
console.log(apiClient);

const useAuth = () => {
  const { signin, signout } = useAuthStore();
  const navigate = useNavigate();

  return useMutation<AuthResponse, Error, AuthRequest>({
    mutationFn: (data: AuthRequest) =>
      apiClient.api
        .authAuthenticateCreate(data)
        .then((response) => response.data as unknown as AuthResponse),
    onSuccess: (data: AuthResponse) => {
      const userType = data.userType.toLowerCase();
      signin(data.authentication);
      userType === "admin"
        ? navigate("/admin/cities", { replace: true })
        : userType === "user" && navigate("/user", { replace: true });
    },
    onError: () => {
      signout();
    },
  });
};

export default useAuth;
