import React from 'react'

const MobileLogin = ({handlepage}) => {

  return (
        <div className="bg-white h-40 rounded-2xl p-5 flex-col">
                <h5 className="text-gray-600 text-[13px]">Mobile Number/Email-id</h5>
                <input type="numeric" inputMode="numeric" pattern="0-9" className=" border-b-2  border-red-500 pl-1 outline-red-400 h-9 w-full mt-2 " />
                <br/>
                <button onClick={handlepage}  className="cursor-pointer w-full bg bg-red-500  h-10 rounded-[10px] mt-5 text-white">Send OTP</button>
        </div>
  )
}
export default MobileLogin
