import React from "react";
import ProductGrid from "../components/ProductGrid";

export default function MenPage({ cart, onAdd, products }) {
  return (
    <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
      <h1 className="text-2xl font-semibold">Men Collection</h1>
      <p className="text-sm text-gray-500 mt-1">
        From office to weekend outfits.
      </p>
      <ProductGrid
        title="Latest for Men"
        products={products}
        onAdd={onAdd}
        cart={cart}
      />
    </main>
  );
}
