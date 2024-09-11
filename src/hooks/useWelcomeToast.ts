import { useEffect } from "react";
import toast from "react-hot-toast";
import useAuthStore from "../store/auth.store";

const useWelcomeToast = () => {
  const { user } = useAuthStore();

  useEffect(() => {
    if (user?.given_name)
      toast.success(`Welcome back ${user?.given_name}`, { icon: "👋" });
  }, [user?.given_name]);
};

export default useWelcomeToast;
