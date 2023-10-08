import React from "react";
import Main from "../components/Main";
import CarearBg from "../assets/images/carearBg.jpg";
import form from "../components/form";
const Carear = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-52 w-full md:h-64 "
        style={{ backgroundImage: `url(${CarearBg})` }}
      >
        <div className="pt-14 flex items-center justify-center flex-col gap-5 md:pt-24">
          <h1 className="text-white text-3xl">Career</h1>
          <p className="text-white">HOME / CAREERS</p>
        </div>
      </div>
    </div>
  );
};

export default Carear;
