import React from "react";

const HowitworksCard = ({ header, body, page }) => {
  return (
    <div className="group relative text-left">
      <h1 className="text-lg font-medium pb-2 px-8">{header}</h1>
      <p className="text-[1rem]  px-8 border-l text-start border-[#0c1220]">
        {body}{" "}
      </p>
      <button className="absolute text-[0.6rem] font-normal  -left-5 -top-1 rounded-full hover:bg-[#013350] bg-[#0c1220] text-white transition duration-300  group-hover:bg-[#013350]  py-3 px-3.5  ">
        {page}
      </button>
    </div>
  );
};

export default HowitworksCard;
