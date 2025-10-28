import React from "react";
import { GoDotFill } from "react-icons/go";
// import AdminHome from '../Utils/AdminHome';
import AdminDashboard from "./Utils/AdminDashboard";
import Product from "./Utils/Product";
import MyProfile from "./Utils/MyProfile";
import MyEarnings from "./Utils/MyEarnings";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import Header from "./Header";
// import Footer from "./Footer";

const Main = () => {
  return (
    <div className="bg-gray-200 flex   pt-0">
      <div className="w-full h-full    ">
         <div className='overflow-hidden fixed hidden'>
          <Sidebar/>
        </div>
        
        <div className='overflow-x-hidden '>
        <Header/>
        {/* </RouterProvider> */}
        {/* <Footer/> */}
        </div>
        <Outlet />
        <Footer/>
        {/* <AdminDashboard/> */}
        {/* <Product/> */}
        {/* <MyProfile/> */}
        {/* <MyEarnings/> */}
      </div>
    </div>
  );
};

export default Main;
