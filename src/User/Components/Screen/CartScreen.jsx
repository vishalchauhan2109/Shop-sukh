// CartScreen.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "P123",
      name: "Sample Product 1",
      price: 999,
      quantity: 1,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSeecj7DEjfrlbpn-_IBmdW4Kv6yHkr5Zi1qq3YvYdRez90NNeTCSIzoq-f1UiM80TVgYGX92eHCLnqDKssC_KorjT1B1z_PsYvxx43zl-_PJIp3n3dhXLupj5X7pMbBShSf2brq6WFcg&usqp=CAc",
    },
    {
      id: "P124",
      name: "Sample Product 2",
      price: 1499,
      quantity: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuhKdmJJOwkN44KDhBJ9ZE5pgOtGo0-brQQ&s",
    },
  ]);

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const getTotalPrice = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-neutral-50 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-indigo-500 mb-6 text-center sm:text-left">
        Cart
      </h1>

      <div className="max-w-7xl mx-auto space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-300"
          >
            {/* Product Info Group */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg mx-auto sm:mx-0"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-lg font-semibold text-neutral-700">
                  {item.name}
                </h2>
                <p className="text-sm text-neutral-500">ID: {item.id}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center justify-center space-x-3">
              <button
                onClick={() => handleDecrement(item.id)}
                className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-all"
              >
                −
              </button>
              <span className="text-md text-neutral-700">{item.quantity}</span>
              <button
                onClick={() => handleIncrement(item.id)}
                className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-all"
              >
                +
              </button>
            </div>

            {/* Price Section */}
            <div className="text-center sm:text-right">
              <p className="text-md font-semibold text-neutral-700">
                ₹ {item.price * item.quantity}
              </p>
              <p className="text-sm text-neutral-500">Price: ₹ {item.price}</p>
            </div>
          </div>
        ))}

        {/* Checkout & Total */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6 text-center">
          <p className="text-xl font-bold text-neutral-700 mb-4">
            Total: ₹ {getTotalPrice()}
          </p>
          <Link to="User/CheckoutSection">
            <button className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-xl hover:bg-indigo-600 transition-all duration-300 w-full sm:w-auto">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
