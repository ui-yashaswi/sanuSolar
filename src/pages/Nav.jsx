import React from 'react'
import logo from "/img-container/logo.svg"


function Nav() {
  return (
    <div className=" w-full h-44 bg-white bg-transparent  flex px-20 items-center ">
      <div className="flex gap-10 w-full h-full items-center justify-between pb-10  ">
        <div className="flex justify-center gap-2 items-center ">
          <img
            className="w-16 h-16 p-2 rounded-full border-x-[5px] border-y-white border-y-4  border-[#47AF34] bg-orange-500"
            src={logo}
            alt=""
          />

          <div>
            <h1 className="font-bold tracking-tighter text-3xl font-sans text-zinc-700">
              Sanu Solar.
            </h1>
            <h1 className="text-[11px] text-zinc-400 font-medium">
              Center Of Free & Renewable Energy
            </h1>
          </div>
        </div>

        <div className=" h-20  flex flex-col  gap-2 ">
          <div className="bg-[#47AF34] rounded-l-full ">
            <ul>
              <li className="flex items-center w-full px-10 justify-around h-14 gap-6 font-bold text-lg text-white  ">
                <a className='p-1 hover:tracking-wider duration-300' href="">About</a>
                <a className='p-1 hover:tracking-wider duration-300' href="">Services</a>
                <a className='p-1 hover:tracking-wider duration-300' href="">Products</a>
                <a className='p-1 hover:tracking-wider duration-300' href="t">Contact</a>
                <a className='p-1 hover:tracking-wider duration-300' href="">Home</a>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-l from-[#47AF34] h-1 w-[39vw] ml-40 ">
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav
