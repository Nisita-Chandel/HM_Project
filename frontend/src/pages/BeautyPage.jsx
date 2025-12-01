import React from "react";
import ProductGrid from "../components/ProductGrid";

export default function BeautyPage({ cart, onAdd, products }) {
  return (
    <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
      <h1 className="text-2xl font-semibold">Beauty Corner</h1>
      <p className="text-sm text-gray-500 mt-1">
        Makeup picks to complete your look.
      </p>
      <ProductGrid
        title="Top Beauty Picks"
        products={products}
        onAdd={onAdd}
        cart={cart}
      />
    </main>
  );
}
