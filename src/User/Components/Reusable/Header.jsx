import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus, FaHome } from "react-icons/fa";
import { FaPersonRifle } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";  // agar react-icons install hai
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm);
  };

  return (
    <header className="w-full bg-indigo-500 text-white shadow-lg  rounded-2xl p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-1">
        <div className="flex justify-between items-center py-5">
          {/* Brand / Logo */}
          <div className="text-3xl font-bold transform hover:scale-105 transition-all">
            CompanyName
          </div>

          {/* Search Bar – hidden on very small screens */}
          <form onSubmit={handleSubmit} className="hidden sm:flex flex-1 max-w-md ">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full py-2 pl-4 pr-10 rounded-xl bg-white text-neutral-600 placeholder-neutral-400 focus:outline-none focus:shadow-outline"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Nav links (desktop) */}
          <nav className="hidden md:flex space-x-4 ml-6">
            <Link to="/User">
            <h1 href="#" className="text-white font-medium hover:underline"><FaHome className="text-2xl"/></h1>
            </Link>
            <Link to="User/ProfileScreen">
            <h1 href="#" className="text-white font-medium hover:underline"></h1>
            </Link>
            <Link to ="User/ProfileScreen">
            <h1 href="#" className="text-white font-medium hover:underline"><CgProfile className="text-2xl" /></h1>
            </Link>
            <Link to="User/CartScreen">
            <h1 href="#" className="text-white font-medium hover:underline"><IoCartOutline className="text-2xl" /></h1>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden ml-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              { mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} /> }
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-indigo-500 rounded-b-xl shadow-inner pb-4">
            <form onSubmit={handleSubmit} className="px-4 py-2">
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full py-2 pl-4 pr-10 rounded-xl bg-white text-neutral-600 placeholder-neutral-400 focus:outline-none"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
            <nav className="px-4 space-y-2 mt-2">
               <Link to="/user">
            <h1 href="#" className="block text-white font-medium hover:underline ">Home</h1>
            </Link>
            <Link to="User/AboutUs">
            <h1 href="#" className="block text-white font-medium hover:underline ">About us</h1>
            </Link>
            <Link to ="User/ProfileScreen">
            <h1 href="#" className="block text-white font-medium hover:underline">Profile</h1>
            </Link>
            <Link to="User/CartScreen">
            <h1 href="#" className="block text-white font-medium hover:underline ">Cart</h1>
            </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
