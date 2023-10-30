import React from "react";

import Main from "../components/Main";
import FaqCard from "../components/FaqCard";
import HowitworksCard from "../components/HowitworksCard";
import { default as workingdesk } from "../assets/images/workingdesk2.jpg";
import Footer from "../components/footer";
import { default as ManImage } from "../assets/images/image-3.jpg";
import { default as BgImage } from "../assets/images/bgblue.jpg";
import ServicesCard from "../components/ServicesCard";
import FooterWithForm from "../components/FooterWithForm";
import QuoteForm from "../components/QuoteForm";

const OurServices = () => {
  return (
    <Main
      image={ManImage}
      textOverlay={"Our Services "}
      textOverlay1={""}
      textPosition={"center"}
      bgText={"All you need to know"}
    >
      {/* bg-[#f3f5f9] */}
      <div className="bg-[#f3f5f9]">
        {/* //We offer a wide range of services ;*/}
        <div className="relative bg-[#f3f5f9] min-h-[138rem] sm:min-h-[106rem] md:min-h-[114rem] lg:min-h-[90rem] xl:min-h-[90rem] w-full  ">
          <div
            className=" mb-[3rem] bg-cover  bg-center  relative  h-[75rem]  w-full"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <div className="w-[80%] py-[2rem] md:py-[8rem] mx-auto ">
              <div className="md:w-[50%] w-[60%] flex-wrap md:text-[3rem] font-extralight text-[2rem] text-left">
                <span className="text-[#0A98CC]  ">We Offer a Wide</span>
                <span className="text-white">
                  {" "}
                  Range of Translation Services
                </span>
              </div>
              <div className="border-b md:py-[4rem] pb-16 grid  gap-4 lg:grid-cols-3 grid-cols-2 my-2">
                <ServicesCard
                  serviceTitle={"Localization"}
                  serviceInfo=" Localization Localization is conversion of
                   the terminology and cultural nuance from one part of the
                   world’s language, usually for marketing purposes,"
                />
                <ServicesCard
                  serviceTitle={"Translation"}
                  serviceInfo="Translation, simply put, is the intellectual process carried out by a translator of conveying the meaning of a source text (Arabic, or AR, for example)"
                />
                <ServicesCard
                  serviceTitle={"Transcription"}
                  serviceInfo="Translation, simply put, is the intellectual process carried out by a translator of conveying the meaning of a source text (Arabic, or AR, for example)"
                />
                <ServicesCard
                  serviceTitle={"Annotation"}
                  serviceInfo="Translation, simply put, is the intellectual process carried out by a translator of conveying the meaning of a source text (Arabic, or AR, for example)"
                />
                <ServicesCard
                  serviceTitle={"Subtitling and Captioning"}
                  serviceInfo="Translation, simply put, is the intellectual process carried out by a translator of conveying the meaning of a source text (Arabic, or AR, for example)"
                />
                <ServicesCard
                  serviceTitle={"Designs"}
                  serviceInfo="Translation, simply put, is the intellectual process carried out by a translator of conveying the meaning of a source text (Arabic, or AR, for example)"
                />
                <ServicesCard
                  // className="hidden"
                  serviceTitle={"Copywriting/Content Writing"}
                  serviceInfo="Translation, simply put, is the intellectual process carried out by a translator of conveying the meaning of a source text (Arabic, or AR, for example)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* how it works and FAQS */}
        <div className="bg-[#f3f5f9] pb-10 w-full">
          <div className="md:w-[80%] w-full  pb-16 px-8 lg:px-4 grid md:grid-cols-2 gap-8 lg:gap-8 py-[6rem] mx-auto flex-wrap text-[1.8rem] text-left">
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
              {/* <button
              href="#"
              className="  text-[0.95rem]  px-[45px] hover:bg-white bg-[#0d7fa3] text-white hover:text-black"
            >
              GET INSTANT QUOTE
            </button> */}
            </div>
            <div className="  w-full space-y-10 lg:space-y-12">
              {/* <FAQCards/> */}
              <h1 className="">FAQs</h1>
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
              <button className="hover:bg-[#013350] px-6 py-2 lg:px-9 lg:py-5 rounded-sm text-white font-medium text-[0.8rem] lg:text-[1.2rem] bg-[#0c1220] flex-wrap text-center ">
                CONTACT US NOW
              </button>
            </div>
            {/* #0d7fa3; */}
          </div>
        </div>
        <FooterWithForm className="mt-[25rem] w-full">
          <QuoteForm />
        </FooterWithForm>
      </div>
    </Main>
  );
};

export default OurServices;
