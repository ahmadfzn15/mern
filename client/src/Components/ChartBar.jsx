import ReactApexCharts from "react-apexcharts";
import { useState } from "react";
import { Option, Select } from "@material-tailwind/react";

export default function ChartBar() {
  const [state, setState] = useState({
    series: [
      {
        name: "Sales",
        data: [44, 55, 41, 67, 22, 43, 65],
      },
    ],
  });

  const options = {
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "bar",
      height: 335,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: false,
      },
    },

    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "25%",
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: "25%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  };

  return (
    <>
      <div className="bg-white border border-slate-200 shadow-sm shadow-slate-300 p-5 rounded-md flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Profit this week</h1>
          <select className="border-none focus:outline-none cursor-pointer">
            <option>This week</option>
            <option>Last week</option>
          </select>
        </div>
        <ReactApexCharts
          options={options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
    </>
  );
}
