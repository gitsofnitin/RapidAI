import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="fixed h-20 w-full backdrop-blur-xl bg-white/70 shadow-md z-50, ">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 sm:px-8">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="logo"
          className="w-28 sm:w-40 cursor-pointer transition-transform hover:scale-105"
          onClick={() => navigate("/")}
        />

        {/* User/Auth Button */}
        <div>
          {user ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <button
              onClick={openSignIn}
              className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow hover:bg-indigo-700 hover:scale-105 active:scale-95 transition duration-200"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
