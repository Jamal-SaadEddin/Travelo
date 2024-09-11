import Cookies from "js-cookie";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import getDecodedJWT, { DecodedJWTUser } from "../utils/getDecodedJWT";

interface AuthStore {
  user: DecodedJWTUser | null;
  signin: (jwt: string) => void;
  signout: () => void;
}

const useAuthStore = create<AuthStore>()(
  devtools((set) => ({
    user: getDecodedJWT(),
    signin: (jwt) => {
      Cookies.set("jwt", jwt, { secure: true });
      set({ user: getDecodedJWT() });
    },
    signout: () => {
      set({ user: null });
      Cookies.remove("jwt");
    },
  })),
);

export default useAuthStore;
