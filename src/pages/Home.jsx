import React from "react";
import Main from "../components/Main";
import { default as handShake } from "../assets/images/handShake.jpg";
import { default as ManImage } from "../assets/images/image-3.jpg";

const Home = () => {
  return (
    <div>
      <Main
        image={ManImage}
        textOverlay={"Welcome to the Translation Office"}
        textPosition={""}
      >
        <div className="w-[80%] relative mx-auto">
          <img src={handShake} alt="Handshake" />
          <div className="bg-[#f3f5f9] w-[60%] block h-auto absolute top-0 right-10 px-16 pt-[4rem]">
            <h6 className="text-[#0d7fa3] text-[1.1rem] leading-6">
              LangBirds | Flying over Your Translation Needs
            </h6>
            <h2 className="mt-[0.4em] text-[32px] text-[#0c1220] leading-14">
              Order Professional Translations in Just a Few Clicks
            </h2>
            <p className="text-[#44474a] text-justify">
              Our team offers a range of professional translation, localization
              & desktop publishing (DTP) services that cater to the various
              demands of businesses across every sector imaginable.
            </p>

            <button
              href="#"
              className="py-[14px] my-4 px-[28px] bg-[#01335d] text-white"
            >
              Read More
            </button>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default Home;
