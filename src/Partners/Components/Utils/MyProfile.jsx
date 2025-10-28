import React, { useContext } from "react";
import { ProductContext } from "../../../ContextApi/ProductContext";

const MyProfile = () => {

  const{products} = useContext(ProductContext)
  return (
    <div className="bg-fuchsia-100 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-2xl p-6">
        {/* Header Section */}
        <div className="flex items-center space-x-6 border-b pb-4">
          {/* Profile Image */}
          <img
            src="https://via.placeholder.com/120"
            alt="Shop Logo"
            className="w-24 h-24 rounded-full border-4 border-fuchsia-300 object-cover"
          />

          {/* Shop Info */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-700">Shop-Sukh Mart</h2>
            <p className="text-neutral-500 mt-1">
              Address: 221, Near City Mall, Lucknow, India
            </p>
            <p className="text-neutral-500 mt-1">Joining Date: 12 Jan 2024</p>
          </div>
        </div>

        {/* Info / Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-fuchsia-50 rounded-xl p-4 text-center shadow">
            <p className="text-sm text-neutral-400">Total Products</p>
            <h3 className="text-xl font-bold text-neutral-700 mt-1">{products.length}</h3>
          </div>

          <div className="bg-fuchsia-50 rounded-xl p-4 text-center shadow">
            <p className="text-sm text-neutral-400">Available Stock</p>
            <h3 className="text-xl font-bold text-neutral-700 mt-1">{products.length}</h3>
          </div>

          <div className="bg-fuchsia-50 rounded-xl p-4 text-center shadow">
            <p className="text-sm text-neutral-400">Sold Items</p>
            <h3 className="text-xl font-bold text-neutral-700 mt-1">0</h3>
          </div>
        </div>

        {/* Extra Details */}
        <div className="mt-6">
          <h4 className="font-semibold text-neutral-700 text-lg mb-2">
            Owner Details
          </h4>
          <p className="text-neutral-500">Owner Name: Vishal Chauhan</p>
          <p className="text-neutral-500">Email: vishal@example.com</p>
          <p className="text-neutral-500">Contact: +91 9876543210</p>
        </div>

        {/* Footer or Empty Fields */}
        <div className="mt-6 border-t pt-3 text-center">
          <p className="text-neutral-400 text-sm">
            Shop Registration No: __________
          </p>
          <p className="text-neutral-400 text-sm">GST No: __________</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
