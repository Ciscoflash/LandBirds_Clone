import React from "react";
import CarearBg from "../assets/images/carearBg.jpg";
import contacts from "../assets/images/contacts.jpg";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import Form from "../components/form";
import FooterWithForm from "../components/FooterWithForm";
const ContactUs = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-52 w-full md:h-64 "
        style={{ backgroundImage: `url(${CarearBg})` }}
      >
        <div className="pt-14 flex items-center justify-center flex-col gap-5 md:pt-24">
          <h1 className="text-white text-3xl">Contact Us</h1>
          <p className="text-white"> HOME / CONTACT US </p>
        </div>
      </div>

      <div className="h-fit w-[80%] m-auto flex relative my-5">
        {/* <img src={contacts} alt="" className="w-[70%] h-auto" /> */}
        {/* <div className=" bg-gray-300 absolute -right-2 p-10 top-36 text-start">
          <p>Contact Us</p>
          <h1>Get in Touch</h1>
          <span>
            Our team is entirely committed to you and your needs. We are very
            prompt and return inquiries within minutes during our normal hours
            of operation.
          </span>
          <p>
            Please feel free to inquire about any questions or comments you may
            have.
          </p>
        </div> */}
      </div>
      <div className="md:w-[90%] w-full p-4 relative mx-auto my-6 md:my-20">
        <img
          src={contacts}
          alt="contacts"
          className="w-[70%] h-auto hidden md:block"
        />
        <div className="bg-[#f3f5f9] md:w-[50%] w-full  md:block  md:absolute text-left md:top-1/2 md:right-16 md:-translate-y-1/2 md:transform  p-[1.5rem]">
          <p className="text-2xl">Contact Us</p>
          <h6 className="text-[#0d7fa3] md:text-[2.5rem] text-[1rem]    ">
            Get in Touch
          </h6>
          <h2 className="mt-[0.2em] text-[1rem] mb-3 md:text-[1.2rem]  text-[#0c1220] text-left">
            Our team is entirely committed to you and your needs. We are very
            prompt and return inquiries within minutes during our normal hours
            of operation.
          </h2>
          <p className="text-[#44474a] md:text-[1.15rem] mb-4  text-justify">
            Please feel free to inquire about any questions or comments you may
            have.
          </p>

          <div className="flex gap-2 flex-col lg:gap-5">
            <div className="flex gap-5 justify-start items-center">
              <p>
                <CiLocationOn size={29} />
              </p>
              <div className="cursor-pointer">
                <h4 className="text-xl  text-[#44474a] py-3">Address</h4>
                <p>86 Abbas El-Akkad St., 4th Floor, Nasr City, Cairo, Egypt</p>
              </div>
            </div>
            <div className="flex gap-10 justify-start items-center">
              <p>
                <MdOutlineMail size={29} />
              </p>
              <div className=" cursor-pointer">
                <h4 className="text-xl  text-[#44474a] py-3">Email</h4>
                <p>info@langbirds.com</p>
              </div>
            </div>
            <div className="flex gap-10 justify-start items-center">
              <p>
                <BsTelephone size={29} />
              </p>
              <div className="cursor-pointer">
                <h4 className="text-xl  text-[#44474a] py-3">Phone</h4>
                <p>+201027717253</p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-10 mt-5">
              <p>
                <BiLogoFacebook size={29} />
              </p>
              <p>
                <BiLogoLinkedin size={29} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="send relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.84170358811!2d7.367467002893245!3d9.024246821003189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1697401308429!5m2!1sen!2sng"
          width="100%"
          height="500"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <FooterWithForm className=" mt-[25rem]  w-full">
        <form className="h-fit border w-[80%] p-5 flex flex-col rounded-sm gap-5 bg-white absolute  m-auto  left-10 -bottom-[22rem] z-10 md:left-24 lg:w-[50%] lg:left-1/4 lg:-bottom-[18rem]">
          <h1 className="text-center text-4xl font-normal my-10">
            Send a Message
          </h1>
          <div className="formgroup text-[0.95rem] flex flex-col gap-10 md:flex-row">
            <input
              type="text"
              placeholder="Full Name *"
              className="w-[100%] bg-gray-200 p-4 placeholder-black text-xl"
            />
            <input
              type="text"
              placeholder="Email *"
              className="w-[100%] bg-gray-200 p-4 placeholder-black text-xl"
            />
            <input
              type="text"
              placeholder="Phone *"
              className="w-[100%] bg-gray-200 p-4 placeholder-black text-xl"
            />
          </div>
          <div>
            <textarea
              rows="5"
              cols=""
              className="bg-gray-200 w-[100%] p-3"
              placeholder="Your Text *"
            ></textarea>
          </div>
          <div className="formgroup">
            <button className="bg-blue-950 text-white px-16 py-4">SEND</button>
          </div>
        </form>
      </FooterWithForm>
    </div>
  );
};

export default ContactUs;
