import React from "react";
import { Link } from "react-router-dom";
export default function SectionBridge({ image }) {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-[#001b57]">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            A good book can bridge any distance
          </h2>
          <p className="mb-6 text-base md:text-lg">
            Stories have the power to bring people together. Visit our ever-growing library of carefully curated titles, and enjoy thousands of books you and your family can explore—anytime, anywhere.
          </p>
          <Link to="/library">
          <button className="bg-[#ffb347] text-white px-6 py-3 font-bold rounded hover:bg-[#ffa726] transition">
            BROWSE THE LIBRARY
          </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          {image ? (
            <img src={image} alt="Book map" className="w-full h-auto" />
          ) : (
            <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg" />
          )}
        </div>
      </div>
    </section>
  );
}
