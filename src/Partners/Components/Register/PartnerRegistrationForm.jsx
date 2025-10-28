// PartnerRegistrationForm.jsx
import React, { useState } from 'react';

export default function PartnerRegistrationForm() {
  const [circlePhoto, setCirclePhoto] = useState(null);
  const [circlePhotoURL, setCirclePhotoURL] = useState('');

  const [additionalPhoto, setAdditionalPhoto] = useState(null);
  const [additionalPhotoURL, setAdditionalPhotoURL] = useState('');

  const [govProof, setGovProof] = useState(null);
  const [govProofURL, setGovProofURL] = useState('');

  const [shopName, setShopName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [address, setAddress] = useState('');

  const handleCirclePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCirclePhoto(file);
      setCirclePhotoURL(URL.createObjectURL(file));  // preview
    }
  };

  const handleAdditionalPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("photo selected");
      setAdditionalPhoto(file);
      setAdditionalPhotoURL(URL.createObjectURL(file));
    }
  };

  const handleGovProofChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGovProof(file);
      if (file.type.startsWith('image/')) {
        setGovProofURL(URL.createObjectURL(file));
      } else {
        setGovProofURL('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap form data collect karke server ko bhej sakte hain via fetch / axios etc.
    const formData = new FormData();
    formData.append('circlePhoto', circlePhoto);
    formData.append('additionalPhoto', additionalPhoto);
    formData.append('govProof', govProof);
    formData.append('shopName', shopName);
    formData.append('phoneNumber', phoneNumber);
    formData.append('emailAddress', emailAddress);
    formData.append('address', address);

    // example:
    // fetch('/api/register-partner', { method: 'POST', body: formData })
    //   .then(...)
    //   .catch(...);

    alert('Form submitted (demo)!');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 m-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">Partner Registration</h2>

      <form onSubmit={handleSubmit}>

        {/* Circle Photo Upload */}
        <div className="flex justify-center mb-6">
          <label className="relative w-32 h-32 border-2 border-dashed border-indigo-500 rounded-full flex items-center justify-center overflow-hidden cursor-pointer">
            { circlePhotoURL ? (
              <img src={circlePhotoURL} alt="Circle Preview" className="w-full h-full object-cover" />
            ) : (
              <span className="text-indigo-500">Upload Photo</span>
            )}
            <input type="file" accept="image/*" required onChange={handleCirclePhotoChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
          </label>
        </div>

        {/* Shop Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Shop Name</label>
          <input 
          required
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={shopName}
            onChange={(e)=>setShopName(e.target.value)}
            placeholder="Enter your shop name"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input 
          required
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={phoneNumber}
            onChange={(e)=>setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input 
          required
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={emailAddress}
            onChange={(e)=>setEmailAddress(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            placeholder="Enter address"
            rows="3"
          />
        </div>

        {/* Additional Photo Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Photo</label>
          <input 
          required
            type="file"
            accept="image/*"
            onChange={handleAdditionalPhotoChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          { additionalPhotoURL && (
            <img src={additionalPhotoURL} required alt="Additional Preview" className="mt-2 w-full h-auto rounded-md border border-gray-200" />
          )}
        </div>

        {/* Government Proof Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Government Proof (ID/Document)</label>
          <input 
          required
            type="file"
            accept="image/*,application/pdf"
            onChange={handleGovProofChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          { govProofURL && (
            <img src={govProofURL} required alt="Gov Proof Preview" className="mt-2 w-full h-auto rounded-md border border-gray-200" />
          )}
          { !govProofURL && govProof && (
            <p className="mt-2 text-sm text-gray-500">Uploaded file: {govProof.name}</p>
          )}
        </div>

        <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500 transition">
          Submit Registration
        </button>

      </form>
    </div>
  );
}
