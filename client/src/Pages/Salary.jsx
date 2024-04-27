import {
  Alert,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Checkbox,
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
  Progress,
  Radio,
  Select,
  Textarea,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  HiBars3,
  HiEllipsisVertical,
  HiEye,
  HiEyeSlash,
  HiPencil,
  HiPlus,
  HiTrash,
  HiXMark,
} from "react-icons/hi2";
import Layout from "../Layout/Layout";
import { SalaryTable } from "../lib/DataSample";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MdError } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";

export default function Salary() {
  const profilePictureRef = useRef(null);
  const [alert, setAlert] = useState({ open: false, type: "", message: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [addEmployee, setAddEmployee] = useState(false);
  const [editEmployee, setEditEmployee] = useState(false);
  const [deleteEmployee, setDeleteEmployee] = useState(false);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [data, setData] = useState(null);
  const [field, setField] = useState({});
  const [fieldEdit, setFieldEdit] = useState({});
  const [chose, setChose] = useState(false);

  const submitEditEmployee = async () => {};

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:5000/employee/salary")
        .then((res) => {
          setData(res.data.data.map((d) => ({ ...d, checked: false })));
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    };

    getData();
  }, [status]);

  const checkedData = (id) => {
    setData(
      data.map((d) => {
        return d._id === id ? { ...d, checked: !d.checked } : { ...d };
      })
    );
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
          <h1 className="text-slate-800 font-bold">Salary</h1>
          <Breadcrumbs>
            <Link to="/">Dashboard</Link>
            <Link to="/employee/salary">Salary</Link>
          </Breadcrumbs>
        </div>
        <div className="w-full rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white overflow-hidden p-5 space-y-3">
          <div className="flex justify-between items-center">
            {chose ? (
              <div className="flex gap-4">
                <Button
                  color="red"
                  variant="gradient"
                  onClick={() => setDeleteEmployee(!deleteEmployee)}
                >
                  Delete
                </Button>
                <Button
                  color="blue"
                  variant="gradient"
                  onClick={() => {
                    setChose(!chose);
                    setData(
                      data.map((d) => {
                        return { ...d, checked: false };
                      })
                    );
                  }}
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <Tooltip content="Add Employee">
                <IconButton
                  variant="gradient"
                  color="blue"
                  onClick={() => setAddEmployee(!addEmployee)}
                  className="rounded-full active:scale-90"
                >
                  <HiPlus className="w-6 h-6" strokeWidth={1} />
                </IconButton>
              </Tooltip>
            )}
            <div className=""></div>
            <ButtonGroup color="blue">
              <IconButton
                className="active:scale-95"
                onClick={() => {
                  setChose(!chose);
                  setData(
                    data.map((d) => {
                      return { ...d, checked: false };
                    })
                  );
                }}
                disabled={!data || (data && data.length == 0)}
              >
                <HiTrash className="w-5 h-5" />
              </IconButton>
              <IconButton className="active:scale-95">
                <HiBars3 className="w-6 h-6" strokeWidth={1} />
              </IconButton>
            </ButtonGroup>
          </div>
          <div className="rounded-lg overflow-x-auto ring-2 ring-slate-200 scrollbar-custom">
            <table className="w-full">
              <thead className="bg-slate-900 text-slate-200">
                <tr>
                  {chose && (
                    <th className="p-2.5 font-medium whitespace-nowrap">
                      <Checkbox
                        color="blue"
                        onChange={() =>
                          setData(
                            data.map((d) => {
                              return { ...d, checked: !d.checked };
                            })
                          )
                        }
                      />
                    </th>
                  )}
                  {SalaryTable.table.heading.map((d, i) => (
                    <th key={i} className="p-2.5 font-medium whitespace-nowrap">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {!loading ? (
                  data && data.length != 0 ? (
                    data.map((d, i) => (
                      <tr key={i} className="even:bg-slate-200 text-sm">
                        {chose ? (
                          <td className="text-center whitespace-nowrap p-2">
                            <Checkbox
                              color="blue"
                              onChange={() => checkedData(d._id)}
                              checked={d.checked}
                            />
                          </td>
                        ) : (
                          <td className="text-center whitespace-nowrap p-2">
                            {i + 1}
                          </td>
                        )}
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
                              <IconButton
                                color="blue"
                                variant="gradient"
                                className="rounded-full active:scale-90"
                              >
                                <HiEllipsisVertical
                                  className="w-6 h-6"
                                  strokeWidth={1}
                                />
                              </IconButton>
                            </MenuHandler>
                            <MenuList className="border border-slate-300">
                              <MenuItem className="flex items-center gap-2 text-blue-500">
                                <HiEye className="w-4 h-4" />
                                Detail
                              </MenuItem>
                              <MenuItem
                                className="flex items-center gap-2 text-green-500"
                                onClick={() => changeEditEmployee(d._id)}
                              >
                                <HiPencil className="w-4 h-4" />
                                Edit
                              </MenuItem>
                              <MenuItem
                                className="flex items-center gap-2 text-red-500"
                                onClick={() => submitDeleteEmployee(d.id)}
                              >
                                <HiTrash className="w-4 h-4" />
                                Delete
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        className="text-center whitespace-nowrap p-3"
                        colSpan={9}
                      >
                        Data Kosong
                      </td>
                    </tr>
                  )
                ) : (
                  <Progress color="blue" />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
      {/* <Dialog
        open={deleteEmployee}
        handler={setDeleteEmployee}
        className="bg-slate-200"
      >
        <DialogBody className="py-5">
          <Typography variant="h5" color="black">
            Apakah yakin anda ingin menghapus{" "}
            {data?.filter((item) => item.checked == true).length} data karyawan
            ini?
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-4">
          <Button
            color="green"
            onClick={() => setDeleteEmployee(!deleteEmployee)}
          >
            Tidak
          </Button>
          <Button color="red" onClick={submitDeleteEmployee}>
            Ya
          </Button>
        </DialogFooter>
      </Dialog> */}
      <Dialog open={editEmployee} className="bg-slate-200">
        <DialogHeader className="flex justify-between">
          <Typography variant="h4">Edit Salary Form</Typography>
          <IconButton variant="text" onClick={() => setEditEmployee(false)}>
            <HiXMark className="w-7 h-7" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="py-3" divider>
          <form onSubmit={submitEditEmployee}>
            <div className="w-full space-y-4 max-h-[27rem] overflow-auto scrollbar-custom pr-3 py-4 rounded-lg">
              <Input
                label="Name"
                color="blue"
                value={fieldEdit.name}
                onChange={(e) =>
                  setFieldEdit({
                    ...fieldEdit,
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
                value={fieldEdit.email}
                onChange={(e) =>
                  setFieldEdit({
                    ...fieldEdit,
                    email: e.target.value,
                  })
                }
                autoFocus
                required
              />
              <Input
                label="Telephone Number"
                color="blue"
                value={fieldEdit.telephone_number}
                onChange={(e) =>
                  setFieldEdit({
                    ...fieldEdit,
                    telephone_number: e.target.value,
                  })
                }
                autoFocus
                required
              />
              <Input
                label="Job"
                color="blue"
                value={fieldEdit.job}
                onChange={(e) =>
                  setFieldEdit({
                    ...fieldEdit,
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
                      setFieldEdit({
                        ...fieldEdit,
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
                      setFieldEdit({
                        ...fieldEdit,
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
                value={fieldEdit.place_of_birth}
                onChange={(e) =>
                  setFieldEdit({
                    ...fieldEdit,
                    place_of_birth: e.target.value,
                  })
                }
                required
              />
              <Input
                type="date"
                label="Date of birth"
                color="blue"
                value={fieldEdit.date_of_birth}
                onChange={(e) =>
                  setFieldEdit({
                    ...fieldEdit,
                    date_of_birth: e.target.value,
                  })
                }
                required
              />
              <Textarea
                color="blue"
                resize={false}
                label="Address"
                value={fieldEdit.address}
                onChange={(e) =>
                  setFieldEdit({
                    ...fieldEdit,
                    address: e.target.value,
                  })
                }
              />
              <Input
                label="Religion"
                color="blue"
                value={fieldEdit.religion}
                onChange={(e) =>
                  setFieldEdit({
                    ...fieldEdit,
                    religion: e.target.value,
                  })
                }
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              color="green"
              fullWidth
              className="mt-2"
            >
              Update
            </Button>
          </form>
        </DialogBody>
        <DialogFooter className="p-2"></DialogFooter>
      </Dialog>
    </>
  );
}
