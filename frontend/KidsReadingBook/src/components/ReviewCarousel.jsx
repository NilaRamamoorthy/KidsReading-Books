import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ReviewCarousel({ API_BASE_URL }) {
  const [reviews, setReviews] = useState([]);
  const [brands, setBrands] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/reviews/`).then((res) => {
      setReviews(res.data);
    });

    axios.get(`${API_BASE_URL}/api/brands/`).then((res) => {
      const updatedBrands = res.data.map((b) => ({
        ...b,
        logo: b.logo.startsWith("http") ? b.logo : `${API_BASE_URL}${b.logo}`
      }));
      setBrands(updatedBrands);
    });
  }, [API_BASE_URL]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        (prevIndex + 1) % reviews.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews]);

  return (
    <section className="flex flex-col md:flex-row w-full text-white">
      
      {/* Left Side: Crimson Red */}
      <div className="bg-[#9b0025] md:w-1/2 px-6 md:px-10 py-16 flex flex-col justify-center">
        {/* Review Box */}
        <div className="bg-[#6e0f1c] p-6 mx-19 rounded-md shadow-md min-h-[220px]">
          {reviews.length > 0 && (
            <>
              <p className="text-white text-lg font-medium">
                “{reviews[activeIndex].quote}”
              </p>
              {/* <p className="mt-4 italic text-right">
                — {reviews[activeIndex].author}
              </p> */}
            </>
          )}
        </div>


  {/* Author Name */}
  {reviews.length > 0 && (
    <div className="flex justify-between">
    <p></p>
    <p className=" mt-4 italic text-sm" style={{ marginLeft: "-150px" }}>— {reviews[activeIndex].author}</p>
    </div>
  )}

        {/* Dots */}
        <div className="flex mt-4 gap-2 justify-center">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === activeIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Side: Rich Maroon */}
      <div className="bg-[#6e0f1c] md:w-1/2 px-6 md:px-10 py-16 flex flex-col items-center justify-center text-center">
        <h3 className="font-semibold mb-4 text-lg">
          Rave reviews for Readeo’s BookChat
        </h3>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {brands.map((brand) => (
            <img
              key={brand.id}
              src={brand.logo}
              alt={brand.name}
              className="h-12 md:h-14 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
