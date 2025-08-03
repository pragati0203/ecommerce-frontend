import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Premium Orthopedic Solutions
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Trusted by surgeons worldwide for quality and precision
        </p>
        <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;