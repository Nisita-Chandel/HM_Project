// src/components/KidsHeroCard.jsx
import React from "react";

export default function KidsHeroCard({ image, title, subtitle, variant = "side" }) {
  const imgSrc = typeof image === "string" ? image : (Array.isArray(image) ? image[0] : "/images/fallback.png");
  return (
    <div className={`rounded-xl overflow-hidden ${variant === "center" ? "col-span-1 md:col-span-1" : ""}`}>
      <div className="w-full h-64 md:h-80 lg:h-96 relative">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => (e.currentTarget.src = "/images/fallback.png")}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}
