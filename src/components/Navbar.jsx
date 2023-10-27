import React, { useState, useEffect, useRef } from "react";
import { default as MLogo } from "./../assets/images/Lang-Birds-mobile.png";
import { default as Logo } from "./../assets/images/Lang-Birds-final-70.png";
import { LiaEditSolid } from "react-icons/lia";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // New state for the dropdown
  const dropdownRef = useRef(null); // Ref for the dropdown element

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle the dropdown state
  };

  // Close the dropdown when a click occurs outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    // Add the click event listener to the document body
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      // Remove the event listener when the component unmounts
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const services = [
    "Translation",
    "Transcription",
    "Annotation",
    "Localization",
    "Design",
    "Subtitling and Captioning",
    "Copywriting/Content Writing",
  ];

  const Menus = ["Home", "About Us", "Our Services", "Careers", "Contact Us"];

  return (
    <>
      <div className="h-22 w-full bg-white flex justify-between shadow-lg pl-16 sticky top-0 z-10">
        <img src={Logo} alt="logo" className="w-auto py-3 cursor-pointer" />
        <div className="hidden lg:flex lg:w-[73%]  items-center justify-between ml-auto">
          {Menus.map((menu) => {
            return (
              <Link
                to={
                  menu === "Home"
                    ? "/"
                    : `/${menu.toLowerCase().replace(/\s+/g, "-")}`
                }
                className="list-none text-lg hover:text-blue-950 cursor-pointer"
                key={menu}
              >
                {menu}
              </Link>
            );
          })}
          <div
            className="flex relative h-full space-x-2 bg-blue-950 w-[15.5rem] px-6 cursor-pointer  items-center justify-center border-0 text-white hover:opacity-80 "
            onClick={toggleDropdown}
            ref={dropdownRef} // Set the ref to the dropdown element
          >
            <LiaEditSolid className="text-3xl" />
            <span className="flex text-xl  text-center">Order a Service</span>
            {showDropdown && (
              <div className="absolute w-full top-20 right-0 mt-2 bg-blue-950   rounded-sm shadow-md z-50">
                <ul className="py-2">
                  {services.map((service, index) => (
                    <li key={index} className="hover:bg-blue-900  py-2.5">
                      <Link to={`/${service.toLowerCase()}`}>{service}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className=" items-center lg:hidden flex px-8 ">
          <button onClick={toggleMenu}>
            <BiMenu className=" text-4xl" />
          </button>
        </div>
      </div>

      <div className="fixed left-10 hidden lg:flex items-center font-extralight text-[#0A98CC] top-48 justify-between w-[20rem] rotate-90 z-50 transform origin-left p-4 bg-transparent">
        <a href="">GET A QUOTE</a>
        <div className="w-[0.1rem] mx-2 h-12 bg-[#0A98CC] rotate-90 z-50 transform origin-left"></div>
        <a href="">CONTACT US</a>
      </div>
      {/* Mobile   Menu */}
      {isOpen && (
        <div className="fixed md:hidden top-0 left-0 w-screen h-screen  flex justify-center items-center bg-[#0C1220] z-50">
          <button
            className="absolute top-8 right-8 text-white"
            onClick={toggleMenu}
          >
            <AiOutlineClose className=" text-2xl" />
          </button>
          <div className="h-full py-16 space-y-6 w-[50%] ">
            <img
              src={MLogo}
              alt="logo"
              className="w-auto mx-auto py-3 cursor-pointer"
            />
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } space-y-2 items-center text-left`}
            >
              {Menus.map((menu) => {
                return (
                  <li
                    className="list-none text-white text-2xl hover:text-blue-800 cursor-pointer   "
                    key={menu}
                  >
                    {menu}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
