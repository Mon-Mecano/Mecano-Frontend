import React from "react";
import Navbar from "../Navbar/Navbar";
import cars from "../../assets/data/cars.json";
import { Navigate, useParams, Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function Makes() {
  const params = useParams();
  const year = params.year;
  const [make, setMake] = React.useState("");

  function handleChange(e) {
    setMake(e.target.value);
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
                placeholder="Entrez votre vehicule marque"
                required
                onChange={handleChange}
                value={make}
              ></input>
              <datalist id="vehicules">
                {Object.entries(cars[year]).map((make) => {
                  return <option value={make[0]} />;
                })}
              </datalist>
            </div>
            {make !== "" ? <Navigate to={make} /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Makes;
