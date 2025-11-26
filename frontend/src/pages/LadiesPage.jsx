



import React from "react";

// LadiesPage.jsx
// Single-file React component (default export) using Tailwind CSS.
// Uses the two uploaded images from the conversation as assets. The paths
// below are the local container paths provided in the conversation —
// your environment will transform these paths into served URLs.

const HERO_IMAGE = "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/25813096/2023/11/8/efb3433d-7436-4897-8331-222641f466a01699447608033FloralGownDress1.jpg";
const GALLERY_IMAGE = "https://m.media-amazon.com/images/I/91rtb+wYa1L._AC_UY1100_.jpg";

const sampleProducts = [
  { id: 1, title: "Pine Kids Woven Sleeveless Choli", price: "₹1,319.34", brand: "FirstCry India" ,image : "https://fashiondream.co.in/cdn/shop/files/063A4521_b73794b1-c616-45c3-bb7c-286e53128cc0.jpg?v=1718358145&width=533"},
  { id: 2, title: "Tiny Girl Knit Three Fourth", price: "₹1,472.50", brand: "FirstCry India" ,image:"https://docket.kartmax.in/sites/9s145MyZrWdIAwpU0JYS/product-images/dark_blue_designer_gown_in_georgette_for_girls_17321883722096_blue_as3166665.jpg"},
  { id: 3, title: "Girls - White Cotton Ribbed", price: "₹599.00", brand: "H&M",image:"https://www.mumkins.in/cdn/shop/files/gown-for-girls-gs182717-wine-model-image.jpg?v=1757337293" },
  { id: 4, title: "Girls - Dark Grey Denim-Look", price: "₹1,399.00", brand: "H&M",image:"https://www.mumkins.in/cdn/shop/files/gown-for-girls-gs182717-wine-model-image.jpg?v=1757337293" },
  { id: 5, title: "Girls - Beige/Floral Cotton Dress", price: "₹1,799.00", brand: "H&M" ,image:"https://5.imimg.com/data5/SELLER/Default/2021/10/JO/FR/ER/89753957/m1-3.jpg"},
  { id: 6, title: "Girls - Light Beige Sequined", price: "₹2,599.00", brand: "H&M",image:"https://m.media-amazon.com/images/I/91rtb+wYa1L._AC_UY1100_.jpg" },
];

function FashionHeroCard({ image }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg">
      <img src={image} alt="ladies-hero" className="w-full h-64 object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <div className="absolute left-6 bottom-6 text-white">
        <h1 className="text-3xl font-bold leading-tight">Ladies & Girls Ethnic Collection</h1>
        <p className="mt-2 text-sm opacity-90 max-w-md">Traditional & modern styles — lehengas, frocks, dresses and festive wear curated for girls.</p>
        <button className="mt-4 px-4 py-2 bg-white text-black rounded-md shadow-sm">Shop Collection</button>
      </div>
    </div>
  );
}

function ProductCard({ p }) {
  return (
    <div className="border rounded-xl p-4 flex flex-col gap-3 hover:shadow-xl transition">
      <div className="w-full h-40 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
        {/* For mockup we crop a portion of the gallery image to act as product image */}
        <img src={GALLERY_IMAGE} alt={p.title} className="object-cover h-full w-full" />
        
      </div>
      <div className="flex-1">
      <img
  src={p.image}
  alt={p.title}
  className="object-cover h-full w-full"
/>

        <h3 className="text-sm font-medium truncate">{p.title}</h3>
        <p className="text-xs text-gray-500 mt-1">{p.brand}</p>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="text-lg font-semibold">{p.price}</div>
        <button className="text-sm bg-black text-white px-3 py-1 rounded-md">Add</button>
      </div>
    </div>
  );
}

export default function LadiesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <FashionHeroCard image="https://fashiondream.co.in/cdn/shop/files/063A4521_b73794b1-c616-45c3-bb7c-286e53128cc0.jpg?v=1718358145&width=533" />

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Featured styles</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {sampleProducts.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="rounded-2xl overflow-hidden sticky top-6">
            <img src={GALLERY_IMAGE} alt="gallery" className="w-full h-[520px] object-cover" />
          </div>

          <div className="mt-6 bg-white shadow-md rounded-lg p-4">
            <h3 className="text-sm font-semibold mb-2">Filters</h3>
            <div className="flex flex-col gap-2 text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" /> New Arrival</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Best Seller</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Price: Low to High</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Size: 2-10 yrs</label>
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">More from this collection</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="rounded-lg overflow-hidden border hover:shadow-md transition">
              <img src="https://i.pinimg.com/736x/84/00/84/840084636a988f79e9031e5ad55b3917.jpg" alt={`thumb-${i}`} className="w-full h-36 object-cover" />
              <img src="https://i.pinimg.com/1200x/de/75/54/de7554a9855697271674e1b38e3c7f48.jpg" alt={`thumb-${i}`} className="w-full h-36 object-cover" />
              <img src="https://i.pinimg.com/736x/8a/15/e8/8a15e8500344976127fd25f2e9c017a4.jpg" alt={`thumb-${i}`} className="w-full h-36 object-cover" />



            </div>
          ))}
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500">
        Built with Tailwind · Demo ladies page
      </footer>
    </div>
  );
}
