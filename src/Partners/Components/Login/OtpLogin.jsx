import React from "react";
import { Link } from "react-router-dom";
import AdminDashboard from "../Utils/AdminDashboard";

const OtpLogin = ({handleOtp,changeNumber}) => {
  return (
    <div className="w-[90%] h-70 ml-5 bg-white  rounded-2xl p-5 flex-col">
      <div className="w-full flex-col justify-center pl-25">
        <h6 className="text-[14px] pl-5">OTP sent to</h6>
        <h6 className="text-[14px] ">+91 Mobile no.</h6>
        <h6 onClick={changeNumber} className="cursor-pointer text-[12px] pl-4 mt-2 text-red-400">change number</h6>
      </div>
      <div className=" mt-6">
        <h6 className="pl-25">Enter 6 digit OTP</h6>
        <input type="numeric" maxLength={6} minLength={6} className="tracking-[25px] text-[] rounded-[10px] h-10 mt-3 pl-4 ml-[18%] w-57 bg-gray-200 " />
        {/* <Link to={<AdminDashboard/>}> */}
        <button onClick={handleOtp} className="text-[13px] text-white w-[70%] h-10 rounded-[10px] mt-4 ml-[18%] bg-green-400">Verify OTP</button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default OtpLogin;
