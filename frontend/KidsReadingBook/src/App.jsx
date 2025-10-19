import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Library from "./pages/Library";
import Schools from "./pages/Schools";
import Login from "./pages/Login";
import Footer from "./components/Footer"; // ← import Footer
import Navbar from "./components/Navbar";
import BookDetail from "./pages/BookDetail";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/library" element={<Library />} />
              <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
        <Footer /> {/* ← include Footer here */}
      </div>
    </Router>
  );
}

export default App;
