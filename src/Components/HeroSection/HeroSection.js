import React, { useState, useEffect } from 'react';
import { useTheme } from '../../ThemeContext'; // Import the useTheme hook
import './animate-slide-in.css'; // Import the CSS file
import Shoes1 from './Shoes.png';
import Shoes2 from './Shoes2.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(Shoes1);
  const [fadeIn, setFadeIn] = useState(false);
  const { isDarkTheme } = useTheme(); // Get the dark theme state from context

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(prevImage => (prevImage === Shoes1 ? Shoes2 : Shoes1));
      setFadeIn(true);
      setTimeout(() => {
        setFadeIn(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`py-20 px-8 md:flex items-center ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-blue-900 text-white'}`}>
      <div className={`rounded-lg custom-shadow shadow-4xl p-8 md:flex w-full md:max-w-5xl mx-auto ${isDarkTheme ? 'bg-gray-800' : 'bg-blue-800'}`}>
        {/* Text */}
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-xl md:text-4xl font-bold mb-6">Discover the Perfect Pair</h1>
          <p className="text-lg mb-6 ">Step into a world of comfort and style with XShoes. Our collection is meticulously crafted to elevate your every step. Experience innovation and elegance like never before.</p>
          <button className={`py-3 px-8 rounded-lg shadow-md  hover:bg-yellow-600 hover:text-blue-800 transition duration-300 ease-in-out mb-4 ${isDarkTheme ? 'bg-yellow-500 text-blue-900' : 'bg-blue-500 text-white'}`}><Link to="/category/Men" >Explore Now</Link></button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <div className={`w-full ${fadeIn ? 'animate-fade-in' : ''}`}>
            <img src={currentImage} alt="" className="w-full md:w-auto rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
