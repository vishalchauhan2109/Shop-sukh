import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-indigo-500 text-white py-8 px-6 rounded-2xl shadow-inner transform-3d-footer">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Brand Info */}
        <div className="">
          <h2 className="text-2xl font-bold mb-4">CompanyName</h2>
          <p className="text-neutral-200">
            “Delivering excellence in every product since 2025.”  
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-neutral-200">
            <Link to="/">
            <li><h1 href="#" className="hover:text-white">Home</h1></li>
            </Link>
            <Link to="User/AboutUs">
            <li><h1 href="#" className="hover:text-white">About Us</h1></li>
            </Link>
            <Link to="User/CartScreen">
            <li><h1 href="#" className="hover:text-white">Cart</h1></li>
            </Link>
            <Link to = "User/ProfileScreen">
            <li><h1 href="#" className="hover:text-white">Profile</h1></li>
            </Link>
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="text-neutral-200 space-y-2">
            <li>Address: 123-456-7890 Market Street, Faridabad, Haryana</li>
            <li>Email: info@fakemail.com</li>
            <li>Phone: +91 98765-43210</li>
          </ul>
        </div>

        {/* Column 4: Legal & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-neutral-200 hover:text-white">FB</a>
            <a href="#" className="text-neutral-200 hover:text-white">Twitter</a>
            <a href="#" className="text-neutral-200 hover:text-white">LinkedIn</a>
          </div>
          <ul className="text-neutral-200 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            <li>© 2025 CompanyName. All rights reserved.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
