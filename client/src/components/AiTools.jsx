import React from "react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="px-6 sm:px-12 xl:px-24 py-16 bg-gradient-to-b from-[#f9fafb] to-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-purple-800 mb-3">
          🚀 Powerful AI Tools
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
          Everything you need to create, enhance, and optimize content using cutting-edge AI technology — all in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {AiToolsData.map((tool) => (
          <div
            key={tool.id || tool.title}
            className="group w-full max-w-sm p-6 rounded-xl shadow-md border border-gray-200 bg-white transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer"
            onClick={() => {
              if (user) navigate(tool.path);
              else alert("Please log in to access this tool.");
            }}
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-xl text-white text-xl mb-4"
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            >
              <tool.Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
              {tool.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
