import React from "react";
import tm1 from "/img-container/employes-2.png";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";

function TeamCard() {
  return (
    <div className="flex relative flex-col items-center justify-center  w-[100vw] bg-white h-[70vh]  lg:w-[22vw] ">
      <div className="  absolute flex items-center justify-center  lg:w-full z-20   top-0 px-4 ">
        <img
          className="rounded-xl px-4  lg:w-full drop-shadow-lg"
          src={tm1}
          alt=""
        />
      </div>

      <div className="flex flex-col w-full shadow-lg gap-8 pt-[10vh] pb-10  z-10 rounded-md shadow-lg  bottom-0   lg:w-full">
        <div className="flex  justify-center gap-5 text-slate-800 ">
          <RiFacebookFill className="bg-zinc-200 p-1 rounded-md " size={28} />
          <FaInstagram className="bg-zinc-200 p-1 rounded-md" size={28} />
          <FaPinterestP className="bg-zinc-200 p-1 rounded-md" size={28} />
          <RiLinkedinFill className="bg-zinc-200 p-1 rounded-md" size={28} />
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className=" text-slate-800 text-2xl font-bold text-nowrap">
            {" "}
            Courteny Henry
          </h1>
          <h1 className="text-slate-500 font-medium text-nowrap">
            {" "}
            Solar Expert
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
