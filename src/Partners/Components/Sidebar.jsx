import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-white text-neutral-600 flex flex-col justify-between shadow-lg border-r">
      {/* Top user section */}
      <div className="px-6 py-8">
        <div className="flex items-center space-x-4">
          {/* <img src="https://via.placeholder.com/48"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          /> */}
          <div>
            <div className="text-lg font-semibold">John Doe</div>
            <div className="text-sm text-neutral-500">Status: <span className="font-medium text-green-500">Open</span></div>
          </div>
        </div>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 px-6 space-y-3">
        <a
          href="#"
          className="block py-3 px-4 rounded hover:bg-neutral-100 transition-ease-in-out duration-150"
        >
          Home
        </a>
        <a
          href="#"
          className="block py-3 px-4 rounded hover:bg-neutral-100 transition-ease-in-out duration-150"
        >
          Products
        </a>
        <a
          href="#"
          className="block py-3 px-4 rounded hover:bg-neutral-100 transition-ease-in-out duration-150"
        >
          About
        </a>
        <a
          href="#"
          className="block py-3 px-4 rounded hover:bg-neutral-100 transition-ease-in-out duration-150"
        >
          My Earnings
        </a>
      </nav>

      {/* Bottom logo & app name section */}
      <div className="px-6 py-8 border-t">
        <div className="flex items-center space-x-3">
          {/* <img src="https://via.placeholder.com/36" alt="App Logo"className="w-9 h-9"/> */}
          <span className="text-lg font-semibold">MyAppName</span>
        </div>
      </div>
    </aside>
  );
}
