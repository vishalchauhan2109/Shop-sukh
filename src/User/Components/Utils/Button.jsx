// Button.jsx
import React from "react";

const Button = ({label}) => {
  return (
    <button
      className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-xl shadow-md hover:bg-indigo-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 active:scale-95"
    >{label}
    </button>
  );
};

export default Button;
