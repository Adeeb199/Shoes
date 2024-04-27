import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Shoes from '../../Components/Shoes/Shoes';
import {  useTheme } from '../../ThemeContext';
const HomePage = () => {
    const { isDarkTheme } = useTheme();
  return (
    <div className={` mx-auto gap-2 ${isDarkTheme ? 'bg-gray-900 text-white' : ''}`}>
     
    <HeroSection/>
        <Shoes category="Men" numToShow={4} />
        <Shoes category="Women" numToShow={4} />
        <Shoes category="Kids" numToShow={4}/>
        
    </div>
  )
}

export default HomePage