// src/Components/AddItems.jsx
import React, { useState, useContext } from "react";
import { ProductContext } from "../../../ContextApi/ProductContext";

const AddItems = () => {
  const { products, setProducts } = useContext(ProductContext);

  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    price: "",
    expDate: "",
    description: "",
    color: "",
    images: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setFormData({ ...formData, images: fileURLs });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.weight ||
      !formData.price ||
      !formData.expDate ||
      formData.images.length === 0
    ) {
      alert("Please fill all required fields!");
      return;
    }

    setProducts([...products, formData]);
    console.log("Added Product:", formData);

    setFormData({
      name: "",
      weight: "",
      price: "",
      expDate: "",
      description: "",
      color: "",
      images: [],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-white to-fuchsia-100 flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8 border border-fuchsia-200">
        <h2 className="text-3xl font-bold text-fuchsia-700 text-center mb-6">
          🛍️ Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name *"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-400 outline-none"
              required
            />

            <input
              type="text"
              name="weight"
              placeholder="Weight * (e.g., 500g, 1kg)"
              value={formData.weight}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-400 outline-none"
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Price *"
              value={formData.price}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-400 outline-none"
              required
            />
            <input
              type="date"
              name="expDate"
              value={formData.expDate}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-400 outline-none"
              required
            />
          </div>

          <textarea
            name="description"
            placeholder="Description (optional)"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-400 outline-none min-h-[100px]"
          />

          <input
            type="text"
            name="color"
            placeholder="Color (optional)"
            value={formData.color}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fuchsia-400 outline-none"
          />

          <div className="border-2 border-dashed border-fuchsia-300 rounded-lg p-4 text-center">
            <label className="block text-sm text-gray-600 mb-2 font-medium">
              Upload Product Images *
            </label>
            <input
              type="file"
              name="images"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-600 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-fuchsia-500 file:text-white hover:file:bg-fuchsia-600 transition"
              required
            />
          </div>

          {formData.images.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-3">
              {formData.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="preview"
                  className="w-24 h-24 object-cover rounded-lg border border-fuchsia-200 shadow-sm"
                />
              ))}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            ➕ Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
