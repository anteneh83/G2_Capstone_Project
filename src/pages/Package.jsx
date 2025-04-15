import React from "react";
import adventure from "../assets/packageimg/adventure.png";
import paris from "../assets/packageimg/paris.png"
import swiss from "../assets/packageimg/swiss.png";
import singapor from "../assets/packageimg/singapor.png";
import indonesia from "../assets/packageimg/indonesia.png";
import taiwan from "../assets/packageimg/taiwan.png";
import thailand from "../assets/packageimg/thailand.png";
import familyTravel from "../assets/packageimg/familytravel.png";
import plane from "../assets/packageimg/airplane.png";

const Package = () => {
  const destinations = [
    {
      name: "Paris",
      price: "$299.00/2days",
      image: paris,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      name: "Swiss",
      price: "$299.00/3days",
      image: swiss,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      name: "Thailand",
      price: "$299.00/3days",
      image: thailand,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      name: "Taiwan",
      price: "$299.00/3days",
      image: taiwan,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      name: "Indonesia",
      price: "$299.00/3days",
      image: indonesia,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      name: "Singapore",
      price: "$299.00/3days",
      image: singapor,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-full">
        <img src={adventure} alt="hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Travel Packages</h1>
          <div className="text-white text-20 mb-4 mt-10">
            Home {">"} <span className="text-white font-semibold">Travel Packages</span>
          </div>
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
            <div key={index} className="rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition">
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

      {/* Tips & Article Section */}

<div className="w-full h-auto object-cover">
  {/* Airplane Decorative Background */}
  <img
    src={plane}
    alt="Airplane"
    className="w-full h-auto object-cover"
        />
 
</div>



      <div className="bg-white py-16 px-4 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Tips & Article</h2>
            <p className="text-gray-500 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
            View more
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <p className="text-xs text-gray-500 mb-1">Perfect | Tips</p>
              <h3 className="font-semibold text-lg mb-2">9 Popular Travel Destination on Sale in 2022</h3>
              <p className="text-gray-500 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800">
                Read More
              </button>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <p className="text-xs text-gray-500 mb-1">Tips | Travel</p>
              <h3 className="font-semibold text-lg mb-2">How Are We Going to Travel in 2022</h3>
              <p className="text-gray-500 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800">
                Read More
              </button>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm">
            <img src={familyTravel} alt="Family Travel" className="w-full h-64 object-cover" />
            <div className="p-6 bg-gray-100">
              <p className="text-xs text-gray-500 mb-1">Stories | Tips</p>
              <h3 className="font-semibold text-lg mb-2">Travel Stories For Now and the Future</h3>
              <p className="text-gray-500 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
