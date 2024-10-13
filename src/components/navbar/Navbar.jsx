import React, { useState } from "react"; 
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="!z-50 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* Updated Fashion Logo */}
              <img
                src="/logo.webp"
                alt="Fashion Logo"
                className="h-12 w-12 rounded-full shadow-lg border-2 border-white"
              />
              <span className="ml-3 text-2xl font-bold text-white hover:text-yellow-400 tracking-wider uppercase">
                Fashion
              </span>
            </Link>
          </div>

          {/* Menu toggle button for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex items-center space-x-6`}
          >
            <Link
              to="/"
              className="text-white hover:text-yellow-300 px-3 py-2 transition font-medium text-lg"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-yellow-300 px-3 py-2 transition font-medium text-lg"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-300 px-3 py-2 transition font-medium text-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="text-white hover:text-yellow-300 px-3 py-2 transition font-medium text-lg"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 shadow-md transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

