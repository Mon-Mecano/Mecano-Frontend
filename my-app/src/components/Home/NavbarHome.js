import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import data from "../../assets/data/services.json";

const NavbarHome = () => {
  return (
    <>
      <nav className="bg-green-700">
        <div className="flex justify-between items-center w-full">
          <a href="/">
            <span className="font-sans text-white text-3xl ml-40">Mon Mecano</span>
          </a>
          <div className="my-4">
            <div className="flex justify-center">
              <input
                list="services"
                className="flex p-2 w-full  text-gray-900 bg-gray-50 placeholder:font-mono placeholder:text-sm rounded-lg focus:outline-none"
                type="text"
                name="search"
                placeholder="Choisir service ou decrire votre probleme"
              />
              <datalist id="services">
                {data.services.map((service) => {
                  return <option value={service} />;
                })}
              </datalist>
            </div>
            <div className="flex justify-center my-4 ">
              <input
                className="flex p-2 text-gray-900 bg-gray-50 mr-4 placeholder:font-mono rounded-lg placeholder:text-sm focus:outline-none w-1/2 shadow-lg"
                type="text"
                name="search"
                placeholder="Code postal"
              />
              <button
                className="p-2 text-white text-xl  font-bold bg-gray-400 placeholder:font-mono rounded-lg placeholder:text-sm focus:outline-none w-1/2 shadow-lg"
                name="search"
                id="search"
              >
              <a href="/search">
                {" "}
                <AiOutlineSearch />
                </a>
              </button>
            </div>
          </div>
          <div className="flex mb-40 mr-4 mt-4">
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
      <div></div>
    </>
  );
};

export default NavbarHome;
