import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full md:pt-36 pt-20
      px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70"
    >
      {/* Heading */}
      <h1 className="relative font-extrabold text-gray-800 max-w-4xl mx-auto
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">

        Empower your future with the courses designed to{" "}

        <span className="text-blue-600">
          fit your choices.
        </span>

        <img
          src={assets.sketch}
          alt="sketch"
          className="hidden md:block absolute -bottom-6 right-0 w-20 md:w-28"
        />
      </h1>

      {/* Desktop Paragraph */}
      <p className="hidden md:block text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.
      </p>

      <SearchBar />

      {/* Mobile Paragraph */}
      <p className="md:hidden text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
        We bring world-class instructors and content to help you achieve your goals.
      </p>
    </div>
  );
};

export default Hero;