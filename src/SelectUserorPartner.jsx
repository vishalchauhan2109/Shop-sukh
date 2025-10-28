// FrontPage.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {  ProductContext } from './ContextApi/ProductContext';
import Header from './Partners/Components/Header';

export default function SelectUserorPartner({ onSelectRole }) {
  const [role, setRole] = useState('');
  const {identity,setIdentity} = useContext(ProductContext);
//   console.log(Identity.identity)
  const handleSelect = (selected) => {
    setRole(selected);
    if (onSelectRole) {
      onSelectRole(selected);
    }
  };
  const handleIdentity = ()=>{
    setIdentity(role)
  }
  console.log( role)
  console.log("", identity);


  return (

    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Welcome to Partner Portal</h1>
        <p className="text-lg text-gray-600 mb-8">
          Please tell us whether you are a <span className="font-medium text-indigo-600">User</span> or a <span className="font-medium text-indigo-600">Shopkeeper</span> so we can personalise your experience.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-6 py-3 rounded-md font-medium border-2 transition
              ${role === 'user'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-100'}`}
            onClick={() => handleSelect('user')}
          >
            I am a User
          </button>
          <button
            className={`px-6 py-3 rounded-md font-medium border-2 transition
              ${role === 'shopkeeper'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-100'}`}
            onClick={() => handleSelect('shopkeeper')}
          >
            I am a Shopkeeper
          </button>
        </div>

        {role && (
          <div className="text-center">
            <p className="text-md text-gray-700 mb-4">
              You selected: <span className="font-medium text-indigo-600">{role === 'user' ? 'User' : 'Shopkeeper'}</span>
            </p>

            <Link to ={(role === "shopkeeper")? "/partner":"/User"}>
            <button
              className="px-8 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-500 transition"
              onClick={() => {
                handleIdentity()
                // proceed to next page or form
                console.log('Proceed for role:',role);
              }}
            >
              Continue
            </button>
              </Link>
          </div>
        )}
      </div>
    </div>
  );
}
