import React from 'react';
import { Mail } from 'lucide-react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-white px-6 md:px-16 lg:px-24 xl:px-32 pt-12 w-full text-gray-600 border-t border-gray-200 mt-20">
      <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-gray-300 pb-10">
        {/* Left Section */}
        <div className="md:max-w-md">
          <img
            className="h-12 mb-4"
            src={assets.logo}
            alt="logo"
          />
          <p className="text-sm leading-relaxed">
            Power your ideas with premium AI tools <br/>and modern workflows. Designed for <br/>creators, developers, and businesses who<br/> scale.
          </p>
        </div>
       

        {/* Right Section */}
        <div className="flex-1 flex flex-col sm:flex-row justify-between gap-10">
          {/* Links */}
          <div>
            <h2 className="font-semibold text-gray-800 h-10 mb-4 text-base">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Privacy policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-4 text-base">Stay in the loop</h2>
            <p className="text-sm mb-4">Weekly news, resources, and updates sent to your inbox.</p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="border border-gray-300 rounded px-3 py-2 w-64 text-sm outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-800 text-white px-4 py-2 rounded text-sm flex items-center gap-2 hover:bg-purple-900 transition">
                <Mail size={16} /> Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center pt-6 text-xs text-gray-500">
        &copy; 2025 Rapid.ai Al l rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
