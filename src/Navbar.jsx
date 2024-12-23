import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#D2B48C]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-gray-300">
            Espresso Emporium
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
            to="/signIn"
            className={({ isActive }) =>
              `hover:text-gray-300 ${
                isActive ? "underline decoration-2" : ""
              }`
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to="/signUp"
            className={({ isActive }) =>
              `hover:text-gray-300 ${
                isActive ? "underline decoration-2" : ""
              }`
            }
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `hover:text-gray-300 ${
                isActive ? "underline decoration-2" : ""
              }`
            }
          >
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
