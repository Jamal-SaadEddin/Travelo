import { AuthRequest, AuthResponse } from "@src/entities/Auth";
import { createApiClient } from "@src/services/createApiClient";
import useAuthStore from "@src/store/auth.store";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const apiClient = createApiClient();
  const { signin, signout } = useAuthStore();
  const navigate = useNavigate();

  return useMutation<AuthResponse, Error, AuthRequest>({
    mutationFn: (data: AuthRequest) =>
      apiClient.api
        .authAuthenticateCreate(data)
        .then((response) => response.data as unknown as AuthResponse),
    onSuccess: (data: AuthResponse) => {
      signin(data.authentication);
      navigate("/");
    },
    onError: () => {
      signout();
      setTimeout(() => {
        navigate("/login");
      });
    },
  });
};

export default useAuth;
