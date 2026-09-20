// ProductCard.jsx
import React from "react";
import { IoCartOutline, IoStar } from "react-icons/io5";

const ProductCard = () => {
  const handleName = () => {
    console.log(product?.name);
  };

  // Fake product details
  const product = {
    id: "P-00123",
    name: "Mock Product Name",
    price: "₹ 1,999",
    rating: "4.7",
    image: "https://i.ytimg.com/vi/WBLwbVOjZYo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA6y7f1-oINtesEVfDXUOzV1jTBQQ"
  };

  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 flex flex-col justify-between w-full group">
      
      {/* Product Image Frame */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl text-xs font-bold text-[#3338a0] shadow-sm">
          ID: {product.id}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-base font-extrabold text-gray-900 tracking-tight line-clamp-1 group-hover:text-[#3338a0] transition-colors">
              {product.name}
            </h3>
          </div>
          
          <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mb-3">
            <IoStar className="w-3.5 h-3.5 fill-amber-400" />
            <span>{product.rating}</span>
            <span className="text-gray-400 font-normal">(Reviews)</span>
          </div>
        </div>

        {/* Pricing and Action Button Row */}
        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-gray-400 uppercase font-semibold block">Price</span>
            <span className="text-lg font-extrabold text-gray-900">{product.price}</span>
          </div>

          <button 
            className="bg-[#3338a0] hover:bg-[#272b80] text-[#fcc61d] font-bold py-2.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#fcc61d] active:scale-95 flex items-center gap-1.5 text-xs" 
            onClick={handleName}
          >
            <IoCartOutline className="w-4 h-4" /> Add
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;