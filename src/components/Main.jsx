import React from "react";
import { default as ManImage } from "../assets/images/image-3.jpg";

const Main = ({ image, textOverlay, children, textPosition }) => {
  const overlayClasses =
    textPosition === "center" ? "text-center" : "text-left";
  return (
    <div>
      <header className="relative">
        <img src={image} alt="Hero" className="w-full" />
        <div
          className={`absolute top-10 left-5 w-full h-full flex items-center  ${overlayClasses}`}
        >
          <div className="bg-black opacity-70 p-4 text-white ">
            <h1>{textOverlay} </h1>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Main;
