import React, { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ title, subtitle, products, onAdd, cart }) {
  const [visibleCount, setVisibleCount] = useState(3); // pehle 3 product
  const getQty = (id) => cart.find((i) => i.id === id)?.qty || 0;

  const visibleProducts = products.slice(0, visibleCount);
  const canShowMore = visibleCount < products.length;

  return (
    <section className="mt-10">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          {subtitle && (
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleProducts.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={onAdd}
            inCartQty={getQty(p.id)}
          />
        ))}
      </div>

      {canShowMore && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="px-6 py-2 text-xs font-medium rounded-full border border-gray-300 bg-white hover:bg-gray-100"
          >
            Show more 
            <i className="ri-arrow-drop-down-line"></i>
          </button>
        </div>
      )}
    </section>
  );
}
