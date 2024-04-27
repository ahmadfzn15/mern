import { useEffect, createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const ProtectContext = createContext({
  user: {},
  token: "",
});

export const ProtectProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const { token } = Cookies.get();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
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
          setUser(res.data.data);
          setCheck(true);
        })
        .catch((err) => {
          // navigate("/signin");
          setCheck(true);
        });
    };

    checkAuth();
  }, []);

  return (
    <ProtectContext.Provider value={{ user, token }}>
      {check ? children : null}
    </ProtectContext.Provider>
  );
};
