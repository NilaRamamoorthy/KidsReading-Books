import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Library() {
  const [books, setBooks] = useState([]);
  const [visibleRows, setVisibleRows] = useState(3); // number of rows initially visible
  const [ageGroup, setAgeGroup] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("access");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
  const booksPerRow = 5;

  useEffect(() => {
    fetchBooks();
  }, [ageGroup, age]);

  const fetchBooks = async () => {
    try {
      const params = {};
      if (ageGroup) params.group = ageGroup;
      if (age) params.age = age;

      const res = await axios.get(`${API_BASE_URL}/api/books/`, { params });
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleBookClick = (bookId) => {
    if (!isLoggedIn) {
      alert("Please login to read this book!");
      navigate("/login");
    } else {
      navigate(`/book/${bookId}`);
    }
  };

  const handleLoadMore = () => {
    setVisibleRows((prev) => prev + 1);
  };

  const totalVisible = visibleRows * booksPerRow;
  const hasMore = totalVisible < books.length;

  return (
    <div className="flex flex-col items-center text-center bg-[#E5F0FF] min-h-screen">
      {/* Top Welcome Section */}
      <div className="bg-white w-full py-16 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[#03194F] mb-3">
          Welcome to our library
        </h1>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Explore 1000+ award-winning titles from publishers like Simon &amp;
          Schuster, Candlewick Press, ABRAMS, and more.
        </p>

        {!isLoggedIn && (
          <button
            onClick={() => navigate("/login")}
            className="bg-[#F57C00] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#e36b00] transition"
          >
            START BOOK CHAT
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="w-full bg-[#BBD4FA] py-4 flex justify-end px-10 items-center gap-4">
        <select
          className="rounded px-3 py-2 bg-[#F57C00] text-white font-semibold"
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
        >
          <option value="">AGE</option>
          <option value="0-2">0-2</option>
          <option value="3-5">3-5</option>
          <option value="5-6">5-6</option>
          <option value="6-8">6-8</option>
        </select>
      </div>

      {/* Book Grid */}
      <div className="w-full bg-[#BBD4FA]">
      <div className="w-full bg-[#BBD4FA] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-10 px-10">
        {books.slice(0, totalVisible).map((book) => (
          <div
            key={book.id}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleBookClick(book.id)}
          >
            <img
              src={
                book.cover_image.startsWith("http")
                  ? book.cover_image
                  : `${API_BASE_URL}${book.cover_image}`
              }
              alt={book.title}
              className="w-full max-w-[160px] h-[220px] object-cover rounded shadow-md"
            />
            <h2 className="mt-3 text-[#03194F] font-medium">{book.title}</h2>
          </div>
        ))}
      </div>

      {/* LOAD MORE Button */}
      {books.length > booksPerRow && (
        
        <button
          onClick={handleLoadMore}
          disabled={!hasMore}
          className={`m-6  px-8 py-3 rounded font-bold text-white transition ${
            hasMore
              ? "bg-[#FF7F2A] hover:bg-[#e46c1e]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          LOAD MORE
        </button>
     
      )}
        </div>
    </div>
  );
}

export default Library;
