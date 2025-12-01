import React from "react";
import ProductGrid from "../components/ProductGrid";

export default function KidsPage({ cart, onAdd, products }) {
  return (
    <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
      <h1 className="text-2xl font-semibold">Kids Collection</h1>
      <p className="text-sm text-gray-500 mt-1">
        Comfortable and cute styles for kids.
      </p>
      <ProductGrid
        title="Popular for Kids"
        products={products}
        onAdd={onAdd}
        cart={cart}
      />
    </main>
  );
}
