import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LogoContext } from "../contexts/LogoContext";

function Navbar() {
  const { logo } = useContext(LogoContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // ✅ Check if user is logged in initially & when localStorage changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("access");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();

    // 👇 Listen for storage changes (e.g. after login/logout in another tab)
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/"); // redirect to home
  };

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SCHOOLS", path: "/schools" },
    { name: "LIBRARY", path: "/library" },
    { name: "PRICING", path: "/pricing" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
  <nav className="bg-[#03194F] border-1 border-white/100 rounded-xl m-5 px-6 shadow-[0_5px_20px_rgba(0,0,0,0.5)]">


      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link to="/">
            {logo ? (
              <img src={logo} alt="Logo" className="w-14 h-auto" />
            ) : (
              <div className="w-14 h-14 bg-white/20 animate-pulse rounded" />
            )}
          </Link>
        </div>

        {/* Right: Links and Login/Logout */}
        <div className="flex items-center space-x-6">
          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 font-bold text-base">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#7ec8ff] transition"
                      : "text-white hover:text-[#7ec8ff] transition"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Login/Logout Button */}
          <div className="hidden md:block">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-[#ff7f2a] text-white font-bold px-4 py-2 rounded-lg hover:bg-[#e46c1e] transition"
              >
                LOGOUT
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-[#ff7f2a] text-white font-bold px-4 py-2 rounded-lg hover:bg-[#e46c1e] transition"
              >
                LOGIN
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col items-center gap-4 text-white font-bold text-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#7ec8ff] transition"
                  : "text-white hover:text-[#7ec8ff] transition"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="bg-[#ff7f2a] text-white font-bold px-4 py-2 rounded-lg hover:bg-[#e46c1e] transition"
            >
              LOGOUT
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="bg-[#ff7f2a] text-white font-bold px-4 py-2 rounded-lg hover:bg-[#e46c1e] transition"
            >
              LOGIN
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
