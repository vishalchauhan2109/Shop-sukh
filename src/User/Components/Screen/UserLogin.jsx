import axios from "axios";
import React, { useState } from "react";
import { API_BASE_URL } from "../Utils/constant";
import { useNavigate } from "react-router-dom";

export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async(e) => {
    e.preventDefault();

    try{
        const submit = await axios.post(`${API_BASE_URL}/login`,{email,password})
        if(submit?.data){
        navigate("/User")
    } catch (error) {
        console.error("Error logging in:", error);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-indigo-500 via-indigo-500 to-indigo-100">

      {/* LEFT - FORM */}
      <div className="w-full md:w-[60%] flex items-center justify-center px-4">

        {/* Animated Border Wrapper */}
        <div className="relative w-full max-w-md">
          
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-white/60 animate-pulse"></div>

          {/* LOGIN CARD */}
          <div className="relative bg-white/10 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-2xl text-white">

            {/* Heading */}
            <h2 className="text-3xl font-bold mb-6 text-center">
              Login
            </h2>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">

              {/* Email */}
              <div>
                <label className="block text-sm mb-1 opacity-80">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 
                  focus:ring-2 focus:ring-white outline-none transition"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm mb-1 opacity-80">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 
                  focus:ring-2 focus:ring-white outline-none transition"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Button */}
              <button className="w-full bg-white text-indigo-600 py-2 rounded-xl font-semibold hover:bg-indigo-100 transition transform hover:scale-105">
                Login
              </button>
            </form>

            {/* Extra Links */}
            <p className="text-sm text-center mt-5 opacity-80">
              Don't have an account?{" "}
              <span className="font-semibold cursor-pointer hover:underline">
                Register
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT - GIF (hidden on mobile) */}
      <div className="hidden md:flex w-[40%] items-center justify-center">
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3IyM3ZyaW5xM2x0cThuNmhnMDNxaW9jY3JhNWZ4aWZpcWh4cmtsNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Hu475i12tHBg94FIeD/giphy.gif"
          alt="login gif"
          className="w-3/4 rounded-3xl border-4 border-indigo-800"
        />
      </div>

    </div>
  );
};  