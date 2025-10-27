// Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Shop-Sukh</h2>
        <p className="mb-6">
          Welcome to <strong>Shop-Sukh</strong> — your trusted e-commerce platform for everyday essentials. We’re here to make your daily life easier, convenient and hassle-free by offering a wide range of quality products at fair prices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p>Email: contact@shopsukh.example.com</p>
            <p>Phone: +91-1234567890</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Owner & Legal</h3>
            <p>Owned & operated by <strong>Vishal</strong>.</p>
            <p>© {new Date().getFullYear()} Shop-Sukh. All rights reserved.</p>
          </div>

          <div className="">
            <h3 className="font-semibold mb-2">Follow us</h3>            <span className="flex cursor-pointer ">
                <FaInstagram className='mr-4 text-2xl' />
                <FaLinkedin className='text-2xl'/>
            </span>
            <span className="flex mt-2 cursor-pointer">
                <FaFacebook className='mr-4 text-2xl' />
                <FaTwitter className='text-2xl' />
            </span>
          </div>
        </div>
        <div className='mb-10'>
            <h3 className="font-semibold mb-2">About Shop-Sukh</h3>
            <p>
              At Shop-Sukh, we believe in delivering happiness with every purchase. From daily groceries, household items to wellness products — we’ve curated a selection suited for your everyday needs.  
              We strive for excellence, value your trust and constantly innovate to serve you better. Thank you for choosing us as your daily-life shopping partner.
            </p>
          </div>

        <div className="border-t border-white/50 pt-4 text-sm">
          <p>
            Created by <strong>Vishal</strong> | Platform launched: <strong>October 2025</strong> | Website: <strong>www.shopsukh.example.com</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
