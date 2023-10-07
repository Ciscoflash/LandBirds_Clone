import React, { useState } from "react";
import { default as MLogo } from "./../assets/images/Lang-Birds-mobile.png";
import { default as Logo } from "./../assets/images/Lang-Birds-final-70.png";
import { LiaEditSolid } from "react-icons/lia";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const Menus = ["Home", "About Us", "Our Services", "Careers", "Contact Us"];
  return (
    <>
      <div className="h-22 w-full bg-white flex justify-between shadow-lg pl-16 sticky top-0">
        <img src={Logo} alt="logo" className="w-auto py-3 cursor-pointer" />
        <div className="hidden lg:flex lg:w-[73%]  items-center justify-between ml-auto">
          {Menus.map((menu) => {
            return (
              <li
                className="list-none text-lg hover:text-blue-950 cursor-pointer   "
                key={menu}
              >
                {menu}
              </li>
            );
          })}
          <div className="flex h-full space-x-2 bg-blue-950 w-[15.5rem] px-6 cursor-pointer  items-center justify-center border-0 text-white hover:opacity-80 ">
            <LiaEditSolid className="text-3xl" />
            <span className="flex text-xl  text-center">Order translation</span>
          </div>
        </div>
        <div className=" items-center lg:hidden flex px-8 ">
          <button onClick={toggleMenu}>
            <BiMenu className=" text-4xl" />
          </button>
        </div>
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
