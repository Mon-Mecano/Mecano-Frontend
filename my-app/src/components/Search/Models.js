import React from "react";
import Navbar from "../Navbar/Navbar";
import cars from "../../assets/data/cars.json";
import { Navigate, useParams, Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function Models() {
  const params = useParams();
  const make= params.make;
  const year= params.year;
  const [model, setModel] = React.useState("");

  function handleChange(e) {
    setModel(e.target.value);
  }


  return (
    <>
      <Navbar />
      <div>
        <div className="w-screen h-screen bg-gray-100 flex justify-center">
          <div className="lg:w-1/2 md:w-3/4 sm:w-full">
            <h1 className="font-mono font-bold text-3xl text-justify my-6">
            <Link to=".." relative="path">
                  <button className="bg-white rounded-3xl p-2 mr-2 shadow-lg">
                    <MdOutlineKeyboardBackspace />
                  </button>
                </Link>
              Choisi ton vehicule
            </h1>
            <div className="flex flex-col items-center w-full h-[80%] bg-white rounded-2xl border-solid border-gray-100 shadow-lg">
              <input
                list="vehicules"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-4 my-6 placeholder:text-lg placeholder:font-mono"
                placeholder="Entrez votre vehicule model"
                required onChange={handleChange} value={model}
              ></input>
              <datalist id="vehicules">
                {Object.entries(cars[year][make]).map((model) => {
                  return <option value={model[1]} />;
                })}
              </datalist>
            </div>
            {model!==''?<Navigate to={`${model}/login`} />:null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Models;