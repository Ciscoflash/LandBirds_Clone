import React from "react";
import Main from "../components/Main";
import CarearBg from "../assets/images/carearBg.jpg";
import Form from "../components/Form";
const Careers = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-52 w-full md:h-64 "
        style={{ backgroundImage: `url(${CarearBg})` }}
      >
        <div className="pt-14 flex items-center justify-center flex-col gap-5 md:pt-24">
          <h1 className="text-white text-3xl">Career</h1>
          <p className="text-white">HOME / CAREERS</p>
        </div>
      </div>

      <div className="py-20">
        <p className="text-2xl lg:text-4xl">
          Submit Your CV Now <br className="md:hidden" /> And Be Welcome{" "}
          <br className="hidden md:block" /> on Board
        </p>
        <Form
          details={"Enter Your Details Please"}
          FirstNameL={"Enter First Name"}
          LastNameL={"Enter Last Name"}
        />
      </div>
    </div>
  );
};

export default Careers;
