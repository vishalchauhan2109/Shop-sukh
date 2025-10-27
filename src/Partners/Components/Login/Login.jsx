import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import MobileLogin from "./MobileLogin";
import OtpLogin from "./OtpLogin";
import RoundcheckLogin from "./RoundcheckLogin";

const Login = () => {
  const [val, setVal] = useState("mobilePage");

  //to handle mobile/email submit
  const handlePage = () => {
    setVal("otpPage");
    console.log(val);
  };

  // to handle otp submission
  const handleOtp = () => {
    setVal("loginSuccessful");
    console.log(val);
  };
  
  const changeNumber = () =>{
    setVal("mobilePage")
  }
  
  return (
    <div className="w-screen h-screen bg-indigo-500 flex items-center justify-center">
      <div className="w-[35%] ">
        <div className=" flex-col h-40 justify-center items-center pt-5 pl-25">
          <IoCallOutline className="bg-white rounded-2xl w-13 h-13 ml-17 mb-2 text-red-400" />
          <h1 className="text-white text-2xl ml-10">Retail Login</h1>
          <h6 className="text-white text-[15px] ml-2">
            Manage your shop with ease
          </h6>
        </div>
        {val === "mobilePage" ? (
          <MobileLogin handlepage={handlePage} />
        ) : val === "otpPage" ? (
          <OtpLogin handleOtp = {handleOtp} changeNumber = {changeNumber} />
        ) : (
         (<RoundcheckLogin />)
        )}
      </div>
      <div>
        <img className="w-100 h-100 ml-30 rounded-[20px]" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3IyM3ZyaW5xM2x0cThuNmhnMDNxaW9jY3JhNWZ4aWZpcWh4cmtsNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Hu475i12tHBg94FIeD/giphy.gif" alt="" />
      </div>
    </div>
  );
};

export default Login;
