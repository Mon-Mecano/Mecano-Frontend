import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

import React from "react";

function HalfDoughnut({ number, avg, title }) {
  Chart.register(ArcElement);
  console.log("number", number);

  const data = {
    datasets: [
      //   {
      //     data: [number, 100-number],
      //     backgroundColor: [
      //       "#00cc7a",
      //       "#FFFFFF",
      //     ],
      //     display: true,
      //     borderColor: "#374151",
      //   },
      {
        data: [1],
        borderWidth: 0,
        backgroundColor: "#374151",
        weight: 0.05,
      },
      {
        label: "# of Votes",
        data: [number, 100 - number],
        backgroundColor: ["#00cc7a", "#FFFFFF"],
        borderWidth: 0,
      },
      {
        data: [1],
        borderWidth: 0,
        backgroundColor: "#374151",
        weight: 0.05,
      },
    ],
  };
  return (
    <div className=" text-center ">
        <h2 className="font-bold font-mono text-xl -mb-5">{title}</h2>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          rotation: -90,
          circumference: 180,
          cutout: "60%",
          maintainAspectRatio: true,
          responsive: true,
          hover: false,
        }}
      />
      <h2 className="-mt-[3rem] font-bold font-mono text-xl">{number} %</h2>
      <h5>Avg {avg} %</h5>
      
    </div>
  );
}

export default HalfDoughnut;
