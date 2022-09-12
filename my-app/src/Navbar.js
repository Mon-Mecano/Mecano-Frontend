import {AiOutlineUser,AiOutlineSearch} from "react-icons/ai";

const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-300">
            <div className="container flex justify-between items-center mx-auto">
                <a href="/" className="sm:hidden lg:flex items-center">
                    <span className="self-center font-sans text-[28px]">Mon Mecano</span>
                </a>
                <div className="flex my-10 shadow-lg transition-all ease-linear">
                    <input type="text" name="search" className="block p-2 px-20 text-gray-900 bg-gray-50 placeholder:font-mono rounded-l-lg focus:outline-none" placeholder="Trouvez votre mecano..."></input>
                    <button className="bg-green-700 text-white px-4 text-lg rounded-r-lg"><AiOutlineSearch /></button>
                </div>
                <div className="flex my-10">
                    <button className="bg-gray-100 p-2 px-5 rounded-lg font-sans font-semibold hover:bg-green-700 hover:text-white transition-all ease-linear w-full">Enregistre ton garage</button>
                    <button className="bg-gray-100 p-2 px-3 ml-2 rounded-3xl font-sans  hover:bg-gray-300 transition-all ease-linear "><AiOutlineUser /></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;