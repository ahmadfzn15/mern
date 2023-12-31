import { useEffect, createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Loading from "../Components/Loading";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const { token } = Cookies.get();

  useEffect(() => {
    const checkAuth = async () => {
      await axios
        .get("http://localhost:5000/check-auth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          setCheck(true);
        });
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider>
      {check ? children : <Loading />}
    </AuthContext.Provider>
  );
};
