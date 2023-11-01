import React from "react";
import { Link } from "react-scroll";

const AngledComponent = () => {
  return (
    <div className="fixed left-10 hidden lg:flex items-center font-light text-[#0A98CC] top-48 justify-between w-[20rem] rotate-90 z-50 transform origin-left p-4 bg-transparent">
      <Link to="QuoteSection" spy={true} smooth={true} duration={500}>
        <a href="">GET A QUOTE</a>
      </Link>
      <div className="w-[0.1rem] mx-2 h-12 bg-[#0A98CC] rotate-90 z-50 transform origin-left"></div>
      <Link
        to="contactSection"
        spy={true}
        smooth={true}
        duration={500}
        // onClick={() => handleServiceClick(service)}
      >
        <a href="">CONTACT US</a>
      </Link>
    </div>
  );
};

export default AngledComponent;
