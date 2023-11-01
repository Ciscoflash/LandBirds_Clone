import React from "react";
import Main from "../components/Main";
import { default as handShake } from "../assets/images/handShake.jpg";
import { default as ManImage } from "../assets/images/image-3.jpg";
import { default as BgImage } from "../assets/images/bgblue.jpg";
import { default as WhyusImg } from "../assets/images/whyus.jpg";
import { default as workingdesk } from "../assets/images/workingdesk2.jpg";
import { HiOutlineAnnotation, HiOutlineTranslate } from "react-icons/hi";
import { CgTranscript } from "react-icons/cg";

import { BiBookContent } from "react-icons/bi";
import { SiTaichigraphics, SiLocal } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";

import { PiClosedCaptioningThin } from "react-icons/pi";
import ServicesCard from "../components/ServicesCard";
import HowitworksCard from "../components/HowitworksCard";
import FaqCard from "../components/FaqCard";
import QuoteForm from "../components/QuoteForm";
import FooterWithForm from "../components/FooterWithForm";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans font-light text-16">
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
          <div className="bg-[#f3f5f9] lg:py-[8rem] py-[3rem] px-6 space-y-5 lg:px-[3.5rem]  lg:w-[50%] w-full  lg:space-y-10 block  lg:absolute text-left lg:top-1/2 lg:right-16 lg:-translate-y-1/2 lg:transform ">
            <h6 className="text-[#0d7fa3] text-[18px]   ">
              LangBirds | Flying over Your Translation Needs
            </h6>
            <h2 className="mt-[0.4em] text-[1.7rem] mb-4 md:text-[2.4rem] font-light  text-[#0c1220] text-left">
              Order Professional Translations in Just a Few Clicks
            </h2>
            <p className="text-[#44474a] text-[17px] mb-4  text-justify">
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

        {/* //We offer a wide range of services ;*/}
        <div className="relative bg-[#f3f5f9] h-auto w-full border-b ">
          <div
            className="my-[4rem] mb-[3rem] bg-cover  bg-center   w-full"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <div className="w-[80%] py-[2rem] md:py-[6rem] mx-auto ">
              <div className="md:w-[60%] w-[80%]   py-[3rem] flex-wrap md:text-[54px] text-[2rem] text-left">
                <span className="text-[#0A98CC]  ">We Offer a Wide</span>
                <span className="text-white"> Range of Services</span>
              </div>
              <div className=" md:py-[4rem] pb-16 grid gap-4  md:gap-8 lg:grid-cols-3 grid-cols-2 my-4">
                <ServicesCard
                  serviceTitle={"Localization"}
                  serviceImg={<SiLocal />}
                  serviceInfo=" Localization Localization is conversion of
                   the terminology and cultural nuance from one part of the
                   world’s language, usually for marketing purposes,"
                />
                <ServicesCard
                  serviceTitle={"Translation"}
                  serviceImg={<HiOutlineTranslate />}
                  serviceInfo="Translation, simply put, is the intellectual process carried out by a translator of conveying the meaning of a source text (Arabic, or AR, for example)"
                />
                <ServicesCard
                  serviceTitle={"Transcription"}
                  serviceImg={<CgTranscript />}
                  serviceInfo="Translation, simply put, is the intellectual process carried out by a translator of conveying the meaning of a source text (Arabic, or AR, for example)"
                />
                <ServicesCard
                  // className="hidden"
                  serviceTitle={"Content Writing"}
                  serviceImg={<BiBookContent />}
                  serviceInfo="Translation, simply put, is the intellectual process carried out by a translator of conveying the meaning of a source text (Arabic, or AR, for example)"
                />
                <ServicesCard
                  serviceTitle={"Annotation"}
                  serviceImg={<HiOutlineAnnotation />}
                  serviceInfo="Translation, simply put, is the intellectual process carried out by a translator of conveying the meaning of a source text (Arabic, or AR, for example)"
                />
                <ServicesCard
                  serviceTitle={"Subtitling and Captioning"}
                  serviceImg={<PiClosedCaptioningThin />}
                  serviceInfo="Translation, simply put, is the intellectual process carried out by a translator of conveying the meaning of a source text (Arabic, or AR, for example)"
                />
                <ServicesCard
                  serviceTitle={"Design"}
                  serviceImg={<SiTaichigraphics />}
                  serviceInfo="Translation, simply put, is the intellectual process carried out by a translator of conveying the meaning of a source text (Arabic, or AR, for example)"
                />
                <ServicesCard
                  // className="hidden"
                  serviceTitle={"Copywriting"}
                  serviceImg={<TfiWrite />}
                  serviceInfo="Translation, simply put, is the intellectual process carried out by a translator of conveying the meaning of a source text (Arabic, or AR, for example)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why Us SECTION */}
        <div className="relative w-full  bg-[#f3f5f9] flex items-center lg:pb-16">
          <div className="md:w-[80%] bg-[#f3f5f9] w-full px-8 lg:px-4 pt-[5rem] grid  lg:grid-cols-2  mx-auto  ">
            <div className="w-[100%] ">
              <img src={WhyusImg} alt="Why-Us" className="w-full" />
            </div>

            <div className=" lg:w-[100%] w-full py-4 md:py-1  text-left   lg:px-[3rem] ">
              <h6 className="text-[#0d7fa3] md:text-[2rem] text-[1.8rem] py-4 md:py-0   ">
                Why Us?
              </h6>
              <ul className="  list-disc list-left pl-6 text-[1.1rem] md:text-[0.84rem] lg:text-[1.08rem] space-y-1 mb-8   text-[#0c1220] ">
                <li>
                  Exceptional service: Our clients will receive exceptional
                  service through our translated and localized product.{" "}
                </li>
                <li>
                  Highly experienced team with a proven track record in
                  providing top quality services to clients across the globe.
                </li>

                <li>
                  Guarantee of confidentiality: LangBirds commits itself to our
                  internal policy on confidentiality, giving our clients peace
                  of mind that their documents are in safe hands.
                </li>
              </ul>

              <button
                href="#"
                className="py-[7px] md:mb-16  text-sm md:text-md px-[28px] hover:bg-black bg-[#01335d] text-white"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Get Quote */}
        <div
          className=" hidden  bg-cover  bg-center  h-[20rem] lg:h-[32rem] items-center md:flex w-full"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="w-[80%] py-[4rem] space-y-8 md:leading-[3rem] lg:leading-[4rem]  mx-auto flex-wrap text-[2rem] text-left">
            <div className=" w-[60%] ">
              <span className="text-[#0A98CC]  ">Transforming</span>
              <span className="text-white">
                {" "}
                the World of Professional Translation Interested, but in a
                hurry?
              </span>
            </div>

            <Link to={"/order-translation"}>
              <button
                href="#"
                className="  text-[0.95rem]  px-[45px] hover:bg-white bg-[#0d7fa3] text-white hover:text-black"
              >
                GET INSTANT QUOTE
              </button>
            </Link>

            {/* #0d7fa3; */}
          </div>
        </div>

        {/* how it works and FAQS */}
        <div className="bg-[#f3f5f9] pb-10 w-full">
          <div className="md:w-[80%] w-full border-b pb-16 px-8 lg:px-4 grid md:grid-cols-2 gap-8 lg:gap-8 py-[4rem] mx-auto flex-wrap text-[1.8rem] text-left">
            <div className="  w-full space-y-4 lg:space-y-12">
              <h1 className="">How it Works</h1>
              <div className="w-full ">
                <img src={workingdesk} alt="desk" />
              </div>
              <div className="lg:pt-1 pt-6 flex space-y-4 flex-col items-center justify-center px-4">
                <HowitworksCard
                  header={"Approve the quote and pay"}
                  body={
                    "Once you have approved the quote, our skilled translators will begin working on your project."
                  }
                  page={"01"}
                />
                <HowitworksCard
                  header={"Your project has just started!"}
                  body={
                    "Our team will quickly assess the scope of the project and will translate the content with an extremely high level of accuracy and interpretation."
                  }
                  page={"02"}
                />
                <HowitworksCard
                  header={"Your translation is ready in your inbox"}
                  body={
                    "After your translation has been completed and checked for quality assurance. It is delivered directly to your email inbox for review."
                  }
                  page={"03"}
                />
              </div>

              {/* GET INSTANT QUOTE */}
            </div>
            <section id="contactSection" className="mb-4">
              <div className="  w-full space-y-10 lg:space-y-12">
                {/* <FAQCards/> */}
                <h1 className="">FAQs</h1>{" "}
                <div className=" w-full space-y-4 lg:space-y-6">
                  <FaqCard
                    header={"How can I receive a quote?"}
                    body={
                      "Just scroll the “Home” page down to the “Get a Quote” section. Fill-in the fields of each box and click “Get Me an Instant Quote” to get your quote immediately. You can contact us if more information are needed."
                    }
                  />
                  <FaqCard
                    header={"How can I a translation project?"}
                    body={
                      "Go to “Order Translation” tab and fill-in all box fields and click “Email My Quote”. We will receive your project instantly and send your quote with all project details. We will proceed with translation once you confirm your acceptance on the quote."
                    }
                  />
                  <FaqCard
                    header={"Who sees the documents for translation?"}
                    body={
                      "Our online dedicated team sees your uploaded documents, then they forward them to our project management to process your documents and get to you quickly with a quote."
                    }
                  />

                  <FaqCard
                    header={"What if I want to change or cancel my request?"}
                    body={
                      "Our team is dedicated to attend to your needs and messages. You can just send a message on our provided email to change or cancel any request and will receive instant replies."
                    }
                  />
                </div>
                <button className="">
                  <Link
                    to={"/contact-us"}
                    className=" hover:bg-[#013350] px-6 py-4 lg:py-5 lg:px-9 rounded-sm text-white  text-[0.8rem] lg:text-[1.2rem] bg-[#0c1220] flex-wrap text-center "
                  >
                    CONTACT US NOW
                  </Link>
                </button>
              </div>{" "}
            </section>
            {/* #0d7fa3; */}
          </div>
        </div>
        {/* QuoteSection */}

        <FooterWithForm className="mt-[25rem]  w-full">
          <section id="QuoteSection">
            <QuoteForm />
          </section>
        </FooterWithForm>
      </Main>
    </div>
  );
};

export default Home;
