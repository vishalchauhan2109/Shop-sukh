// ShopCard.jsx
import React from "react";
import { IoLocationOutline, IoCallOutline, IoShieldCheckmark } from "react-icons/io5";

const ShopCard = () => {
  const shop = {
    id: "S-00123",
    name: "Vishal’s Convenience Store",
    address: "123 Market Road, Near City Center, Faridabad, Haryana, India",
    isOpen: true,
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJtYXJrZXR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
  };

  return (
    <div className="bg-white rounded-[32px] shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between w-full min-h-[510px] group">
      
      {/* Increased Image Height by ~30px */}
      <div className="relative h-80 w-full overflow-hidden bg-gray-100 shrink-0">
        <img
          src={shop.image}
          alt={shop.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-extrabold text-[#3338a0] flex items-center gap-1.5 shadow-lg">
          <IoShieldCheckmark className="text-[#fcc61d] w-4 h-4" /> Verified Store
        </div>
      </div>

      {/* Expanded Content Section */}
      <div className="p-7 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight line-clamp-1 group-hover:text-[#3338a0] transition-colors mb-2.5">
            {shop.name}
          </h3>

          <p className="text-sm md:text-base text-gray-500 mb-5 flex items-start gap-2.5 leading-relaxed">
            <IoLocationOutline className="w-5 h-5 text-[#c59560] shrink-0 mt-0.5" />
            <span className="line-clamp-2">{shop.address}</span>
          </p>
        </div>

        <div>
          {/* Metadata Row */}
          <div className="border-t border-gray-100 pt-4 mb-5 flex justify-between items-center text-sm font-semibold text-gray-500">
            <span className="bg-gray-50 px-3.5 py-1.5 rounded-xl text-gray-700 border border-gray-100">
              ID: {shop.id}
            </span>
            <span className="flex items-center gap-2 text-gray-600">
              <IoCallOutline className="text-[#c59560] w-4 h-4" /> +91 98393
            </span>
          </div>

          {/* Status and Action */}
          <div className="flex items-center justify-between">
            <span
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide ${
                shop.isOpen 
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                  : "bg-rose-50 text-rose-700 border border-rose-200"
              }`}
            >
              {shop.isOpen ? "● Open Now" : "○ Closed"}
            </span>
            <span className="text-sm font-bold text-[#3338a0] group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-1.5">
              Visit Store &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;