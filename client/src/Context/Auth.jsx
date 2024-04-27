import { useEffect, createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const { token } = Cookies.get();

  useEffect(() => {
    if (!token) {
      setCheck(true);
    }

    const checkAuth = async () => {
      await axios
        .get("http://localhost:5000/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          navigate("/");
          setCheck(true);
        })
        .catch((err) => {});
    };

    checkAuth();
  }, []);

  return <AuthContext.Provider>{check ? children : null}</AuthContext.Provider>;
};
