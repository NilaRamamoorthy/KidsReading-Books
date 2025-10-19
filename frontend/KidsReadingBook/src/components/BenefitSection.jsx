import React from "react";
import { Link } from "react-router-dom";
export default function BenefitSection({ image }) {
  return (
    <section className="bg-[#f9f9f0] text-[#001b57] py-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 order-2 md:order-1">
          {image ? (
            <img src={image} alt="BookChat Laptop" className="w-full h-auto" />
          ) : (
            <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg" />
          )}
        </div>
        <div className="md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More storytime means more quality time
          </h2>
          <p className="mb-6 text-base md:text-lg">
            Our patented BookChat platform makes it easier to capture kids’ attention. By combining interactive,
            digitized books with video chat, BookChat sessions last almost 10 minutes longer than traditional video calls.
          </p>
           <Link to="/login">
          <button className="bg-[#ff7f2a] px-6 py-3 rounded-lg font-bold hover:bg-[#e46c1e] transition">
            SIGN UP FOR FREE
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
