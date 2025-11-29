// src/HMApp.jsx
import React, { useState } from "react";

// ---------- SAMPLE DATA ----------
const ladiesProducts = [
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
];

const menProducts = [
  {
    id: "men-1",
    title: "Classic White Shirt",
    price: "₹999",
    img: "https://i.pinimg.com/1200x/63/fd/bd/63fdbdedb89857e6073bf673e8fc7aff.jpg",
  },
  {
    id: "men-2",
    title: "Navy Slim Fit Blazer",
    price: "₹3,499",
    img: "https://i.pinimg.com/1200x/e2/4e/d9/e24ed9e75bbd56d55bac1b280755f2eb.jpg",
  },
  {
    id: "men-3",
    title: "Casual Denim Jacket",
    price: "₹2,199",
    img: "https://i.pinimg.com/1200x/56/95/c8/5695c85a9df6f65ef97e1b7722678ea1.jpg",
  },
];

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
];

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
];

// ---------- REUSABLE COMPONENTS ----------

function Navbar({ activePage, setActivePage, cartCount }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "ladies", label: "Ladies" },
    { id: "men", label: "Men" },
    { id: "kids", label: "Kids" },
    { id: "beauty", label: "Beauty" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-2xl font-bold text-red-600 tracking-tight">
            H&M
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`relative pb-1 ${
                  activePage === item.id
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
                {activePage === item.id && (
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-gray-900 rounded-full" />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:inline text-sm text-gray-600 hover:text-gray-900">
            Sign in
          </button>
          <div className="relative flex items-center gap-3">
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100">
              🔍
            </button>
            <button
              onClick={() => setActivePage("cart")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 text-white text-sm hover:bg-gray-700"
            >
              🛒
              <span className="text-xs bg-white text-gray-900 px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProductCard({ product, onAdd, inCartQty }) {
  const isInCart = inCartQty > 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col">
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-52 object-cover"
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

function ProductGrid({ title, subtitle, products, onAdd, cart }) {
  const getQty = (id) => cart.find((i) => i.id === id)?.qty || 0;

  return (
    <section className="mt-10">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          {subtitle && (
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
      </div>
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

function CartPage({ cart, onRemove, onClear }) {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <main className="pt-24 pb-16 max-w-5xl mx-auto px-6">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
      <p className="text-sm text-gray-500 mb-6">
        Total items: <span className="font-semibold">{totalItems}</span>
      </p>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-sm">
          Your cart is empty. Start adding some products from Ladies, Men, Kids
          or Beauty pages.
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center bg-white rounded-xl border p-3"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.price}</p>
                  <p className="text-xs text-gray-500">
                    Qty: <span className="font-semibold">{item.qty}</span>
                  </p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-xs px-3 py-1 rounded-md border text-red-500 hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={onClear}
              className="text-sm text-red-500 hover:underline"
            >
              Clear cart
            </button>
            <button className="px-5 py-2 rounded-full bg-gray-900 text-white text-sm">
              Proceed to checkout
            </button>
          </div>
        </>
      )}
    </main>
  );
}

// ---------- PAGE SECTIONS ----------

function HomeSection({ setActivePage }) {
  return (
    <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-xs tracking-[0.25em] text-gray-500 mb-2">
            NEW SEASON · 2025
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Fashion for <span className="text-red-600">every style</span>.
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Discover curated edits across ladies, men, kids and beauty. Clean
            layout, easy navigation and a seamless cart experience for your HM
            project.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setActivePage("ladies")}
              className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm"
            >
              Shop Ladies
            </button>
            <button
              onClick={() => setActivePage("men")}
              className="px-5 py-2.5 rounded-full border text-sm hover:bg-gray-50"
            >
              Explore Men
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl overflow-hidden shadow-lg h-64 md:h-72">
            <img
              src="https://i.pinimg.com/736x/cb/81/cd/cb81cd2d826cb83eeed3de6f3659e94e.jpg"
              alt="home hero 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl  overflow-hidden shadow-md h-72">
              <img
                src="https://i.pinimg.com/736x/23/86/02/23860278614bf3b5d8fddc6862081568.jpg"
                alt="home hero 2"
                className="w-full h-full object-cover"
              />
            </div>
           
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <CategoryCard
          title="Ladies"
          desc="Dresses, gowns & daywear"
          img="https://i.pinimg.com/736x/58/bd/83/58bd83afe4a7cd700813d7eb4a7230ed.jpg"
          onClick={() => setActivePage("ladies")}
        />
        <CategoryCard

          title="Men"
          desc="Smart tailoring & casuals"
          img="https://i.pinimg.com/1200x/4e/22/79/4e2279693e65c3d639aee135509e8902.jpg"
          onClick={() => setActivePage("men")}
        />
        <CategoryCard
        
          title="Kids"
          desc="Playful fits for little ones"
          img="https://i.pinimg.com/736x/c0/01/9b/c0019b4c56c624c5d5ac04b9a6604b91.jpg"
          onClick={() => setActivePage("kids")}
        />
        <CategoryCard
          title="Beauty"
          desc="Makeup & glow essentials"
          img="https://i.pinimg.com/736x/89/63/52/8963524761b32bb9167b43a36d619b7c.jpg"
          onClick={() => setActivePage("beauty")}
        />
      </section>
    </main>
  );
}

function CategoryCard({ title, desc, img, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col"
    >
      <div className="h-36 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">{desc}</p>
      </div>
    </button>
  );
}

// ---------- ROOT APP ----------

export default function HMApp() {
  const [activePage, setActivePage] = useState("home");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === product.id);
      if (exist) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={cartCount}
      />

      {activePage === "home" && <HomeSection setActivePage={setActivePage} />}

      {activePage === "ladies" && (
        <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-semibold">Ladies Collection</h1>
          <p className="text-sm text-gray-500 mt-1">
            Elegant and trendy looks for every occasion.
          </p>
          <ProductGrid
            title="Featured Dresses"
            products={ladiesProducts}
            onAdd={addToCart}
            cart={cart}
          />
        </main>
      )}

      {activePage === "men" && (
        <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-semibold">Men Collection</h1>
          <p className="text-sm text-gray-500 mt-1">
            From office to weekend outfits.
          </p>
          <ProductGrid
            title="Latest for Men"
            products={menProducts}
            onAdd={addToCart}
            cart={cart}
          />
        </main>
      )}

      {activePage === "kids" && (
        <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-semibold">Kids Collection</h1>
          <p className="text-sm text-gray-500 mt-1">
            Comfortable and cute styles for kids.
          </p>
          <ProductGrid
            title="Popular for Kids"
            products={kidsProducts}
            onAdd={addToCart}
            cart={cart}
          />
        </main>
      )}

      {activePage === "beauty" && (
        <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-semibold">Beauty Corner</h1>
          <p className="text-sm text-gray-500 mt-1">
            Makeup picks to complete your look.
          </p>
          <ProductGrid
            title="Top Beauty Picks"
            products={beautyProducts}
            onAdd={addToCart}
            cart={cart}
          />
        </main>
      )}

      {activePage === "cart" && (
        <CartPage
          cart={cart}
          onRemove={removeFromCart}
          onClear={clearCart}
        />
      )}

      {/* Simple footer */}
      <footer className="border-t bg-white mt-10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-gray-500 flex justify-between">
          <span>© {new Date().getFullYear()} HM Demo Store</span>
          <span>Built for your React + Tailwind project</span>
        </div>
      </footer>
    </div>
  );
}
