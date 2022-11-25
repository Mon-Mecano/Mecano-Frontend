import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts

// reactstrap components
import {
  ButtonGroup,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "../variables/charts.js";
import { Line, Radar } from "react-chartjs-2";
import { useEffect } from "react";
import CardView from "./CardView.js";
import Navbar from "../Navbar/Navbar.js";
import HalfDoughnut from "./HalfDoughnut.js";
import { Card } from "@material-ui/core";
import Stars from "./Stars.js";

export default function Dashboard() {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const [style1, setStyle1] = React.useState("text-white");
  const [style2, setStyle2] = React.useState("");
  const [style3, setStyle3] = React.useState("");

  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  const visited1 = () => {
    setStyle1("text-white");
    setBgChartData("data1");
    setStyle2("");
    setStyle3("");
  };

  const visited2 = () => {
    setStyle2("text-white");
    setBgChartData("data2");
    setStyle1("");
    setStyle3("");
  };

  const visited3 = () => {
    setStyle3("text-white");
    setBgChartData("data3");
    setStyle1("");
    setStyle2("");
  };

  useEffect(() => {
    console.log("style1", style1);
    console.log("style2", style2);
    console.log("style3", style3);
  }, [bigChartData]);

  const [cards, setCards] = React.useState([
    {
      title: "Total Users",
      number: "2,356",
      percentage: "90.48%",
      number2: "340",
    },
    {
      title: "New Users",
      number: "150",
      percentage: "37.48%",
      number2: "46",
    },
    {
      title: "Active Users",
      number: "150",
      percentage: "73.48%",
      number2: "46",
    },
    {
      title: "Banned Users",
      number: "150",
      percentage: "63.48%",
      number2: "46",
    },
    {
      title: "Sales ",
      number: "$ 2,356",
      percentage: "3.48%",
      number2: "$ 340",
    },
    {
      title: "Banned Users",
      number: "150",
      percentage: "50%",
      number2: "46",
    },
  ]);

  const [halfDoughnuts, setHalfDoughnuts] = React.useState([
    {
      number: "50",
      avg: "50",
      title: "fiability",
    },
    {
      number: "96",
      avg: "45",
      title: "performance",
    },
    {
      number: "88",
      avg: "87",
      title: "satisfaction",
    },
    {
      number: "34",
      avg: "55",
      title: "fiability",
    },
    {
      number: "77",
      avg: "66",
      title: "loyalty",
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="pb-20 bg-gray-100 ">
        <div className="mx-20 mb-20 pt-20">
          <div className="felx flex-row">
            <div className="w-full">
              <Card
                elevation={6}
                className="px-6 py-5 h-full overflow-hidden p-10 bg-[#27293d]"
              >
                <CardHeader>
                  <div className="flex flex-row justify-between">
                    <div className="text-left mb-5">
                      <h5>Total Shipments</h5>
                      <h2 className="font-bold font-mono text-3xl">Sales</h2>
                    </div>
                    <div>
                      <div className="inline-flex rounded-md shadow-sm">
                        <button
                          className={
                            style1 +
                            "py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-blue-700 focus:text-blue-700 dark:bg-green-700 dark:border-[#004d2e] dark:text-white dark:hover:text-white dark:hover:bg-[#00e68a] dark:focus:ring-green-500 dark:focus:text-white "
                          }
                          onClick={() => visited1()}
                        >
                          Day
                        </button>
                        <button
                          className={
                            style2 +
                            "py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-blue-700 focus:text-blue-700 dark:bg-green-700 dark:border-[#004d2e] dark:text-white dark:hover:text-white dark:hover:bg-[#00e68a] dark:focus:ring-green-500 dark:focus:text-white "
                          }
                          onClick={() => visited2()}
                        >
                          Week
                        </button>
                        <button
                          className={
                            style3 +
                            " py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-blue-700 focus:text-blue-700 dark:bg-green-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-[#00e68a]  dark:focus:ring-green-500 dark:focus:text-white"
                          }
                          onClick={() => visited3()}
                        >
                          Mounths
                        </button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <div className="flex flex-col pl-5 pr-5">
                  <div className="chart-area">
                    <Line
                      data={chartExample1[bigChartData]}
                      options={chartExample1.options}
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <h2 className="font-bold font-mono text-3xl px-6">Key indicators</h2>
        <div className="px-6 py-5  grid grid-flow-col space-x-2 text-center ">
          {cards.map((card) => (
            <CardView
              title={card.title}
              number={card.number}
              percentage={card.percentage}
              number2={card.number2}
            />
          ))}
        </div>
        <div className="px-6 grid-flow-col space-x-2 grid mt-20">
          <div>
            <h2 className="font-bold font-mono text-3xl mb-6">
              Profitabilitiy and efficiency
            </h2>
            <Card
              elevation={6}
              className="px-6 grid grid-flow-col h-[15rem] w-[46rem] "
            >
              {halfDoughnuts.map((halfDoughnut) => (
                <div className=" w-[8rem] my-auto">
                  <HalfDoughnut
                    number={halfDoughnut.number}
                    avg={halfDoughnut.avg}
                    title={halfDoughnut.title}
                  ></HalfDoughnut>
                </div>
              ))}
            </Card>
          </div>

          <div>
            <h2 className="font-bold font-mono text-3xl mb-6">
              Reviews & Surveys
            </h2>
            <Card elevation={6} className="px-6 py-5  w-[42rem]">
              <div className="grid grid-flow-col">
                <div className=" w-[10rem] -mr-[4rem] my-auto">
                  <HalfDoughnut
                    number={66}
                    avg={65}
                    title="Satisfied customers"
                  ></HalfDoughnut>
                </div>
                <div className="flex flex-col  col-span-2">
                  <Stars
                    number={4.5}
                    totalReviews={26}
                    title={"Reviews on Google"}
                  ></Stars>

                  <Stars
                    number={3}
                    totalReviews={15}
                    title={"Internal survey"}
                  ></Stars>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
