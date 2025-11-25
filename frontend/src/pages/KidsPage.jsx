// src/pages/KidsPage.jsx
import React from "react";
import KidsHeroCard from "../components/KidsHeroCard";
import KidProductCard from "../components/KidProductCard";

/**
 * KidsPage
 * - Top hero row (3 rounded tall images)
 * - Responsive product grid of rounded cards
 * - Demo data uses local uploaded screenshot for quick preview
 */

const demoImage ="https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg"
;

const demoProducts = new Array(18).fill(0).map((_, i) => ({
  _id: `kid-${i}`,
  title: [
    "Playful Tutu Dress",
    "Cozy Knit Cardigan",
    "Striped Tee & Shorts",
    "Little Explorer Jacket",
    "Superhero Hoodie",
    "Pastel Romper",
    "Denim Overalls",
    "Floral Frock",
  ][i % 8],
  price: [799, 999, 599, 1299, 899, 749, 1099, 699][i % 8],
  type: ["Girls", "Boys", "Unisex", "Baby"][i % 4],
   images:[
    
        "https://www.kidsbee.in/wp-content/uploads/2023/04/kids-boys-dress-buy-online-3.jpg",
        "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg",
        "https://www.foreverkidz.in/cdn/shop/files/WhatsAppImage2025-06-30at3.14.16PM.jpg?crop=center&height=1194&v=1751285221&width=853",
        "https://i.pinimg.com/564x/7e/38/10/7e381083ba67cbf758d5ef343a7b5ac9.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/9/453796858/KC/VZ/OD/143323446/girls-satin-frock-copy-2-500x500.png",
        "https://static.vecteezy.com/system/resources/previews/024/187/126/large_2x/kids-clothes-transparent-background-png.png",
        "https://i.etsystatic.com/11463421/r/il/2007e2/3546997770/il_570xN.3546997770_6da9.jpg"


    
  
  ],
  
  favourite: false,
}));

export default function KidsPage() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-10 max-w-[1300px] mx-auto">
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Kids</h1>
          <p className="text-sm text-gray-500 mt-1">{demoProducts.length} items</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-600">Filter & Sort</div>
          <select className="border rounded px-3 py-2 text-sm">
            <option>Popular</option>
            <option>Newest</option>
            <option>Price: Low → High</option>
            <option>Price: High → Low</option>
          </select>
        </div>
      </header>

      {/* HERO: three lookbook-style cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {demoProducts.slice(0, 3).map((p, i) => (
          <KidsHeroCard
            key={p._id}
            image={p.images[i]}
            title={p.title}
            subtitle={p.type}
            variant={i === 1 ? "center" : "side"}
          />
        ))}
      </section>

      {/* Product Grid */}
      <section>
        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {demoProducts.map((prod , i) => (
            <KidProductCard
              key={prod._id}
              product={prod}
              index={i}     
              onToggleFavourite={(id, next) => {
                console.log("fav toggled", id, next);
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
