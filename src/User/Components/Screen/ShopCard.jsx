// ShopCard.jsx
import React from "react";

const ShopCard = () => {
  // Fake shop details
  const shop = {
    id: "S-00123",
    name: "Vishal’s Convenience Store",
    address: "123 Market Road, Faridabad, Haryana, India",
    isOpen: true,
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJtYXJrZXR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden m-2 w-full  sm:w-80 md:w-66  transform hover:scale-105 transition-all duration-300">
      <img
        src={shop.image}
        alt={shop.name}
        className="w-full h-30 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-neutral-600 mb-2 truncate">{shop.name}</h3>
        <p className="text-sm text-neutral-500 mb-2">Address: {shop.address}</p>
        
        <div className="flex justify-between">
            <p className="text-sm text-neutral-500 mb-2">ID: {shop.id}</p> 
            <p className="text-sm text-neutral-500 mb-2">Contact - 98393030320 </p>
        </div>
        
        <span
          className={`inline-block px-3 py-1 rounded-full font-medium ${
            shop.isOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {shop.isOpen ? "Open Now" : "Closed"}
        </span>
      </div>
    </div>
  );
};

export default ShopCard;
