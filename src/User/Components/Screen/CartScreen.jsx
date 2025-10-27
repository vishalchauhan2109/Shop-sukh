// CartScreen.jsx
import React, { useState } from "react";

const CartScreen = () => {
  // Fake cart items data with quantity
  const [cartItems, setCartItems] = useState([
    {
      id: "P123",
      name: "Sample Product 1",
      price: 999,
      quantity: 1,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSeecj7DEjfrlbpn-_IBmdW4Kv6yHkr5Zi1qq3YvYdRez90NNeTCSIzoq-f1UiM80TVgYGX92eHCLnqDKssC_KorjT1B1z_PsYvxx43zl-_PJIp3n3dhXLupj5X7pMbBShSf2brq6WFcg&usqp=CAc"
    },
    {
      id: "P124",
      name: "Sample Product 2",
      price: 1499,
      quantity: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuhKdmJJOwkN44KDhBJ9ZE5pgOtGo0-brQQ&s"
    }
  ]);

  const handleIncrement = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const getTotalPrice = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-indigo-500 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white mb-6">My Cart</h1>

      <div className="max-w-7xl mx-auto space-y-4">
        {cartItems.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-neutral-600">{item.name}</h2>
              <p className="text-sm text-neutral-500">ID: {item.id}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleDecrement(item.id)}
                className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-all"
              >
                −
              </button>
              <span className="text-md text-neutral-600">{item.quantity}</span>
              <button
                onClick={() => handleIncrement(item.id)}
                className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-all"
              >
                +
              </button>
            </div>
            <div className="text-right">
              <p className="text-md font-semibold text-neutral-600">₹ {item.price * item.quantity}</p>
              <p className="text-sm text-neutral-500">Price: ₹ {item.price}</p>
            </div>
          </div>
        ))}

        {/* Checkout & Total Price */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6 text-center">
          <p className="text-xl font-bold text-neutral-600 mb-4">Total: ₹ {getTotalPrice()}</p>
          <button className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-xl hover:bg-indigo-600 transition-all duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
