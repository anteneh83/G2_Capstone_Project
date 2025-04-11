import React from 'react';
import TravelHero from './components/TravelHero';
import ExploreSection from './components/ExploreSection';
import WhyChooseUs from './components/WhyChooseUs';
import TourPartners from './components/TourPartners';
import TestimonialSection from './components/TestimonialSection';

function App() {
  return (
    <div className="font-sans">
      <TravelHero />
      <ExploreSection />
      <WhyChooseUs />
      <TourPartners />
      <TestimonialSection />
    </div>
  );
}

export default App;
