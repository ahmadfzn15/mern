import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function TableChannel() {
  return (
    <div className="bg-white border border-slate-200 shadow-sm shadow-slate-300 p-5 rounded-md flex flex-col col-span-2 gap-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Top Channels</h1>
      </div>
      <table className="w-full">
        <thead>
          <tr className="rounded-lg bg-slate-200 text-slate-500 text-lg">
            <th className="p-3">Source</th>
            <th className="p-3">Visitors</th>
            <th className="p-3">Revenues</th>
            <th className="p-3">Sales</th>
            <th className="p-3">Conversion</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-slate-100">
            <td className="p-3 flex items-center gap-3">
              <FcGoogle className="w-10 h-10" />
              <h1>Google</h1>
            </td>
            <td className="p-3 text-center">3.5k</td>
            <td className="p-3 text-center text-green-500">$45.54</td>
            <td className="p-3 text-center">320</td>
            <td className="p-3 text-center text-blue-500">4.8%</td>
          </tr>
          <tr className="even:bg-slate-50">
            <td className="p-3 flex items-center gap-3">
              <FaFacebook className="w-10 h-10 text-blue" />
              <h1>Facebook</h1>
            </td>
            <td className="p-3 text-center">3.5k</td>
            <td className="p-3 text-center text-green-500">$45.54</td>
            <td className="p-3 text-center">320</td>
            <td className="p-3 text-center text-blue-500">4.8%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
