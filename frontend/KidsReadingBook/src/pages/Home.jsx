import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import BenefitSection from "../components/BenefitSection";
import SectionBridge from "../components/SectionBridge";
import ReviewCarousel from "../components/ReviewCarousel";
import Family from "../components/Family";
import BookChatWork from "../components/BookChatWork"; 

export default function Home() {
  const [images, setImages] = useState({});
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    document.body.classList.add("bg-[#03194F]", "text-white");
    return () => {
      document.body.classList.remove("bg-[#03194F]", "text-white");
    };
  }, []);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/page-images/`)
      .then((res) => {
        const imagesMap = {};
        res.data.forEach((img) => {
          imagesMap[img.name] = img.image.startsWith("http")
            ? img.image
            : `${API_BASE_URL}${img.image}`;
        });
        setImages(imagesMap);
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div>
      <HeroSection image={images.section1} />
      <BenefitSection image={images.section2} />
      <Family image={images.section3} />
      <BookChatWork image={images.section7} />
      <SectionBridge image={images.section4} />
      <ReviewCarousel API_BASE_URL={API_BASE_URL} />
    </div>
  );
}
