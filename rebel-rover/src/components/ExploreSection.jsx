import React from "react";
import user from "../assets/unsplash_sELcHR_bGVs.png";
import user2 from "../assets/Group 45.png";
import user3 from "../assets/unsplash_519_90ncAds.png";

function ExploreSection() {
  return (
    <section className="py-20 text-center bg-white text-gray-900">
      <h2 className="text-4xl font-bold leading-tight mb-4">
        Explore new worlds with <br /> exotic natural scenery
      </h2>
      <p className="text-gray-600 mb-10">
        Explore the world with what you love. Beautiful natural beauty.
      </p>

      {/* Container for the arrows and images */}
      <div className="relative flex flex-wrap justify-center items-start gap-8 px-4">
        {/* Left Arrow */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow rounded-lg text-xl z-10">
          &#10094;
        </button>

        {/* Right Arrow */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow rounded-lg text-xl z-10">
          &#10095;
        </button>

        {/* Image 1 */}
        <img
          src={user2}
          alt="Travelers"
          className="w-[300px] h-[250px] rounded-[10px] object-cover"
        />

        {/* Image 2 with overlay text */}
        <div className="relative w-[300px] h-[350px] rounded-[10px] overflow-hidden shadow-lg">
          <img src={user} alt="Bali, Indonesia" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 bg-white p-4 rounded-b-lg shadow w-full text-left">
            <h3 className="font-semibold">Bali, Indonesia.</h3>
            <p className="text-sm text-gray-600">
              Bali is a beautiful tourist spot and is visited by many travelers.
            </p>
          </div>
        </div>

        {/* Image 3 */}
        <img
          src={user3}
          alt="Statue of Liberty"
          className="w-[300px] h-[250px] rounded-[10px] object-cover"
        />
      </div>
    </section>
  );
}

export default ExploreSection;