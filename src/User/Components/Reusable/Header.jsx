import axios from "axios";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { IoCartOutline, IoSearchOutline, IoStorefront } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../Utils/constant";
 import { logout } from "../Store/userSlice";
  // import { useNavigate } from "react-redux";
const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm);
  };

  // const dispatch = useDispatch();
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
  } catch (error) {
    console.error("Logout API failed:", error);
  } finally {
    // dispatch(logout());
    navigate("/user/login");
  }
};
  const data = useSelector((state) => state.user);
  console.log("Header user data:", data)

  return (
    <header className="w-full bg-[#3338a0] text-white shadow-xl sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-opacity-95">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          {/* Brand / Logo */}
          <Link to="/User" className="flex items-center gap-2.5 group">
            <img src="/img/logo.png" alt="Logo" className="h-20 w-auto" />
          </Link>

          {/* Search Bar – hidden on mobile, visible on sm+ */}
          <form onSubmit={handleSubmit} className="hidden sm:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full py-3 pl-11 pr-24 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/15 focus:border-[#fcc61d] focus:ring-2 focus:ring-[#fcc61d]/30 outline-none transition-all text-sm font-medium"
                placeholder="Search products, shops, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#c59560]">
                <IoSearchOutline className="w-5 h-5" />
              </span>
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-[#fcc61d] hover:bg-[#eab00c] text-[#3338a0] px-4 py-2 rounded-xl font-bold text-xs transition-colors shadow-md"
              >
                Search
              </button>
            </div>
          </form>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/User" 
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 flex items-center justify-center group"
              title="Home"
            >
              <FaHome className="text-xl group-hover:text-[#fcc61d] transition-colors" />
            </Link>

<div className="relative group">
  <Link 
    to="/User/ProfileScreen" 
    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 flex items-center justify-center"
    title="Profile"
  >
    <div className="text-xl h-7 w-7 rounded-full transition-colors overflow-hidden">
      <img src="" alt="Profile" className="h-full w-full rounded-full object-cover" />
    </div>
  </Link>

  {/* Dropdown */}
  <div className="absolute right-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
    <div className="w-44 bg-[#3338a0] border border-white/10 rounded-xl shadow-xl overflow-hidden">
      <Link
        to="/User/ProfileScreen"
        className="flex items-center gap-2 px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
      >
        <CgProfile className="text-[#fcc61d]" />
        Profile
      </Link>
      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-2 px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors text-left border-t border-white/10"
      >
        <FiLogOut className="text-[#fcc61d]" />
        Logout
      </button>
    </div>
  </div>
</div>

            <Link 
              to="/User/CartScreen" 
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 flex items-center justify-center relative group"
              title="Cart"
            >
              <IoCartOutline className="text-xl group-hover:text-[#fcc61d] transition-colors" />
              {/* Optional badge indicator */}
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#fcc61d] text-[#3338a0] text-[10px] font-extrabold rounded-full flex items-center justify-center shadow">
                0
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 text-white focus:outline-none border border-white/10"
            >
              {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-4 pb-2 animate-fadeIn">
            {/* Mobile Search Form */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full py-3 pl-11 pr-24 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none text-sm"
                  placeholder="Search products or shops..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#c59560]">
                  <IoSearchOutline className="w-5 h-5" />
                </span>
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-[#fcc61d] text-[#3338a0] px-4 py-2 rounded-xl font-bold text-xs"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Mobile Nav Items */}
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/User" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors flex items-center gap-3"
              >
                <FaHome className="text-[#fcc61d]" /> Home
              </Link>
              <Link 
                to="/User/AboutUs" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors flex items-center gap-3"
              >
                <IoStorefront className="text-[#fcc61d]" /> About Us
              </Link>
              <Link 
                to="/User/ProfileScreen" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors flex items-center gap-3"
              >
                <CgProfile className="text-[#fcc61d]" /> Profile
              </Link>
              <Link 
                to="/User/CartScreen" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors flex items-center gap-3"
              >
                <IoCartOutline className="text-[#fcc61d]" /> Cart
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;