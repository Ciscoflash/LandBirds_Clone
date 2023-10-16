import React from "react";
import Main from "../components/Main";
import { default as handShake } from "../assets/images/handShake.jpg";
import { default as ManImage } from "../assets/images/image-3.jpg";
import { default as BgImage } from "../assets/images/bgblue.jpg";
import { LiaEditSolid } from "react-icons/lia";
import ServicesCard from "../components/ServicesCard";

const Home = () => {
  return (
    <div className="">
      <Main
        image={ManImage}
        textOverlay={"Open Your Business "}
        textOverlay1={"to the Whole World"}
        textPosition={""}
        bgText={"MORE ABOUT SERVICES"}
      >
        <div className="md:w-[80%] w-full p-4 relative mx-auto my-6 md:my-24">
          <img
            src={handShake}
            alt="Handshake"
            className="w-[70%] h-auto hidden lg:block"
          />
          <div className="bg-[#f3f5f9] lg:w-[50%] w-full  lg:space-y-16 block  lg:absolute text-left lg:top-1/2 lg:right-16 lg:-translate-y-1/2 lg:transform  p-[3.5rem] ">
            <h6 className="text-[#0d7fa3] md:text-[1.5rem] text-[1rem]    ">
              LangBirds | Flying over Your Translation Needs
            </h6>
            <h2 className="mt-[0.4em] text-[1.7rem] mb-8 md:text-[2.2rem]  text-[#0c1220] text-left">
              Order Professional Translations in Just a Few Clicks
            </h2>
            <p className="text-[#44474a] md:text-[1.15rem] mb-8  text-justify">
              Our team offers a range of professional translation, localization
              & desktop publishing (DTP) services that cater to the various
              demands of businesses across every sector imaginable.
            </p>

            <button
              href="#"
              className="py-[14px] md:mb-16 px-[28px] hover:bg-black bg-[#01335d] text-white"
            >
              Read More
            </button>
          </div>
        </div>

        {/* //We offer a wide range of services */}
        <div className="relative lg:h-[70rem] h-[50rem] w-full  bg-red-200">
          <div
            className="my-4 mb-[3rem] bg-cover  bg-center  relative  h-[24rem]  w-full"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <div className=" w-full  mx-auto p-[3.5rem] ">
              <div className="w-[60%] flex-wrap text-[2rem] text-left">
                <span className="text-[#0A98CC]  ">We Offer a Wide</span>
                <span className="text-white">
                  {" "}
                  Range of Translation Services
                </span>
              </div>
              <div className="   grid gap-4 lg:grid-cols-3 grid-cols-2  my-4">
                <ServicesCard />
              </div>
            </div>
          </div>
        </div>

        <div className=" h-10">
          <h1>Hi hhdhhd </h1>
        </div>
      </Main>
    </div>
  );
};

export default Home;
