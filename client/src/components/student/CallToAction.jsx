import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 rounded-2xl md:px-0">
      <h1 className="text-xl md:text-4xl font-bold">
        Start Learning Today
      </h1>

      <p className="text-gray-500 sm:text-sm">
        Join thousands of learners worldwide and gain the skills you need
        to advance your career with our expert-led courses.
      </p>

      <div className="mt-4 flex items-center font-medium gap-6">
        <button className="text-white bg-blue-600 px-10 py-3 rounded-md hover:bg-gray-600 transition">
          Get Started
        </button>

        <button className="flex items-center gap-4 hover:bg-white hover:text-blue-600 transition">
          Learn More <img src={assets.arrow_icon} alt="" className="" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;