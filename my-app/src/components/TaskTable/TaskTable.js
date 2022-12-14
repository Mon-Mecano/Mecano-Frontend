import { Card } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";

const TaskTable = () => {
  const [orders, setOrders] = React.useState([
    {
      task: "Order 1",
      paid: true,
      done: false,
      technician: "John Doe",
    },
    {
      task: "Order 2",
      paid: false,
      done: true,
      technician: "Mao Nam",
    },
  ]);

  const [technicians, setTechnicians] = React.useState([
    {
      id: 1,
      name: "John Doe",
      rating: 4,
    },
    {
      id: 2,
      name: "Mao Nam",
      rating: 5,
    },
  ]);

  return (
    <>
      <Navbar />
      
      <div className="pb-20 flex justify-center bg-gray-100 h-full w-full">
      <Card
              elevation={6}
              className="p-6 mt-10"
            >
        <table className="table-auto ">
          <thead>
            <tr>
              <th className="px-4 py-2">Task</th>
              <th className="px-4 py-2">Paid</th>
              <th className="px-4 py-2">Done</th>
              <th className="px-4 py-2">Technician</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td className="border px-4 py-2">{order.task}</td>
                <td className="border px-4 py-2">
                  {order.paid ? (
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-green-500 w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-red-500 w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  )}
                </td>
                <td className="border px-4 py-2">
                  {order.done ? (
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-green-500 w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-red-500 w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  )}
                </td>
                <td className="border px-4 py-2 flex flex-row">
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2 my-6 text-sm font-mono"
                    required
                  >
                    <option disabled selected>
                      Choose the technician
                    </option>
                    {technicians.map((technician) => {
                      return (
                        <option value={technician.id}>
                          {" "}
                          {technician.name}{" "}
                        </option>
                      );
                    })}
                  </select>
                  <button
                    type="submit"
                    className="float-right bg-green-700 text-white py-1 px-2 rounded-2xl font-mono text-md ml-3 my-auto hover:bg-green-600  "
                  >Assign</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      </div>
    </>
  );
};
export default TaskTable;
