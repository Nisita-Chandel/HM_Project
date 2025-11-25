// src/components/FashionHeroCard.jsx
import React from "react";

/**
 * FashionHeroCard
 * Props:
 * - product: { imgUrl, title, subtitle }
 * - variant: "side" | "center" (affects cropping and overlay)
 * - className / imgClassName optional
 */
export default function FashionHeroCard({
  product = {},
  variant = "side",
  className = "",
  imgClassName = "",
}) {
  const { imgUrl, title, subtitle } = product;
  // choose heights to mimic lookbook tall images
  const baseHeight = variant === "center" ? "md:h-[720px]" : "md:h-[680px]";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-md group bg-gray-100 ${className}`}
      aria-hidden="false"
    >
      <img
        src={imgUrl}
        alt={title}
        loading="lazy"
        className={`w-full object-cover ${baseHeight} h-[420px] ${imgClassName} transition-transform duration-500 group-hover:scale-105`}
        style={{ objectPosition: variant === "center" ? "center" : "top" }}
      />

      {/* overlay caption bottom-left */}
      <div className="absolute left-6 bottom-6 bg-black/60 px-4 py-2 rounded text-white">
        <div className="text-sm font-medium">{subtitle}</div>
        <div className="text-lg font-semibold">{title}</div>
      </div>
    </div>
  );
}
