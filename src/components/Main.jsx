import React from "react";
import { default as ManImage } from "../assets/images/image-3.jpg";

const Main = ({
  image,
  textOverlay,
  textOverlay1,
  children,
  textPosition,
  bgText,
  route,
}) => {
  const overlayClasses =
    textPosition === "center" ? "text-center" : "text-left";
  return (
    <div className="overflow-hidden">
      <header className="relative">
        <img src={image} alt="Hero" className="w-full min-h-max lg:min-h-fit" />
        <div
          className={`absolute lg:top-28 top-8 left-5 w-full lg:px-12 px-4 h-auto  items-center  ${overlayClasses}`}
        >
          <div className=" lg:text-[3.9rem] w-[42rem] mx-auto md:text-[1.9rem] text-[1.5rem] text-white ">
            {/* text-[#0A98CC]  */}
            <h1 className=" text-white">{textOverlay} </h1>
            <h1>{textOverlay1}</h1>
          </div>
          <div className={`flex-wrap my-3  mx-auto lg:my-6 ${overlayClasses}`}>
            <span className="hover:text-black mx-auto text-[2.1rem] hover:bg-white cursor-pointer text-sm w-fit flex items-center text-white lg:py-4  py-2 px-5 lg:px-10 bg-[#0A98CC]">
              {bgText}
            </span>
            <span className="w-full">{route}</span>
          </div>
        </div>
      </header>
      <main className="mx-auto ">{children}</main>
    </div>
  );
};

export default Main;
