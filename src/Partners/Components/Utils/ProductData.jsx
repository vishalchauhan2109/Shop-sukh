// src/Components/Partners/Utils/productData.jsx
import React, { useState } from "react";
import { ProductContext } from "./ProductContext";


const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
