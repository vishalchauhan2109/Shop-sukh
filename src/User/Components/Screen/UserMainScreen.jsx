import React from "react";
import ShopCard from "./ShopCard";
import { Link } from "react-router-dom";
import MapComponent from "./MapComponent";
import { 
  IoLocationOutline, 
  IoSparklesOutline, 
} from "react-icons/io5";
import { useSelector } from "react-redux";

const UserMainScreen = () => {

  const loggedinuser = useSelector((state) => state.user);

  
  return (
    <div className="min-h-screen w-full bg-[#f4f6fc] relative overflow-x-hidden pb-24">
      
      {/* Background Shapes */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#3338a0]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[25%] right-0 w-[550px] h-[550px] bg-[#fcc61d]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-[#c59560]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3338a008_1px,transparent_1px),linear-gradient(to_bottom,#3338a008_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      {/* Hero Banner */}
      <div className="w-full bg-[#3338a0] text-white pt-14 pb-16 px-6 md:px-12 lg:px-20 shadow-2xl relative z-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#fcc61d] mb-4 border border-white/15 shadow-sm">
              <IoSparklesOutline /> Retail Command & Discovery Hub
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Explore Shops <span className="text-[#fcc61d]">Near You</span>
            </h1>
            <p className="text-[#c59560] mt-3 text-base md:text-lg max-w-3xl font-medium leading-relaxed">
              Browse verified local vendors, check inventory statuses, and shop seamlessly using our marketplace network.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3.5 shadow-xl shrink-0">
            <div className="w-12 h-12 bg-[#fcc61d] rounded-xl flex items-center justify-center text-[#3338a0] font-bold shadow-md">
              <IoLocationOutline className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#c59560] font-semibold uppercase tracking-wider">Active Location</p>
              <p className="text-sm md:text-base font-bold text-white">{loggedinuser?.user?.pincode}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Page Content */}
      <div className="w-full px-6 md:px-12 lg:px-20 mt-10 relative z-20 space-y-12">

        {/* Live Map Radar Section */}
        {/* <div className="w-full bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white overflow-hidden">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-base md:text-lg font-extrabold text-gray-800 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#fcc61d] inline-block animate-ping"></span> 
              Live Neighborhood Radar
            </h2>
            <span className="text-xs text-[#3338a0] font-bold bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
              GPS Active
            </span>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-inner w-full">
            <MapComponent />
          </div>
        </div> */}

        {/* Nearby Retailers Section */}
        <div className="w-full space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Nearby Retailers
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Showing active verified shops ready to accept orders
              </p>
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
              <button className="bg-[#3338a0] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md hover:bg-[#272b80] transition-all">
                All Shops
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-sm">
                Groceries
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-sm">
                Convenience
              </button>
            </div>
          </div>

          {/* Optimized Grid Column Widths (1 to 3 columns max so double-width cards fit perfectly without overlapping or clipping) */}
          <div className="w-full grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Link to="/User/ShopScreen" className="block w-full">
              <ShopCard />
            </Link>
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserMainScreen;