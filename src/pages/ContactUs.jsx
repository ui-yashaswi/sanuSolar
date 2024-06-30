import React from 'react'
import formImg from  "../../public/img-container/messages-image.png"
import { BsDashLg } from "react-icons/bs";
import ContactForm from '../component/ContactForm';

function ContactUs() {
  return (
    <div className="w-full h-full flex lg:flex-row flex-col justify-center  items-center py-20 lg:px-40 px-[10px]">
      <img className=' bg-slate-800' src={formImg} alt="" />

      <div className="flex w-full items-center flex-col gap-3 p-8 lg:p-10 bg-slate-800">
        <div className=" flex items-center gap-1">
          <BsDashLg className="text-orange-500 size-8" />
          <h1 className="text-white font-semibold text-xl">TALK WITH US</h1>
          <BsDashLg className="text-orange-500 size-8" />
        </div>

        <h1 className="text-white font-semibold lg:leading-[70px] lg:text-left text-center text-4xl  lg:text-5xl">
          Building With Passion Precision And Pride
        </h1>

        <ContactForm  className="" />
      </div>
    </div>
  );
} 

export default ContactUs
