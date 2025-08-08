import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[url('/gradientBackground.png')] bg-cover bg-no-repeat px-6 sm:px-16 xl:px-32 py-24"
    >
      {/* Heading */}
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Create Smarter. Scale Faster.
          <br />
          with <span className="text-violet-800">AI Tools</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
          Reimagine content creation with premium AI tools — Write, Design,
          and Elevate your workflow like never before.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm sm:text-base">
        <button
          onClick={() => navigate("/ai")}
          className="bg-violet-900 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-violet-900 hover:scale-105 active:scale-95 transition duration-200"
        >
          Start Creating Now
        </button>
        <button
          className="bg-white border border-gray-300 px-8 py-3 rounded-lg font-medium text-gray-800 shadow-sm hover:scale-105 active:scale-95 transition duration-200"
        >
          Watch Demo
        </button>
      </div>

      {/* Trusted By */}
      <div className="flex items-center gap-3 mt-10 text-gray-500 text-sm">
        <img src={assets.user_group} alt="User Group" className="h-7 w-auto" />
        <span>Trusted by <strong>10,000+</strong> people</span>
      </div>
    </div>
  );
};

export default Hero;
