import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FaqCard = ({ header, body }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div className="bg-white px-4 w-full py-8 shadow-md flex rounded-md">
      <div
        className=" w-9 h-9 py-2 px-2.5  rounded-full  text-white bg-[#013350] text-[0.95rem] flex items-center justify-center cursor-pointer"
        onClick={toggleContent}
      >
        {showContent ? (
          <AiOutlineMinus className="font-bold text-lg" />
        ) : (
          <AiOutlinePlus className="font-bold text-lg" />
        )}
      </div>
      <div className="ml-4">
        <h1
          className="py-1 text-[1.1rem] font-normal flex item-center cursor-pointer"
          onClick={toggleContent}
        >
          {header}
        </h1>
        {showContent && <p className="mt-2 text-[1rem]">{body}</p>}
      </div>
    </div>
  );
};

export default FaqCard;
