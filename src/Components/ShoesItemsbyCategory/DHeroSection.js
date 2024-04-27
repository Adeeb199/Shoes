import React from 'react';
import { Link } from 'react-router-dom';

const DHeroSection = ({ category, image }) => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to="/">
                    <span className="sr-only">XShoes</span>
                    <img className="h-8 w-auto sm:h-10" src="/logo.svg" alt="XShoes" />
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-md bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/logo.svg" alt="XShoes" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{category}</span>
              </h2>
              <div className="mt-3 sm:mt-5 sm:max-w-lg sm:mx-auto lg:mx-0 xl:mt-8">
                <div className="flex justify-center">
                  <img className="rounded-lg shadow-xl h-64 sm:h-96 lg:h-128" src={image} alt={category} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/hero-bg.jpg" alt="Background" />
      </div>
    </div>
  );
};

export default DHeroSection;
