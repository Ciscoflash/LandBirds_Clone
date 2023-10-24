import React from "react";
import Main from "../components/Main";
import { default as ManImage } from "../assets/images/image-3.jpg";
import { default as handShake } from "../assets/images/handShake.jpg";
import { default as Certificate } from "../assets/images/certificate.png";
import { default as Langdif } from "../assets/images/langDiff.png";
import FaqCard from "../components/FaqCard";
import HowitworksCard from "../components/HowitworksCard";
import { default as workingdesk } from "../assets/images/workingdesk2.jpg";
import Footer from "../components/footer";

const AboutUs = () => {
  return (
    <Main
      image={ManImage}
      textOverlay={"About Us "}
      textOverlay1={""}
      textPosition={"center"}
      bgText={"All you need to know"}
    >
      {/* bg-[#f3f5f9] */}
      <div className="md:w-[80%] w-full p-4 flex gap-9 mx-auto my-6 md:my-24">
        <div className=" lg:w-[70%] w-full  lg:space-y-4 block   text-left   ">
          <h6 className="text-[#0d7fa3] md:text-[1.1rem] text-[0.851rem]    ">
            LangBirds | Flying over Your Translation Needs
          </h6>
          <h2 className="mt-[0.4em] text-[1.7rem] mb-4 md:text-[2rem]  text-[#0c1220] text-left">
            About LangBirds
          </h2>
          <p className="text-[#44474a] md:text-[1rem]  text-justify">
            Our team offers a range of professional translation, localization &
            desktop publishing (DTP) services that cater to the various demands
            of businesses across every sector imaginable. This group includes a
            large number of select talented translators, coming from diverse
            backgrounds and fields of expertise, all under the common goal of
            building bridges through language, fostering connections between
            companies and organizations across the globe.
          </p>
          <p className="text-[#44474a] md:text-[1rem]   text-justify">
            With client satisfaction as our number-one priority, we do not
            hesitate in turning your projects around in a timely manner. In the
            same way, the professional touch we offer on each job is delivered
            tailor-made, meeting all your requirements, large or small.
          </p>
          <p className="text-[#44474a] md:text-[1rem] mb-2  text-justify">
            Our expertise ranges far and wide: legalese, technical terminology,
            websites, applications/software, and marketing, just to name just a
            few.
          </p>
        </div>
        <img
          src={handShake}
          alt="Handshake"
          className="lg:w-[30%] h-auto flex-shrink-0 hidden lg:block"
        />
      </div>
      <div className=" w-full grid md:grid-cols-2 mx-auto text-[#A2AFCB] my-6 md:my-24">
        <div className="bg-[#0D7FA3] pt-16 px-12  text-white">
          <h4 className="text-[2rem] text-left">Our Mission</h4>
          <p className=" text-left mt-4">
            The purpose of our scope of service is simple: providing precise,
            authentic translation and localization of your material at the
            lowest cost to you, in the most timely manner possible. Through the
            latest technology and computing power, your message will be conveyed
            to the broadest audiences throughout the market place.
          </p>
          <img
            src={Certificate}
            alt="cert"
            className="my-4 lg:mt-8 w-[80%] mx-auto "
          />
        </div>
        <div className="bg-[#01335D] space-y-4 py-16 px-8 text-white">
          <h4 className="text-[2rem] text-left">Our Values</h4>
          <ol className="list-decimal list-left px-8 pt-4 text-left">
            <li className="px-2">
              Excellence in quality for our clients. You deserve it.
            </li>
            <li className="px-2">
              Responsiveness: rapid replies and attentiveness to our client’s
              requests.
            </li>
            <li className="px-2">
              Continuous Learning: ongoing development of our team’s skills
              through training and development.
            </li>
            <li className="px-2">
              Helping you to define your requirements within the scope of your
              project.
            </li>
            <li className="px-2">
              A professional project manager will be assigned to deal with your
              order from the very start of the project and up till the final
              delivery.
            </li>
            <li className="px-2">
              Production: Defining the profile of the translator that most suits
              your project based on expertise and professional background.
            </li>
            <li className="px-2">
              Quality Assurance: a guarantee that what you receive upon
              finalization is set to meet your expectations.
            </li>
            <li className="px-2">
              To achieve this, once your document is translated, a proofreader
              is assigned to review your document and make any necessary
              changes.
            </li>
            <li className="px-2">
              Delivery and Feedback: Your project will not be closed until we
              receive confirmation from your side that the task conforms to your
              requirements and that you are fully satisfied with the final
              delivery.
            </li>
          </ol>
        </div>
      </div>
      <div className="md:w-[80%] w-full p-4 gap-9 mx-auto my-6 md:my-24">
        <img src={Langdif} alt="languages" />
        <h1 className="text-center py-10 text-[3rem]">Why Us?</h1>
        <ul className=" list-disc list-left text-left pl-6 text-[1.1rem] md:text-[0.84rem] lg:text-[1.08rem] space-y-1 mb-8   text-[#0c1220]">
          <li>
            Exceptional service: Our clients will receive exceptional service
            through our translated and localized product.
          </li>
          <li>
            Guarantee of confidentiality: LangBirds commits itself to our
            internal policy on confidentiality, giving our clients peace of mind
            that their documents are in safe hands
          </li>
          <li>
            Timeliness: Our clients can rest assured that they will receive
            their documents on time within the deadlines they set for the
            project.Our clients will be impressed by expedient turn-around times
            and spontaneous revenues from on-time delivery for their
            business-related documents
          </li>
          <li>
            Quality: We strictly comply with quality control procedures before
            final delivery to provide high quality and professional material.
          </li>
          <li>
            Diverse solutions: Whatever the need may be, we have solutions for
            all business profiles and requirements.
          </li>
          <li>
            Competitive pricing: We offer a competitive pricing structure for
            all our translation services and content solutions.
          </li>
          <li>
            Quick turnaround times and immediate response: We focus on providing
            professional and high-quality experience with sizzling turnaround
            times for every project we handle.
          </li>
        </ul>
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
      <Footer footerText={"Stay Updated"} />
    </Main>
  );
};

export default AboutUs;
