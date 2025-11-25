import React from "react";

// HMHomePage.jsx
// Single-file React component (default export) using Tailwind CSS.
// Uses the uploaded image from the conversation as the hero background.
// Path provided by the environment: /mnt/data/Screenshot 2025-11-25 222347.png

const HERO_IMAGE = "";

const products = [
  {
    id: 1,
    title: "Ethereal Evening Gown",
    price: "$1,450",
    img: "https://i.pinimg.com/474x/0c/95/35/0c95354b6de8f0c0e9a2935f8cf264a1.jpg",
  },
  {
    id: 2,
    title: "Rose Satin Couture",
    price: "$980",
    img: "https://www.zapdress.com/cdn/shop/files/U264K76JOT_W9I0YDUIVR.png?v=1751283075",
  },
  {
    id: 3,
    title: "Pearl Embroidered Dress",
    price: "$1,200",
    img: "https://i.pinimg.com/736x/e9/90/47/e990479b066efe17ae3003cafad41fde.jpg",
  },
];

export default function HMHomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* NAV */}
      <header className="fixed w-full z-30 bg-gradient-to-b from-black/40 to-transparent backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 rounded-md px-3 py-1 text-white font-semibold">HM</div>
            <nav className="hidden md:flex gap-6 text-sm text-white/90">
              <a className="hover:underline" href="#about">About</a>
              <a className="hover:underline" href="#evening">Evening</a>
              <a className="hover:underline" href="#wedding">Wedding</a>
              <a className="hover:underline" href="#accessories">Accessories</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden md:inline-block text-sm px-4 py-2 border rounded-lg border-white/20 text-white/95 hover:bg-white/5">Contact</button>
            <button className="p-2 rounded-full bg-white/10 text-white/90">🔍</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative h-[72vh] md:h-[80vh] w-full overflow-hidden flex items-center"
        aria-label="Hero - Exquisite Collections"
      >
        <div
          className="absolute inset-0 bg-cover  object-cover"
          style={{
            backgroundImage: `url("https://i.pinimg.com/736x/cc/de/94/ccde94e75965c4f5aa0af746b20a324a.jpg")`,
          }}
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extralight text-white drop-shadow-lg tracking-wide">EXQUISITE COLLECTIONS</h1>
            <p className="mt-4 text-white/90 max-w-xl md:text-lg">Noces Couture — a clean yet elegant design curated for immersive lookbooks and designer showcases.</p>

            <div className="mt-6 flex items-center gap-3 justify-center md:justify-start">
              <button className="px-6 py-3 bg-white/90 rounded-full font-medium shadow-md hover:scale-105 transition-transform">Explore</button>
              <button className="px-5 py-3 border border-white/30 rounded-full text-white/95 hover:bg-white/5">View Collections</button>
            </div>
          </div>

          <div className="hidden md:block flex-1">
            {/* decorative card */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-4 max-w-sm shadow-2xl">
              <img src={HERO_IMAGE} alt="dress preview" className="w-full h-48 object-cover rounded-xl border border-white/5" />
              <div className="mt-4">
                <h3 className="text-white font-medium">Noces Couture — Editorial</h3>
                <p className="text-white/70 text-sm mt-1">Editorial lookbook piece — couture gown with layered tulle.</p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <section id="about" className="bg-white/90 rounded-2xl p-8 shadow-xl -translate-y-8">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold">Web Design for a Fashion House</h2>
              <p className="mt-3 text-gray-700">This homepage showcases a high-contrast, editorial aesthetic with elegant typography, thoughtful negative space and layered imagery. Perfect for lookbooks, boutiques, and designer portfolios.</p>
              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 rounded bg-gray-900 text-white">Browse Collection</button>
                <button className="px-4 py-2 rounded border">Request Consultation</button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="rounded-lg overflow-hidden">
                <img src={HERO_IMAGE} alt="about" className="w-full h-40 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery / Featured */}
        <section id="evening" className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="col-span-2 bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-lg">
            <h3 className="text-xl font-medium">EVENING</h3>
            <p className="mt-3 text-white/80">Polished silhouettes, soft light and couture tailoring. Perfect for gala and evening events.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img src="https://www.zapdress.com/cdn/shop/files/ILF3U2_T1S68SMKWNI_WTF_2255bd41-9db8-434b-bbab-0b6887ba4543.png?v=1749612473" alt="evening 1" className="w-full h-40 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src ="https://i.pinimg.com/736x/cc/de/94/ccde94e75965c4f5aa0af746b20a324a.jpg" alt="evening 2" className="w-full h-60 object-cover" />
              </div>
            </div>

            <div className="mt-6">
              <button className="px-4 py-2 bg-white/90 rounded-md text-gray-900 font-medium">Browse Evening</button>
            </div>
          </div>

          <aside className="rounded-2xl bg-white p-4 shadow">
            <h4 className="font-medium">Mini Lookbook</h4>
            <ul className="mt-3 space-y-3 text-sm text-gray-600">
              <li>Editorial shoots</li>
              <li>Runway cuts</li>
              <li>Bespoke tailoring</li>
            </ul>
          </aside>
        </section>

        {/* Product strip */}
        <section className="mt-10">
          <h3 className="text-lg font-semibold">Featured</h3>
          <div className="mt-4 grid sm:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p.id} className="bg-white rounded-2xl shadow hover:scale-102 transition-transform overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h5 className="font-medium">{p.title}</h5>
                  <p className="mt-2 text-gray-500">{p.price}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <button className="px-3 py-2 rounded bg-gray-900 text-white text-sm">View</button>
                    <button className="px-3 py-2 rounded border text-sm">Save</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Band */}
        <section className="mt-12 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 p-8 text-white shadow-lg rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-semibold">Book a Private Viewing</h4>
                <p className="mt-2 text-white/90">Private appointments for couture fittings and editorial collaborations.</p>
              </div>
              <div>
                <button className="px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold">Request an Appointment</button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 mb-12 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} HM — All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
