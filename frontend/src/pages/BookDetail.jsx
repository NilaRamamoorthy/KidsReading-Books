import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

  useEffect(() => {
    document.body.classList.add("bg-[#03194F]", "text-white");
    return () => {
      document.body.classList.remove("bg-[#03194F]", "text-white");
    };
  }, []);

  useEffect(() => {
    fetchBook();
  }, [id]);

  const fetchBook = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/books/`);
      const selectedBook = res.data.find((b) => b.id === parseInt(id));
      setBook(selectedBook);
    } catch (err) {
      console.error(err);
    }
  };

  const nextPage = () => {
    if (book && currentPage < book.pages.length - 1)
      setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (book && currentPage > 0) setCurrentPage(currentPage - 1);
  };

  if (!book) return <div className="p-5 text-center text-[#001b57]">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col bg-[#b9d8f9] relative overflow-hidden">
      {/* Header Bar */}
      <div className="bg-[#03194F] w-full flex justify-end items-center p-3">
        <button
          onClick={() => navigate("/library")}
          className="bg-[#f77f00] text-white px-4 py-1 rounded-md font-semibold hover:bg-[#ff8800] transition"
        >
          EXIT
        </button>
      </div>

      {/* Book Display */}
      <div className="flex flex-1 items-center justify-center relative px-10">
        {/* Left Arrow */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="absolute left-4 md:left-10 bg-[#0a2a72] hover:bg-[#103899] text-white p-3 rounded-full disabled:opacity-40 transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Page Image with Animation */}
        <div className="flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentPage}
              src={
                book.pages[currentPage].content_image.startsWith("http")
                  ? book.pages[currentPage].content_image
                  : `${API_BASE_URL}${book.pages[currentPage].content_image}`
              }
              alt={`Page ${currentPage + 1}`}
              initial={{ opacity: 0, scale: 0.9, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="max-w-md w-full rounded-lg shadow-lg"
            />
          </AnimatePresence>

          <p className="mt-4 text-[#001b57] font-medium text-sm">
            Page {currentPage + 1} of {book.pages.length}
          </p>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextPage}
          disabled={currentPage === book.pages.length - 1}
          className="absolute right-4 md:right-10 bg-[#0a2a72] hover:bg-[#103899] text-white p-3 rounded-full disabled:opacity-40 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default BookDetail;
