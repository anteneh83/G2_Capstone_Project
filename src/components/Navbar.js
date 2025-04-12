import React from "react";
import Logo from "../images/photo8.png";

const Navbar = () => {
  return (
    <nav className="bg-transparent py-4 px-6 flex justify-between items-center z-10 relative">
      <div className="flex items-center space-x-4 bg-black bg-opacity-50 px-5 py-3 rounded-lg">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold text-white">Rebel Rover</span>
      </div>
      <ul className="hidden md:flex space-x-6 text-white">
        <li className="hover:text-blue-300 cursor-pointer transition-colors">Home</li>
        <li className="hover:text-blue-300 cursor-pointer transition-colors">Blog</li>
        <li className="hover:text-blue-300 cursor-pointer transition-colors">Destinations</li>
        <li className="hover:text-blue-300 cursor-pointer transition-colors">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;