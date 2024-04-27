import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from '../../Components/Shoes/Shoes';
import { useTheme } from '../../ThemeContext'; // Import the useTheme hook

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { isDarkTheme } = useTheme(); // Get the dark theme state from context

  return (
      <div className={isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-gray-800"}> {/* Apply dark theme to the background */}
        <Shoes category={categoryName} />
      </div>
   
  );
}

export default CategoryPage;
