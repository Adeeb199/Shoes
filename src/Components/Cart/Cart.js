import React, { useState } from 'react';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa'; // Import Font Awesome icons
import { useTheme } from '../../ThemeContext'; // Import the ThemeContext

const EmptyCart = () => {
  // Get the current theme from the ThemeContext
  const { isDarkTheme } = useTheme();

  return (
    <div className={`flex justify-center items-center h-screen ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">Your cart is empty</h1>
        <p className="text-lg">Start shopping now!</p>
      </div>
    </div>
  );
};

const Cart = ({ cartItems, removeFromCart }) => {
  // State to manage item quantities
  const [itemQuantities, setItemQuantities] = useState(cartItems.map(() => 1)); // Initialize all quantities to 1

  // Function to increase quantity
  const increaseQuantity = (index) => {
    const newQuantities = [...itemQuantities];
    newQuantities[index]++;
    setItemQuantities(newQuantities);
  };

  // Function to decrease quantity
  const decreaseQuantity = (index) => {
    if (itemQuantities[index] > 1) {
      const newQuantities = [...itemQuantities];
      newQuantities[index]--;
      setItemQuantities(newQuantities);
    }
  };

  // Calculate total bill
  const totalBill = cartItems.reduce((total, item, index) => total + item.price * itemQuantities[index], 0);

  // Get the current theme from the ThemeContext
  const { isDarkTheme } = useTheme();

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className={`flex flex-col md:flex-row justify-between w-full p-4  ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      {/* Left section for cart items */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-center mb-6 tracking-wide relative">
          <span className={`${isDarkTheme ? 'text-white-500' : 'text-white'} inline-block relative z-10`}>
            Cart Items
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 transform -skew-x-12 z-0"></span>
        </h1>

        {cartItems.map((item, index) => (
          <div key={index} className="relative mb-4">
            <div className={`flex items-center justify-between p-4 rounded-lg ${isDarkTheme ? 'bg-gray-700 border border-gray-600' : 'border border-gray-200 bg-gray-100'}`}>
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
              <div className="flex flex-col flex-grow ml-4">
                <p className="text-xl font-semibold mb-2">{item.title}</p>
                <div className="flex items-center space-x-2">
                  <button onClick={() => decreaseQuantity(index)} className="quantity-control"><FaMinus /></button>
                  <p>{itemQuantities[index]}</p>
                  <button onClick={() => increaseQuantity(index)} className="quantity-control"><FaPlus /></button>
                </div>
                <p className="text-gray-500 mb-2">Price: ${(item.price * itemQuantities[index]).toFixed(2)}</p>
              </div>
              <button onClick={() => removeFromCart(index)} className={`remove-btn ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}><FaTimes /></button>
            </div>
            {/* Line below each item */}
            {index !== cartItems.length - 1 && <hr className={`${isDarkTheme ? 'border-gray-600' : 'border-gray-200'}`} />}
          </div>
        ))}
      </div>
      {/* Right section for total bill and pay with stripe button */}
      <div className="w-full md:w-1/2 mt-8 md:mt-12 md:ml-4 md:mt-0">
        <div className={`p-4 rounded-lg ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <p className={`${isDarkTheme ? 'text-blue-500' : ''} text-xl font-semibold text-center mb-4`}>Total Bill</p>
          <div className="flex justify-between">
            <p className="text-lg">Total Items:</p>
            <p>{cartItems.length}</p>
          </div>
          <hr className={`my-4 ${isDarkTheme ? 'border-gray-600' : 'border-gray-300'}`} />
          <div className="flex justify-between">
            <p className="text-lg">Total:</p>
            <p className="text-xl font-semibold">${totalBill.toFixed(2)}</p>
          </div>
          <button className={`w-full mt-6 px-4 py-2 rounded-lg ${isDarkTheme ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>Pay with stripe</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
