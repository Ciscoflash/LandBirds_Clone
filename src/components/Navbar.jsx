import React from "react";
import { default as Logo } from "./../assets/images/Lang-Birds-final-70.png";

const Navbar = () => {
  const Menus = ["Home", "About Us", "Our Services", "Careers", "Contact Us"];
  return (
    <>
      <div className="h-22 w-full bg-white flex shadow-lg pl-16">
        <img src={Logo} alt="logo" className="w-auto py-3" />
        <div className="flex w-[65%]  items-center justify-between ml-auto">
          {Menus.map((menu) => {
            return (
              <li className="list-none " key={menu}>
                {menu}
              </li>
            );
          })}
          <div className="flex h-full bg-blue-950 w-[12.5rem]  items-center justify-center border-0 text-white hover:opacity-80 ">
            <span className="flex  text-center">Order translation</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
