import React from "react";
import user2 from '../assets/Group 31 (1).png';
import user1 from '../assets/Group 31.png';
import user3 from '../assets/Frame 1.png';
import user4 from '../assets/back.png';

function WhyChooseUs() {
  return (
    <section className="w-full px-4 md:px-16 mb-12">
      {/* Background covers 70% */}
      <div
        className="relative bg-cover bg-center py-16"
        style={{
          backgroundImage: `url(${user4})`,
          height: "70vh",
        }}
      >
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">Why choose Us?</h2>
          <p className="text-lg">Our services have been trusted by world travelers.</p>
        </div>

        {/* Keep boxes centered */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {[
            { icon: user1, title: "Best Service" },
            { icon: user2, title: "Price Guarantee" },
            { icon: user3, title: "Handpicked Hotels" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl shadow-xl p-6 w-full md:w-[300px] h-[383px]"
            >
              {/* IMAGE ALIGNED LEFT */}
              <img src={item.icon} alt={item.title} className="h-16 mb-6" />

              <h3 className="font-semibold text-xl text-left mb-2">{item.title}</h3>

              <p className="text-sm text-left mb-4">
                Our service is reliable and convenient, our service is quality.
              </p>

              {/* LINK ALIGNED LEFT */}
              <div className="text-left">
                <a href="#" className="text-sm font-semibold text-black hover:text-blue-600 transition">
                  Learn more ➝
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;