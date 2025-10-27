// src/Components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product }) => {
  const {
    name,
    weight,
    price,
    expDate,
    description,
    color,
    images = []
  } = product;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
      {/* Left image section */}
      <div className="w-full md:w-1/5 h-80 md:h-auto overflow-hidden">
        { images.length > 0
          ? <img
              src={images[0]}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          : <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              No Image
            </div>
        }
      </div>

      {/* Right details section */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mb-1">Weight: <span className="text-gray-700">{weight}</span></p>
        <p className="text-sm text-gray-500 mb-1">Price: <span className="text-gray-700">₹{price}</span></p>
        <p className="text-sm text-gray-500 mb-1">Expiry Date: <span className="text-gray-700">{expDate}</span></p>
        { color && <p className="text-sm text-gray-500 mb-1">Color: <span className="text-gray-700">{color}</span></p> }
        { description && <p className="text-sm text-gray-500 mt-2 flex-1">{description}</p> }

        <button className="mt-4 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 rounded-lg w-full md:w-auto">
          View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
