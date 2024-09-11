import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAutoSignout = (expTime: number, signout: () => void) => {
  const navigate = useNavigate();
  useEffect(() => {
    const currentTime = Date.now() / 1000;
    const remainingTime = expTime - currentTime;

    if (remainingTime > 0) {
      const logoutTimer = setTimeout(() => {
        navigate("/");
        setTimeout(() => {
          signout();
        });
      }, remainingTime * 1000);

      return () => clearTimeout(logoutTimer);
    }
  }, [expTime, navigate, signout]);
};

export default useAutoSignout;
