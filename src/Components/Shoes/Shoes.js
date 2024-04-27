import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { useTheme } from '../../ThemeContext';
import ShoesData from '../../Data/Data';
import StarRating from '../StarRating/StarRating'; // Import the StarRating component

const Shoes = ({ category, numToShow }) => {
  const [addedToCart, setAddedToCart] = useState(Array(numToShow).fill(false));
  const { isDarkTheme } = useTheme();
  const { cart, addToCart } = useCart();

  const filteredShoesData = ShoesData.filter(item => item.category === category);
  const slicedShoesData = filteredShoesData.slice(0, numToShow);

  useEffect(() => {
    const updatedAddedToCart = slicedShoesData.map(item =>
      cart.some(cartItem => cartItem.id === item.id)
    );
    if (!arraysAreEqual(updatedAddedToCart, addedToCart)) {
      setAddedToCart(() => updatedAddedToCart);
    }
  }, [cart, slicedShoesData, addedToCart]);

  const arraysAreEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  const handleAddToCart = (index) => {
    const selectedItem = slicedShoesData[index];
    if (!addedToCart[index]) {
      console.log(`Added ${selectedItem.title} to cart`);
      setAddedToCart(prevAddedToCart => {
        const newAddedToCart = [...prevAddedToCart];
        newAddedToCart[index] = true;
        return newAddedToCart;
      });
      addToCart(selectedItem);
    } else {
      console.log(`Removed ${selectedItem.title} from cart`);
    }
  };

  return (
    <div className={` ${isDarkTheme ? "text-gray-800" : "text-white"} ${isDarkTheme ? "bg-gray-900" : ""}`}> {/* Apply dark theme to text color and background */}
      <div className={`text-center text-3xl font-bold mb-4 ${isDarkTheme ? "text-blue-300" : "text-blue-700"}`}>
        <span className={`${isDarkTheme ? "border-b-4 border-blue-300" : "border-b-4 border-blue-700"}`}>{category.toUpperCase()} SHOES</span>
      </div>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {slicedShoesData.map((item, index) => (
          <Link key={index} to={`/item/${item.id}`} className="w-full">
            <div
              id={`${category.toLowerCase()}-shoe-item-${index}`}
              className={`bg-white rounded-lg shadow-xl p-4 grid-item ${isDarkTheme ? "bg-gray-800" : ""}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-lg mb-4 transform hover:scale-110 transition duration-300"
                style={{ maxWidth: '100%' }} // Adjust image size for responsiveness
              />
              <h2 className={`${isDarkTheme ? "text-blue-900" : "text-black"} text-xl font-semibold mb-2`}>{item.title}</h2>
              <p className={`${isDarkTheme ? "text-gray-400" : "text-gray-600"} mb-2`}>{item.description}</p>
              <div className="flex flex-col sm:flex-row items-center justify-between mb-2"> {/* Adjust flex layout for responsiveness */}
                <div>
                  <span className={`${isDarkTheme ? "text-gray-400" : "text-gray-600"} font-semibold mr-2 line-through`}>${item.oldPrice}</span>
                  <span className={`${isDarkTheme ? "text-red-400" : "text-red-500"} font-semibold`}>${item.price}</span>
                </div>
                <div className="flex items-center mt-2 sm:mt-0"> {/* Adjust margin for responsiveness */}
                  <span className={`${isDarkTheme ? "text-gray-400" : "text-gray-600"} mr-2`}>Rating:</span>
                  <div className="flex items-center">
                    <StarRating rating={item.rating} isDarkTheme={isDarkTheme} />
                  </div>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(index);
                }}
                className={`block w-full px-4 py-2 ${addedToCart[index] ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 transition duration-300'} text-white rounded-md`}
                disabled={addedToCart[index]}
              >
                {addedToCart[index] ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Shoes;
