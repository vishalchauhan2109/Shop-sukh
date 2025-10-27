// import React, { useEffect } from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const RoundcheckLogin = () => {
  
 
  return (
    <div className="w-[90%] h-50 ml-5 bg-white flex items-center  rounded-2xl p-5 flex-col">
      <FaRegCheckCircle className='text-green-400  h-13 w-13 rounded-full' />
      <h1 className='mt-5 pl-2'>Login Successful!</h1>
      <h4 className='mt-3 pl-2'>Redirecting to dashboard...</h4>


    </div>
  )
}

export default RoundcheckLogin
