import React from "react";
import { TfiFacebook } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import ScrollToTopButton from "./PageUpBtn";
import { default as BgImage } from "../assets/images/bgblue.jpg";
// bg-blue-950
const Footer = ({ footerText }) => {
  return (
    <div
      style={{ backgroundImage: `url(${BgImage})` }}
      className=" h-[25rem] w-full   pt-20 relative bottom-0 z-20"
    >
      <p className="text-white text-[1.8rem]">{footerText}</p>
      <div className="flex flex-col justify-between h-[80%] mx-auto w-[80%]">
        <div className="flex gap-12 mx-auto mt-8">
          <a href="#">
            {" "}
            <TfiFacebook size={16} color="white" className="" />
          </a>
          <a href="#">
            {" "}
            <TfiLinkedin size={16} color="white" />
          </a>
        </div>
        <div className="text-[#A2AFCB]">
          <div className="w-4/4 font-thin  md:w-3/4  m-auto h-[0.015rem] bg-[#A2AFCB] mb-10"></div>
          <p className=" text-sm px-3 md:text-[1rem] font-thin ">
            Designed & Developed By TechProVee © 2023. All rights reserved.
          </p>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default Footer;
