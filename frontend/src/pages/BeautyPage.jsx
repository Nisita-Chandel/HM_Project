// src/pages/BeautyPage.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart as addToCartRedux } from "../store/cartSlice";
import { toggleFavorite } from "../store/favoritesSlice";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import BeautyProducts from "../data/BeautyProducts";

function ProductCard({ product, onAdd, inCartQty, isFavorite, onToggleFavorite }) {
  const isInCart = inCartQty > 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col">
      {/* Image + heart overlay */}
      <div className="relative">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-80 object-cover"
        />
        <button
          type="button"
          onClick={() => onToggleFavorite(product)}
          className="absolute top-2 right-2 bg-white/80 rounded-full p-1.5 shadow-sm hover:bg-white"
        >
          <Heart
            size={18}
            className={
              isFavorite
                ? "fill-red-500 text-red-500"
                : "text-gray-500 hover:text-red-500"
            }
          />
        </button>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-medium text-sm line-clamp-2">{product.title}</h3>
        <p className="mt-2 text-gray-700 text-sm">{product.price}</p>

        <div className="mt-3 flex justify-between items-center">
          <button
            onClick={() => onAdd(product)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium border ${
              isInCart
                ? "bg-green-600 text-white border-green-700"
                : "bg-gray-900 text-white border-gray-900 hover:bg-white hover:text-gray-900"
            }`}
          >
            {isInCart ? `In Cart (${inCartQty})` : "Add to cart"}
          </button>

          <Link
            to={`/beauty/${product.id}`}
            className="text-xs text-gray-500 hover:text-gray-800"
          >
            View
          </Link>
          
        </div>
      </div>
    </div>
  );
}

function ProductGrid({ products, onAdd, cartItems, favorites, onToggleFavorite }) {
  const getQty = (id) => cartItems.find((i) => i.id === id)?.qty || 0;
  const isFavorite = (id) => favorites.some((f) => f.id === id);

  return (
    <section className="mt-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={onAdd}
            inCartQty={getQty(p.id)}
            isFavorite={isFavorite(p.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}

export default function BeautyPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const favoriteItems = useSelector((state) => state.favorites.items);

  const addToCart = (product) => {
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

  const handleToggleFavorite = (product) => {
    dispatch(
      toggleFavorite({
        id: product.id,
        title: product.title,
        img: product.img,
        price: product.price,
        category: "beauty",
      })
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 pt-10 pb-16">
      <main className="max-w-7xl mx-auto px-6">
        <header className="flex justify-between items-center">
          <div>
            <p className="text-xs tracking-[0.25em] text-gray-500 mb-1">
              BEAUTY · CORNER
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold">
              Beauty Corner
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Makeup picks to complete your look.
            </p>
          </div>
          {/* <div className="flex items-center gap-3">
            <Link
              to="/cart"
              className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              🛒 Go to Cart
            </Link>
            <Link
              to="/favorites"
              className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 underline"
            >
              ❤️ View Favourites
            </Link>
            <Link
              to="/"
              className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 underline"
            >
              ← Back to Home
            </Link>
          </div> */}
        </header>

        <ProductGrid
          products={BeautyProducts}
          onAdd={addToCart}
          cartItems={cartItems}
          favorites={favoriteItems}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
    </div>
  );
}
