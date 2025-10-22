import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="block w-full px-4 py-2 mx-auto text-white bg-slate-900 shadow-md lg:px-8 lg:py-2">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-gray-100">
        <a
          href="#"
          className="flex justify-center items-center mr-4 cursor-pointer py-1.5 text-base text-gray-200 font-semibold"
        >
          <img
            src="https://img.icons8.com/?size=200&id=113843&format=png"
            alt="letter-image"
            className="w-10"
          />
          <span>Word & Letter Counter</span>
        </a>
        <div className={`hidden lg:block ${isMenuOpen ? "block" : "lg:flex"}`}>
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
              <a href="#about" className="flex items-center">
                About
              </a>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
              <a href="#contact" className="flex items-center">
                Contact
              </a>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
              <a href="#support" className="flex items-center">
                Support
              </a>
            </li>
            {/* New login and sign up links */}
            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
              <a href="#login" className="flex items-center">
                Login
              </a>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
              <a href="#signup" className="flex items-center">
                Sign Up
              </a>
            </li>
          </ul>
        </div>

        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
          onClick={toggleMenu}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
        </button>
      </div>

      {/* Mobile menu (only visible when isMenuOpen is true) */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
        onClick={toggleMenu}
      >
        <ul className="flex flex-col gap-2 mt-2 mb-4">
          <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
            <a href="#about" className="flex items-center">
              About
            </a>
          </li>
          <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
            <a href="#contact" className="flex items-center">
              Contact
            </a>
          </li>
          <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
            <a href="#support" className="flex items-center">
              Support
            </a>
          </li>
          <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
            <a href="#login" className="flex items-center">
              Login
            </a>
          </li>
          <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
            <a href="#signup" className="flex items-center">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
