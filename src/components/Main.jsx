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
    <div>
      <header className="relative">
        <img src={image} alt="Hero" className="w-full min-h-max md:min-h-fit" />
        <div
          className={`absolute top-28 left-5 w-full px-12 h-auto  items-center  ${overlayClasses}`}
        >
          <div className=" text-[3.9rem] w-[42rem]  text-white ">
            <h1 className="text-[#0A98CC]">{textOverlay} </h1>
            <h1>{textOverlay1}</h1>
          </div>
          <div className=" flex-wrap my-6">
            <span className="hover:text-black hover:bg-white cursor-pointer text-sm w-fit flex items-center text-white py-4 px-10 bg-[#0A98CC]">
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
