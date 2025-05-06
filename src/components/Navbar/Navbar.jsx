import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-900 text-white flex justify-between items-center px-5 py-2">
        <h1 className="text-xl font-medium cursor-pointer">
          <Link to="/">Prestige Shoes</Link>
        </h1>

        {/* Hamburger Button (visible on mobile) */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-10 text-xl">
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

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden mt-3">
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
