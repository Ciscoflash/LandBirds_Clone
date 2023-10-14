import React from "react";
import Main from "../components/Main";
import { default as handShake } from "../assets/images/handShake.jpg";
import { default as ManImage } from "../assets/images/image-3.jpg";
import { default as BgImage } from "../assets/images/bgblue.jpg";

const Home = () => {
  return (
    <div>
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
            className="w-[70%] h-auto hidden md:block"
          />
          <div className="bg-[#f3f5f9] md:w-[50%] w-full  md:space-y-16 block  md:absolute text-left md:top-1/2 md:right-16 md:-translate-y-1/2 md:transform  p-[3.5rem] ">
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
        <div
          className="my-4 bg-cover bg-center h-[20rem] w-screen"
          style={{ backgroundImage: `url(${BgImage})` }}
        ></div>
      </Main>
    </div>
  );
};

export default Home;
