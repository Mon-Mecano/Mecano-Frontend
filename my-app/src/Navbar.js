import {AiOutlineUser} from "react-icons/ai";


const Navbar = () => {
    return (
        <div>
   <nav className="bg-white border-b border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
   <div className="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" className="flex items-center">
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Mon Mecano</span>
      </a>
      <div className="flex md:order-2">
         <button type="button" className="font-mono text-black bg-gray-100 hover:bg-green-700 hover:text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all ease-linear ">Get started</button>
         <div className="relative top-2">
            <button className="ml-4 text-xl hover:text-white hover:bg-gray-400 transition-all ease-linear rounded-3xl p-1"><AiOutlineUser /></button>
         </div>
      </div>
      <div className="justify-between items-center w-full flex md:w-auto md:order-1" id="navbar-search">
         <div className="relative mt-3 md:hidden">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
               <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
               </svg>
            </div>
         </div>
         <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <div className="hidden relative md:flex">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
               <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
               </svg>
               <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block p-2 px-20  w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-lg" name="search" placeholder="Trouvez ton mecano..."/>
         </div>
            </li>
         </ul>
      </div>
   </div>
</nav>
</div>
    )
}

export default Navbar;