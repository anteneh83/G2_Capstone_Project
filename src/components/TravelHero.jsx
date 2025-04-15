import React from "react";
import user1 from '../assets/suitcase-travel-summer-holidays-vacation-travelers-luggage 1.png';

function TravelHero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${user1})` }}
    >
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-20">
        <div className="text-2xl font-bold text-white">
          <span className="text-blue-300">REBEL</span> ROVER
        </div>
        <nav className="hidden md:flex gap-6 text-white font-medium">
          {/* Add nav links here */}
        </nav>
        <div className="md:hidden text-white text-xl">☰</div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-start px-8 md:px-20 pt-[180px] space-y-6">
      <h1
  className="font-[Poppins] font-bold text-[90px] leading-[110px] text-left"
  style={{ color: '#FFFFFF', height: '212.05px' }}
>
  Make in <br /> your journey.
</h1>


        <p
          className="text-[18px] leading-[36px] font-medium font-[Poppins]"
          style={{ color: '#CFCFCF', width: '440px' }}
        >
          Explore the world with what you love. Beautiful natural beauty.
        </p>

        {/* Filters Section */}
        <div
          className="bg-white flex flex-wrap md:flex-nowrap gap-6 shadow-lg text-black"
          style={{
            borderRadius: '72px',
            border: '1px solid #CBCACA',
            marginTop: '7px',
            marginBottom: '7px',
            width: '736px',
            height: '78.07px',
            padding: '12px 24px',
            alignItems: 'center'
          }}
        >
          {["Location", "Date", "People"].map((option, i) => (
            <select
              key={i}
              className="px-4 py-2"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#9B9B9B',
                borderRadius: '8px',
                marginRight: i < 2 ? '12px' : '0px',
                minWidth: '150px'
              }}
            >
              <option>{option}</option>
            </select>
          ))}

          <button
            className="px-6 py-2 text-white hover:bg-gray-800 transition"
            style={{
              backgroundColor: '#000000',
              borderRadius: '30px',
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '17px',
              lineHeight: '29px'
            }}
          >
            Explore now
          </button>
        </div>

        {/* Popular Places */}
        <div
          className="text-sm text-white"
          style={{
            marginTop: '45px',
            paddingLeft: '4px'
          }}
        >
          <span className="font-semibold text-gray-200">Popular Place:</span> Bali, Istanbul, Rome, Paris.
        </div>
      </div>
    </section>
  );
}

export default TravelHero;
