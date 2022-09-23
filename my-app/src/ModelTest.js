import React from "react";
import Modal from "react-modal";

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

function Modalh() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
      <button onClick={openModal}>Open Modal</button>
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
        <form>
          <div>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Entrez votre e-mail"
              size={50}
            />
            <br></br>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              size={50}
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
        </form>
        <div>
          <button
            onClick={closeModal}
            className="flex justify-end items-end bg-red-500 text-white p-4 px-6 rounded-xl font-sans font-bold mt-4"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default Modalh;
