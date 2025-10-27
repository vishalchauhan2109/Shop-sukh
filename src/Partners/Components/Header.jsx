import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaPersonRifle } from "react-icons/fa6"; // (if you still need this icon)
import { GoDotFill } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-600 text-white">
      <div className="flex items-center justify-between px-5 py-3 md:py-5">
        {/* Left side – hamburger + logo */}
        <div className="flex items-center">
          <button
            className="md:hidden mr-3 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <RxHamburgerMenu />
          </button>
          <p className="text-lg font-semibold">logo</p>
        </div>

        {/* Right side – nav links + profile icon (desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/Products" className="hover:underline">Products</Link>
          <Link to="/About" className="hover:underline">About</Link>
          <Link to="/MyEarnings" className="hover:underline">My Earnings</Link>
          <Link to="/profile" className="text-2xl" aria-label="Profile">
            <CgProfile />
          </Link>
        </nav>
      </div>

      {/* Collapsible menu for mobile */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-3 space-y-3">
          <Link to="/" className="block hover:underline">Home</Link>
          <Link to="/Products" className="block hover:underline">Products</Link>
          <Link to="/About" className="block hover:underline">About</Link>
          <Link to="/MyEarnings" className="block hover:underline">My Earnings</Link>
          <Link to="/profile" className="block text-2xl pt-2" aria-label="Profile">
            <CgProfile />
          </Link>
        </div>
      )}

      <div className="px-5 py-3 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Hello User</h1>
        <div className="flex items-center justify-center mt-1">
          <span className="font-semibold">Current status : open</span>
          <GoDotFill className="text-2xl text-green-400 ml-2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
