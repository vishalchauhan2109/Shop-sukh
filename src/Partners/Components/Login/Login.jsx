import React, { useState } from "react";
import { IoCallOutline, IoStorefrontOutline, IoRocketOutline } from "react-icons/io5";
import MobileLogin from "./MobileLogin";
import OtpLogin from "./OtpLogin";
import RoundcheckLogin from "./RoundcheckLogin";

const Login = () => {
  const [val, setVal] = useState("mobilePage");

  // To handle mobile/email submit
  const handlePage = () => {
    setVal("otpPage");
  };

  // To handle otp submission
  const handleOtp = () => {
    setVal("loginSuccessful");
  };
  
  const changeNumber = () => {
    setVal("mobilePage");
  };

  return (
    // Fullscreen wrapper with a premium gradient and subtle background blur effect
    <div className="min-h-screen w-full bg-gradient-to-br from-[#3338a0] via-[#2a2e85] to-[#1f2368] flex items-center justify-center p-4 md:p-6 lg:p-8 relative overflow-hidden">
      
      {/* --- ADVANCED DECORATIVE BACKGROUND ELEMENTS --- */}
      {/* These add depth and fill blank space */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#fcc61d] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-40 -right-20 w-60 h-60 bg-[#c59560] rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/3 w-10 h-10 border-2 border-[#c59560] rounded-full opacity-20 animate-pulse"></div>

      {/* --- MAIN CARD CONTAINER --- */}
      {/* Market-standard "Glassmorphism" card: semi-transparent, blurred, and shadowed */}
      <div className="w-full max-w-6xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-10 lg:p-12 gap-6 md:gap-12 relative z-10">
        
        {/* --- LEFT SIDE: FORM SECTION --- */}
        <div className="w-full md:w-1/3 flex flex-col justify-center order-2 md:order-1">
          {/* Header Branding (Unified and Refined) */}
          <div className="flex flex-col items-center md:items-start mb-8 text-center md:text-left">
            <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#fcc61d] to-[#eab00c] rounded-3xl flex items-center justify-center shadow-lg shadow-[#fcc61d]/20 rotate-[-10deg]">
                    <IoStorefrontOutline className="w-10 h-10 text-[#3338a0] rotate-[10deg]" />
                </div>
                {/* Small decorative icon */}
                <div className="absolute -top-2 -right-3 w-8 h-8 bg-[#c59560] rounded-full flex items-center justify-center border-2 border-[#1f2368]">
                    <IoRocketOutline className="w-4 h-4 text-white"/>
                </div>
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tighter leading-none">Retail<br/><span className="text-[#fcc61d]">Command</span></h1>
            <p className="text-[#c59560] text-lg mt-4 font-medium max-w-xs mx-auto md:mx-0">
              Your all-in-one command center for smarter inventory and sales management.
            </p>
          </div>

          {/* Dynamic Component View (Form Area) */}
          {/* We add a subtle divider line for structure */}
          <div className="w-full border-t border-white/10 pt-8 mt-2">
            {val === "mobilePage" ? (
              <MobileLogin handlepage={handlePage} />
            ) : val === "otpPage" ? (
              <OtpLogin handleOtp={handleOtp} changeNumber={changeNumber} />
            ) : (
              <RoundcheckLogin />
            )}
          </div>
          
          {/* Small Footer Text for mobile */}
          <p className="md:hidden text-center text-white/30 text-xs mt-10">© 2024 RetailOps. All rights reserved.</p>
        </div>

        {/* --- RIGHT SIDE: VISUAL/INFO SECTION --- */}
        {/* This area is optimized differently for mobile vs desktop */}
        
        {/* LAPTOP/TABLET VIEW (Hidden on mobile) */}
        <div className="hidden md:flex md:w-3/5 h-full flex-col items-center justify-center order-1 md:order-2 pl-10">
            {/* Premium Frame for the GIF */}
            <div className="w-full max-w-lg aspect-[4/3] bg-black/20 rounded-[32px] p-3 shadow-inner border border-white/5 relative group overflow-hidden">
                {/* Subtle hover glow effect on frame */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcc61d]/0 via-[#fcc61d]/5 to-[#fcc61d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <img 
                className="w-full h-full object-cover rounded-[28px] shadow-xl" 
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3IyM3ZyaW5xM2x0cThuNmhnMDNxaW9jY3JhNWZ4aWZpcWh4cmtsNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Hu475i12tHBg94FIeD/giphy.gif" 
                alt="Retail management dashboard visualization" 
                />
            </div>
            
            {/* Added Testimonial/Info Block to fill space */}
            <div className="mt-10 bg-white/5 border border-white/10 p-6 rounded-2xl w-full max-w-lg flex items-center gap-4">
                <div className="text-[#fcc61d] text-5xl">“</div>
                <p className="text-white/80 italic text-base flex-1">
                  "RetailCommand cut our stock-taking time by 50%. Best decision we made for the shop."
                </p>
                <div className="text-right">
                    <p className="text-white font-bold text-sm">Rajesh K.</p>
                    <p className="text-[#c59560] text-xs">SuperStore Owner</p>
                </div>
            </div>
            <p className="text-white/30 text-xs mt-6">© 2024 RetailOps. All rights reserved.</p>
        </div>
        
        {/* MOBILE VIEW (Replaces the right side on mobile) */}
        {/* On mobile, we just show a smaller, branded version of the GIF area above the form */}
        <div className="md:hidden w-full order-1 flex flex-col items-center mb-8">
             <img 
                className="w-32 h-32 object-cover rounded-full shadow-2xl border-4 border-[#fcc61d]" 
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3IyM3ZyaW5xM2x0cThuNmhnMDNxaW9jY3JhNWZ4aWZpcWh4cmtsNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Hu475i12tHBg94FIeD/giphy.gif" 
                alt="Retail management icon" 
             />
        </div>

      </div>
    </div>
  );
};

export default Login;