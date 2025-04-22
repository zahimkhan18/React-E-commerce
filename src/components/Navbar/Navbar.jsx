import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-900 text-white flex justify-between items-center px-5 py-2">
        <h1 className="text-xl font-medium cursor-pointer">
          <Link to="/">Prestige Shoes</Link>
        </h1>

        <nav>
          <ul className="flex gap-10 text-xl cursor-pointer">
            <li className="hover:text-gray-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/products">Products</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
