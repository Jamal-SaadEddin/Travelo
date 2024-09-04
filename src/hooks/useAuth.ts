import { useMutation } from "@tanstack/react-query";
import { AuthRequest, AuthResponse } from "../entities/Auth";
import { createApiClient } from "../services/createApiClient";
import useAuthStore from "../store/auth.store";

const apiClient = createApiClient();

const useAuth = () => {
  const { signin, signout } = useAuthStore();

  return useMutation<AuthResponse, Error, AuthRequest>({
    mutationFn: (data: AuthRequest) =>
      apiClient.api
        .authAuthenticateCreate(data)
        .then((response) => response.data as unknown as AuthResponse),
    onSuccess: (data: AuthResponse) => {
      signin(data.authentication);
      window.location.href = "/";
    },
    onError: () => {
      signout();
    },
  });
};

export default useAuth;
