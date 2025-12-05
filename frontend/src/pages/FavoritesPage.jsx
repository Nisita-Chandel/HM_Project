import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearFavorites, toggleFavorite } from "../store/favoritesSlice";

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const handleRemove = (product) => {
    dispatch(toggleFavorite(product)); // toggle = remove if already added
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow p-8 text-center max-w-md w-full">
          <h1 className="text-xl font-semibold mb-2">No favourites yet</h1>
          <p className="text-sm text-gray-500 mb-4">
            Tap the heart icon on any product to add it to your favourites.
          </p>
          <Link
            to="/"
            className="inline-block px-4 py-2 rounded-full bg-black text-white text-sm"
          >
            Browse Home page
          </Link>
         
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-16">
      <main className="max-w-7xl mx-auto px-6">
        <header className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xs tracking-[0.25em] text-gray-500 mb-1">
              YOUR · FAVOURITES
            </p>
            <h1 className="text-2xl font-semibold">Favourite Products</h1>
          </div>
          <button
            onClick={() => dispatch(clearFavorites())}
            className="text-xs sm:text-sm text-red-500 hover:text-red-700 underline"
          >
            Clear all
          </button>
        </header>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-xs text-gray-500 mb-1">
                  {p.category || "Product"}
                </p>
                <h3 className="font-medium text-sm line-clamp-2">{p.title}</h3>
                <p className="mt-2 text-gray-700 text-sm">{p.price}</p>

                <div className="mt-3 flex justify-between items-center">
                  <Link
                    to={
                      p.category === "beauty"
                        ? `/beauty/${p.id}`
                        : "/"
                    }
                    className="text-xs text-gray-500 hover:text-gray-800 underline"
                  >
                    View details
                  </Link>
                  <button
                    onClick={() => handleRemove(p)}
                    className="text-xs text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
