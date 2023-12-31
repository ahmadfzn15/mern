import {
  Alert,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Option,
  Radio,
  Select,
  Textarea,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  HiBars3,
  HiEye,
  HiEyeSlash,
  HiPencil,
  HiPlus,
  HiTrash,
  HiXMark,
} from "react-icons/hi2";
import Layout from "../Layout/Layout";
import { DataSample } from "../lib/DataSample";
import { useRef, useState } from "react";
import axios from "axios";
import { MdError } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";

export default function Employee() {
  const profilePictureRef = useRef(null);
  const [alert, setAlert] = useState({ open: false, type: "", message: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [addEmployee, setAddEmployee] = useState(false);
  const [field, setField] = useState({});

  const changeProfilePicture = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setField({
      ...field,
      profilePicture: e.target.files[0],
    });
    setProfilePicture(file);
  };

  const submitAddEmployee = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/employee", field)
      .then((res) => {
        setAddEmployee(false);
        setAlert({
          open: true,
          type: "success",
          message: "Data berhasil ditambahkan.",
        });
      })
      .catch((err) => {
        console.log(err);
        setAlert({
          open: true,
          type: "failed",
          message: "Gagal menghapus data!",
        });
      });
  };

  return (
    <>
      {alert.open && (
        <Alert
          color={alert.type == "success" ? "green" : "red"}
          variant="gradient"
          className="fixed top-0 right-0 left-0 py-5"
          animate={{
            mount: { y: 0, opacity: 1 },
            unmount: { y: -30, opacity: 0 },
          }}
          icon={
            alert.type == "success" ? (
              <BsCheck2Circle className="w-6 h-6" />
            ) : (
              <MdError className="w-6 h-6" />
            )
          }
          open={alert.open}
          action={
            <HiXMark
              className="w-6 h-6 absolute right-0 mr-5 cursor-pointer"
              onClick={() => setAlert({ open: false })}
            />
          }
        >
          {alert.message}
        </Alert>
      )}
      <Layout className="px-5 py-3 space-y-5">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-slate-800 font-semibold">Employee</h1>
          <Breadcrumbs>
            <Link to="/">Dashboard</Link>
            <Link to="/employee">Employee</Link>
          </Breadcrumbs>
        </div>
        <div className="w-full rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white overflow-hidden p-5 space-y-3">
          <div className="flex justify-between items-center">
            <Tooltip content="Add Employee">
              <IconButton
                variant="gradient"
                color="blue"
                onClick={() => setAddEmployee(!addEmployee)}
              >
                <HiPlus className="w-6 h-6" strokeWidth={1} />
              </IconButton>
            </Tooltip>
            <ButtonGroup color="blue">
              <IconButton>
                <HiTrash className="w-5 h-5" strokeWidth={1} />
              </IconButton>
              <IconButton>
                <HiBars3 className="w-6 h-6" strokeWidth={1} />
              </IconButton>
            </ButtonGroup>
          </div>
          <div className="rounded-lg overflow-x-auto ring-2 ring-slate-200 scrollbar-custom">
            <table className="w-full">
              <thead className="bg-slate-900 text-slate-200">
                <tr>
                  {DataSample.table.heading.map((d, i) => (
                    <th key={i} className="p-2.5 font-medium whitespace-nowrap">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {DataSample.table.data.map((d, i) => (
                  <tr key={i} className="even:bg-slate-200 text-sm">
                    <td className="text-center whitespace-nowrap p-2">
                      {i + 1}
                    </td>
                    <td className="text-center whitespace-nowrap p-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src={d.image ?? "/img/user.png"}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="text-center whitespace-nowrap p-2">
                      {d.name}
                    </td>
                    <td className="text-center whitespace-nowrap p-2">
                      {d.email}
                    </td>
                    <td className="text-center whitespace-nowrap p-2">
                      {d.telephone_number}
                    </td>
                    <td className="text-center whitespace-nowrap p-2">
                      {d.job}
                    </td>
                    <td className="text-center whitespace-nowrap p-2">
                      {d.gender}
                    </td>
                    <td className="text-center whitespace-nowrap p-2">
                      {d.address}
                    </td>
                    <td className="text-center whitespace-nowrap p-2">
                      <Menu>
                        <MenuHandler>
                          <IconButton color="blue" variant="gradient">
                            <HiBars3 className="w-7 h-7" strokeWidth={1} />
                          </IconButton>
                        </MenuHandler>
                        <MenuList className="border border-slate-300">
                          <MenuItem className="flex items-center gap-2 text-blue-500">
                            <HiEye className="w-4 h-4" />
                            Detail
                          </MenuItem>
                          <MenuItem className="flex items-center gap-2 text-green-500">
                            <HiPencil className="w-4 h-4" />
                            Edit
                          </MenuItem>
                          <MenuItem className="flex items-center gap-2 text-red-500">
                            <HiTrash className="w-4 h-4" />
                            Delete
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
      <Dialog open={addEmployee} className="bg-slate-200">
        <DialogHeader className="flex justify-between">
          <Typography variant="h4">Add Employee Form</Typography>
          <IconButton variant="text" onClick={() => setAddEmployee(false)}>
            <HiXMark className="w-7 h-7" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="py-3" divider>
          <form onSubmit={submitAddEmployee}>
            <div className="w-full space-y-4 max-h-[27rem] overflow-auto scrollbar-custom pr-3 py-4 rounded-lg">
              <div className="relative w-min mx-auto mb-5">
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <img
                    src={profilePicture ?? "/img/user.png"}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-0 right-0">
                  <IconButton
                    className="rounded-full"
                    color="blue"
                    variant="gradient"
                    onClick={() => profilePictureRef.current.click()}
                  >
                    <HiPencil className="w-4 h-4" />
                  </IconButton>
                </div>
              </div>
              <input
                type="file"
                ref={profilePictureRef}
                onChange={changeProfilePicture}
                className="hidden"
              />
              <Input
                label="Name"
                color="blue"
                value={field.name}
                onChange={(e) =>
                  setField({
                    ...field,
                    name: e.target.value,
                  })
                }
                autoFocus
                required
              />
              <Input
                type="email"
                label="Email"
                color="blue"
                value={field.email}
                onChange={(e) =>
                  setField({
                    ...field,
                    email: e.target.value,
                  })
                }
                autoFocus
                required
              />
              <Input
                label="Telephone Number"
                color="blue"
                value={field.telephone_number}
                onChange={(e) =>
                  setField({
                    ...field,
                    telephone_number: e.target.value,
                  })
                }
                autoFocus
                required
              />
              <Input
                label="Job"
                color="blue"
                value={field.job}
                onChange={(e) =>
                  setField({
                    ...field,
                    job: e.target.value,
                  })
                }
                autoFocus
                required
              />
              <div className="flex flex-col">
                <label className="text-slate-600 text-sm">Gender</label>
                <div className="flex gap-1">
                  <Radio
                    label="Men"
                    color="blue"
                    name="gender"
                    value="men"
                    onChange={(e) =>
                      setField({
                        ...field,
                        gender: e.target.value,
                      })
                    }
                    containerProps={{
                      className: "scale-75",
                    }}
                  />
                  <Radio
                    label="Woman"
                    color="blue"
                    name="gender"
                    value="woman"
                    onChange={(e) =>
                      setField({
                        ...field,
                        gender: e.target.value,
                      })
                    }
                    containerProps={{
                      className: "scale-75",
                    }}
                  />
                </div>
              </div>
              <Input
                type="text"
                label="Place of birth"
                color="blue"
                value={field.place_of_birth}
                onChange={(e) =>
                  setField({
                    ...field,
                    place_of_birth: e.target.value,
                  })
                }
                required
              />
              <Input
                type="date"
                label="Date of birth"
                color="blue"
                value={field.date_of_birth}
                onChange={(e) =>
                  setField({
                    ...field,
                    date_of_birth: e.target.value,
                  })
                }
                required
              />
              <Textarea
                color="blue"
                resize={false}
                label="Address"
                value={field.address}
                onChange={(e) =>
                  setField({
                    ...field,
                    address: e.target.value,
                  })
                }
              />
              <Input
                label="Religion"
                color="blue"
                value={field.religion}
                onChange={(e) =>
                  setField({
                    ...field,
                    religion: e.target.value,
                  })
                }
              />
              <Input
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
                color="blue"
                name="password"
                value={field.password}
                onChange={(e) =>
                  setField({
                    ...field,
                    password: e.target.value,
                  })
                }
                required
              />
            </div>
            <Button type="submit" color="green" fullWidth className="mt-2">
              Save
            </Button>
          </form>
        </DialogBody>
        <DialogFooter className="p-2"></DialogFooter>
      </Dialog>
    </>
  );
}
