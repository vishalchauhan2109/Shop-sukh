import React from "react";
import { FaUserEdit, FaShoppingBag, FaStar, FaHeart } from "react-icons/fa";

const ProfileScreen = ({ userImage }) => {
  const user = {
    name: "Vishal Chauhan",
    email: "vishal.chauhan@example.com",
    phone: "+91 98765 43210",
    address: "Dwarka, Delhi, India",
    joined: "January 2024",
  };

  const fallbackImg =
    userImage || "/mnt/data/WhatsApp Image 2025-10-24 at 6.11.21 PM.jpeg";

  const stats = [
    { label: "Orders", value: "42", icon: <FaShoppingBag /> },
    { label: "Wishlist", value: "18", icon: <FaHeart /> },
    { label: "Reviews", value: "12", icon: <FaStar /> },
  ];

  return (
    <section className="bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Top section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 p-8">
          {/* Profile Image */}
          <div className="relative">
            <img
              src={fallbackImg}
              alt="User"
              className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-md"
            />
            <button className="absolute bottom-2 right-2 bg-indigo-500 text-white p-2 rounded-full shadow-md hover:bg-indigo-600 transition">
              <FaUserEdit size={18} />
            </button>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-neutral-600 text-sm mt-1">{user.email}</p>
            <p className="text-neutral-600 text-sm">{user.phone}</p>
            <p className="text-neutral-500 text-sm mt-2">{user.address}</p>
            <p className="text-neutral-400 text-xs mt-1">Joined: {user.joined}</p>

            <button className="mt-4 px-5 py-2 bg-indigo-500 text-white font-semibold text-sm rounded-lg hover:bg-indigo-600 transition-all">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200"></div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center p-6 gap-4 bg-neutral-50">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm hover:shadow-md rounded-xl p-4 transition transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center">
                <div className="text-indigo-500 mb-2">{item.icon}</div>
                <div className="text-2xl font-bold text-gray-800">{item.value}</div>
                <div className="text-sm text-neutral-500 mt-1">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity
        <div className="p-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li>• Placed an order for “Wireless Headphones” — 2 days ago</li>
            <li>• Added “Smartwatch” to wishlist — 4 days ago</li>
            <li>• Wrote a review for “Organic Honey” — 1 week ago</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default ProfileScreen;
