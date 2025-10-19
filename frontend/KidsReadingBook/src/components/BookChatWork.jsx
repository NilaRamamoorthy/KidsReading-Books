import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function BookChatWork() {
  const [videoData, setVideoData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

  // Fetch video with name "Home-Video"
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/videos/`)
      .then((res) => {
        const homeVideo = res.data.find((video) => video.name === "Home-Video");
        if (homeVideo) setVideoData(homeVideo);
      })
      .catch((err) => console.error("Error fetching video:", err));
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  if (!videoData) return null; // or a loader

  return (
    <section className="bg-[#A8DFF5] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16">
      {/* Left Video */}
      <div className="w-full md:w-1/2 relative flex justify-center mb-8 md:mb-0">
        {!isPlaying && (
          <div className="relative cursor-pointer" onClick={handlePlay}>
            <img
              src={
                videoData.cover_image.startsWith("http")
                  ? videoData.cover_image
                  : `${API_BASE_URL}${videoData.cover_image}`
              }
              alt={videoData.name}
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="transition-colors duration-300 hover:bg-orange-500 border-4 border-white p-5 -ms-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
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
            </div>
          </div>
        )}

        {/* Video element */}
        <video
          ref={videoRef}
          src={
            videoData.video.startsWith("http")
              ? videoData.video
              : `${API_BASE_URL}${videoData.video}`
          }
          controls
          className={`w-full max-w-lg rounded-lg shadow-lg ${isPlaying ? "" : "hidden"}`}
        />
      </div>

      {/* Right Text */}
      <div className="w-full md:w-1/2 text-[#002B57] md:pl-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          How does <span className="text-[#001B57]">BookChat</span> work?
        </h2>
        <p className="text-lg mb-8 leading-relaxed">
          All you need is a high-speed internet connection, webcam, and Readeo
          account. Easily access BookChat on an internet browser with your PC,
          laptop, or tablet—and let the stories begin.
        </p>
        <a
          href="#learn-more"
          className="inline-block bg-[#FF7F2A] text-white font-semibold px-6 py-3 rounded hover:bg-[#e46c1e] transition-all"
        >
          LEARN MORE
        </a>
      </div>
    </section>
  );
}
