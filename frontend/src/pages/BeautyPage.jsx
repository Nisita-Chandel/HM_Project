// src/pages/BeautyPage.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart as addToCartRedux } from "../store/cartSlice";
import { Link } from "react-router-dom";

const beautyProducts = [
  {
    id: "beauty-1",
    title: "Velvet Matte Lipstick",
    price: "₹799",
    img: "https://i.pinimg.com/736x/7a/36/97/7a3697aba2d20004f047ebaec96acc43.jpg",
  },
  {
    id: "beauty-2",
    title: "Glow Highlighter Palette",
    price: "₹1,299",
    img: "https://i.pinimg.com/736x/7b/7c/3e/7b7c3e9ff067edb1f5c707f60dd30f51.jpg",
  },
  {
    id: "beauty-3",
    title: "Soft Blush Powder",
    price: "₹699",
    img: "https://i.pinimg.com/1200x/f6/7a/aa/f67aaae737e197441654d09212f79ae3.jpg",
  },
  {
    id: "beauty-4",
    title: "Primer",
    price: "₹699",
    img: "https://i.pinimg.com/1200x/5c/22/dc/5c22dc20f7e82caf35ef257a26ce3b22.jpg",
  },
  {
    id: "beauty-5",
    title: "Kajal",
    price: "₹699",
    img: "https://i.pinimg.com/736x/30/ce/ee/30ceeee8359565666358617d7f5a7fcb.jpg",
  },
  {
    id: "beauty-6",
    title: "Eyeliner",
    price: "₹699",
    img: "https://i.pinimg.com/1200x/1b/e0/55/1be055ea4554f4bf2ede4fca7c16c088.jpg",
  },
  {
    id: "beauty-7",
    title: "Mascara",
    price: "₹699",
    img: "https://i.pinimg.com/1200x/da/fc/62/dafc62cb46d814010131e2c8c1439304.jpg",
  },
  {
    id: "beauty-8",
    title: "Brow Pencil",
    price: "₹699",
    img: "https://i.pinimg.com/1200x/a8/3d/f2/a83df26d25e6951ab6bd66c35c30072b.jpg",
  },
  {
    id: "beauty-9",
    title: "Lip Crayon",
    price: "₹699",
    img: "https://i.pinimg.com/736x/46/bd/20/46bd208596247e32b030659137d558e9.jpg",
  },
  {
    id: "beauty-10",
    title: "Glitter Eyeshadow",
    price: "₹699",
    img: "https://i.pinimg.com/1200x/6d/d4/10/6dd410fa4d3e4a54a048527845fc198c.jpg",
  },
  {
    id: "beauty-11",
    title: "Face Wash",
    price: "₹699",
    img: "https://i.pinimg.com/1200x/5a/5c/64/5a5c64dead3165e10c4d5ba7684f77c9.jpg",
  },
  {
    id: "beauty-12",
    title: "Nail Polish",
    price: "₹699",
    img: "https://i.pinimg.com/736x/fc/16/3f/fc163f125172e1388918f48b8d1cd931.jpg",
  },
];

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

export default function BeautyPage() {
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
              BEAUTY · CORNER
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold">Beauty Corner</h1>
            <p className="text-sm text-gray-500 mt-1">
              Makeup picks to complete your look.
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
          products={beautyProducts}
          onAdd={addToCart}
          cartItems={cartItems}
        />
      </main>
    </div>
  );
}
