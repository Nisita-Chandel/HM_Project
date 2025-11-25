import React from "react";

// BeautyPage.jsx
// Single-file React component using Tailwind CSS.
// Notes:
// - I used the original screenshot you provided as the placeholder image for each product.
// - Replace each product's `image` value with a specific product image URL or import when available.
// - This component is a default export and is ready to drop into a Vite/CRA project configured with Tailwind.

const products = [
  { id: 1, name: "Foxtale De-Tan Face Mask", price: "₹545.00", image: "https://m.media-amazon.com/images/I/51b++aqyUzL._AC_UF1000,1000_QL80_.jpg" },
  { id: 2, name: "SPF 50 Glow Sunscreen", price: "₹349.00", image: "https://www.silkrute.com/images/detailed/4844/311Aq65DF5L.jpg" },
  { id: 3, name: "Cetaphil Gentle Skin Cleanser", price: "₹327.18", image: "https://yellowbee.online/cdn/shop/files/cetaphil-oily-skin-cleanser-for-acne-prone-skin-dermatologist-recommended-125ml-768420.jpg?v=1727835923" },
  { id: 4, name: "Cetaphil BHR Brightening Night", price: "₹1,065.18", image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/72d63b85-f8a0-49fe-9828-a986add3fd7e.__CR0,0,1250,1250_PT0_SX300_V1___.jpg" },
  { id: 5, name: "Bake Cosmetics 2% Kojic Acid", price: "₹299.00", image: "https://bakecosmetics.com/cdn/shop/files/8908023798206_1_2.jpg?v=1749832506" },
  { id: 6, name: "Beauty Of Joseon Apricot Blossom", price: "₹1,004.40", image: "https://miraebeautyhub.com/cdn/shop/files/Apricot_Blossom_Peeling_Gel_100ml-01_9981305b-6310-4c1c-b84f-d9b936e9c816.jpg?v=1741457363&width=1100" },
  { id: 7, name: "2% Salicylic Acid Cleanser", price: "₹349.00", image: "https://www.sotrue.in/cdn/shop/files/2.SalicylicAcidFaceWash.jpg?v=1705409528&width=1500" },
  { id: 8, name: "Hyphen Golden Hour Glow", price: "₹417.57", image: "https://images-eu.ssl-images-amazon.com/images/I/614M7aJAe8L._AC_UL210_SR210,210_.jpg" },
  { id: 9, name: "Foxtale Overnight Face Mask", price: "₹595.00", image: "https://cdn.shopify.com/s/files/1/0609/6096/4855/files/OGM-01_41d21b47-aff7-4c2d-bb78-d30a1def3c50.jpg?v=1743842392" },
  { id: 10, name: "Oil Free Moisturizer", price: "₹395.00", image: "https://rukminim2.flixcart.com/image/480/640/xif0q/moisturizer-cream/n/g/4/80-0-rice-oil-free-face-moisturizer-for-oily-skin-with-rice-original-imahchf4bqzasz3j.jpeg?q=90" },
  { id: 11, name: "LAKMÉ Absolute Perfect Radiance", price: "₹515.14", image: "https://media6.ppl-media.com//tr:h-750,w-750,c-at_max,dpr-2,q-40/static/img/product/345445/lakme-absolute-perfect-radiance-day-cream-and-night-cream-combo_1_display_1708421919_729234ce.jpg" },
  { id: 12, name: "Meglow BB+ Cream With SPF", price: "₹220.00", image: "https://g.sdlcdn.com/imgs/k/x/w/Meglow-Day-Cream-All-Skin-SDL874639502-1-9a525.jpg?trim=10&w=850&h=995&sharp=7" },
  { id: 13, name: "Foxtale Brightening Lip", price: "₹550.00", image: "https://m.media-amazon.com/images/I/81lSoh-AQ9L._AC_UF1000,1000_QL80_.jpg" },
  { id: 14, name: "Re'equil Retinol Night Cream", price: "₹355.50", image: "https://images.meesho.com/images/products/145591101/kwkvy_512.webp?width=512" },
  { id: 15, name: "Jovees Premium Intensive Care", price: "₹746.55", image: "https://fetchnbuy.in/cdn/shop/files/jov_5_1e49057e-2720-498e-88b0-a3442b09a609_grande.jpg?v=1721121746" },
  { id: 16, name: "Foxtale Super Glow Moisturizer", price: "₹445.00", image: "https://cdn.shopify.com/s/files/1/0609/6096/4855/files/HYDRATING_MOISTURIZER_2ed498f6-adc4-4404-89b6-7e98a6c60a52.jpg?v=1761314240&width=2560&q=75" },
  { id: 1, name: "Foxtale De-Tan Face Mask", price: "₹545.00", image: "https://m.media-amazon.com/images/I/51b++aqyUzL._AC_UF1000,1000_QL80_.jpg" },
  { id: 2, name: "SPF 50 Glow Sunscreen", price: "₹349.00", image: "https://www.silkrute.com/images/detailed/4844/311Aq65DF5L.jpg" },
  { id: 3, name: "Cetaphil Gentle Skin Cleanser", price: "₹327.18", image: "https://yellowbee.online/cdn/shop/files/cetaphil-oily-skin-cleanser-for-acne-prone-skin-dermatologist-recommended-125ml-768420.jpg?v=1727835923" },
  { id: 4, name: "Cetaphil BHR Brightening Night", price: "₹1,065.18", image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/72d63b85-f8a0-49fe-9828-a986add3fd7e.__CR0,0,1250,1250_PT0_SX300_V1___.jpg" },
  { id: 5, name: "Bake Cosmetics 2% Kojic Acid", price: "₹299.00", image: "https://bakecosmetics.com/cdn/shop/files/8908023798206_1_2.jpg?v=1749832506" },
  { id: 6, name: "Beauty Of Joseon Apricot Blossom", price: "₹1,004.40", image: "https://miraebeautyhub.com/cdn/shop/files/Apricot_Blossom_Peeling_Gel_100ml-01_9981305b-6310-4c1c-b84f-d9b936e9c816.jpg?v=1741457363&width=1100" },
  { id: 7, name: "2% Salicylic Acid Cleanser", price: "₹349.00", image: "https://www.sotrue.in/cdn/shop/files/2.SalicylicAcidFaceWash.jpg?v=1705409528&width=1500" },
  { id: 8, name: "Hyphen Golden Hour Glow", price: "₹417.57", image: "https://images-eu.ssl-images-amazon.com/images/I/614M7aJAe8L._AC_UL210_SR210,210_.jpg" },
  { id: 9, name: "Foxtale Overnight Face Mask", price: "₹595.00", image: "https://cdn.shopify.com/s/files/1/0609/6096/4855/files/OGM-01_41d21b47-aff7-4c2d-bb78-d30a1def3c50.jpg?v=1743842392" },
  { id: 10, name: "Oil Free Moisturizer", price: "₹395.00", image: "https://rukminim2.flixcart.com/image/480/640/xif0q/moisturizer-cream/n/g/4/80-0-rice-oil-free-face-moisturizer-for-oily-skin-with-rice-original-imahchf4bqzasz3j.jpeg?q=90" },
  { id: 11, name: "LAKMÉ Absolute Perfect Radiance", price: "₹515.14", image: "https://media6.ppl-media.com//tr:h-750,w-750,c-at_max,dpr-2,q-40/static/img/product/345445/lakme-absolute-perfect-radiance-day-cream-and-night-cream-combo_1_display_1708421919_729234ce.jpg" },
  { id: 12, name: "Meglow BB+ Cream With SPF", price: "₹220.00", image: "https://g.sdlcdn.com/imgs/k/x/w/Meglow-Day-Cream-All-Skin-SDL874639502-1-9a525.jpg?trim=10&w=850&h=995&sharp=7" },
  { id: 13, name: "Foxtale Brightening Lip", price: "₹550.00", image: "https://m.media-amazon.com/images/I/81lSoh-AQ9L._AC_UF1000,1000_QL80_.jpg" },
  { id: 14, name: "Re'equil Retinol Night Cream", price: "₹355.50", image: "https://images.meesho.com/images/products/145591101/kwkvy_512.webp?width=512" },
];

export default function BeautyPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <header className="max-w-7xl mx-auto mb-8">
        <h1 className="text-xl md:text-3xl font-semibold text-gray-800">Foxtale skincare</h1>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-3">
            <input
              type="search"
              placeholder="Search products..."
              className="px-4 py-2 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
              onChange={() => {}}
            />
            <select className="px-3 py-2 rounded-lg border border-gray-200">
              <option>Sort: Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="text-sm text-gray-600">{products.length} products</div>
        </div>

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((p) => (
            <article key={p.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                {/* Using your uploaded screenshot as the placeholder */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-3">
                <h2 className="text-sm font-medium text-gray-800 line-clamp-2">{p.name}</h2>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-semibold text-indigo-600">{p.price}</span>
                  <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">Add</button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-8 text-center">
          <button className="px-6 py-2 rounded-full border border-gray-200">Show More</button>
        </div>
      </main>
    </div>
  );
}
