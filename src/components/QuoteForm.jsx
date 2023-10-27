import React, { useState } from "react";
import "../../src/App.css";
import Navbar from "./Navbar";

const QuoteForm = ({ details, FullName, LastNameL }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    languageSource: "",
    industry: "",
    targetLanguage: "",
    file: null,
    message: "",
    gender: "male", // Default to 'male'
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
    <div className="w-full   px-8 lg:px-4 py-[4rem] mx-auto  ">
      <form className="lg:px-8 py-16 px-4 md:w-[100%]  mx-auto bg-white">
        <h1 className="text-center text-4xl font-normal mb-10">Get a Quote</h1>
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="w-[50%] border p-3 my-5  bg-[#f3f5f9]"
        >
          <option value="">Select a service</option>
          <option value="Transcription">Transcription</option>
          <option value="Annotation">Annotation</option>
          <option value="Translation">Translation</option>
          <option value="Engineering Design">Engineering Design</option>
          <option value="Localization">Localization</option>
          <option value="Subtitling and Captioning">
            Subtitling and Captioning
          </option>
          <option value="Graphics Design">Graphics Design</option>
          <option value="Copywriting">Copywriting</option>
          <option value="Content Creation">Content Creation</option>
          {/* Add other service options */}
        </select>

        <div className="grid lg:grid-cols-3 text-[0.85rem] gap-3">
          {/* fullname */}
          <div className="mb-2 ">
            <label htmlFor="fullName" className="block mb-2" />
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="FullName"
              value={formData.fullName}
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
              placeholder="Email Address"
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

        {/* Transcription */}
        {(selectedService === "Transcription" ||
          selectedService === "Translation" ||
          selectedService === "Annotation") && (
          // Input fields specific to Transcription
          <div className="grid lg:grid-cols-3 lg:mt-9 text-[0.85rem] gap-3">
            <div className="mb-2">
              <label htmlFor="languageSource" className="block mb-2" />
              <select
                id="languageSource"
                name="languageSource"
                value={formData.languageSource}
                onChange={handleChange}
                placeholder="  Source Language "
                className="w-full p-4  bg-[#f3f5f9] border rounded"
              >
                <option value="">Source Language</option>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="Chinese">Chinese</option>
                <option value="Russian">Russian</option>
                <option value="Arabic">Arabic</option>
                <option value="German">German</option>
              </select>
            </div>

            <div className="mb-2">
              <label htmlFor="targetLanguage" className="block mb-2" />

              <select
                id="targetLanguage"
                name="targetLanguage"
                value={formData.targetLanguage}
                onChange={handleChange}
                placeholder=" Target Language"
                className="w-full p-4  bg-[#f3f5f9] border rounded"
              >
                <option value="">Target Language</option>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="Chinese">Chinese</option>
                <option value="Russian">Russian</option>
                <option value="Arabic">Arabic</option>
                <option value="German">German</option>
              </select>
            </div>

            {/* upload  */}
            <div className="mb-2 mt-1 flex items-center">
              <label className="w-full bg-[#f3f5f9] p-2.5 border rounded flex items-center justify-between cursor-pointer">
                <label
                  htmlFor="file"
                  className="block cursor-pointer  text-blue-500"
                >
                  Upload File
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

        {(selectedService === "Copywriting" ||
          selectedService === "Subtitling and Captioning") && (
          // Input fields specific to Subtitling and Captioning & Copywriting
          <div className="grid lg:grid-cols-3 lg:mt-9 text-[0.85rem] gap-3">
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

        {(selectedService === "Graphics Design" ||
          selectedService === "Engineering Design") && (
          // Input fields specific to Subtitling and Captioning & Copywriting
          <div className="grid lg:grid-cols-3 lg:mt-9 text-[0.85rem] gap-3">
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
          <div className="grid lg:grid-cols-3 lg:mt-9 text-[0.85rem] gap-3">
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
        <button
          type="submit"
          className="bg-[#013350] mt-8 px-6 py-2 lg:px-9 lg:py-5 rounded-sm text-white text-[0.7rem] lg:text-[0.85rem] hover:bg-[#0c1220] flex-wrap text-center "
        >
          GET ME AN INSTANT QUOTE
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
