import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "../Axios/Axios";
import SimpleImageSlider from "react-simple-image-slider";

const GarageDetails = () => {
  const params = useParams();
  const id = params.id;
  const [garage, setGarage] = useState({});
  const [photo, setPhoto] = useState([{
    url : ""
  },]);
  useEffect(() => {
    getGarage();
  }, []);
  const getGarage = async () => {
    try {
      const response = await axios.get(`/garage/details/${id}/`);
      setGarage(response.data);
      setPhoto([{
        url: `https://immense-tor-96559.herokuapp.com${response.data.garage_pictures[0].picture}`,
      },{
        url : ""
      }]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="my-4">
          <div>
            <h1 className="font-mono font-bold text-2xl">Garage Name</h1>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-mono font-bold text-2xl">Rating</h2>
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
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default GarageDetails;
