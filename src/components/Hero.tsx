import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-blue-600 to-blue-400">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury hotel room"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find Your Perfect Stay
          </h1>
          <p className="mt-6 max-w-md mx-auto text-xl text-gray-100 sm:text-2xl md:mt-8 md:max-w-3xl">
            Discover amazing hotels at the best prices worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;