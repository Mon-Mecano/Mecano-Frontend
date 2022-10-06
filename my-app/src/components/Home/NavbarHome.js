
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";



const NavbarHome = () => {

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
            <button className="bg-green-600 p-2 px-3 ml-2 rounded-3xl font-sans text-white hover:bg-gray-100 hover:text-black transition-all ease-linear ">
              <AiOutlineUser />
            </button>
          </div>
        </div>
      </nav>
      <div>
      </div>
    </>
  );
};

export default NavbarHome;
