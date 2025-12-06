// src/pages/ProductsPage.jsx
import React, { useEffect, useState } from "react";
import api from "../api";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        console.log("Products from backend:", res.data);
        setProducts(res.data);
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (error)   return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <main className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-semibold mb-6">All Products</h1>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-xl shadow-sm p-4 flex flex-col"
            >
              <div className="aspect-[3/4] mb-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={p.image || "/placeholder.png"}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-medium truncate">{p.name}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {p.description}
              </p>

              <div className="mt-2 font-semibold">₹{p.price}</div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default ProductsPage;
