import React from "react";
import { useState } from "react";
import axios from "../Axios/Axios";
import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function Login() {
  const params = useParams();
  const year = params.year;
  const make = params.make;
  const model = params.model;
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function inputData(event) {
    const { name, value } = event.target;
    if (name === "email") {
      setUserEmail(value);
    } else if (name === "password") {
      setUserPassword(value);
    }
  }

  async function sendUserLogin(event) {
    event.preventDefault();
    const userData = {
      email: userEmail,
      password: userPassword,
    };
    try {
      const result = await axios.post("/account/login/", userData);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div>
        <div className="w-screen h-screen bg-gray-100 flex justify-center">
          <div className="lg:w-1/2 md:w-3/4 sm:w-full">
            <div className="flex">
              <h1 className="font-mono font-bold text-3xl text-justify my-6">
                <Link to="../../../.." relative="path">
                  <button className="bg-white rounded-3xl p-2 mr-2 shadow-lg">
                    <MdOutlineKeyboardBackspace />
                  </button>
                </Link>
                Se connecter
              </h1>
            </div>
            <div className=" relative flex justify-between flex-col items-center w-full  bg-white rounded-2xl border-solid border-gray-100 shadow-lg pl-10 pb-5">
              <div className="mr-3">
                <div className="flex flex-row justify-between">
                  <h2 className="font-mono text-xl pr-40 mt-8 mb-4">
                    Re-bienvenue sur Mon Mecano
                  </h2>
                  <div
                    tabindex="0"
                    class="collapse collapse-arrow bg-gray-100 rounded-lg ml-16 my-10 h-min"
                  >
                    <input type="checkbox" />
                    <div class="collapse-title font-mono text-lg font-bold bg-gray-200">
                      Votre voiture
                    </div>
                    <div class="collapse-content">
                      <p className="p-4 font-mono text-lg">
                        {`${year} ${make} ${model}`}
                      </p>
                    </div>
                  </div>
                </div>
                <form onSubmit={sendUserLogin}>
                  <input
                    onChange={inputData}
                    className="input text-gray-900 bg-gray-50 font-mono rounded-lg focus:outline-none shadow-lg"
                    type="email"
                    name="email"
                    value={userEmail}
                    placeholder="Entrez votre e-mail"
                    size={50}
                    required
                  />
                  <br></br>
                  <input
                    onChange={inputData}
                    className="input  text-gray-900 bg-gray-50 font-mono rounded-lg focus:outline-none shadow-lg "
                    type="password"
                    name="password"
                    value={userPassword}
                    placeholder="Entrez votre mot de passe"
                    size={50}
                    required
                  />
                  <br></br>
                  <div class="flex items-center">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value="savePass"
                      className="w-4 h-4 text-black bg-gray-100 rounded- border-gray-300 cursor-pointer"
                    />
                    <label
                      for="link-checkbox"
                      className="ml-2 font-mono font-medium text-gray-900 dark:text-gray-300"
                    >
                      Se souvenir du mot de passe
                    </label>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="float-right bg-green-700 text-white p-4 px-4 rounded-xl font-sans font-bold mx-3 mt-4 hover:bg-green-600 transition-all ease-linear"
                    >
                      Se connecter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
