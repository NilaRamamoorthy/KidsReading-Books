import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function About() {
  const [videoData, setVideoData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const [images, setImages] = useState({});
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

  // ----------------- Section 1: Video -----------------
// ----------------- Section 1: Video -----------------
useEffect(() => {
  axios
    .get(`${API_BASE_URL}/api/videos/`) // API endpoint
    .then((res) => {
      // Find the entry with name "About-Video"
      const aboutVideo = res.data.find(video => video.name === "About-Video");
      if (aboutVideo) setVideoData(aboutVideo);
    })
    .catch((err) => console.log(err));
}, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // ----------------- Section 2 & 3 Images -----------------
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

  // Optional: set body background/text
  useEffect(() => {
    document.body.classList.add("bg-white", "text-gray-800");
    return () => {
      document.body.classList.remove("bg-white", "text-gray-800");
    };
  }, []);

  return (
    <div className="flex flex-col">

      {/* ---------- Section 1: Video ---------- */}
      {videoData && (
        <section className="flex flex-col md:flex-row items-center gap-10 my-20 px-5 md:px-20">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#0B2C6B] mb-5">
              This is how our story begins
            </h2>
            <p className="text-gray-700 mb-3">
              In 2010, {videoData.founder} and his family moved {videoData.distance} miles away—and quickly realized video calls alone weren't enough to keep his son and son's grandparents connected.
            </p>
            <p className="text-gray-700">
              To bridge the distance, {videoData.founder} turned to the power of stories. Combining beautifully digitized books with video chat technology, Readeo launched later that year, and BookChat™ was patented in 2012. Since then, Readeo has been committed to fostering the joy of reading between loved ones—near and far.
            </p>
          </div>

          {/* Right Video */}
          <div className="md:w-1/2 relative w-full max-w-lg">
            {!isPlaying && (
              <div className="relative cursor-pointer" onClick={handlePlay}>
                <img
                  src={
                    videoData.cover_image.startsWith("http")
                      ? videoData.cover_image
                      : `${API_BASE_URL}${videoData.cover_image}`
                  }
                  alt={videoData.name}
                  className="w-full rounded-lg"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="transition-colors duration-300 hover:bg-orange-500 border-4 border-white me-2  p-5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.586-3.794A1 1 0 007 8.382v7.236a1 1 0 001.166.973l6.586-3.794a1 1 0 000-1.732z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            <video
              ref={videoRef}
              src={
                videoData.video.startsWith("http")
                  ? videoData.video
                  : `${API_BASE_URL}${videoData.video}`
              }
              controls
              className={`w-full rounded-lg ${isPlaying ? "" : "hidden"}`}
            />

          </div>
        </section>
      )}

      {/* ---------- Section 2: Books for family ---------- */}
      <section className="bg-[#cceaf6] py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          {images.section5 && (
            <img
              src={images.section5}
              alt="Book collection"
              className="w-[280px] md:w-[380px] rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A3B82] mb-4">
            Thousands of books for the whole family
          </h2>
          <p className="text-gray-800 leading-relaxed">
            BookChat gives families a way to spend quality time together, even when they’re apart. We are passionate about growing our library with high-quality books that educate, entertain, and encourage little ones to let their imaginations run wild.
          </p>
        </div>
      </section>

      {/* ---------- Section 3: Storytime ---------- */}
      <section className="bg-white px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left py-16 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A3B82] mb-4">
            Turn screen time into storytime
          </h2>
          <p className="text-gray-700 leading-relaxed">
            BookChat lets either side of the video call flip through the pages of a picture book easily. This interactive experience captures kids’ attention longer—which makes it no surprise that 90% of Readeo users prefer BookChat over other video chat services to connect with their loved ones.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {images.section6 && (
            <img
              src={images.section6}
              alt="Parent and child reading"
              className="w-[380px] md:w-[420px] rounded-lg shadow-md mb-15"
            />
          )}
        </div>
      </section>
    </div>
  );
}
