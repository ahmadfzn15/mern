import { Button, Input } from "@material-tailwind/react";
import { HiEnvelope, HiEye, HiEyeSlash, HiUser } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  return (
    <>
      <div className="">
        <div className="bg-white border border-slate-200 shadow-sm shadow-slate-300 rounded-md grid grid-cols-2 divide-x-2 divide-slate-200 overflow-hidden">
          <div className="w-full h-full">
            <img
              src="/img/img.jpg"
              className="object-cover w-full h-full"
              alt="Image"
            />
          </div>
          <div className="w-full p-10 flex flex-col items-center gap-5">
            <h1 className="text-4xl py-5 font-bold">Sign Up</h1>
            <div className="space-y-5 w-full text-slate-500 font-semibold">
              <Input
                color="blue"
                size="lg"
                label="Username"
                icon={<HiUser className="w-5 h-5" />}
                className="text-slate-500 text-lg font-poppins"
              />
              <Input
                color="blue"
                size="lg"
                label="Email"
                icon={<HiEnvelope className="w-5 h-5" />}
                className="text-slate-500 text-lg font-poppins"
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
              />
              <Input
                color="blue"
                size="lg"
                type={showPasswordConfirm ? "text" : "password"}
                label="Retype Password"
                icon={
                  showPasswordConfirm ? (
                    <HiEye
                      className="w-5 h-5 cursor-pointer"
                      onClick={() =>
                        setShowPasswordConfirm(!showPasswordConfirm)
                      }
                    />
                  ) : (
                    <HiEyeSlash
                      className="w-5 h-5 cursor-pointer"
                      onClick={() =>
                        setShowPasswordConfirm(!showPasswordConfirm)
                      }
                    />
                  )
                }
                className="text-slate-500 text-lg font-poppins"
              />
              <Button color="blue" fullWidth size="lg" variant="gradient">
                Sign Up
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
                Already account?{" "}
                <Link to="/auth" className="hover:underline text-blue-500">
                  Sign In
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
