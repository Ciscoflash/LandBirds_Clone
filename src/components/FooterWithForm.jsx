import React, { Children } from "react";
import { TfiFacebook } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import ScrollToTopButton from "../components/PageUpBtn";
import { default as BgImage } from "../assets/images/bgblue.jpg";

const FooterWithForm = ({ footerText, children }) => {
  return (
    <div
      style={{ backgroundImage: `url(${BgImage})` }}
      className="min-h-screen w-full   pt-20 relative bottom-0 z-5 mt-[20rem]"
    >
      <p className="text-white text-[1.8rem]">{footerText}</p>
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-between h-80 mx-auto w-4/5">
        <div className="flex gap-12 mx-auto mt-16">
          <a href="#">
            {" "}
            <TfiFacebook size={16} color="white" className="" />
          </a>
          <a href="#">
            {" "}
            <TfiLinkedin size={16} color="white" />
          </a>
        </div>
        <div className="text-[#A2AFCB] pb-8 w-full">
          <div className="w-4/4 font-thin  md:w-3/4  m-auto h-[0.015rem] bg-[#A2AFCB] mb-10"></div>
          <p className=" text-sm px-3 md:text-[1rem] font-thin ">
            Designed & Developed By TechProVee © 2023. All rights reserved.
          </p>
        </div>
      </div>
      <div className="absolute  bottom-[40rem] transform translate-y-1/2 flex items-center mx-auto inset-x-0  flex-col ">
        <div className="bottom-1/2  px-2 w-[100%] lg:w-[80%]">{children}</div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default FooterWithForm;
