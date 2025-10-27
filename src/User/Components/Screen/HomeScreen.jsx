import React from "react";
import Header from "../Reusable/Header";
import Footer from "../Reusable/Footer";
import ProductListScreen from "./ProductCard";
import ShopListScreen from "./ShopListScreen";
import ShopScreen from "./ShopScreen";
import CartScreen from "./CartScreen";
import CheckoutSection from "./CheckoutSection";

const HomeScreen = () => {
  return (
    <div className="">
      <Header />
      <CheckoutSection/>
            <Footer />
    </div>
  );
};

export default HomeScreen;
