// src/Components/AddItems.jsx
import React, { useState, useContext } from "react";
import { ProductContext } from "./ProductContext";

const AddItems = () => {
  const { products, setProducts } = useContext(ProductContext);

  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    price: "",
    expDate: "",
    description: "",
    color: "",
    images: [], // array for multiple images
  });

  // handle text field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle multiple image uploads
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file)); // preview purpose
    setFormData({ ...formData, images: fileURLs });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!formData.name || !formData.weight || !formData.price || !formData.expDate || formData.images.length === 0) {
      alert("Please fill all required fields!");
      return;
    }

    setProducts([...products, formData]);
    console.log("Added Product:", formData);

    // clear form
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
    <div className="bg-fuchsia-100 flex items-center flex-col text-neutral-600 p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>

      <form onSubmit={handleSubmit} className="flex flex-col w-[50%] gap-3">
        <input
          type="text"
          name="name"
          placeholder="Product Name *"
          value={formData.name}
          onChange={handleChange}
          className="p-2 rounded-md border"
          required
        />

        <input
          type="text"
          name="weight"
          placeholder="Weight * (e.g., 500g, 1kg)"
          value={formData.weight}
          onChange={handleChange}
          className="p-2 rounded-md border"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price *"
          value={formData.price}
          onChange={handleChange}
          className="p-2 rounded-md border"
          required
        />

        <input
          type="date"
          name="expDate"
          placeholder="Exp Date *"
          value={formData.expDate}
          onChange={handleChange}
          className="p-2 rounded-md border"
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description (optional)"
          value={formData.description}
          onChange={handleChange}
          className="p-2 rounded-md border"
        />

        <input
          type="text"
          name="color"
          placeholder="Color (optional)"
          value={formData.color}
          onChange={handleChange}
          className="p-2 rounded-md border"
        />

        <input
          type="file"
          name="images"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="p-2 rounded-md border"
          required
        />

        {/* Preview images */}
        {formData.images.length > 0 && (
          <div className="flex gap-3 mt-2 flex-wrap">
            {formData.images.map((img, i) => (
              <img
                key={i}
                src={img}
                multiple
          accept="image/*"

                alt="preview"
                className="w-24 h-24 object-cover rounded-md border"
              />
            ))}
          </div>
        )}

        <button
          type="submit"
          className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold p-2 rounded-lg mt-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddItems;
