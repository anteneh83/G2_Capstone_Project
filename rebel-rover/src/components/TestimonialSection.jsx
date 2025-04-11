import React from "react";
import client1 from "../assets/client 1.png";
import client2 from "../assets/client 2.png";
import client3 from "../assets/client 3.png";

function TestimonialSection() {
  const testimonials = [
    { name: "Sara Jay", role: "Traveller", img: client1, rating: 5 },
    { name: "Cristian Daniel", role: "Traveller", img: client2, rating: 4 },
    { name: "Kausar Hasan", role: "Traveller", img: client3, rating: 5 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mb-10">
        <h4 className="text-sm uppercase tracking-widest text-gray-500 text-left">Testimonial</h4>
        <h2 className="text-[60px] font-bold text-left">What our clients say</h2>
        <p className="text-sm text-gray-500 mt-2 text-left">
          Create a visual identity for your company and overall brand
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-0">
        {testimonials.map((user, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 w-80">
            <div className="flex items-center mb-4">
              <img
                src={user.img}
                alt={user.name}
                className="w-[133px] h-[133px] object-cover rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{user.name} </h3>
                <p className="text-sm text-gray-600">{user.role} </p>
                {/* Star Rating */}
                <div className="mt-2">
                  {[...Array(user.rating)].map((_, idx) => (
                    <span key={idx} className="text-yellow-500">★</span>
                  ))}
                  {[...Array(5 - user.rating)].map((_, idx) => (
                    <span key={idx} className="text-gray-300">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 py-16" >
            Before we define any approach, we need to deline the brands overall goal. We  then need to dive.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;