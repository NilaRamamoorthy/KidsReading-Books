// components/GoldPlanPerks.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function GoldPlanPerks() {
  const [perks, setPerks] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/gold-perks/`)
      .then((res) => setPerks(res.data))
      .catch((err) => console.error("Failed to load perks", err));
  }, []);

  return (
    <section className="bg-[#001b57] text-white py-16 px-4 md:px-20 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">Gold Plan Perks</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {perks.map((perk, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={perk.image} alt={perk.title} className="w-40 h-40 mb-4" />
            <h3 className="font-bold text-lg mb-2">{perk.title}</h3>
            <p className="text-xs text-white/80">{perk.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button className="bg-[#ff7f2a] text-white px-6 py-2 rounded font-bold hover:bg-[#e46c1e] transition">
          GET STARTED FOR FREE
        </button>
      </div>
    </section>
  );
}
