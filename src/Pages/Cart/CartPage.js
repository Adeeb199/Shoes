import React from 'react';
import Cart from '../../Components/Cart/Cart'; // Import the Cart component
import { useCart } from '../../Components/Context/CartContext'; // Import the useCart hook

const CartPage = () => {
  const { cart, removeFromCart } = useCart(); // Get the cart items and removeFromCart function from the CartContext

  return (
    <div>
      <Cart cartItems={cart} removeFromCart={removeFromCart} /> {/* Pass the cart items and removeFromCart function to the Cart component */}
      {/* Add more content or functionalities as needed */}
    </div>
  );
};

export default CartPage;
