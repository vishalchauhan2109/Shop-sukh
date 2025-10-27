// ShopScreen.jsx
import React from "react";
import ProductCard from "./ProductCard";
// import ShopCard from "./ShopCard";  // agar reuse karna hai to
// import ProductCard from "./ProductCard"; // ye tumhara product card component

const ShopScreen = () => {
  // Fake shop data
  const shop = {
    id: "S-00123",
    name: "Vishal’s Convenience Store",
    address: "123 Market Road, Faridabad, Haryana, India",
    image: "https://i.ytimg.com/vi/WBLwbVOjZYo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA6y7f1-oINtesEVfDXUOzV1jTBQQ",
    isOpen: true
  };

  return (
    <div className="min-h-screen bg-indigo-500 py-8 px-4 sm:px-6 lg:px-8 mt-10 mb-10">
      {/* Shop Header Section */}
      <div className="max-w-7xl mx-auto bg-fuchsia-100 rounded-xl shadow-lg flex overflow-hidden mb-8">
        <div>
        <img
          src={shop.image}
          alt={shop.name}
          className="w-full h-64 object-cover"
        />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-extrabold text-neutral-600 mb-2">{shop.name}</h1>
          <p className="text-sm text-neutral-500">Address: {shop.address}</p>
          <p className="text-sm text-neutral-500">Status: {shop.isOpen ? "Open Now" : "Closed"}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Products</h2>
        <div className="bg-fuchsia-100 rounded-xl shadow-md flex flex-wrap items-center justify-around p-4">
      
           <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
            <ProductCard/>

          {/* Example: map through products and render <ProductCard /> */}
        </div>
      </div>
    </div>
  );
};

export default ShopScreen;
