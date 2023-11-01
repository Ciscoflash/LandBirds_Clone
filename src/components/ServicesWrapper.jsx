import React from "react";
import Footer from "./Footer";
import CarearBg from "../assets/images/carearBg.jpg";

const ServicesWrapper = ({ serviceName, content }) => {
  return (
    <>
      <div
        className="bg-cover bg-center h-52 w-full md:h-64 "
        style={{ backgroundImage: `url(${CarearBg})` }}
      >
        <div className="pt-14 flex items-center justify-center flex-col gap-8 md:pt-24">
          <h1 className="text-white text-4xl">{serviceName}</h1>
          <p className="text-slate-100 text-[1rem]">
            HOME / ALL SERVICES / SERVICES / {serviceName.toUpperCase()}
          </p>
        </div>
      </div>
      <div className="w-full   px-8  lg:px-1 py-[4rem] mx-auto lg:w-[70%]">
        <p className="text-[#44474a] md:text-[1.15rem] mb-8  text-justify">
          {content}
        </p>
      </div>
      <div className="relative bottom-0 z-20">
        <Footer footerText="Stay Updated" />
      </div>
    </>
  );
};

export default ServicesWrapper;
