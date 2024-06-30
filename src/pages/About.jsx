import React from 'react'
import { PiPlantFill } from "react-icons/pi";
import textImg from "/img-container/textImg.jpg";
import { RiArrowRightDoubleFill } from "react-icons/ri";

function About() {
  return (
    <div className=" w-full h-full   flex lg:flex-row flex-col justify-center items-center bg-white py-20">
      <div className="flex flex-col justify-center items-center gap-6 ">
        <div className="flex justify-center items-center text-orange-500 gap-2">
          <PiPlantFill size={20} />
          <h1 className=" font-medium uppercase tracking-widest ">About Us</h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-5xl  font-bold text-slate-700 text-center capitalize">
            Project Supplier And Installer
          </h1>
          <h1 className="text-slate-500 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            labore.
          </h1>
        </div>

        <div className=" w-full flex lg:flex-row flex-col items-center lg:px-40 px-[20px]   pt-20 justify-between gap-20">
          <div className="flex  w-full gap-10 relative justify-end">
            <div className="w-40 h-60 flex flex-col items-cener absolute  left-6  rounded-b-full border-t-4 border-[#ffffff] border-dashed bg-orange-500 pt-8  gap-4 px-5">
              <h1 className="text-white text-lg text-center font-semibold">
                We Have Experience of
              </h1>

              <h1 className="text-6xl p-5 h-28 w-28  bg-[#47AF34] rounded-full border-white text-white  font-bold border-4  ">
                8+
              </h1>
            </div>

            <img
              className="rounded-lg lg:w-[28vw]"
              src="https://html.vecurosoft.com/energiso/demo/assets/img/about/abour4-1.jpg"
              alt=""
            />

            <div className="absolute rounded-lg  h-40 right-60 shadow-lg bottom-20 ">
              <img className=" rounded-xl bottom-10 w-[80vw] lg:w-[25vw] relative" src={textImg} alt="" />

              <div className="flex flex-col gap-3 absolute left-0 top-0 p-3">
                <h1>Solar Energy</h1>
                <h1>Lorem ipsum dolor sit, udek amet .</h1>

                <div className="w-28 flex flex-col justify-center h-[2px] bg-[#47AF34]"></div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <RiArrowRightDoubleFill className="text-[#47AF34]" />
                    <h1 className="text-sm text-zinc-500">
                      Lorem ipsum dolor, sit amet .
                    </h1>
                  </div>

                  <div className="flex items-center gap-3">
                    <RiArrowRightDoubleFill className="text-[#47AF34]" />
                    <h1 className="text-sm text-zinc-500">
                      Lorem ipsum dolor, sit amet .
                    </h1>
                  </div>

                  <div className="flex items-center gap-3">
                    <RiArrowRightDoubleFill className="text-[#47AF34]" />
                    <h1 className="text-sm text-zinc-500">
                      Lorem ipsum dolor, sit amet .
                    </h1>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center lg:items-en justify-center lg:w-[40vw] ">
            <h1 className="text-zinc-500 italic font-serif text-xl text-center lg:text-rigt leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              similique rem excepturi natus provident hpdoel deo demskl laudanti rcitationem quas
              aliquam repellendus iure reprehenderit quam veritatis maiores,
              perferendis adipisci ab iusto dolorem.
            </h1>

            <div className="  w-60 h-[2px] bg-[#47AF34]"></div>

            <h1 className='font-bold text-3xl text-slate-800 lg:pt-10'>Sumesh kumar sahu</h1>
            <h1>Owner & CEO of Sanu Solar</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
