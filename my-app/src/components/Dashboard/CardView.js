import { Card } from "@material-ui/core";
import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function CardView({ title, number, percentage, number2, path }) {
  const goTo = () => {
    console.log("go to");
  };
  return (
    <Card elevation={6} className="px-6 py-5 h-full ">
      <div className="text-left">
        <div className="flex flex-row justify-between">
          <h5>{title}</h5>
          <button onClick={goTo()}>
            <BsFillInfoCircleFill className="hover:scale-110 text-gray-700"></BsFillInfoCircleFill>
          </button>
        </div>

        <h2 className="font-bold font-mono text-3xl">{number}</h2>
        <div className="flex justify-end mb-1">
          <span className="text-sm font-medium ">{percentage}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-[#00cc7a] h-2.5 rounded-full"
            style={{ width: percentage }}
          ></div>
        </div>
        <div>
          Weekly average <span> {number2}</span>
        </div>
      </div>
    </Card>
  );
}