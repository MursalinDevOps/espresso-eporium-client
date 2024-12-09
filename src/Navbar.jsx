import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-gray-300">
            Coffee App
          </NavLink>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-gray-300 ${
                isActive ? "underline decoration-2" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/addCoffee"
            className={({ isActive }) =>
              `hover:text-gray-300 ${
                isActive ? "underline decoration-2" : ""
              }`
            }
          >
            Add Coffee
          </NavLink>
          <NavLink
            to="/updateCoffee"
            className={({ isActive }) =>
              `hover:text-gray-300 ${
                isActive ? "underline decoration-2" : ""
              }`
            }
          >
            Update Coffee
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
