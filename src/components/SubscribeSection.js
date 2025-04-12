import React from 'react';
import Images from '../images/photo7.png';
import Logo from "../images/photo8.png";

const SubscribeSection = () => {
  return (
    <div className="text-white">
      {/* Background Image Section */}
      <div
        className="h-[400px] flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url(${Images})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Subscribe to get special price
        </h1>
        <p className="mb-6 max-w-xl">
          Don’t wanna miss something? Subscribe right now and get special promotion and monthly newsletter
        </p>
        <div className="bg-white flex rounded-full overflow-hidden w-full max-w-2xl">
          <input
            type="email"
            placeholder="Type your email here"
            className="flex-grow px-4 py-2 text-black focus:outline-none"
          />
          <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-gray-300 py-3 px-5 md:px-16">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center space-x-1 bg-black bg-opacity-50 px-1 py-3 rounded-lg">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold text-white">Rebel Rover</span>
      </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra condimentum.
            </p>
          </div>
          <div>
            <p>732 Despard St, Atlanta</p>
            <p>+97 888 8888</p>
            <p>Info@traveller.com</p>
          </div>
          <div className="space-y-2">
            <p>Home</p>
            <p>About Us</p>
            <p>Tours</p>
            <p>Contact</p>
          </div>
          <div className="flex space-x-4 text-xl">
            <i className="fab fa-facebook hover:text-white cursor-pointer"></i>
            <i className="fab fa-twitter hover:text-white cursor-pointer"></i>
            <i className="fab fa-youtube hover:text-white cursor-pointer"></i>
            <i className="fab fa-instagram hover:text-white cursor-pointer"></i>
          </div>
        </div>
        <p className="text-center text-xs mt-10">
          © All rights reserved (Website Developed & Managed by CREATIVECHROMA)
        </p>
      </footer>
    </div>
  );
};

export default SubscribeSection;
