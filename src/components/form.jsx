import React from "react";

const Form = ({ details, FirstNameL, LastNameL }) => {
  return (
    <div>
      <form className="w-full p-8 flex flex-col gap-10  lg:w-3/4 m-auto  ">
        <div className="formgroup">
          <label
            htmlFor=""
            className="align-left text-2xl flex justify-left py-5"
          >
            {details}
          </label>
          <div className="flex gap-10 flex-col md:flex-row">
            <input
              className="w-full p-5 text-black bg-gray-200 placeholder:text-gray-500 placeholder:text-2xl focus:bg-gray-300"
              type="text"
              placeholder={`${FirstNameL}`}
            />
            <input
              className="w-full p-5 text-black bg-gray-200 placeholder:text-gray-500 placeholder:text-2xl active:bg-gray-300 focus:bg-gray-300"
              type="text"
              placeholder={`${LastNameL}`}
            />
          </div>
        </div>
        <div className="formgroup">
          <div className="flex gap-10 flex-col md:flex-row">
            <input
              className="w-full p-5 text-black bg-gray-200 placeholder:text-gray-500 placeholder:text-2xl focus:bg-gray-300"
              type="phone"
              placeholder="Phone *"
            />
            <input
              className="w-full p-5 text-black bg-gray-200 placeholder:text-gray-500 placeholder:text-2xl active:bg-gray-300 focus:bg-gray-300"
              type="email"
              placeholder="Email *"
              required
            />
          </div>
        </div>
        <div className="formgroup">
          <div className="">
            <input
              className="w-full p-5 text-black bg-gray-200 placeholder:text-gray-500 placeholder:text-2xl active:bg-gray-300 focus:bg-gray-300"
              type="email"
              placeholder="Country *"
              required
            />
          </div>
        </div>
        <div className="formgroup flex justify-start">
          <div className="mr-auto">
            <input
              className="w-64 mr-auto p-5 text-black bg-gray-200 placeholder:text-gray-500 placeholder:text-2xl active:bg-gray-300 focus:bg-gray-300"
              type="file"
              placeholder="Country *"
              required
            />
          </div>
        </div>
        <div className="formgroups">
          <label
            htmlFor=""
            className="align-left text-2xl flex justify-left py-5"
          >
            Apply As *
          </label>
          <div className="flex gap-5 justify-start flex-col md:flex-row">
            <div className="flex  gap-5 text-center">
              <input
                className=" p-5 text-black bg-gray-200 placeholder:text-gray-500 placeholder:text-2xl focus:bg-gray-300  text-2xl w-5 h-5 cursor-pointer"
                name="role"
                type="radio"
              />
              <label htmlFor="radio" className="text-xl text-gray-400">
                Translator
              </label>
            </div>
            <div className="flex gap-5">
              <input
                className=" p-5 text-black bg-gray-200 placeholder:text-gray-500 placeholder:text-2xl active:bg-gray-300 focus:bg-gray-300 w-5 h-5 text-2xl cursor-pointer"
                type="radio"
                placeholder="Last Name *"
                name="role"
              />
              <label htmlFor="radio" className="text-xl text-gray-400">
                Proofreader/Editor
              </label>
            </div>
            <div className="flex gap-5">
              <input
                className=" p-5 text-black bg-gray-200 placeholder:text-gray-500 placeholder:text-2xl active:bg-gray-300 focus:bg-gray-300 w-5 h-5 test-3xl cursor-pointer"
                type="radio"
                placeholder="Last Name *"
                name="role"
              />
              <label htmlFor="radio" className="text-xl text-gray-400">
                DTPier
              </label>
            </div>
          </div>
        </div>
        <div className="formgroup">
          <div className="">
            <label for="character" className="flex justify-start text-2xl py-5">
              Please type the characters*
            </label>
            <input
              className="w-full p-5 text-black bg-gray-200 placeholder:text-gray-500 placeholder:text-2xl active:bg-gray-300 focus:bg-gray-300"
              type="email"
              name="character"
              placeholder=""
            />
            <button className="flex justify-start text-gray-600">
              8 7 8 5
            </button>
            <span className="flex justify-start pt-5 text-gray-400">
              This helps us to prevent spam, thank you
            </span>
          </div>
        </div>
        <div className="formgroup">
          <button
            type="botton"
            className="bg-blue-950 text-white w-60 h-fit py-5"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
