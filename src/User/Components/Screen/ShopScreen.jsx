import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { IoLocationOutline, IoSearchOutline, IoStorefront, IoShieldCheckmark, IoCallOutline } from "react-icons/io5";

const ShopScreen = () => {
  const [productSearch, setProductSearch] = useState("");

  // Fake shop data
  const shop = {
    id: "S-00123",
    name: "Vishal’s Convenience Store",
    address: "123 Market Road, Faridabad, Haryana, India",
    image: "https://i.ytimg.com/vi/WBLwbVOjZYo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA6y7f1-oINtesEVfDXUOzV1jTBQQ",
    isOpen: true,
    phone: "+91 98393 03032"
  };

  // Handler for product search input change
  const handleSearchChange = (e) => {
    setProductSearch(e.target.value);
    // You can wire this search state into your product filtering logic as needed
  };

  return (
    <div className="min-h-screen w-full bg-[#f8f9fc] relative overflow-x-hidden pb-24">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#3338a0]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[25%] right-0 w-[450px] h-[450px] bg-[#fcc61d]/15 rounded-full blur-[120px] pointer-events-none"></div>

      {/* --- SHOP BANNER HEADER (Full Fluid Width) --- */}
      <div className="w-full bg-[#3338a0] text-white pt-12 pb-20 px-6 md:px-12 lg:px-20 relative shadow-xl">
        <div className="w-full flex flex-col md:flex-row items-center gap-8 relative z-10">
          
          {/* Shop Image Frame */}
          <div className="w-full md:w-80 h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 shrink-0 relative">
            <img
              src={shop.image}
              alt={shop.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold text-[#3338a0] flex items-center gap-1 shadow-md">
              <IoShieldCheckmark className="text-[#fcc61d]" /> Verified
            </div>
          </div>

          {/* Shop Details Info */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#fcc61d] mb-3 w-fit mx-auto md:mx-0 border border-white/15">
              <IoStorefront /> Partner Retailer
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
              {shop.name}
            </h1>
            <p className="text-[#c59560] text-sm md:text-base mb-4 flex items-center justify-center md:justify-start gap-1.5 font-medium">
              <IoLocationOutline className="w-5 h-5 shrink-0 text-[#fcc61d]" />
              {shop.address}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <span
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide ${
                  shop.isOpen 
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30" 
                    : "bg-rose-500/20 text-rose-300 border border-rose-400/30"
                }`}
              >
                {shop.isOpen ? "● Open Now" : "○ Closed"}
              </span>
              <span className="text-xs text-white/80 font-medium flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
                <IoCallOutline className="text-[#fcc61d]" /> {shop.phone}
              </span>
              <span className="text-xs text-white/80 font-medium bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
                ID: {shop.id}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="w-full px-6 md:px-12 lg:px-20 -mt-8 relative z-20 space-y-8">

        {/* Product Search & Filter Bar */}
        <div className="w-full bg-white p-5 rounded-3xl shadow-xl border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
              Store Catalog
            </h2>
            <p className="text-xs text-gray-500">Browse and search items available at this store</p>
          </div>

          <div className="relative w-full md:w-96">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#c59560]">
              <IoSearchOutline className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search products in this shop..."
              value={productSearch}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3338a0] focus:ring-2 focus:ring-[#3338a0]/20 text-sm font-medium transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Products Grid Section */}
        <div className="w-full space-y-4">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-xl font-extrabold text-gray-800">Available Products</h3>
            <span className="text-xs font-bold text-[#3338a0] bg-indigo-50 px-3 py-1 rounded-xl">Showing 12 items</span>
          </div>

          <div className="w-full bg-white p-6 rounded-3xl shadow-xl border border-gray-100 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopScreen;