import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import cars from "../../assets/data/cars.json";
import { Link, Navigate } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function Years() {
  const [year, setYear] = React.useState("");
  const [make, setMake] = React.useState("");
  const [model, setModel] = React.useState("");


  return (
    <>
      <Navbar />
      <div>
        <div className="w-screen h-screen bg-gray-100 flex justify-center">
          <div className="lg:w-1/2 md:w-3/4 sm:w-full">
            <div className="flex">
              <h1 className="font-mono font-bold text-3xl text-justify my-6">
                <Link to=".." relative="path">
                  <button className="bg-white rounded-3xl p-2 mr-2 shadow-lg">
                    <MdOutlineKeyboardBackspace />
                  </button>
                </Link>
                Choisi ton vehicule
              </h1>
            </div>
            <div className="flex justify-between flex-col items-center w-full  bg-white rounded-2xl border-solid border-gray-100 shadow-lg">
              <select
                id="year"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-4 my-6 text-lg font-mono"
                required
                onChange={(e) => {console.log(e.target.value);setYear(e.target.value);}}
              >
                <option disabled selected>
                  Entrez l'annee du model du vehicule
                </option>
                {Object.entries(cars).map((year) => {
                  return <option value={year[0]}> {year[0]} </option>;
                })}
              </select>

              <select
                id="make"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-4 my-6 text-lg font-mono"
                required
                onChange={(e) => {console.log(e.target.value);setMake(e.target.value);}}
              >
              <option disabled selected>
                Entrez la marque du vehicule
              </option>
              {year ? Object.entries(cars[year]).map((make) => {
                return <option value={make[0]}> {make[0]}</option>;
              }) : null}
              </select>

              <select
                id="model"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-4 my-6 text-lg font-mono"
                required
                onChange={(e) => {console.log(e.target.value);setModel(e.target.value);}}
              >
              <option disabled selected>
              Entrez votre vehicule model
              </option>
              {make ? Object.entries(cars[year][make]).map((model) => {
                return <option value={model[1]}> {model[1]}</option>;
              }) : null}
              </select>
              {model ? <Navigate to={`${year}/${make}/${model}/login`} />:null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Years;
