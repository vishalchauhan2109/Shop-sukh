import React from "react";
import ShopCard from "./ShopCard"
import { Link } from "react-router-dom";

// Dummy data: yahan tum apna data (API ya context se) la sakte ho

const UserMainScreen = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-600">
          🛍️ Explore Shops Near You
        </h1>
        <p className="text-gray-600 mt-2">
          Choose from a variety of shops and enjoy shopping at your fingertips.
        </p>
      </div>

      {/* Grid for Shop Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Link to="User/ShopScreen">
        <ShopCard/>
        </Link>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/><ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
      </div>
    </div>
  );
};

export default UserMainScreen;
