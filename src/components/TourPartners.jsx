import React from "react";
import sponerImage from '../assets/sponser.png';

function TourPartners() {
  return (
    <section className="py-16 text-center">
      <h3 className="text-5xl font-bold mb-2">Our tour partner</h3>
      <p className="text-gray-500 mb-10 text-sm">
      There are many variation of passage of lorem ipsum available but the majority have suffered alteration 
      </p>
      <img 
        src={sponerImage} 
        alt="Tour Partner" 
        width={1137.5428466796875} 
        height={53.09568786621094} 
        className="mx-auto" // Centers the image
      />
    </section>
  );
}

export default TourPartners;
