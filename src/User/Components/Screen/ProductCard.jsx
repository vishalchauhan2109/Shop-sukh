// ProductCard.jsx
import React from "react";
import Button from "../Utils/Button"

const ProductCard = () => {
  // Fake product details
  const product = {
    id: "P-00123",
    name: "Mock Product Name",
    price: "₹ 1,999",
    rating: "4.7",
    image: "https://i.ytimg.com/vi/WBLwbVOjZYo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA6y7f1-oINtesEVfDXUOzV1jTBQQ"
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden m-2   sm:w-48 md:w-60 lg:w-64   hover:scale-105 duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-38 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-neutral-600 mb-1 truncate">{product.name}</h3>
        <p className="text-sm text-neutral-500 mb-1">ID: {product.id}</p>
        <div className="flex justify-between">
            <p className="text-md font-semibold text-neutral-600 mb-1">{product.price}</p>
            <Button label={"Add to cart"}/>
        </div>
        <p className="text-sm text-neutral-500">Rating: {product.rating} ★</p>
      </div>
    </div>
  );
};

export default ProductCard;
