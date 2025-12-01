import React from "react";
import ProductGrid from "../components/ProductGrid";

export default function LadiesPage({ cart, onAdd, products }) {
  return (
    <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
      <h1 className="text-2xl font-semibold">Ladies Collection</h1>
      <p className="text-sm text-gray-500 mt-1">
        Elegant and trendy looks for every occasion.
      </p>
      <ProductGrid
        title="Featured Dresses"
        products={products}
        onAdd={onAdd}
        cart={cart}
      />
    </main>
  );
}
