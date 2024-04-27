import React from 'react';
import { useCart } from '../Context/CartContext'; // Import the useCart hook
import { useTheme } from '../../ThemeContext'; // Import the ThemeContext
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'; // Import the FaTimes icon from react-icons/fa

const CartPopup = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useCart(); // Import removeFromCart function from CartContext
  const { isDarkTheme } = useTheme(); // Get the current theme from the ThemeContext

  // Get the first three items from the cart
  const firstThreeItems = cart.slice(0, 3);

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isOpen ? '' : 'hidden'}`} onClick={onClose}>
      <div className={`fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 py-2 shadow-lg overflow-y-auto ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          &times;
        </button>
        <ul className="mt-8 flex flex-col justify-center gap-4 ">
          <li className="font-bold text-2xl text-center mb-4 py-2 border-b border-gray-300">
            <span className={`${isDarkTheme ? 'text-blue-500 border-b-4 border-blue-500' : ''} inline-block pb-2`}>Cart Items</span>
          </li>
          {firstThreeItems.map((item, index) => (
            <li key={index} className={`${isDarkTheme ? 'bg-gray-800' : 'bg-gray-100'} cart-item flex items-center gap-4 p-2 border-b shadow-lg border-gray-300 w-full mb-4`}>
              <div className="flex items-center justify-between w-full">
                <img src={item.image} alt={item.title} className="w-28 h-28 md:w-24 md:h-24 rounded-lg" />
                <div className="flex flex-col sm:flex-row justify-between items-start w-full sm:items-center sm:gap-4">
                  <div className="sm:flex-grow sm:w-1/2" style={{ marginLeft: '1rem' }}>
                    <p className="font-semibold mb-2">{item.title}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(index)} className={`text-white ${isDarkTheme ? 'bg-red-500' : 'bg-blue-500'} self-end sm:self-auto mr-2 p-2 rounded-full hover:bg-red-600`}>
                    <FaTimes />
                  </button>
                </div>
              </div>
            </li>
          ))}
          <li>
            <Link to="/Cart">
              <button className={`w-full ${isDarkTheme ? 'bg-blue-500' : 'bg-blue-500'} text-white px-4 py-2 rounded-md hover:bg-blue-600`}>
                Open Full Cart
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartPopup;
