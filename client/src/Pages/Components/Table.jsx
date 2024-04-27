import {
  Breadcrumbs,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";
import { DataSample } from "../../lib/DataSample";
import { HiBars3, HiEye, HiPencil, HiTrash } from "react-icons/hi2";

export default function Table() {
  return (
    <>
      <Layout className="px-5 py-3 space-y-5">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-slate-800 font-semibold">Table</h1>
          <Breadcrumbs>
            <Link to="/">Dashboard</Link>
            <Link to="/components/table">Table</Link>
          </Breadcrumbs>
        </div>
        <div className="w-full rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white overflow-hidden p-5">
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
    </>
  );
}
