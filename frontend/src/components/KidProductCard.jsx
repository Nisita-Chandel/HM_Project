// src/components/KidProductCard.jsx
import React from "react";

export default function KidProductCard({ product,index, onToggleFavourite }) {
  const imgSrc = product?.images?.[index % product.images.length] ?? "/images/fallback.png"; // use first image
  return (
    <div className="rounded-lg overflow-hidden shadow-sm bg-white">
      <div className="w-full h-40 md:h-44 lg:h-48 relative">
        <img
          src={imgSrc}
          alt={product.title}
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = "/images/fallback.png"; }}
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-medium">{product.title}</h3>
        <p className="text-xs text-gray-500">{product.type}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="font-semibold">₹{product.price}</div>
          <button
            onClick={() => onToggleFavourite?.(product._id, !product.favourite)}
            className="text-sm"
          >
            {product.favourite ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
}
