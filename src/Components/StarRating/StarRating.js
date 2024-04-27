import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating, isDarkTheme }) => {
  const starIcons = [];
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  for (let i = 0; i < filledStars; i++) {
    starIcons.push(<FaStar key={i} className={isDarkTheme ? "text-yellow-500" : "text-yellow-500"} />);
  }

  if (hasHalfStar) {
    starIcons.push(<FaStarHalfAlt key={filledStars} className={isDarkTheme ? "text-yellow-500" : "text-yellow-500"} />);
  }

  const remainingStars = 5 - starIcons.length;
  for (let i = 0; i < remainingStars; i++) {
    starIcons.push(<FaStar key={filledStars + i + 1} className={isDarkTheme ? "text-gray-300" : "text-gray-300"} />);
  }

  return (
    <div className="flex items-center justify-center sm:justify-start"> {/* Use Tailwind CSS classes to make the stars responsive */}
      {starIcons}
    </div>
  );
};

export default StarRating;
