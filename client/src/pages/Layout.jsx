import React, { use, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar"; // ✅ Adjust path as needed
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const {user} = useUser();



  return user ? (
    <div className="w-full min-h-screen flex flex-col">
      <nav className="w-full px-8 py-3 min-h-14 flex items-center justify-between border-b border-gray-200">
        <img src={assets.logo}alt="Logo"className=" cursor-pointer w-34 sm:w-30 "onClick={() => navigate("/")}/>
         {
           sidebar ? <X onClick={() => setSidebar(false)} className="w-6 h-6
           text-gray-600 sm:hidden"/>
           : <Menu onClick={() => setSidebar(true)} className="w-6 h-6
           text-gray-600 sm:hidden"/> 
         }
          
        
      </nav>

      {/* ✅ Main Content Layout */}
      <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="flex-1 bg-[#F4F7FB] p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <SignIn/>
    </div>
  )
};

export default Layout;
