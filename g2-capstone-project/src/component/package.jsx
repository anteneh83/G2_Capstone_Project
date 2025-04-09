import adventure from "../assets/adventure.png";
import paris from "../assets/paris.png";
import swiss from "../assets/swiss.png";
import singapor from "../assets/singapor.png";
import indonesia from "../assets/indonesia.png";
import taiwan from "../assets/taiwan.png";
import thailand from "../assets/thailand.png";

import React from "react";

const Package = () => {
    const destinations = [
        {
          name: "Paris",
          price: "$299.00/2days",
          image: paris,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
          name: "Swiss",
          price: "$299.00/3days",
          image: swiss,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
          name: "Thailand",
          price: "$299.00/3days",
          image: thailand,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
          name: "Taiwan",
          price: "$299.00/3days",
          image: taiwan,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
          name: "Indonesia",
          price: "$299.00/3days",
          image: indonesia,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
          name: "Singapore",
          price: "$299.00/3days",
          image: singapor,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
      ];

      return (
        <div className="bg-white text-gray-800">
          {/* Hero Section */}
          <div className="relative w-full h-full">
            <img
              src={adventure}
              alt="hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center">
              
              <h1 className="text-white text-4xl md:text-5xl font-bold">
                Travel Packages
              </h1>
              <div className="text-white text-20 mb-4 mt-10">Home {">"} <span className="text-white font-semibold">Travel Packages</span></div>
            </div>
          </div>

          {/* Popular Destination Section */}
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Popular Destination</h2>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                Discover more
              </button>
            </div>
            <p className="text-gray-500 text-lg mb-10 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {destinations.map((dest, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition"
                >
                  <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold flex-1">{dest.name}</h3>
                      <p className="text-gray-800 font-medium text-sm whitespace-nowrap">{dest.price}</p>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">{dest.description}</p>
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-yellow-500 text-sm">★★★★★</div>
                      <button className="bg-black text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-800">
                        Booking now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  );
};

export default Package;
