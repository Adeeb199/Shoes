import React from 'react';
import { useParams } from 'react-router-dom';
import shoesData from '../../Data/Data'; // Assuming ShoesData.js is in the same directory
import { useCart } from '../Context/CartContext'; // Update the path as per your project structure
import StarRating from '../StarRating/StarRating'; // Import the StarRating component
import Shoes from '../Shoes/Shoes';
const ItemDetails = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCart(); // Access the addToCart function and cart from the CartContext

  // Find the item with the matching id
  const item = shoesData.find(shoe => shoe.id === parseInt(id));

  if (!item) {
    return <div className="container mx-auto mt-8 mb-4 text-center">Item not found!</div>;
  }

  // Check if the item is already in the cart
  const isItemInCart = cart.some(cartItem => cartItem.id === item.id);

  // Function to handle adding the item to cart
  const handleAddToCart = () => {
    addToCart(item); // Add the item to the cart using addToCart function from the context
    console.log(`Added ${item.title} to cart`);
  };

  return (
    <div className="container mx-auto mt-8 mb-4 flex flex-col items-center">
    <div className="p-4 bg-gray-100 w-full text-3xl text-center mb-4 rounded-lg shadow-lg text-blue-400 font-medium">{item.category}- Products </div>
      <div className="flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden bg-gray-100 ">
        {/* Item Image */}
        <img src={item.image} alt={item.title} className="w-full md:w-1/2 h-auto md:mr-8 rounded-lg" />

        {/* Item Details */}
        <div className="flex flex-col justify-center md:w-1/2 p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
          
          {/* Description */}
          <p className="text-lg mb-4">{item.description}</p>
          
          {/* Prices */}
          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Old Price:</span>
            <span className="text-red-500 line-through">${item.oldPrice.toFixed(2)}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">New Price:</span>
            <span className="text-red-500">${item.price.toFixed(2)}</span>
          </div>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Rating:</span>
            <span>
              <StarRating rating={item.rating} isDarkTheme={false} />
            </span>
          </div>
          
          {/* Render Add to Cart or Added to Cart Button */}
          {isItemInCart ? (
            <button className="bg-gray-400 text-white px-4 py-2 rounded-md cursor-not-allowed" disabled>
              Added to Cart
            </button>
          ) : (
            <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
          )}


        </div>
      </div>
      {/* <Shoes category={item.category} numToShow={4}/> */}
    </div>
  );
};

export default ItemDetails;
