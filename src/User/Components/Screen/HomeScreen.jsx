import React from "react";
import Header from "../Reusable/Header";
import Footer from "../Reusable/Footer";
import ProductListScreen from "./ProductCard";
import ShopListScreen from "./ShopCard";
import ShopScreen from "./ShopScreen";
import CartScreen from "./CartScreen";
import CheckoutSection from "./CheckoutSection";
import PartnerRegistrationForm from "../../../Partners/Components/Register/PartnerRegistrationForm";
import SelectUserorPartner from "../../../SelectUserorPartner";
import Product from "../../../Partners/Components/Utils/Product";
import ProductCard from "./ProductCard";
import UserMainScreen from "./UserMainScreen";
import { Outlet } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="">
      <Header />
      {/* <SelectUserorPartner/> */}
      <Outlet/>
      <Footer />
    </div>
  );
};

export default HomeScreen;
