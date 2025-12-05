// src/pages/LadiesPage.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart as addToCartRedux } from "../store/cartSlice";
import { Link } from "react-router-dom";
import LadiesProducts from "../data/LadiesProducts";
import { Heart } from "lucide-react";
import { toggleFavorite as toggleFavoriteRedux } from "../store/favoritesSlice";

function ProductCard({ product, onAdd, inCartQty, isFavorite, onToggleFavorite }) {
  const isInCart = inCartQty > 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col relative">
      {/* ❤️ Favourite Heart */}
      <button
        type="button"
        onClick={() => onToggleFavorite(product)}   // 👈 send full product
        className="absolute top-2 right-2 z-10 rounded-full bg-white/80 p-1.5 shadow-sm hover:bg-white"
      >
        <Heart
          className={`w-4 h-4 ${
            isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"
          }`}
        />
      </button>

      <img
        src={product.img}
        alt={product.title}
        className="w-full h-98 object-cover"
      />

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

          {/* View goes to /ladies/:id */}
          <Link
            to={`/ladies/${product.id}`}
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

  const isFavoriteProduct = (id) =>
    favorites.some((item) => item.id === id);   // 👈 check by id

  return (
    <section className="mt-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={onAdd}
            inCartQty={getQty(p.id)}
            isFavorite={isFavoriteProduct(p.id)}   // 👈 boolean
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}

export default function LadiesPage() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // favorites = array of product objects, same as FavoritesPage
  const favorites = useSelector((state) => state.favorites.items);

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

  const toggleFavorite = (product) => {
    // 👇 send full product object, as your slice expects
    dispatch(
      toggleFavoriteRedux({
        ...product,
        category: "ladies", // optional but useful for FavoritesPage routing
      })
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 pt-10 pb-16">
      <main className="max-w-7xl mx-auto px-6">
        <header className="flex justify-between items-center">
          <div>
            <p className="text-xs tracking-[0.25em] text-gray-500 mb-1">
              LADIES · COLLECTION
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold">
              Ladies Collection
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Elegant and trendy looks for every occasion.
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
          products={LadiesProducts}
          onAdd={addToCart}
          cartItems={cartItems}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </main>
    </div>
  );
}
