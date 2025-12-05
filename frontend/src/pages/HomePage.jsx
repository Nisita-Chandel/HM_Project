// src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function HomeSection() {
  const navigate = useNavigate();

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
              onClick={() => navigate("/ladies")}
              className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm"
            >
              Shop Ladies
            </button>
            <button
              onClick={() => navigate("/men")}
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
          onClick={() => navigate("/ladies")}
        />
        <CategoryCard
          title="Men"
          desc="Smart tailoring & casuals"
          img="https://i.pinimg.com/1200x/4e/22/79/4e2279693e65c3d639aee135509e8902.jpg"
          onClick={() => navigate("/men")}
        />
        <CategoryCard
          title="Kids"
          desc="Playful fits for little ones"
          img="https://i.pinimg.com/736x/c0/01/9b/c0019b4c56c624c5d5ac04b9a6604b91.jpg"
          onClick={() => navigate("/kids")}
        />
        <CategoryCard
          title="Beauty"
          desc="Makeup & glow essentials"
          img="https://i.pinimg.com/736x/89/63/52/8963524761b32bb9167b43a36d619b7c.jpg"
          onClick={() => navigate("/beauty")}
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <HomeSection />
    </div>
  );
}
