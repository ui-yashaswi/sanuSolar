import React from "react";
import { RiTeamFill } from "react-icons/ri";
import TeamCard from "../component/TeamCard";

function Team() {
  return (
    <div className="bg-slate-100 w-full h-full lg:px-40 px-[20px] flex flex-col justify-center items-center py-20">
      <div className="flex justify-center items-center  text-orange-500 gap-2">
        <RiTeamFill size={20} />
        <h1 className=" font-medium uppercase tracking-widest ">Our Team</h1>
      </div>

      <div className="flex flex-col justify-center pt-8 items-center gap-8">
        <h1 className="text-5xl  font-bold text-slate-700 capitalize">
          Meet Our Expert Team Members
        </h1>
        <h1 className="text-slate-500 text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          labore.
        </h1>
      </div> 

      <div className="flex pt-20 lg:flex-row flex-col gap-20 lg:justify-between ">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        
      </div>
    </div>
  );
}

export default Team;
