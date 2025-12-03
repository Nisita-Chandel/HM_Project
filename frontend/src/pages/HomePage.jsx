// src/pages/HomePage.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart as addToCartRedux } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

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
  {
    id: "men-4",
    title: "Kurta Pajama",
    price: "₹2,199",
    img: "https://i.pinimg.com/1200x/c7/c8/6a/c7c86a8c1f46196f185573b924c00585.jpg",
  },
  {
    id: "men-5",
    title: "Polo T-Shirt",
    price: "₹2,199",
    img: "https://i.pinimg.com/1200x/27/0c/3b/270c3b8cf66354d1ce35601fa241fb7b.jpg",
  },
  {
    id: "men-6",
    title: "Hoodie",
    price: "₹2,199",
    img: "https://i.pinimg.com/736x/43/73/a6/4373a6b4d4c70a8196351a1f74fe5487.jpg",
  },
  {
    id: "men-7",
    title: "Cargo Pants",
    price: "₹2,199",
    img: "https://i.pinimg.com/1200x/83/58/69/835869e72b255e1949689eebf51943ab.jpg",
  },
  {
    id: "men-8",
    title: "Jacket",
    price: "₹2,199",
    img: "https://i.pinimg.com/736x/ca/c4/0c/cac40cc202add705ea073fa1d54989b6.jpg",
  },
  {
    id: "men-9",
    title: "Coat",
    price: "₹2,199",
    img: "https://i.pinimg.com/736x/52/d7/04/52d70483438d42f95cc5c48a8fb60390.jpg",
  },
  {
    id: "men-10",
    title: "Pathani Kurta",
    price: "₹2,199",
    img: "https://i.pinimg.com/1200x/d7/f6/30/d7f6307f9f46557445d08056baec5a35.jpg",
  },
  {
    id: "men-11",
    title: "Sherwani",
    price: "₹2,199",
    img: "https://i.pinimg.com/736x/2e/55/12/2e55129d381b4004a07eacde930313ae.jpg",
  },
  {
    id: "men-12",
    title: "Joggers",
    price: "₹2,199",
    img: "https://i.pinimg.com/1200x/85/f0/28/85f0289f76e2b6193495be759573aa09.jpg",
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

// ---------- REUSABLE COMPONENTS ----------

function AuthModal({ onClose }) {
  const [mode, setMode] = useState("login");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "login") {
      alert("Logged in (demo)!");
    } else {
      alert("Account created (demo)!");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl leading-none"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-1">
          {mode === "login" ? "Sign in" : "Sign up"}
        </h2>
        <p className="text-xs text-gray-500 mb-4">
          {mode === "login"
            ? "Continue to your HM Demo account"
            : "Create your HM Demo account"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          {mode === "signup" && (
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-700">
                Full name
              </label>
              <input
                type="text"
                required
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/70"
                placeholder="Your name"
              />
            </div>
          )}

          <div>
            <label className="block mb-1 text-xs font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/70"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-xs font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/70"
              placeholder="••••••••"
            />
          </div>

          {mode === "signup" && (
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-700">
                Confirm password
              </label>
              <input
                type="password"
                required
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/70"
                placeholder="Re-enter password"
              />
            </div>
          )}

          {mode === "login" && (
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3" />
                <span>Remember me</span>
              </label>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-800"
              >
                Forgot password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-2 bg-gray-900 text-white rounded-full py-2 text-sm font-medium hover:bg-gray-700"
          >
            {mode === "login" ? "Sign in" : "Create account"}
          </button>

          {mode === "login" ? (
            <p className="text-[11px] text-gray-500 text-center mt-2">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="underline cursor-pointer"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p className="text-[11px] text-gray-500 text-center mt-2">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="underline cursor-pointer"
              >
                Sign in
              </button>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

function Navbar({
  activePage,
  setActivePage,
  cartCount,
  onSignInClick,
  onCartClick,
}) {
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
          <div className="w-14 h-12">
            <img
              className="h-full w-full"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
              alt="H&M logo"
            />
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
          <button
            onClick={onSignInClick}
            className="hidden sm:inline text-sm text-gray-600 hover:text-gray-900"
          >
            Sign in
          </button>
          <div className="relative flex items-center gap-3">
            <button className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-100">
              <i className="ri-search-line"></i>
            </button>
            <button
              onClick={onCartClick}
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

function ProductGrid({ title, subtitle, products, onAdd, cartItems }) {
  const [visibleCount, setVisibleCount] = useState(3);
  const getQty = (id) => cartItems.find((i) => i.id === id)?.qty || 0;

  const visibleProducts = products.slice(0, visibleCount);
  const canShowMore = visibleCount < products.length;

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
        {visibleProducts.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={onAdd}
            inCartQty={getQty(p.id)}
          />
        ))}
      </div>

      {canShowMore && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="px-6 py-2 text-xs font-medium rounded-full border border-gray-300 bg-white hover:bg-gray-100"
          >
            Show more
          </button>
        </div>
      )}
    </section>
  );
}

// ---------- PAGE SECTIONS ----------

function HomeSection({ setActivePage }) {
  return (
    <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
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
            <div className="rounded-3xl overflow-hidden shadow-md h-72">
              <img
                src="https://i.pinimg.com/736x/23/86/02/23860278614bf3b5d8fddc6862081568.jpg"
                alt="home hero 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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
      <div className="h-86 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">{desc}</p>
      </div>
    </button>
  );
}

// ---------- ROOT PAGE COMPONENT ----------

export default function HomePage() {
  const [activePage, setActivePage] = useState("home");
  const [showLogin, setShowLogin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

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
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={cartCount}
        onSignInClick={() => setShowLogin(true)}
        onCartClick={() => navigate("/cart")} // ⬅ Go to Redux CartPage route
      />

      {showLogin && <AuthModal onClose={() => setShowLogin(false)} />}

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
            cartItems={cartItems}
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
            cartItems={cartItems}
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
            cartItems={cartItems}
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
            cartItems={cartItems}
          />
        </main>
      )}

      <footer className="border-t bg-white mt-10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-gray-500 flex justify-between">
          <span>© {new Date().getFullYear()} HM Demo Store</span>
          <span>Built for your React + Tailwind project</span>
        </div>
      </footer>
    </div>
  );
}
