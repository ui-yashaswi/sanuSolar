import React from 'react'
import tm1 from "/img-container/employes-2.png"
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";

function TeamCard() {
  return (
    <div className="flex flex-col relative w-full bg-red-700 h-[90vh] lg:w-[22vw] lg:h-[60vh]">

      <div className="flex fjustify-center absolute lg:w-full w-[80vw] bg-red-900 z-20  top-3 left-0 ">
        <img className="rounded-xl px-4  lg:w-full drop-shadow-lg" src={tm1} alt="" />
      </div>

      <div className="flex flex-col gap-8 pt-32 pb-10 bg-white z-10 rounded-md shadow-lg absolute bottom-0   lg:w-full">
        <div className="flex  justify-center gap-5 text-slate-800 ">
          <RiFacebookFill className="bg-zinc-200 p-1 rounded-md " size={28} />
          <FaInstagram className="bg-zinc-200 p-1 rounded-md" size={28} />
          <FaPinterestP className="bg-zinc-200 p-1 rounded-md" size={28} />
          <RiLinkedinFill className="bg-zinc-200 p-1 rounded-md" size={28} />
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className=" text-slate-800 text-2xl font-bold text-nowrap"> Courteny Henry</h1>
          <h1 className="text-slate-500 font-medium text-nowrap"> Solar Expert</h1>
        </div>
      </div>
    </div>
  );
}

export default TeamCard
