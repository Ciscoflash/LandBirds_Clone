import React, { useState } from "react";
import CarearBg from "../assets/images/carearBg.jpg";
import Footer from "../components/Footer";
const OrderAnnotTrans = ({ serviceName, verb }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    requirements: "",
    languageSource: "",
    industry: "",
    language: "",
    targetLanguage: "",
    file: null,
    message: "",
    contactType: "No, contact me via e-mail",
  });

  const [selectedService, setSelectedService] = useState(""); // Add state for the selected service

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "file" ? e.target.files[0] : value;

    setFormData({
      ...formData,
      [name]: val,
    });
  };

  // Function to handle service selection
  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };
  return (
    <>
      <div
        className="bg-cover bg-center h-52 w-full md:h-64 "
        style={{ backgroundImage: `url(${CarearBg})` }}
      >
        <div className="pt-14 flex items-center justify-center flex-col gap-8 md:pt-24">
          <h1 className="text-white text-4xl">Order {serviceName}</h1>
          <p className="text-slate-100 text-[1rem]">
            HOME / ORDER {serviceName.toUpperCase()}
          </p>
        </div>
        <div className="w-full   px-8 lg:px-1 py-[4rem] mx-auto lg:w-[70%]">
          <form className="lg:px-8 py-8 px-4 md:w-[100%]  mx-auto bg-white">
            <h1 className="text-center text-4xl font-semilight mb-10">
              Information
            </h1>
            <div className="mb-4 flex flex-wrap items-center">
              <label htmlFor="requirements" className="block mb-2">
                Enter Project Requirements*
              </label>

              <select
                id="language"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="Please Select"
                className="w-full p-4  bg-[#f3f5f9] border rounded"
              >
                <option value="">Please Select</option>
                <option value="Standard">
                  Standard deadline (2-5 working days)
                </option>
                <option value="Express">Express deadline: (24 hours)</option>
                <option value="Extra">
                  Extra Express deadline: (2-12 hours)
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4 flex flex-wrap items-center">
              <label htmlFor="docType" className="block mb-2">
                What Type of Documents Would You Like to {verb}?*
              </label>

              <select
                id="language"
                name="docType"
                value={formData.docType}
                onChange={handleChange}
                placeholder="Please Select"
                className="w-full p-4  bg-[#f3f5f9] border rounded"
              >
                <option value="">Please Select</option>
                <option value="Legal Documents">Legal Documents</option>
                <option value="Financial Documents">Financial Documents</option>
                <option value="Technical Documents">Technical Documents</option>
                <option value="Business Documents"> Business Documents</option>
                <option value="Other"> Other</option>
              </select>
            </div>
            {/* upload  */}
            <div className="mb-4 mt-1 block  items-left">
              <label
                htmlFor="file"
                className="block  text-left cursor-pointer  "
              >
                Upload Your File *
              </label>
              <label className="w-[50%] bg-[#f3f5f9] justify-center  p-2.5 border rounded flex items-center  cursor-pointer">
                <span className="p-1.5  text-[1rem] font-medium rounded">
                  Browse
                </span>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>
            {/* Please Define a Broad Specialism For This Type of Work* */}
            <div className="mb-4 flex flex-wrap items-center">
              <label htmlFor="specialty" className="block mb-2">
                Please Define a Broad Specialism For This Type of Work*
              </label>

              <select
                id="language"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                placeholder="Please Select"
                className="w-full p-4  bg-[#f3f5f9] border rounded"
              >
                <option value="">Please Select</option>
                <option value="Marketing">Marketing</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Engineering">Engineering</option>
                <option value="Government">Government</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* // Input fields specific to Transcription */}
            <div className="mb-4 grid lg:grid-cols-2 lg:mt-9  gap-3">
              <div className="mb-4">
                <label
                  htmlFor="languageSource"
                  className="block text-left mb-2"
                >
                  Source Language*
                </label>
                <select
                  id="languageSource"
                  name="languageSource"
                  value={formData.languageSource}
                  onChange={handleChange}
                  placeholder="  Source Language "
                  className="w-full p-4  bg-[#f3f5f9] border rounded"
                >
                  <option value="">Please select</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Russian">Russian</option>
                  <option value="Arabic">Arabic</option>
                  <option value="German">German</option>
                </select>
              </div>
              {/* Target Language* */}
              <div className="mb-4">
                <label
                  htmlFor="targetLanguage"
                  className="text-left block mb-2"
                >
                  Target Language*
                </label>

                <select
                  id="targetLanguage"
                  name="targetLanguage"
                  value={formData.targetLanguage}
                  onChange={handleChange}
                  placeholder=" Target Language"
                  className="w-full p-4  bg-[#f3f5f9] border rounded"
                >
                  <option value="">Please select</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Russian">Russian</option>
                  <option value="Arabic">Arabic</option>
                  <option value="German">German</option>
                </select>
              </div>
            </div>
            <h2 className="text-left text-lg">
              Enter Your Details to Proceed With This Request
            </h2>
            <div className="grid lg:grid-cols-2  gap-3">
              {/* firstname */}
              <div className="mb-2 ">
                <label htmlFor="firstName" className="block mb-2" />
                <input
                  type="text"
                  id="fullName"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-4  bg-[#f3f5f9] rounded"
                />
              </div>
              <div className="mb-2 ">
                <label htmlFor="lastName" className="block mb-2" />
                <input
                  type="text"
                  id="lastName"
                  name="fullName"
                  placeholder="Last Name*"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-4  bg-[#f3f5f9] rounded"
                />
              </div>
              <div className="mb-2 col-span-2">
                <label htmlFor="companyName" className="block mb-2" />
                <input
                  type="text"
                  id="companyName"
                  name="fullName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full p-4  bg-[#f3f5f9] rounded"
                />
              </div>
              {/* email Address  */}
              <div className="mb-2">
                <label htmlFor="email" className="block mb-2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email*"
                  onChange={handleChange}
                  className="w-full p-4  bg-[#f3f5f9] border rounded"
                />
              </div>
              {/* phoneNumber */}
              <div className="mb-2">
                <label htmlFor="phoneNumber" className="block mb-2" />

                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className="w-full p-4  bg-[#f3f5f9] border rounded"
                />
              </div>
              {/* BusinessType  */}
            </div>
            <div className="mb-2 ">
              <h2 className="text-left my-3">How to Contact You?</h2>
              <div className="px-2 block lg:flex text-left items-center mb-3">
                <label className="mr-4 block ">
                  <input
                    type="radio"
                    id="call"
                    name="contactType"
                    value="Call me back"
                    checked={formData.contactType === "Call me back"}
                    onChange={handleChange}
                    className="mr-1 custom-radio"
                  />
                  Call me back
                </label>
                <label className="block ">
                  <input
                    type="radio"
                    id="mail"
                    name="contactType"
                    value="No, contact me via e-mail"
                    checked={
                      formData.contactType === "No, contact me via e-mail"
                    }
                    onChange={handleChange}
                    className="mr-1 custom-radio"
                  />
                  No, contact me via e-mail
                </label>
              </div>
              <div className="mb-4 flex flex-wrap items-center">
                <label htmlFor="captcha" className="block mb-2">
                  Please type the characters*
                </label>
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  placeholder=""
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-4 text-xl  bg-[#f3f5f9] rounded"
                />
                <label htmlFor=""></label>
                <p>This helps us prevent spam, thank you.</p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full lg:w-[50%] text-[1rem] bg-[#013350] mt-8 px-6 py-3 lg:px-9 lg:py-5 rounded-sm text-white   hover:bg-[#0c1220] text-center "
            >
              EMAIL MY QUOTE
            </button>

            {/* // )} */}
            {(selectedService === "Copywriting" ||
              selectedService === "Subtitling and Captioning" ||
              selectedService === "Content Creation") && (
              // Input fields specific to Subtitling and Captioning & Copywriting
              <div className="grid lg:grid-cols-3 lg:mt-9  gap-3">
                <div className="mb-2 flex items-center">
                  <div className="px-2 mt-4 md:mt-0 flex items-center">
                    <label className="mr-4">
                      <input
                        type="radio"
                        id="Company"
                        name="businessType"
                        value="Company"
                        checked={formData.businessType === "Company"}
                        onChange={handleChange}
                        className="mr-1 custom-radio"
                      />
                      Company
                    </label>
                    <label>
                      <input
                        type="radio"
                        id="Private"
                        name="businessType"
                        value="Private"
                        checked={formData.businessType === "Private"}
                        onChange={handleChange}
                        className="mr-1 custom-radio"
                      />
                      Private
                    </label>
                  </div>
                </div>
                <div className="mb-2 flex items-center">
                  <label htmlFor="language" className="block mb-2" />

                  <select
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    placeholder="Choose Language"
                    className="w-full p-4  bg-[#f3f5f9] border rounded"
                  >
                    <option value="">Select Language</option>
                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Russian">Russian</option>
                    <option value="Arabic">Arabic</option>
                    <option value="German">German</option>
                  </select>
                </div>
                {/* message */}
                <div className="mb-2 lg:pt-3">
                  <label htmlFor="message" className="block mb-2" />

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message/ Job Description and Details"
                    className="w-full p-4  bg-[#f3f5f9] border rounded"
                  />
                </div>
              </div>
            )}
            {(selectedService === "Graphics Design" ||
              selectedService === "Engineering Design") && (
              // Input fields specific to Subtitling and Captioning & Copywriting
              <div className="grid lg:grid-cols-3 lg:mt-9  gap-3">
                <div className="mb-2 flex items-center">
                  <div className="px-2 flex items-center">
                    <label className="mr-4">
                      <input
                        type="radio"
                        id="Company"
                        name="businessType"
                        value="Company"
                        checked={formData.businessType === "Company"}
                        onChange={handleChange}
                        className="mr-1 custom-radio"
                      />
                      Company
                    </label>
                    <label>
                      <input
                        type="radio"
                        id="Private"
                        name="businessType"
                        value="Private"
                        checked={formData.businessType === "Private"}
                        onChange={handleChange}
                        className="mr-1 custom-radio"
                      />
                      Private
                    </label>
                  </div>
                </div>
                <div className="mb-2 mt-1 flex items-center">
                  <label className="w-full bg-[#f3f5f9] p-2.5 border rounded flex items-center justify-between cursor-pointer">
                    <label
                      htmlFor="file"
                      className="block cursor-pointer  text-blue-500"
                    >
                      Upload Sample Design
                    </label>
                    <span className="p-1.5 text-white text-[0.75rem] font-medium rounded bg-[#cdccce]">
                      SELECT FILE
                    </span>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                </div>
                {/* message */}
                <div className="mb-2 lg:pt-3">
                  <label htmlFor="message" className="block mb-2" />

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message/ Job Description and Details"
                    className="w-full p-4  bg-[#f3f5f9] border rounded"
                  />
                </div>
              </div>
            )}
            {selectedService === "Localization" && (
              // Input fields specific to Subtitling and Captioning & Copywriting
              <div className="grid lg:grid-cols-3 lg:mt-9  gap-3">
                <div className="mb-2 flex items-center">
                  <div className="px-2 flex items-center">
                    <label className="mr-4">
                      <input
                        type="radio"
                        id="Company"
                        name="businessType"
                        value="Company"
                        checked={formData.businessType === "Company"}
                        onChange={handleChange}
                        className="mr-1 custom-radio"
                      />
                      Company
                    </label>
                    <label>
                      <input
                        type="radio"
                        id="Private"
                        name="businessType"
                        value="Private"
                        checked={formData.businessType === "Private"}
                        onChange={handleChange}
                        className="mr-1 custom-radio"
                      />
                      Private
                    </label>
                  </div>
                </div>
                <div className="mb-2 flex items-center">
                  <label htmlFor="industry" className="block mb-2" />

                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    placeholder="    Industry"
                    className="w-full p-4  bg-[#f3f5f9] border rounded"
                  >
                    <option value="">Industry</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Government">Government</option>
                    <option value="Engineering">Engineering</option>
                  </select>
                </div>
                {/* message */}
                <div className="mb-2 lg:pt-3">
                  <label htmlFor="message" className="block mb-2" />

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message/ Job Description and Details"
                    className="w-full p-4  bg-[#f3f5f9] border rounded"
                  />
                </div>
              </div>
            )}
            {selectedService === "Copywriting" && (
              // Input fields specific to Subtitling and Captioning & Copywriting
              <div className="grid lg:grid-cols-3 lg:mt-9  gap-3">
                <div className="mb-2 flex items-center">
                  <div className="px-2 flex items-center">
                    <label className="mr-4">
                      <input
                        type="radio"
                        id="Company"
                        name="businessType"
                        value="Company"
                        checked={formData.businessType === "Company"}
                        onChange={handleChange}
                        className="mr-1 custom-radio"
                      />
                      Company
                    </label>
                    <label>
                      <input
                        type="radio"
                        id="Private"
                        name="businessType"
                        value="Private"
                        checked={formData.businessType === "Private"}
                        onChange={handleChange}
                        className="mr-1 custom-radio"
                      />
                      Private
                    </label>
                  </div>
                </div>

                {/* message */}
                <div className="mb-2 lg:pt-3">
                  <label htmlFor="message" className="block mb-2" />

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message/ Job Description and Details"
                    className="w-full p-4  bg-[#f3f5f9] border rounded"
                  />
                </div>
              </div>
            )}
          </form>
        </div>
        <div className="relative bottom-0 z-20">
          <Footer footerText="Stay Updated" />
        </div>
      </div>
    </>
  );
};

export default OrderAnnotTrans;
