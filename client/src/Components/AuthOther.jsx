import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { HiEnvelope, HiEye, HiEyeSlash, HiUser } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function AuthOther() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 gap-5 py-10">
        <Card>
          <CardHeader
            color="blue"
            className="flex p-5 justify-center text-3xl font-bold"
          >
            <h1>Sign In</h1>
          </CardHeader>
          <CardBody>
            <div className="space-y-4 mt-5 w-full text-slate-500 font-semibold">
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
              <Button color="blue" fullWidth size="lg" variant="gradient">
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
                Don&apos;t have any account?{" "}
                <Link to="/auth" className="hover:underline text-blue-500">
                  Sign Up
                </Link>
              </h1>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            color="blue"
            className="flex p-5 justify-center text-3xl font-bold"
          >
            <h1>Sign Up</h1>
          </CardHeader>
          <CardBody>
            <div className="space-y-4 mt-5 w-full text-slate-500 font-semibold">
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
          </CardBody>
        </Card>
      </div>
    </>
  );
}
