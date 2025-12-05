// src/pages/SearchPage.jsx
import React, { useState } from "react";
import LadiesProducts from "../data/LadiesProducts";
import MenProducts from "../data/MenProducts";
import KidsProducts from "../data/KidsProducts";
import BeautyProducts from "../data/BeautyProducts";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("");
  const [price, setPrice] = useState(5000);
  const [showSuggestions, setShowSuggestions] = useState(true);

  // Combine all product arrays
  const allProducts = [
    ...LadiesProducts.map((p) => ({ ...p, category: "ladies" })),
    ...MenProducts.map((p) => ({ ...p, category: "men" })),
    ...KidsProducts.map((p) => ({ ...p, category: "kids" })),
    ...BeautyProducts.map((p) => ({ ...p, category: "beauty" })),
  ];

  // Filter by search + category + price
  let filtered = allProducts.filter((p) => {
    const matchQuery = p.title.toLowerCase().includes(query.toLowerCase());
    const matchCategory = category === "all" || p.category === category;
    const matchPrice = Number(p.price.replace(/[^\d]/g, "")) <= price;
    return matchQuery && matchCategory && matchPrice;
  });

  // Sorting logic
  if (sortBy === "low-to-high") {
    filtered.sort(
      (a, b) =>
        Number(a.price.replace(/[^\d]/g, "")) -
        Number(b.price.replace(/[^\d]/g, ""))
    );
  } else if (sortBy === "high-to-low") {
    filtered.sort(
      (a, b) =>
        Number(b.price.replace(/[^\d]/g, "")) -
        Number(a.price.replace(/[^\d]/g, ""))
    );
  } else if (sortBy === "az") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Suggestions (first 5)
  const suggestions =
    query.length > 0
      ? allProducts
          .filter((p) =>
            p.title.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 5)
      : [];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Search Box */}
      <div className="max-w-xl mx-auto bg-white shadow p-4 rounded-xl relative">
        <div className="flex items-center gap-3 border border-gray-300 rounded-md px-3 py-2">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full text-sm outline-none"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            onFocus={() => setShowSuggestions(true)}
          />
        </div>

        {/* 🔽 Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute bg-white shadow-lg rounded-md mt-2 w-full z-50">
            {suggestions.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => {
                  setQuery(item.title);
                  setShowSuggestions(false);
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto mt-6 flex flex-wrap gap-4 items-center">
        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md text-sm"
        >
          <option value="all">All Categories</option>
          <option value="ladies">Ladies</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
          <option value="beauty">Beauty</option>
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md text-sm"
        >
          <option value="">Sort By</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="az">A → Z</option>
        </select>

        {/* Price Slider */}
        <div>
          <label className="text-sm mr-2">Max Price:</label>
          <input
            type="range"
            min="100"
            max="10000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <span className="text-sm ml-2">₹{price}</span>
        </div>
      </div>

      {/* No Search Yet */}
      {query.length === 0 && (
        <p className="text-center text-gray-500 text-sm mt-6">
          Type something to start searching...
        </p>
      )}

      {/* No Results */}
      {query.length > 0 && filtered.length === 0 && (
        <p className="text-center text-gray-500 text-sm mt-6">No results found.</p>
      )}

      {/* Results */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
        {filtered.map((p) => (
          <Link
            to={`/${p.category}/${p.id}`}
            key={p.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition p-3"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-52 object-cover rounded-lg"
            />
            <h3 className="text-sm font-medium mt-2 line-clamp-2">{p.title}</h3>
            <p className="text-gray-600 text-sm">{p.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
