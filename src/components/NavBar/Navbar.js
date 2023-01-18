import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Logo from '../../images/logo.png';

function Navbar() {
  const { currentUser, logOut } = useAuth();

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <div className="Navbar">
      <nav className="bg-cyan-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/home" className="flex items-center pl-7">
            <img
              src={Logo}
              className="md:h-10 md:w-10 h-6 mr-3 sm:h-9"
              alt="Logo"
            />
            <span className=" font-['Poppins'] font-medium	leading-10 text-3xl whitespace-nowrap dark:text-white">
              Healing
            </span>
          </a>
          <div
            className="hidden w-full md:block md:w-auto w-1/2 pr-7"
            id="navbar-default"
          >
            <ul className="flex flex-col p-2.5 gap-12 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-cyan-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/home"
                  className="font-['Poppins'] font-bold text-base	 mt-2 block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-yellow-200 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className=" font-['Poppins'] font-medium text-base	 mt-2 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-yellow-200  md:hover:bg-transparent md:border-0 md:hover:text-yellow-200  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="font-['Poppins'] font-medium mt-2 text-base	 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-yellow-200  md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-['Poppins'] font-medium text-base	 mt-2 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-yellow-200  md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact Us
                </a>
              </li>
              {!currentUser ? (
                <a href="/login">
                  <button
                    type="button"
                    className=" font-['Poppins'] font-medium text-base text-black bg-cyan-500 hover:bg-cyan-700 focus:ring-blue-300  rounded-md px-6 py-1.5 mt-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Log In
                  </button>
                </a>
              ) : (
                <button
                  onClick={handleLogOut}
                  type="button"
                  className=" font-['Poppins'] font-medium text-base text-black bg-cyan-500 hover:bg-cyan-700 focus:ring-blue-300  rounded-md px-6 py-1.5 mt-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Log out
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
