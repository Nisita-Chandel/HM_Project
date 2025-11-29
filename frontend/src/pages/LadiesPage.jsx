import React, { useState } from "react";

// LadiesPage.jsx
// Elegant ladies page with filters + cart, using Tailwind CSS

const HERO_IMAGE =
  "https://i.pinimg.com/1200x/de/75/54/de7554a9855697271674e1b38e3c7f48.jpg";
const SIDE_IMAGE =
  "https://i.pinimg.com/736x/84/00/84/840084636a988f79e9031e5ad55b3917.jpg";

const sampleProducts = [
  {
    id: 1,
    title: "Blush Floral Tulle Gown",
    price: "₹2,499",
    brand: "H&M Studio",
    category: "party",
    image:
      "https://i.pinimg.com/736x/8a/15/e8/8a15e8500344976127fd25f2e9c017a4.jpg",
  },
  {
    id: 2,
    title: "Ruby Evening Anarkali",
    price: "₹2,899",
    brand: "H&M",
    category: "ethnic",
    image:
      "https://docket.kartmax.in/sites/9s145MyZrWdIAwpU0JYS/product-images/dark_blue_designer_gown_in_georgette_for_girls_17321883722096_blue_as3166665.jpg",
  },
  {
    id: 3,
    title: "Ivory Layered Party Dress",
    price: "₹1,999",
    brand: "Fashion Dream",
    category: "party",
    image:
      "https://fashiondream.co.in/cdn/shop/files/063A4521_b73794b1-c616-45c3-bb7c-286e53128cc0.jpg?v=1718358145&width=533",
  },
  {
    id: 4,
    title: "Peach Floral Cotton Frock",
    price: "₹1,299",
    brand: "FirstCry",
    category: "casual",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/10/JO/FR/ER/89753957/m1-3.jpg",
  },
  {
    id: 5,
    title: "Midnight Blue Gown",
    price: "₹2,799",
    brand: "H&M",
    category: "wedding",
    image:
      "https://www.mumkins.in/cdn/shop/files/gown-for-girls-gs182717-wine-model-image.jpg?v=1757337293",
  },
  {
    id: 6,
    title: "Champagne Sequined Dress",
    price: "₹2,299",
    brand: "Zara Kids",
    category: "party",
    image:
      "https://m.media-amazon.com/images/I/91rtb+wYa1L._AC_UY1100_.jpg",
  },
  {
    id: 7,
    title: "Sunny Day Floral Dress",
    price: "₹1,099",
    brand: "H&M",
    category: "casual",
    image:
      "https://i.pinimg.com/736x/0c/95/35/0c95354b6de8f0c0e9a2935f8cf264a1.jpg",
  },
  {
    id: 8,
    title: "Rose Gold Lehenga Set",
    price: "₹3,499",
    brand: "Designer Edit",
    category: "ethnic",
    image:
      "https://i.pinimg.com/736x/de/39/9a/de399a4f4b5add7f46def57836fdc9d9.jpg",
  },
];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "party", label: "Party" },
  { id: "casual", label: "Casual" },
  { id: "ethnic", label: "Ethnic" },
  { id: "wedding", label: "Wedding" },
];

function FashionHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-100 via-slate-50 to-sky-100 shadow-xl">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 flex flex-col justify-center">
          <p className="text-xs tracking-[0.3em] text-pink-500 mb-2">
            NEW · 2025 FESTIVE DROP
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Ladies & Girls <span className="text-pink-600">Collection</span>
          </h1>
          <p className="mt-3 text-sm text-gray-600 max-w-md">
            Dreamy gowns, playful frocks and ethnic festive sets curated for
            every celebration — birthday parties, weddings and everything
            in-between.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm hover:bg-pink-700 transition">
              Shop New Arrivals
            </button>
            <button className="px-5 py-2.5 rounded-full border text-sm hover:bg-white">
              View Lookbook
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src={HERO_IMAGE}
            alt="hero"
            className="h-full w-full object-cover md:rounded-l-none rounded-b-3xl md:rounded-r-3xl"
          />
          <div className="hidden md:block absolute -bottom-6 -left-6 w-40 h-40 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50">
            <img
              src={SIDE_IMAGE}
              alt="detail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterBar({ activeFilter, onChange }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3 text-xs">
      {FILTERS.map((f) => (
        <button
          key={f.id}
          onClick={() => onChange(f.id)}
          className={`px-4 py-2 rounded-full border transition ${
            activeFilter === f.id
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

function ProductCard({ p, onAddToCart, inCartQty }) {
  const isInCart = inCartQty > 0;

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition overflow-hidden flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/80 text-[10px] px-2 py-1 rounded-full">
          {p.category.toUpperCase()}
        </div>
        <button className="absolute top-3 right-3 bg-white/80 rounded-full p-1.5 text-xs">
          ♡
        </button>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <p className="text-[11px] text-gray-500 mb-1">{p.brand}</p>
        <h3 className="text-sm font-medium line-clamp-2">{p.title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-semibold">{p.price}</span>
          <span className="text-[11px] text-yellow-500">★ 4.8</span>
        </div>

        <div className="mt-4 flex gap-2 items-center">
          <button
            onClick={() => onAddToCart(p)}
            className={`flex-1 text-xs px-3 py-2 rounded-md border transition ${
              isInCart
                ? "bg-green-600 text-white border-green-700"
                : "bg-gray-900 text-white border-gray-900 hover:bg-white hover:text-gray-900"
            }`}
          >
            {isInCart ? `In Cart (${inCartQty})` : "Add to cart"}
          </button>
          <button className="text-[11px] text-gray-500 hover:text-gray-800">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

function CartPanel({ cart, onClose, onRemoveItem, onClearCart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="fixed right-4 bottom-24 w-80 max-h-[70vh] bg-white shadow-2xl rounded-2xl border flex flex-col z-50">
      <div className="flex items-center justify-between p-3 border-b">
        <div>
          <h3 className="font-semibold text-sm">Cart</h3>
          <p className="text-xs text-gray-500">{totalItems} item(s)</p>
        </div>
        <button
          onClick={onClose}
          className="text-xs px-2 py-1 rounded-md border hover:bg-gray-100"
        >
          Close
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-xs">
            Your cart is empty. Add some gorgeous dresses ✨
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 border rounded-lg p-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div className="flex-1">
                <p className="font-medium text-xs line-clamp-2">
                  {item.title}
                </p>
                <p className="text-[11px] text-gray-500">{item.price}</p>
                <p className="text-[11px] text-gray-400">
                  Qty: <span className="font-semibold">{item.qty}</span>
                </p>
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-[11px] px-2 py-1 border rounded-md hover:bg-red-50 hover:border-red-400 hover:text-red-500"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="p-3 border-t flex items-center justify-between">
          <button
            onClick={onClearCart}
            className="text-xs text-red-500 hover:underline"
          >
            Clear cart
          </button>
          <button className="text-xs bg-black text-white px-3 py-1 rounded-md hover:bg-pink-600">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default function LadiesPage() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const getProductQtyInCart = (productId) =>
    cart.find((item) => item.id === productId)?.qty || 0;

  const filteredProducts =
    activeFilter === "all"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === activeFilter);

  return (
    <div className="relative p-6 max-w-7xl mx-auto bg-slate-50 min-h-screen">
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen((prev) => !prev)}
        className="fixed right-4 bottom-4 z-40 bg-black text-white rounded-full px-5 py-3 shadow-2xl flex items-center gap-2 hover:bg-pink-600 transition"
      >
        <span className="text-sm font-medium">Cart</span>
        <span className="bg-white text-black text-xs px-2 py-0.5 rounded-full">
          {totalItems}
        </span>
      </button>

      {isCartOpen && (
        <CartPanel
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />
      )}

      {/* Hero */}
      <FashionHero />

      {/* Filters + Products */}
      <FilterBar activeFilter={activeFilter} onChange={setActiveFilter} />

      <section className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Featured Dresses</h2>
          <p className="text-xs text-gray-500">
            Tap <span className="font-semibold">Add to cart</span> on any card
            to see it in your cart.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              p={p}
              onAddToCart={handleAddToCart}
              inCartQty={getProductQtyInCart(p.id)}
            />
          ))}
        </div>
      </section>

      {/* Little strip at bottom */}
      <section className="mt-10 rounded-2xl bg-white border shadow-sm p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold">
            Styling tip for this collection
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Mix soft pastel gowns with minimal accessories and ballet flats for
            an elegant yet playful look.
          </p>
        </div>
        <button className="px-4 py-2 rounded-full bg-gray-900 text-white text-xs hover:bg-pink-700">
          View matching accessories
        </button>
      </section>

      <footer className="mt-10 text-center text-xs text-gray-400">
        Built with Tailwind · Ladies page with smart cart
      </footer>
    </div>
  );
}
