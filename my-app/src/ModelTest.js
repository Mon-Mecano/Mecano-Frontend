import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '1rem',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

function Modalh() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
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
        contentLabel="Example Modal"
      >
        <h1 className='flex font-sans font-semibold text-xl justify-center items-center border-b-[1px] border-black pb-4'>Se connecter</h1>
        <h2 className='font-mono text-xl pr-40 my-3'>Re-bienvenue sur Mon Mecano</h2>
        <form>
            <div>
                <input className='input' type='text' name="email" placeholder="Entrez votre e-mail" />
            </div>
        </form>
        <button onClick={closeModal} className="flex justify-end items-end">close</button>
      </Modal>
    </div>
  );
}
export default Modalh;