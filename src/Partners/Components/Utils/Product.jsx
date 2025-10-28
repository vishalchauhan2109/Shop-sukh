import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../../../ContextApi/ProductContext";

const Product = () => {

  const {products} = useContext(ProductContext)
  console.log(products);

 
  
  
  return (
    <>
   
      <div className="px-4 py-6 font-bold text-neutral-600 text-2xl">
        Product Section
      </div>
      <div className="px-4 pb-10">
        <div className="flex flex-col justify-center gap-8  max-h-screen  overflow-y-scroll no-scrollbar">
          {/* sample product card */}
          {
            products.map((prod,index) =>(
              <ProductCard key={index} product={prod}/>
            ))
          }
          
          
          
          
          {/* you can duplicate above card as many times as needed */}
          

          {/* … add more cards */}
        </div>
      </div>
    </>
     
  );

};

export default Product;
