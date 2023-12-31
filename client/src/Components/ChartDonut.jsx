import ReactApexCharts from "react-apexcharts";
import { useState } from "react";

export default function ChartDonut() {
  const [state, setState] = useState({
    series: [65, 34, 12, 56],
  });

  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#10B981", "#375E83", "#259AE6", "#FFA70B"],
    labels: ["Remote", "Hybrid", "Onsite", "Leave"],
    legend: {
      show: true,
      position: "bottom",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-white border border-slate-200 shadow-sm shadow-slate-300 p-5 rounded-md flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Visitors Analytics</h1>
        </div>
        <ReactApexCharts options={options} series={state.series} type="donut" />
      </div>
    </>
  );
}
