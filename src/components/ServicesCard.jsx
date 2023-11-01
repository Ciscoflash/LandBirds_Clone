import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServicesCard = ({ bgColour, serviceTitle, serviceImg, serviceInfo }) => {
  return (
    // ${bgColour}
    <div className="shadow">
      <h1 className={`py-5 bg-[#0d7fa3] text-lg  text-white`}>
        {serviceTitle}
      </h1>
      <div className=" text-sm text-gray-400 py-6 space-y-8 bg-white">
        <LiaEditSolid className="mx-auto text-4xl flex justify-center" />
        <h4 className="px-8 text-[1rem]">{serviceInfo}</h4>
        <Link
          to={`/services/${serviceTitle.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <BsPlusCircle className="mx-auto text-3xl hover:text-black flex cursor-pointer text-slate-200 justify-center" />
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
