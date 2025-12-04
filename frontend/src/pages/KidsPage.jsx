// src/pages/KidsPage.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart as addToCartRedux } from "../store/cartSlice";
import { Link } from "react-router-dom";

const kidsProducts = [
  {
    id: "kids-1",
    title: "Fairy Princess Frock",
    price: "₹1,199",
    img: "https://i.pinimg.com/736x/08/4b/57/084b575778063a432aa6a85e5bab1617.jpg",
  },
  {
    id: "kids-2",
    title: "Boys Party Suit",
    price: "₹1,899",
    img: "https://i.pinimg.com/1200x/ed/9f/3d/ed9f3d2d179bfe29ca20d437c3d2dc45.jpg",
  },
  {
    id: "kids-3",
    title: "Printed Casual Tee",
    price: "₹499",
    img: "https://i.pinimg.com/736x/f3/2a/3a/f32a3a737817497376cf6765df7afeaf.jpg",
  },
  {
    id: "kids-4",
    title: "Romper",
    price: "₹499",
    img: "https://i.pinimg.com/1200x/08/c5/97/08c5970b882733c6ff87517f40d4c817.jpg",
  },
  {
    id: "kids-5",
    title: "Onesie",
    price: "₹499",
    img: "https://i.pinimg.com/1200x/6c/98/85/6c9885296a70c87867a0692242ae0349.jpg",
  },
  {
    id: "kids-6",
    title: "Jumpsuit",
    price: "₹499",
    img: "https://i.pinimg.com/1200x/98/0c/db/980cdbcff39a691b43e2b97ebee3c7ac.jpg",
  },
  {
    id: "kids-7",
    title: "Dungaree Set",
    price: "₹499",
    img: "https://i.pinimg.com/1200x/80/cc/92/80cc92abe12a6e46c67d4a5376f95fd0.jpg",
  },
  {
    id: "kids-8",
    title: "Baby Frock",
    price: "₹499",
    img: "https://i.pinimg.com/736x/96/ec/5f/96ec5f64aff429f1edd6b382a10836fa.jpg",
  },
  {
    id: "kids-9",
    title: "Cotton Co-Ord Set",
    price: "₹499",
    img: "https://i.pinimg.com/736x/68/34/a1/6834a13e78be9e2f035a0d62beab7ab5.jpg",
  },
  {
    id: "kids-10",
    title: "Hooded Jumpsuit",
    price: "₹499",
    img: "https://i.pinimg.com/1200x/71/24/a7/7124a7f165f75c98e986ccc2fe745cd5.jpg",
  },
  {
    id: "kids-11",
    title: "Tracksuit",
    price: "₹499",
    img: "https://i.pinimg.com/1200x/a0/48/c1/a048c17b9e6c09575cd1f1bef248f7e1.jpg",
  },
  {
    id: "kids-12",
    title: "Night Suit",
    price: "₹499",
    img: "https://i.pinimg.com/1200x/1e/45/5e/1e455e125971fb550374a79d3bd745e7.jpg",
  },
  {
    id: "kids-13",
    title: "Party Theme Costumes (Superhero, Cartoon, etc.)",
    price: "₹499",
    img: "https://i.pinimg.com/1200x/fd/b0/98/fdb098b51f97a57be488b60e8faf837f.jpg",
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

export default function KidsPage() {
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
              KIDS · COLLECTION
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold">Kids Collection</h1>
            <p className="text-sm text-gray-500 mt-1">
              Comfortable and cute styles for kids.
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
          products={kidsProducts}
          onAdd={addToCart}
          cartItems={cartItems}
        />
      </main>
    </div>
  );
}
