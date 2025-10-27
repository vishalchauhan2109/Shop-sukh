import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdAdd, IoMdNotificationsOutline } from "react-icons/io";
import { CiShop } from "react-icons/ci";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="px-4 py-10">
      <div className="font-bold text-neutral-600 text-2xl mb-6">Dashboard</div>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Add Items */}
        <div className="w-full sm:w-[45%] lg:w-[35%] h-60 bg-orange-400 flex flex-col items-center justify-center rounded-2xl p-4">
          <Link to="/Additems">
            <div className="w-16 h-16 bg-green-300 flex items-center justify-center rounded-full mb-4 cursor-pointer">
              <IoMdAdd className="text-3xl text-neutral-700" />
            </div>
          </Link>
          <h1 className="text-neutral-700 font-semibold text-lg">Add Items</h1>
        </div>

        {/* My Shop */}
        <div className="w-full sm:w-[45%] lg:w-[35%] h-60 bg-orange-400 flex flex-col items-center justify-center rounded-2xl p-4">
          <div className="w-16 h-16 bg-blue-300 flex items-center justify-center rounded-full mb-4 cursor-pointer">
            <CiShop className="text-3xl text-neutral-800" />
          </div>
          <h1 className="text-neutral-700 font-semibold text-lg">My Shop</h1>
        </div>

        {/* Incoming Pings */}
        <div className="w-full sm:w-[45%] lg:w-[35%] h-60 bg-orange-400 flex flex-col items-center justify-center rounded-2xl p-4">
          <div className="w-16 h-16 bg-green-300 flex items-center justify-center rounded-full mb-4 cursor-pointer">
            <IoMdNotificationsOutline className="text-3xl text-neutral-700" />
          </div>
          <h1 className="text-neutral-700 font-semibold text-lg">
            Incoming Pings
          </h1>
        </div>

        {/* Profile */}
        <div className="w-full sm:w-[45%] lg:w-[35%] h-60 bg-orange-400 flex flex-col items-center justify-center rounded-2xl p-4">
          <Link to="/profile">
            <div className="w-16 h-16 bg-green-300 flex items-center justify-center rounded-full mb-4 cursor-pointer">
              <CgProfile className="text-3xl text-neutral-600" />
            </div>
          </Link>
          <h1 className="text-neutral-700 font-semibold text-lg">Profile</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
