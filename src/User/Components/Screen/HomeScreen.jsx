import React from "react";
import Header from "../Reusable/Header";
import Footer from "../Reusable/Footer";

import { Outlet } from "react-router-dom";


const HomeScreen = () => {
  return (
    <div className="p-2">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default HomeScreen;
