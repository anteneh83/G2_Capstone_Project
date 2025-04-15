import React from "react";
import TravelHero from "../components/TravelHero";
import ExploreSection from "../components/ExploreSection";
import WhyChooseUs from "../components/WhyChooseUs";
import TourPartners from "../components/TourPartners";
import TestimonialSection from "../components/TestimonialSection";
import Footer from '../components/Footer';
import "./Home.css";
function Home() {
    return (
      <div className="font-sans">
        <TravelHero />
        <ExploreSection />
        <WhyChooseUs />
        <TourPartners />
        <TestimonialSection />
        <Footer/>
      </div>
    );
}

export default Home;
