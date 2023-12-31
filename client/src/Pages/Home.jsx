import {
  HiArrowUp,
  HiOutlineCurrencyDollar,
  HiOutlineEye,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi2";
import Layout from "../Layout/Layout";
import { IconButton } from "@material-tailwind/react";
import ChartArea from "../Components/ChartArea";
import ChartBar from "../Components/ChartBar";
import ChartDonut from "../Components/ChartDonut";
import MapOne from "../Components/Map1";
import TableChannel from "../Components/TableChannel";

export default function Home() {
  return (
    <Layout className="space-y-5 p-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="bg-white border border-slate-200 shadow-sm shadow-slate-300 p-5 rounded-md flex flex-col gap-1">
          <IconButton
            color="blue"
            variant="text"
            className="rounded-full bg-slate-200"
          >
            <HiOutlineEye className="w-4 h-4" />
          </IconButton>
          <h1 className="text-2xl text-black font-bold">1500</h1>
          <div className="flex justify-between">
            <h1 className="text-sm text-slate-400">Total Views</h1>
            <h1 className="text-sm text-slate-400 flex items-center gap-1">
              4.5% <HiArrowUp className="w-3 h-3" />
            </h1>
          </div>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm shadow-slate-300 p-5 rounded-md flex flex-col gap-1">
          <IconButton
            color="blue"
            variant="text"
            className="rounded-full bg-slate-200"
          >
            <HiOutlineCurrencyDollar className="w-4 h-4" />
          </IconButton>
          <h1 className="text-2xl text-black font-bold">$57.3K</h1>
          <div className="flex justify-between">
            <h1 className="text-sm text-slate-400">Total Profit</h1>
            <h1 className="text-sm text-slate-400 flex items-center gap-1">
              4.5% <HiArrowUp className="w-3 h-3" />
            </h1>
          </div>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm shadow-slate-300 p-5 rounded-md flex flex-col gap-1">
          <IconButton
            color="blue"
            variant="text"
            className="rounded-full bg-slate-200"
          >
            <HiOutlineShoppingBag className="w-4 h-4" />
          </IconButton>
          <h1 className="text-2xl text-black font-bold">$50K</h1>
          <div className="flex justify-between">
            <h1 className="text-sm text-slate-400">Total Views</h1>
            <h1 className="text-sm text-slate-400 flex items-center gap-1">
              4.5% <HiArrowUp className="w-3 h-3" />
            </h1>
          </div>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm shadow-slate-300 p-5 rounded-md flex flex-col gap-1">
          <IconButton
            color="blue"
            variant="text"
            className="rounded-full bg-slate-200"
          >
            <HiOutlineUser className="w-4 h-4" />
          </IconButton>
          <h1 className="text-2xl text-black font-bold">1200</h1>
          <div className="flex justify-between">
            <h1 className="text-sm text-slate-400">Total User</h1>
            <h1 className="text-sm text-slate-400 flex items-center gap-1">
              4.5% <HiArrowUp className="w-3 h-3" />
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-3 gap-4">
        <ChartArea />
        <ChartBar />
        <ChartDonut />
        <MapOne />
        <TableChannel />
      </div>
      <div className="w-full grid grid-cols-2"></div>
    </Layout>
  );
}
