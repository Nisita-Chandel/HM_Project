  
// src/pages/LadiesPage.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart as addToCartRedux } from "../store/cartSlice";
import { Link } from "react-router-dom";

// ----- SAME LADIES DATA -----
const LadiesProducts = [
  {
    id: "ladies-1",
    title: "Sparkle Party Gown",
    price: "₹1,799",
    img: "https://i.pinimg.com/736x/94/22/a7/9422a78acf1a9e346e23ecda145efa44.jpg",
  },
  {
    id: "ladies-2",
    title: "Floral Layered Dress",
    price: "₹1,299",
    img: "https://i.pinimg.com/1200x/3f/28/bb/3f28bbfe8a4f01aeafd1bf19a5887907.jpg",
  },
  {
    id: "ladies-3",
    title: "Sequined Beige Dress",
    price: "₹2,499",
    img: "https://i.pinimg.com/736x/ef/f7/52/eff75202b9c5d4f34b3c2685c3eda268.jpg",
  },
  {
    id: "ladies-4",
    title: "Saree",
    price: "₹2,499",
    img: "https://i.pinimg.com/736x/50/de/98/50de985e16a68d9e8f8fd7efec19baf0.jpg",
  },
  {
    id: "ladies-5",
    title: "Rajasthani dress",
    price: "₹2,499",
    img: "https://i.pinimg.com/736x/32/a5/31/32a5314bd22912b52ec9287c31c7a8f5.jpg",
  },
  {
    id: "ladies-6",
    title: "Kurta",
    price: "₹2,499",
    img: "https://i.pinimg.com/1200x/40/ae/57/40ae579b75ba5d116045d067b9a10178.jpg",
  },
  {
    id: "ladies-7",
    title: "A line Dress",
    price: "₹2,499",
    img: "https://i.pinimg.com/736x/1e/47/6c/1e476cb0845c2dd1ac3a6b76ee5a069b.jpg",
  },
  {
    id: "ladies-8",
    title: "Bodycon Dress",
    price: "₹2,499",
    img: "https://i.pinimg.com/736x/f5/a6/74/f5a6747e66ad23fe4d89d1951b0d238f.jpg",
  },
  {
    id: "ladies-9",
    title: "Denim Dress",
    price: "₹2,499",
    img: "https://i.pinimg.com/1200x/dc/85/6c/dc856c10b8ba17d7f31dc4327b1158dc.jpg",
  },
  {
    id: "ladies-10",
    title: "Lehenga Choli",
    price: "₹2,499",
    img: "https://i.pinimg.com/736x/75/fe/d9/75fed935e56483f06f96af2b0da4f45f.jpg",
  },
  {
    id: "ladies-11",
    title: "Gharara Suit",
    price: "₹2,499",
    img: "https://i.pinimg.com/736x/c1/7e/64/c17e6463c79cfee3f1afef9179f781cd.jpg",
  },
  {
    id: "ladies-12",
    title: "Kaftan Kurti",
    price: "₹2,499",
    img: "https://i.pinimg.com/736x/4a/d6/7e/4ad67eb6c57ffe1252bf7aed157950b2.jpg",
  },
];

// --- REUSABLE CARDS FOR THIS PAGE ONLY ---

function ProductCard({ product, onAdd, inCartQty }) {
  const isInCart = inCartQty > 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col">
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
          <button className="text-xs text-gray-500 hover:text-gray-800">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductGrid({ products, onAdd, cartItems }) {
  const getQty = (id) => cartItems.find((i) => i.id === id)?.qty || 0;

  return (
    <section className="mt-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={onAdd}
            inCartQty={getQty(p.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default function LadiesPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

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
          <div className="flex items-center gap-3">
            <Link
              to="/cart"
              className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              🛒 Go to Cart
            </Link>
            <Link
              to="/"
              className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 underline"
            >
              ← Back to Home
            </Link>
          </div>
        </header>

        <ProductGrid
          products={LadiesProducts}
          onAdd={addToCart}
          cartItems={cartItems}
        />
      </main>
    </div>
  );
}
