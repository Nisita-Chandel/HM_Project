// src/components/ProductCard.jsx
import React, { useState } from "react";

/**
 * ProductCard
 * Expects product: { _id, imgUrl, title, price, type, favourite }
 */
export default function ProductCard({ product = {}, onToggleFavourite = () => {} }) {
  const { _id, imgUrl, title, price, type, favourite } = product;
  const [isFav, setIsFav] = useState(Boolean(favourite));

  function toggleFav(e) {
    e.stopPropagation();
    const next = !isFav;
    setIsFav(next);
    onToggleFavourite(_id, next);
  }

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer"
      role="article"
    >
      <div className="relative w-full overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          loading="lazy"
          className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* favourite button */}
        <button
          onClick={toggleFav}
          className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-sm hover:scale-105 transition"
          aria-label="Toggle favourite"
        >
          {isFav ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657 3.172 11.83a4 4 0 010-5.656z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 015.656 5.656L12 21.657 3.172 10.828a4 4 0 010-5.656z" />
            </svg>
          )}
        </button>
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-500">{type}</div>
        <div className="mt-1 text-sm font-medium text-gray-900 truncate">{title}</div>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-lg font-semibold">₹{price}</div>
          <button className="text-xs px-3 py-1 border rounded-full">Add</button>
        </div>
      </div>
    </div>
  );
}
