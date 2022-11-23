/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts

// reactstrap components
import {
  Button,
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
  Card,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "../variables/charts.js";
import { Bar, Line } from "react-chartjs-2";
import { useEffect } from "react";
import SimpleCard from "../cards/SimpleCard.jsx";
import CardView from "./CardView.js";
import Navbar from "../Navbar/Navbar.js";

function Dashboard(props) {
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

  return (
    <>
      <Navbar />
      <div className="h-screen bg-gray-100 ">
        <div className="mx-20 mb-20 pt-20">
          <div className="felx flex-row">
            <div className="w-full">
              <SimpleCard className="overflow-hidden p-10 bg-[#27293d]">
                <CardHeader>
                  <div className="flex flex-row justify-between">
                    <div className="text-left mb-5">
                      <h5>Total Shipments</h5>
                      <h2 className="font-bold font-mono text-3xl">
                        Performance
                      </h2>
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
              </SimpleCard>
            </div>
          </div>
        </div>
        <div className="px-6 py-5  grid grid-flow-col rounded-md space-x-2 shadow-sm text-center">
          <CardView
            title="Sales"
            number="$2,500"
            percentage="45%"
            number2="$3,500"
          ></CardView>
          <CardView
            title="Sales"
            number="$2,500"
            percentage="45%"
            number2="$3,500"
          ></CardView>
          <CardView
            title="Sales"
            number="$2,500"
            percentage="45%"
            number2="$3,500"
          ></CardView>
          <CardView
            title="Sales"
            number="$2,500"
            percentage="45%"
            number2="$3,500"
          ></CardView>
          <CardView
            title="Sales"
            number="$2,500"
            percentage="45%"
            number2="$3,500"
          ></CardView>
          <CardView
            title="Sales"
            number="$2,500"
            percentage="45%"
            number2="$3,500"
          ></CardView>
        </div>
        {/* <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-center">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-center">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-center">$56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td className="text-center">$38,735</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-center">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-center">$78,615</td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <td className="text-center">$98,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col> */}
      </div>
    </>
  );
}

export default Dashboard;
