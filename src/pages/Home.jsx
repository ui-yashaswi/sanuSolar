import React from "react";
import homeBg from "/img-container/home-1.jpg";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GrMailOption } from "react-icons/gr";
import { AiOutlineRightCircle } from "react-icons/ai";
import { ImPower } from "react-icons/im";
import panel from "/img-container/3-panels.png";
import Nav from "./Nav";

function Home() {
  return (
    <div className=" w-full h-full flex bg-black ">
      <div
        className="relative h-screen w-full bg-cover bg-center "
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className="absolute inset-0   bg-[#190b2f]  bg-opacity-80 flex items-center justify-center">
          <div className=" w-full h-full absolute top-0 left-0 lg:flex hidden">
            <Nav />
          </div>

          <div className="absolute top-32 left-[8vw] lg:flex hidden justify-center">
            <div className="bg-[#47af34] h-34 w-[28vw] flex justify-center items-center p-6 gap-3">
              <div className="bg-white text-[#47af34] h-12  w-12 rounded-full p-2 flex  items-center justify-center ">
                <LuPhoneCall
                  style={{ strokeWidth: "2px", fill: "white" }}
                  className="text-2xl"
                />
              </div>
              <div className="flex flex-col justify-center text-white text-lg font-bold ">
                <h1>Phone No:</h1>
                <h1>+91 6266 3460 17</h1>
              </div>
            </div>

            <div className="bg-[#348f24] h-34 w-[28vw] flex justify-center items-center p-6 gap-3">
              <div className="bg-white text-[#47af34] h-12  w-12 rounded-full p-2 flex  items-center justify-center ">
                <HiOutlineLocationMarker
                  style={{ strokeWidth: "2px", fill: "white" }}
                  className="text-2xl"
                />
              </div>
              <div className="flex flex-col justify-center text-white text-lg font-bold ">
                <h1>Phone No:</h1>
                <h1>+91 6266 3460 17</h1>
              </div>
            </div>

            <div className="bg-[#47af34] h-34 w-[28vw] flex justify-center items-center p-6 gap-3">
              <div className="bg-white text-[#47af34] h-12  w-12 rounded-full p-2 flex  items-center justify-center ">
                <GrMailOption
                  style={{ strokeWidth: "2px", fill: "white" }}
                  className="text-2xl"
                />
              </div>
              <div className="flex flex-col justify-center text-white text-lg font-bold ">
                <h1>Phone No:</h1>
                <h1>+91 6266 3460 17</h1>
              </div>
            </div>
          </div>

          <div className="mt-60 w-full flex lg:flex-row flex-col justify-between  items-center lg:px-40 px-[20px] ">
            <div className="flex w-full flex-col items-center justify-center lg:items-start  gap-10">
              <h1 className=" text-5xl  text-white font-bold leading-[70px] lg:text-left text-center ">
                Renewable Energy Solutions that Deliver Financial Savings
              </h1>

              <h1 className=" text-lg text-white lg:text-left text-center ">
                Provide Solar Panels And Renewable Energy Products
              </h1>

              <div className="flex gap-3  bg-orange-500 hover:bg-orange-800 text-white w-64 justify-center items-center py-4 rounded-full hover:border-2  hover:border-white text-xl ">
                <button className=" font-semibold ">Enquire Online </button>
                <AiOutlineRightCircle size={30} />
              </div>
            </div>

            <div className="relative  w-full lg:flex hidden flex justify-end  text-orange-500">
              <ImPower size={400} />

              <img
                className="absolute w-80 right-20 -top-10"
                src={panel}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
