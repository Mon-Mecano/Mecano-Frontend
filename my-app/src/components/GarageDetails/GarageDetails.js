import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "../Axios/Axios";
import SimpleImageSlider from "react-simple-image-slider";

const GarageDetails = () => {
  const params = useParams();
  const id = params.id;
  const [garage, setGarage] = useState({});
  const [photo, setPhoto] = useState([
    {
      url: "",
    },
  ]);
  useEffect(() => {
    getGarage();
  }, []);
  const getGarage = async () => {
    try {
      const response = await axios.get(`/garage/details/${id}/`);
      setGarage(response.data);
      setPhoto([
        {
          url: `https://immense-tor-96559.herokuapp.com${response.data.garage_pictures[0].picture}`,
        },
        {
          url: "",
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="my-4">
          <div>
            <h1 className="font-mono font-bold text-2xl">
              {garage.garage_name}
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-mono font-bold text-xl">4.5</h2>
            </div>
            <div>
              <a href="#">
                <h2 className="font-mono font-medium text-xl underline">
                  Partager
                </h2>
              </a>
            </div>
          </div>
        </div>
        <div className="float-right">
          <SimpleImageSlider
            width={896}
            height={504}
            images={photo}
            showBullets={true}
            showNavs={true}
          />
        </div>
        <div className="font-mono">
          <h1 className="text-xl font-bold mb-2">Informations:</h1>
          <p className="text-lg">{garage.description}</p>
        </div>
        <div></div>
      </div>
      <div className="container mx-auto my-10">
        <a
          href="#"
          className="font-sans text-white text-lg font-bold bg-green-700 hover:bg-green-600 px-10 py-5 mt-8 rounded-xl transition-all ease-linear shadow-lg"
        >
          Reserver
        </a>
      </div>
    </div>
  );
};

export default GarageDetails;
