import React from "react";
import { LiaEditSolid } from "react-icons/lia";

const ServicesCard = ({ bgColour = "#0A98CC" }) => {
  return (
    <div className="">
      <h1 className={`py-5 bg-${bgColour} text-lg  text-white`}>
        Localization
      </h1>
      <div className=" text-sm text-gray-400 py-6 space-y-8 bg-white">
        <LiaEditSolid className="mx-auto text-4xl flex justify-center" />
        <h4 className="px-8 text-[1rem]">
          Localization Localization is conversion of the terminology and
          cultural nuance from one part of the world’s language, usually for
          marketing purposes,
        </h4>
      </div>
    </div>
  );
};

export default ServicesCard;
