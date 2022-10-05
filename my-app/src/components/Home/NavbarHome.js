import { useState } from "react";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1rem",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

const NavbarHome = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
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

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <nav className="bg-green-700">
        <div className="container flex justify-between items-center mx-auto w-3/4">
          <a href="/">
            <span className="font-sans text-white text-3xl">Mon Mecano</span>
          </a>
          <div className="my-4">
            <div className="flex justify-center">
              <input
                className="flex p-2 my-4 px-20 text-gray-900 bg-gray-50 placeholder:font-mono placeholder:text-sm rounded-lg focus:outline-none"
                type="text"
                name="search"
                placeholder="Trouvez votre Mecano"
              />
            </div>
            <div className="flex justify-center w-full">
              <input
                className="flex p-2 text-gray-900 bg-gray-50 mr-4 placeholder:font-mono placeholder:text-sm rounded-lg focus:outline-none w-1/6 shadow-lg"
                type="text"
                name="search"
                placeholder="Marque"
              />
              <input
                className="flex p-2 text-gray-900 bg-gray-50 mr-4 placeholder:font-mono rounded-lg placeholder:text-sm focus:outline-none w-1/6 shadow-lg"
                type="text"
                name="search"
                placeholder="Model"
              />
              <input
                className="flex p-2 text-gray-900 bg-gray-50 placeholder:font-mono rounded-lg placeholder:text-sm focus:outline-none w-1/6 shadow-lg"
                type="text"
                name="search"
                placeholder="Annee"
              />
            </div>
            <div className="flex justify-center my-4 ">
              <input
                className="flex p-2 text-gray-900 bg-gray-50 mr-4 placeholder:font-mono rounded-lg placeholder:text-sm focus:outline-none w-[36%] shadow-lg"
                type="text"
                name="search"
                placeholder="Date du rendez-vous"
              />
              <button
                className="p-2 text-white text-xl  font-bold bg-gray-400 placeholder:font-mono rounded-lg placeholder:text-sm focus:outline-none w-1/6 shadow-lg"
                name="search"
                id="search"
              >
                {" "}
                <AiOutlineSearch />
              </button>
            </div>
          </div>
          <div className="flex my-10">
            <a
              href="/mecano/customer"
              className=" p-2 px-5 rounded-lg font-sans font-semibold bg-green-600 text-white hover:bg-gray-100 hover:text-black transition-all ease-linear w-full"
            >
              Enregistre ton garage
            </a>
            <button className="bg-green-600 p-2 px-3 ml-2 rounded-3xl font-sans text-white hover:bg-gray-100 hover:text-black transition-all ease-linear " onClick={openModal}>
              <AiOutlineUser />
            </button>
          </div>
        </div>
      </nav>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Login"
        >
          <h1 className="flex font-sans font-semibold text-xl justify-center items-center border-b-[1px] border-black pb-7 mt-3">
            Se connecter
          </h1>
          <h2 className="font-mono text-xl pr-40 mt-8 mb-4">
            Re-bienvenue sur Mon Mecano
          </h2>
          <form onSubmit={sendUserLogin}>
            <div>
              <input
                onChange={inputData}
                className="input"
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
                className="input"
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
                  class="w-4 h-4 text-black bg-gray-100 rounded- border-gray-300 cursor-pointer"
                />
                <label
                  for="link-checkbox"
                  class="ml-2 font-mono font-medium text-gray-900 dark:text-gray-300"
                >
                  Se souvenir du mot de passe
                </label>
              </div>
            </div>
            <div>
              <button
                onClick={closeModal}
                className="float-right bg-red-500 text-white p-4 px-8 rounded-xl font-sans font-bold mt-4 hover:bg-red-400 transition-all ease-linear"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="float-right bg-green-700 text-white p-4 px-4 rounded-xl font-sans font-bold mx-3 mt-4 hover:bg-green-600 transition-all ease-linear"
              >
                Se connecter
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default NavbarHome;
