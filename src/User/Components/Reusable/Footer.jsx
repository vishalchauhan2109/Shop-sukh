import React from "react";
import { Link } from "react-router-dom";
import { IoStorefront, IoLocationOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full bg-[#3338a0] text-white pt-16 pb-12 px-6 md:px-12 lg:px-20 border-t border-white/10 relative overflow-hidden">
      
      {/* Ambient background glow matching your branding */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#fcc61d] opacity-10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-[#fcc61d] rounded-xl flex items-center justify-center text-[#3338a0] font-bold shadow-md">
              <IoStorefront className="w-5 h-5" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Retail<span className="text-[#fcc61d]">Command</span>
            </span>
          </div>
          <p className="text-[#c59560] text-sm font-medium leading-relaxed">
            “Delivering excellence in local commerce and retail management solutions since 2025.”  
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white border-b border-white/10 pb-2">Quick Links</h3>
          <ul className="space-y-3 text-white/80 text-sm font-medium">
            <li>
              <Link to="/User" className="hover:text-[#fcc61d] transition-colors flex items-center gap-2">
                &rarr; Home Dashboard
              </Link>
            </li>
            <li>
              <Link to="/User/AboutUs" className="hover:text-[#fcc61d] transition-colors flex items-center gap-2">
                &rarr; About Us
              </Link>
            </li>
            <li>
              <Link to="/User/CartScreen" className="hover:text-[#fcc61d] transition-colors flex items-center gap-2">
                &rarr; Cart & Orders
              </Link>
            </li>
            <li>
              <Link to="/User/ProfileScreen" className="hover:text-[#fcc61d] transition-colors flex items-center gap-2">
                &rarr; User Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white border-b border-white/10 pb-2">Contact Us</h3>
          <ul className="text-white/80 text-sm space-y-3 font-medium">
            <li className="flex items-start gap-2.5">
              <IoLocationOutline className="w-5 h-5 text-[#c59560] shrink-0 mt-0.5" />
              <span>123-456 Market Street, Faridabad, Haryana, India</span>
            </li>
            <li className="flex items-center gap-2.5">
              <IoMailOutline className="w-5 h-5 text-[#c59560] shrink-0" />
              <span>info@retailcommand.com</span>
            </li>
            <li className="flex items-center gap-2.5">
              <IoCallOutline className="w-5 h-5 text-[#c59560] shrink-0" />
              <span>+91 98765 43210</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Legal & Social */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white border-b border-white/10 pb-2">Stay Connected</h3>
          <div className="flex space-x-3 mb-6">
            <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#fcc61d] hover:text-[#3338a0] text-white flex items-center justify-center font-bold text-xs transition-all shadow-sm">FB</a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#fcc61d] hover:text-[#3338a0] text-white flex items-center justify-center font-bold text-xs transition-all shadow-sm">TW</a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#fcc61d] hover:text-[#3338a0] text-white flex items-center justify-center font-bold text-xs transition-all shadow-sm">IN</a>
          </div>
          <ul className="text-white/60 text-xs space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            <li className="pt-2 text-[#c59560] font-semibold">© 2026 RetailCommand. All rights reserved.</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;