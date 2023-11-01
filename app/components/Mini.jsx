import { BsQrCode } from "react-icons/bs"


import React from 'react'

const Mini = () => {
  return (
        <div>
          <div className=" h-full flex flex-col gap-5 items-center justify-center ">
                <div className="w-28 h-32 bg-slate-500 rounded-full  text-left items-center flex justify-center
                      ">
                        B L
                  </div>
              
                  <div className="flex-col justify-center items-center flex w-full capitalize ">
                            <div className="text-xl font-bold text-gray-400"> Name: bash laka
                            </div>
                            <div className="text-xs">Rank: DPO</div>
                            <div className="text-xs">Phone number: DPO</div>
                            <div className="text-xs">Email: bash@gmail.com</div>
                  </div>  
                  <div className=" w-full flex justify-center items-center ">
                  <i className="text-center text-9xl"><BsQrCode/></i>
                  </div>
                            
          </div>
          </div>
  )
}

export default Mini