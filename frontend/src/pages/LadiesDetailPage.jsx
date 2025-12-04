// src/pages/LadiesDetailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart as addToCartRedux } from "../store/cartSlice";
import LadiesProducts from "../data/LadiesProducts";

export default function LadiesDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = LadiesProducts.find((p) => p.id === id);

  const handleAddToCart = () => {
    if (!product) return;
    const numericPrice = Number(String(product.price).replace(/[^\d]/g, ""));
    dispatch(
      addToCartRedux({
        id: product.id,
        title: product.title,
        img: product.img,
        price: numericPrice,
      })
    );
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 text-gray-900 pt-10 pb-16">
        <main className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
          <Link
            to="/ladies"
            className="text-sm text-blue-600 hover:underline"
          >
            ← Back to Ladies Collection
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 pt-10 pb-16">
      <main className="max-w-5xl mx-auto px-6">
        <div className="mb-4">
          <Link
            to="/ladies"
            className="text-sm text-gray-600 hover:text-gray-900 underline"
          >
            ← Back to Ladies Collection
          </Link>
        </div>

        <section className="bg-white rounded-2xl shadow-md p-6 md:flex gap-8">
          <div className="md:w-1/2">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div className="mt-4 md:mt-0 md:w-1/2 flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-[0.25em] text-gray-500 mb-1">
                LADIES · DETAIL
              </p>
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                {product.title}
              </h1>
              <p className="text-xl text-gray-800 mb-4">{product.price}</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                This outfit is perfect for parties, functions and special
                occasions. Pair it with elegant accessories, heels or sandals
                and a matching bag to complete your look.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={handleAddToCart}
                className="px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800"
              >
                Add to Cart
              </button>
              <Link
                to="/cart"
                className="px-5 py-2.5 rounded-lg border border-gray-300 text-sm hover:bg-gray-100"
              >
                Go to Cart
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
