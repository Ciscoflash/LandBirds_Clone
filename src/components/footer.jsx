import React from "react";
import { TfiFacebook } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import ScrollToTopButton from "../components/PageUpBtn";
const Footer = () => {
  return (
    <div className="min-h-full w-full  bg-blue-950 py-10 relative bottom-0 z-20">
      <div className="flex gap-10 justify-center pt-96 mb-24">
        <a href="#">
          {" "}
          <TfiFacebook size={16} color="white" className="" />
        </a>
        <a href="#">
          {" "}
          <TfiLinkedin size={16} color="white" />
        </a>
      </div>
      <div>
        <div className="w-4/4 md:w-3/4  m-auto h-px bg-white mb-10"></div>
        <p className="text-white text-sm px-3 md:text-xl">
          Designed & Developed By Creative Designs © 2023. All rights reserved.
        </p>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Footer;
