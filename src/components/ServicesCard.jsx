import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServicesCard = ({ bgColour, serviceTitle, serviceImg, serviceInfo }) => {
  return (
    // ${bgColour}
    <div className="shadow">
      <h1 className={`py-6 bg-[#0d7fa3] text-[17px]  text-white`}>
        {serviceTitle}
      </h1>
      <div className="  text-gray-400  py-6  bg-white">
        <div className="mx-auto text-3xl mb-4 flex justify-center text-black">
          {serviceImg}
        </div>

        <h4 className="px-5 md:px-8 mb-4">{serviceInfo}</h4>
        <Link
          to={`/services/${serviceTitle.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <BsPlusCircle className="mx-auto my-6 text-3xl hover:text-black flex cursor-pointer text-slate-200 justify-center" />
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
