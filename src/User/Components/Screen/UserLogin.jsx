import axios from "axios";
import React, { useState } from "react";
import { API_BASE_URL } from "../Utils/constant";
import { useNavigate } from "react-router-dom";
import { IoLockClosedOutline, IoMailOutline, IoStorefrontOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Store/userSlice";

export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const loggedinuser = useSelector((state) => state.user);
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const submit = await axios.post(`${API_BASE_URL}/login`, { email, password },{withCredentials:true});
      console.log("Login successful:", submit.data);
      
    
        navigate("/user");
        return submit.data;
    }catch (error) {
  
      dispatch(setUser(handleLogin));
  console.log("Status:", error.response?.status);
  console.log("Backend message:", error.response?.data);
  console.error("Error logging in:", error);
}
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#3338a0] via-[#2a2e85] to-[#1f2368] flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      
      {/* Decorative Background Glows */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#fcc61d] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-40 -right-20 w-60 h-60 bg-[#c59560] rounded-full opacity-10 blur-2xl"></div>

      {/* Main Container Card */}
      <div className="w-full max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8 relative z-10">
        
        {/* LEFT - FORM SECTION */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          
          {/* Header Branding */}
          <div className="flex flex-col items-center md:items-start mb-8 text-center md:text-left">
              {/* <div className="w-16 h-16 bg-gradient-to-br from-[#fcc61d] to-[#eab00c] rounded-2xl flex items-center justify-center shadow-lg shadow-[#fcc61d]/20 mb-4 text-[#3338a0]"> */}
              <img src="/img/logo.png" alt="Icon" className="h-28 w-auto pb-5" />
            {/* </div> */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Welcome Back
            </h2>
            <p className="text-[#c59560] font-medium text-sm mt-1">
              Please enter your details to sign in
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5 w-full">
            
            {/* Email Field */}
            <div>
              <label className="block text-sm mb-2 text-white/80 font-medium">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#c59560]">
                  <IoMailOutline className="w-5 h-5" />
                </span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-white/40 focus:bg-white/15 focus:border-[#fcc61d] focus:ring-2 focus:ring-[#fcc61d]/30 outline-none transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm mb-2 text-white/80 font-medium">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#c59560]">
                  <IoLockClosedOutline className="w-5 h-5" />
                </span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-white/40 focus:bg-white/15 focus:border-[#fcc61d] focus:ring-2 focus:ring-[#fcc61d]/30 outline-none transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full mt-2 bg-[#fcc61d] hover:bg-[#eab00c] text-[#3338a0] font-bold py-4 rounded-2xl transition-all shadow-lg shadow-[#fcc61d]/20 transform hover:-translate-y-0.5">
              Login to Account
            </button>
          </form>

          {/* Extra Links */}
          <p className="text-sm text-center md:text-left mt-6 text-white/60">
            Don't have an account?{" "}
            <span className="font-semibold text-[#fcc61d] cursor-pointer hover:underline">
              Register
            </span>
          </p>
        </div>

        {/* RIGHT - GIF SECTION (hidden on mobile) */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center">
          <div className="relative p-2 bg-gradient-to-tr from-[#c59560] to-[#fcc61d] rounded-3xl shadow-2xl">
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3IyM3ZyaW5xM2x0cThuNmhnMDNxaW9jY3JhNWZ4aWZpcWh4cmtsNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Hu475i12tHBg94FIeD/giphy.gif"
              alt="login illustration"
              className="w-80 h-80 object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
};