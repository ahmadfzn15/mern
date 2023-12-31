import { Link, useNavigate } from "react-router-dom";
import LayoutAuth from "../../Layout/LayoutAuth";
import { Button, Input } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { HiEnvelope, HiEye, HiEyeSlash, HiUser } from "react-icons/hi2";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const route = useNavigate();

  const postLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        Cookies.set("token", res.data.token, {
          expires: 7 * 24 * 3600,
          sameSite: "Strict",
        });

        route("/");
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <>
      <LayoutAuth>
        <div className="w-full h-full bg-white grid grid-cols-2 overflow-hidden">
          <div className="w-full h-full">
            <img
              src="/img/img7.jpg"
              className="object-cover w-full h-full"
              alt="Image"
            />
          </div>
          <form onSubmit={postLogin}>
            <div className="w-[85%] p-10 flex flex-col mx-auto items-center gap-5">
              <h1 className="text-4xl py-5 font-bold">Sign In</h1>
              <div className="space-y-5 w-full text-slate-500 font-semibold">
                <Input
                  color="blue"
                  size="lg"
                  label="Username"
                  icon={<HiUser className="w-5 h-5" />}
                  className="text-slate-500 text-lg font-poppins"
                  value={data.username}
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
                <Input
                  color="blue"
                  size="lg"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  icon={
                    showPassword ? (
                      <HiEye
                        className="w-5 h-5 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <HiEyeSlash
                        className="w-5 h-5 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )
                  }
                  className="text-slate-500 text-lg font-poppins"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                <Button
                  type="submit"
                  color="blue"
                  fullWidth
                  size="lg"
                  variant="gradient"
                  disabled={loading}
                >
                  Sign In
                </Button>
                <Button
                  color="blue"
                  fullWidth
                  size="lg"
                  variant="outlined"
                  className="flex gap-2 justify-center items-center"
                >
                  <FcGoogle className="w-6 h-6" /> Continue With Google
                </Button>
                <h1 className="font-normal text-center">
                  Don&apos;t have an account?{" "}
                  <Link to="/signup" className="hover:underline text-blue-500">
                    Sign Up
                  </Link>
                </h1>
              </div>
            </div>
          </form>
        </div>
      </LayoutAuth>
    </>
  );
}
