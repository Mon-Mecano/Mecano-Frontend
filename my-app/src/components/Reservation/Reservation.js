import React from "react";
import { useParams } from "react-router-dom";

const Reservation = () => {
  const params = useParams();
  const id = params.id;
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-center mt-4 text-2xl font-mono font-bold">
        Finaliser la reservation
      </h1>
      <div className="my-10">
        <h2 className="text-xl font-mono font-bold">Votre vehicule :</h2>
        <div className="flex justify-between ml-10 mt-2">
          <p className="font-mono text-lg text-gray-400">Honda Civic 2012</p>
          <a href="#" className="font-mono text-sm underline">
            Changer
          </a>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-xl font-mono font-bold">Votre reparation :</h2>
        <div className="flex justify-between ml-10 mt-2">
          <p className="font-mono text-lg text-gray-400">
            Changement d’huile semi-synthetique
          </p>
          <a href="#" className="font-mono text-sm underline">
            Changer
          </a>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-xl font-mono font-bold">Date et duree :</h2>
        <div className="flex justify-between ml-10 mt-2">
          <p className="font-mono text-lg text-gray-400">
            Le 10 Octobre a 17h-17h20<br></br>
            20 min<br></br>
            Le garage ferme a 18h !
          </p>
          <a href="#" className="font-mono text-sm underline">
            Changer
          </a>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-xl font-mono font-bold">Ajouter des services ?</h2>
        <div className="flex justify-between ml-10 mt-2">
          <p className="font-mono text-lg text-gray-400">
            Changement d’huile semi-synthetique
          </p>
          <p className="font-mono text-lg font-extrabold">70$</p>
        </div>
        <div className="ml-10">
          <select
            id="services"
            className="bg-gray-50 text-gray-500 w-80 border shadow-lg p-2.5 mt-3 rounded-lg"
          >
            <option>Lumieres</option>
            <option>Pression pneux</option>
            <option>Alignements pneux</option>
            <option>Idk somthing</option>
          </select>
        </div>
      </div>
      <div className="float-right h-[250px] w-[500px] border rounded-3xl border-black mb-4">
        <div className="flex justify-between w-3/4 mx-auto mt-10 font-mono font-bold text-xl">
          <h1 className="">Grand Total:</h1>
          <h1>70$</h1>
        </div>
        <div className="w-3/4 mx-auto mt-20">
        <button className="float-right bg-green-700 text-white font-mono font-bold text-lg hover:bg-green-600 transition-all ease-linear py-5 px-10 rounded-xl">
            Payer
        </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
