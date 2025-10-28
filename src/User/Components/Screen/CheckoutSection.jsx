// CheckoutSection.jsx
import React, { useState } from "react";

const CheckoutSection = () => {
  const [addressOpen, setAddressOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod"); // "cod" or "online"

  // Address form state
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    pin: ""
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressSave = () => {
    // Validate and save logic
    console.log("Saving address:", address);
    // After saving you can collapse accordion:
    setAddressOpen(false);
  };

  // Fake ordered products & total
  const orderedProducts = [
    { id: "P123", name: "Product One", price: 999, quantity: 1 },
    { id: "P124", name: "Product Two", price: 1499, quantity: 2 },
  ];
  const totalPrice = orderedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Address Accordion */}
      <div className="mb-6">
        <button
          onClick={() => setAddressOpen(!addressOpen)}
          className="w-full flex justify-between items-center py-4 px-4 bg-indigo-500 text-white rounded-xl focus:outline-none"
        >
          <span className="text-lg font-bold">Add / Edit Address</span>
          <span className={`transform transition-all ${addressOpen ? "rotate-180" : ""}`}>▼</span>
        </button>
        {addressOpen && (
          <div className="mt-4 px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 space-y-4">
            <div>
              <label className="block text-neutral-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={address.name}
                onChange={handleAddressChange}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-400"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label className="block text-neutral-600 mb-1">Street Address</label>
              <input
                type="text"
                name="street"
                value={address.street}
                onChange={handleAddressChange}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-400"
                placeholder="123 Market Road"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-neutral-600 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={handleAddressChange}
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-400"
                  placeholder="Faridabad"
                />
              </div>
              <div>
                <label className="block text-neutral-600 mb-1">State/Province</label>
                <input
                  type="text"
                  name="state"
                  value={address.state}
                  onChange={handleAddressChange}
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-400"
                  placeholder="Haryana"
                />
              </div>
            </div>
            <div>
              <label className="block text-neutral-600 mb-1">PIN Code</label>
              <input
                type="text"
                name="pin"
                value={address.pin}
                onChange={handleAddressChange}
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-400"
                placeholder="121001"
              />
            </div>
            <div className="text-right">
              <button
                onClick={handleAddressSave}
                className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-xl hover:bg-indigo-600 transition-all duration-300"
              >
                Save Address
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Ordered Products Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-neutral-600 mb-4">Your Order</h2>
        <div className="space-y-4">
          {orderedProducts.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
              <div>
                <p className="text-neutral-600 font-semibold">{item.name}</p>
                <p className="text-sm text-neutral-500">Qty: {item.quantity}</p>
              </div>
              <div className="text-neutral-600 font-semibold">₹ {item.price * item.quantity}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Total Price & Payment Options */}
      <div className="mb-6">
        <p className="text-xl font-bold text-neutral-600 mb-4">Total: ₹ {totalPrice}</p>

        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="form-radio h-5 w-5 text-indigo-600"
            />
            <span className="text-neutral-600">Cash on Delivery</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="payment"
              value="online"
              checked={paymentMethod === "online"}
              onChange={() => setPaymentMethod("online")}
              className="form-radio h-5 w-5 text-indigo-600"
            />
            <span className={`text-neutral-600 ${paymentMethod === "cod" ? "opacity-50 cursor-not-allowed" : ""}`}>
              Online Payment
            </span>
          </label>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="text-center">
        <button
          onClick={() => {/* place order logic */}}
          className="bg-indigo-500 text-white font-semibold py-3 px-8 rounded-xl hover:bg-indigo-600 transition-all duration-300"
        >
        {(paymentMethod === "cod")? "Place Order" : "Pay now"}  
        </button>
      </div>
    </div>
  );
};

export default CheckoutSection;
