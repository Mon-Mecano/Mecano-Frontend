import { useState } from "react";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import Modal from "react-modal";
import axios from "../Axios/Axios";

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

const Navbar = () => {
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
      password: userPassword
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
    <div>
      <nav className="bg-white border-b border-gray-300">
        <div className="container flex justify-between items-center mx-auto w-3/4">
          <a href="/" className="sm:hidden lg:flex items-center">
            <span className="self-center font-sans text-[28px]">
              Mon Mecano
            </span>
          </a>
          <div className="flex my-10 shadow-lg transition-all ease-linear">
            <input
              type="text"
              name="search"
              className="block p-2 px-20 text-gray-900 bg-gray-50 placeholder:font-mono rounded-l-lg focus:outline-none"
              placeholder="Trouvez votre mecano..."
            ></input>
            <button className="bg-green-700 text-white px-4 text-lg rounded-r-lg">
              <AiOutlineSearch />
            </button>
          </div>
          <div className="flex my-10">
          <a href="/" className="bg-gray-100 p-2 px-5 rounded-lg font-sans font-semibold hover:bg-green-700 hover:text-white transition-all ease-linear w-full">
            Enregistre ton garage
          </a>
            <button
              className="bg-gray-100 p-2 px-3 ml-2 rounded-3xl font-sans  hover:bg-gray-300 transition-all ease-linear "
              onClick={openModal}
            >
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
    </div>
  );
};

export default Navbar;
