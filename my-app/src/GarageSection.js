import { BsFilterRight, BsSortDown } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "./Axios";

const GarageSection = () => {
  const [garage, setgarage] = useState([]);
  useEffect(() => {
    getGarage();
  }, []);
  const getGarage = async () => {
    try {
      const response = await axios.get("/garage/list");
      setgarage(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container flex justify-between items-center mx-auto mt-8">
        <button className="text-4xl">
          <BsSortDown />
        </button>
        <button className="text-4xl">
          <BsFilterRight />
        </button>
      </div>
      <section className="grid gap-40 grid-cols-[repeat(auto-fit,minmax(390px,1fr))] mx-44 mt-10">
        {garage.map((garage) => (
          <GarageCard
            key={garage.id}
            id={garage.id}
            image={`https://immense-tor-96559.herokuapp.com${garage.garage_pictures[0].picture}`}
            userImageAlt={`garage ${garage.garage_name}`}
            garageName={garage.garage_name}
            location={garage.address}
            distance="20 Km"
            price="20"
          />
        ))}
      </section>
    </div>
  );
};

const GarageCard = (props) => {
  let url = `/garage/${props.id}/`;
  return (
    <div className="flex flex-col justify-center items-center">
      <a href={url}>
        <img
          src={props.image}
          alt={props.userImageAlt}
          className="w-[390px] h-[390px] object-cover rounded-3xl"
        ></img>
        <h1 className="font-mono text-xl font-semibold mt-4">
          {props.garageName} - {props.location}
        </h1>
        <span className="font-mono font-light text-gray-600 text-lg">
          {props.distance}
        </span>
        <span className="font-mono font-semibold text-black text-lg flex">
          {props.price}$ /reservation
        </span>
      </a>
    </div>
  );
};

export default GarageSection;
