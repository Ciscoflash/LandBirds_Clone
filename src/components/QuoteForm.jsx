import React, { useState } from "react";
import "../../src/App.css";

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

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "file" ? e.target.files[0] : value;

    setFormData({
      ...formData,
      [name]: val,
    });
  };

  return (
    <div className="w-full   px-8 lg:px-4 py-[4rem] mx-auto  bg-[#f3f5f9] ">
      <form className="lg:px-16 py-16 px-8 md:w-[80%]  mx-auto bg-white">
        <h1 className="text-center text-4xl font-normal mb-10">Get a Quote</h1>
        <div className="grid lg:grid-cols-3 text-[0.85rem] gap-8">
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

          {/* BusinessType  */}
          <div className="mb-2 flex items-center">
            <div className="flex items-center">
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

          {/* File Upload  */}
          <div className="mb-2 flex items-center">
            <label className="w-full bg-[#f3f5f9] p-2.5 border rounded flex items-center justify-between cursor-pointer">
              <label
                htmlFor="file"
                className="block cursor-pointer  text-blue-500"
              >
                {/* onClick={() => document.getElementById("file").click()} */}
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

          {/* Industry */}
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
          <div className="mb-2 lg:pt-4">
            <label htmlFor="message" className="block mb-2" />

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-4  bg-[#f3f5f9] border rounded"
            />
          </div>
        </div>
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
