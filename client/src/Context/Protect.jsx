import { useEffect, createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Loading from "../Components/Loading";

export const ProtectContext = createContext(null);

export const ProtectProvider = ({ children }) => {
  const [check, setCheck] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { token } = Cookies.get();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
    const checkAuth = async () => {
      await axios
        .get("http://localhost:5000/check-auth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data.data);
          setCheck(true);
        })
        .catch((err) => {
          navigate("/signin");
        });
    };

    checkAuth();
  }, []);

  return (
    <ProtectContext.Provider value={user}>
      {check ? children : <Loading />}
    </ProtectContext.Provider>
  );
};
