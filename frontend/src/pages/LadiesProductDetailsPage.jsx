// src/pages/LadiesProductDetailsPage.jsx
import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart as addToCartRedux } from "../store/cartSlice";

import LadiesProducts from "../data/LadiesProducts";

export default function LadiesProductDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = LadiesProducts.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || null
  );
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || null
  );

  const similarProducts = useMemo(
    () => LadiesProducts.filter((p) => p.id !== id).slice(0, 4),
    [id]
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="p-10 text-center bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Product Not Found</h2>
          <Link to="/ladies" className="underline text-blue-600">
            Go Back to Ladies Collection
          </Link>
        </div>
      </div>
    );
  }

  const numericPrice = Number(String(product.price).replace(/[^\d]/g, ""));

  const handleAdd = () => {
    dispatch(
      addToCartRedux({
        id: product.id,
        title: product.title,
        img: product.img,
        price: numericPrice,
        size: selectedSize,
        color: selectedColor,
      })
    );
  };

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const hasHalf = rating - full >= 0.5;
    const total = 5;

    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: total }).map((_, i) => {
          if (i < full) return <span key={i}>★</span>;
          if (i === full && hasHalf) return <span key={i}>☆</span>; // placeholder “half”
          return <span key={i}>☆</span>;
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link to="/ladies" className="hover:underline">
            Ladies
          </Link>
          <span>/</span>
          <span className="text-gray-700">{product.title}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow">
          {/* Left: Image */}
          <div>
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-semibold">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <span className="flex items-center text-yellow-500">
                {renderStars(product.rating)}
              </span>
              <span className="font-medium text-gray-800">
                {product.rating.toFixed(1)}
              </span>
              <span>({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="mt-4 text-2xl font-semibold">{product.price}</p>

            {/* Description */}
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              {product.description}
            </p>

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-5">
                <p className="text-sm font-medium text-gray-800 mb-2">
                  Select Size
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded-full border text-xs font-medium ${
                        selectedSize === size
                          ? "bg-black text-white border-black"
                          : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mt-5">
                <p className="text-sm font-medium text-gray-800 mb-2">
                  Select Color
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1.5 rounded-full border text-xs font-medium ${
                        selectedColor === color
                          ? "bg-gray-900 text-white border-gray-900"
                          : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={handleAdd}
                className="px-5 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800"
              >
                Add to Cart
              </button>
              <Link
                to="/ladies"
                className="text-sm text-gray-600 hover:underline"
              >
                ← Back to Ladies Collection
              </Link>
            </div>
          </div>
        </div>

        {/* Similar products */}
        {similarProducts.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold mb-4">Similar Products</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
              {similarProducts.map((item) => (
                <Link
                  to={`/ladies/${item.id}`}
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition block overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3">
                    <p className="text-xs text-gray-500 line-clamp-1">
                      Ladies · Collection
                    </p>
                    <p className="text-sm font-medium line-clamp-2">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-700">
                      {item.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
