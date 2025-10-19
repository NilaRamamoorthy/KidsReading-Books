import React from "react";
import { Link } from "react-router-dom";
export default function HeroSection({ image }) {
  return (
    <section className="bg-[#03194F] text-white min-h-screen flex items-center justify-center px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Read together from anywhere
          </h2>
          <p className="mb-6 text-base md:text-lg">
            BookChat™ by Readeo lets you enjoy more time with the little ones in your life, even when
            you're apart by combining video chat with over 1,500 digital kids' books.
          </p>
          <div className="flex flex-col sm:flex-row gap-1 justify-center md:justify-start">
            <Link to="/library">
            <button className="bg-[#ff7f2a] px-6 py-3 rounded-lg font-bold hover:bg-[#e46c1e] transition">
              TRY IT FOR FREE
            </button>
            </Link>
            <button className="flex items-center  text-white font-semibold px-1 py-2 rounded-md hover:text-[#7ec8ff] transition-colors duration-300">
  {/* Play Icon */}
  <div className="w-6 h-6 flex items-center justify-center border border-white rounded-full hover:bg-orange-500 transition-colors duration-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.752 11.168l-6.586-3.794A1 1 0 007 8.382v7.236a1 1 0 001.166.973l6.586-3.794a1 1 0 000-1.732z"
      />
    </svg>
  </div>

  {/* Button Text */}
  SEE IT IN ACTION
</button>

          </div>
        </div>
        <div className="md:w-2/3">
          {image ? (
            <img src={image} alt="BookChat Tablet" className="w-full h-150" />
          ) : (
            <div className="w-full h-64 bg-white/20 animate-pulse rounded-lg" />
          )}
        </div>
      </div>
    </section>
  );
}
