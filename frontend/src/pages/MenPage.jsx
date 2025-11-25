import React from "react";

// MenPage.jsx
// Single-file React component (default export) using Tailwind CSS.
// - Uses the two screenshots you uploaded as placeholder image sources.
// - Replace the image paths with individual product images when you have them.
// - Drop this file into a Vite/CRA project with Tailwind configured.

const products = [
  { id: 1, name: "INFINITY Twill Cotton Shirt", price: "₹623.48", image: "https://i5.walmartimages.com/seo/GENTS-BLISS-Long-Sleeve-Mens-Dress-Shirts-Casual-Solid-Shirts-for-Men-Regular-Oxford-Tops-with-Pocket_4fff4355-09b7-4425-8638-1fea32177708.59a395eb56c500a6c61b6bac72f81bcd.jpeg" },
  { id: 2, name: "Babyhug Cotton Full Sleeve", price: "₹615.12", image: "https://m.media-amazon.com/images/I/71I-cik1CyL._AC_UL1500_.jpg" },
  { id: 3, name: "Babyhug Cotton Half Sleeve", price: "₹414.17", image: "https://i5.walmartimages.com/seo/Dubinik-Denim-Shirt-Men-Mens-Denim-Shirts-Long-Sleeve-Mens-Denim-Button-Down-Shirt-Cotton-Regular-Fit-Casual-Work-Shirts_a7022c71-cece-43e7-b4b3-b9af10fd384f.55754711f98e2a97726f19012c74bff8.jpeg" },
  { id: 4, name: "US Polo Assn Cotton Woven", price: "₹1,055.34", image: "https://img.kwcdn.com/product/temu-avi/image-crop/bee7b350-7915-4882-9dcd-8dbbf47e1c9c.jpg" },
  { id: 5, name: "Arias Cotton Schiffli Woven", price: "₹550.42", image: "https://i.pinimg.com/originals/ac/79/05/ac79059ac056140d451ae45d6b3bc202.jpg" },
  { id: 6, name: "Charchit Linen Woven", price: "₹794.94", image: "https://i.pinimg.com/originals/ac/79/05/ac79059ac056140d451ae45d6b3bc202.jpg" },
  { id: 7, name: "US Polo Assn Cotton Woven F", price: "₹1,439.20", image: "https://i.pinimg.com/originals/ac/79/05/ac79059ac056140d451ae45d6b3bc202.jpg" },
  { id: 8, name: "Babyhug 100% Cotton", price: "₹535.33", image: "https://i5.walmartimages.com/asr/8e22b065-879e-4b80-b708-3d7c32b45584_2.86c6bd97c134bf55a8ac9235719302b1.jpeg" },
  { id: 9, name: "Babyhug Cotton Woven Half", price: "₹437.27", image: "https://tse1.mm.bing.net/th/id/OIF.NPDa8Wm9e0x9eShswvFDWA?pid=Api&P=0&h=180" },
  { id: 10, name: "Dapper Dudes Checked Shirt", price: "₹775.03", image: "https://i5.walmartimages.com/asr/f192632f-c138-47f3-b6d8-39c38257b8bc_2.be40fcbf1eb610e8d4183dea4abfaa21.jpeg" },
  { id: 11, name: "Ruff Cotton Woven Solid", price: "₹831.36", image: "https://i5.walmartimages.com/asr/f192632f-c138-47f3-b6d8-39c38257b8bc_2.be40fcbf1eb610e8d4183dea4abfaa21.jpeg" },
  { id: 12, name: "US Polo Assn Cotton Knit", price: "₹1,599.20", image: "https://i5.walmartimages.com/asr/f192632f-c138-47f3-b6d8-39c38257b8bc_2.be40fcbf1eb610e8d4183dea4abfaa21.jpeg" },
  { id: 13, name: "Babyhug Linen Woven Half", price: "₹323.19", image: "https://i.pinimg.com/originals/ac/79/05/ac79059ac056140d451ae45d6b3bc202.jpg" },
  { id: 14, name: "Dapper Dudes Checked Slim", price: "₹872.03", image: "https://i5.walmartimages.com/asr/f192632f-c138-47f3-b6d8-39c38257b8bc_2.be40fcbf1eb610e8d4183dea4abfaa21.jpeg" },
  { id: 15, name: "Dapper Dudes Full Sleeves", price: "₹694.20", image: "https://i.pinimg.com/originals/ac/79/05/ac79059ac056140d451ae45d6b3bc202.jpg" },
  { id: 16, name: "US Polo Assn Cotton Knit Polo", price: "₹1,119.20", image: "https://cdnb.lystit.com/photos/394c-2014/01/29/jcrew-blue-cotton-shirt-in-woven-arrows-product-1-17103920-1-292955050-normal.jpeg" },
  { id: 10, name: "Dapper Dudes Checked Shirt", price: "₹775.03", image: "https://i5.walmartimages.com/asr/f192632f-c138-47f3-b6d8-39c38257b8bc_2.be40fcbf1eb610e8d4183dea4abfaa21.jpeg" },
  { id: 11, name: "Ruff Cotton Woven Solid", price: "₹831.36", image: "https://i5.walmartimages.com/asr/f192632f-c138-47f3-b6d8-39c38257b8bc_2.be40fcbf1eb610e8d4183dea4abfaa21.jpeg" },
  { id: 12, name: "US Polo Assn Cotton Knit", price: "₹1,599.20", image: "https://i5.walmartimages.com/asr/f192632f-c138-47f3-b6d8-39c38257b8bc_2.be40fcbf1eb610e8d4183dea4abfaa21.jpeg" },
  { id: 13, name: "Babyhug Linen Woven Half", price: "₹323.19", image: "https://i.pinimg.com/originals/ac/79/05/ac79059ac056140d451ae45d6b3bc202.jpg" },
  { id: 14, name: "Dapper Dudes Checked Slim", price: "₹872.03", image: "https://i5.walmartimages.com/asr/f192632f-c138-47f3-b6d8-39c38257b8bc_2.be40fcbf1eb610e8d4183dea4abfaa21.jpeg" },
  { id: 15, name: "Dapper Dudes Full Sleeves", price: "₹694.20", image: "https://i.pinimg.com/originals/ac/79/05/ac79059ac056140d451ae45d6b3bc202.jpg" },
  { id: 16, name: "US Polo Assn Cotton Knit Polo", price: "₹1,119.20", image: "https://cdnb.lystit.com/photos/394c-2014/01/29/jcrew-blue-cotton-shirt-in-woven-arrows-product-1-17103920-1-292955050-normal.jpeg" },
  // Add more items to visually fill the grid using the provided screenshots as placeholders
  ...Array.from({ length: 12 }).map((_, i) => ({
    id: 17 + i,
    name: `Men Shirt ${17 + i}`,
    price: `₹${300 + i * 25}.00`,
    image: i % 2 === 0 ? "/mnt/data/Screenshot 2025-11-23 221708.png" : "/mnt/data/Screenshot 2025-11-23 221734.png",
  })),
];

export default function MenPage() {
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState("popular");

  const filtered = products
    .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => {
      if (sort === "low") return Number(a.price.replace(/[^0-9.-]+/g, "")) - Number(b.price.replace(/[^0-9.-]+/g, ""));
      if (sort === "high") return Number(b.price.replace(/[^0-9.-]+/g, "")) - Number(a.price.replace(/[^0-9.-]+/g, ""));
      return a.id - b.id; // popular / default
    });

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <header className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">Men's Shirts</h1>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search shirts..."
              className="w-full md:w-80 px-4 py-2 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />

            <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-3 py-2 rounded-lg border border-gray-200">
              <option value="popular">Sort: Popular</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          <div className="text-sm text-gray-600">Showing {filtered.length} of {products.length} products</div>
        </div>

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filtered.map((p) => (
            <article key={p.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <img src={p.image} alt={p.name} className="object-cover w-full h-full" />
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
