import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token) setUser(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/accounts/register/",
          formData
        );
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);
        alert("Registration successful!");
        navigate("/");
      } else {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/accounts/login/",
          {
            email: formData.email,
            password: formData.password,
          }
        );
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);
        alert("Login successful!");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert(
        "Error: " +
          (error.response?.data?.detail ||
            Object.values(error.response?.data || {})[0] ||
            "Something went wrong")
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
    alert("Logged out successfully!");
  };

  if (user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#c7e5f2]">
        <h2 className="text-xl font-semibold text-[#001b57] mb-4">
          You are logged in.
        </h2>
        <button
          onClick={handleLogout}
          className="bg-[#f77f00] text-white py-2 px-6 rounded-md font-semibold hover:bg-[#ff8800]"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#c7e5f2]">
      {/* White Header Section */}
      <div className="w-full bg-white text-center py-10 px-4 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#001b57] mb-2">
          {isSignup
            ? "Start Your Free Trial Now!"
            : "Welcome Back to KidsReading!"}
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          {isSignup
            ? "Sign up now to claim your FREE 7-day trial of KidsReading Gold!"
            : "Log in to continue your KidsReading journey!"}
        </p>
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-10">
        <div className="w-full max-w-md bg-[#c7e5f2] p-6 rounded-lg">
          {/* Social Buttons */}
          <button className="flex items-center justify-center gap-3 bg-white text-black font-medium w-full py-2 rounded-full mb-3 border hover:shadow">
            <FcGoogle size={22} />{" "}
            {isSignup ? "SIGN UP WITH GOOGLE" : "CONTINUE WITH GOOGLE"}
          </button>

          <button className="flex items-center justify-center gap-3 bg-black text-white font-medium w-full py-2 rounded-full mb-6 hover:opacity-90">
            <FaApple size={22} />{" "}
            {isSignup ? "CONTINUE WITH APPLE" : "SIGN IN WITH APPLE"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="flex gap-3 mb-3">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#001b57]"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#001b57]"
                  required
                />
              </div>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#001b57]"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mb-6 px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#001b57]"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#f77f00] text-white py-2 rounded-md font-semibold hover:bg-[#ff8800] transition"
            >
              {isSignup ? "GET STARTED" : "LOG IN"}
            </button>
          </form>

          {/* Terms */}
          {isSignup && (
            <p className="text-center text-xs text-gray-600 mt-4">
              By continuing, you agree to our{" "}
              <span className="underline font-semibold cursor-pointer">
                Terms of service
              </span>{" "}
              and{" "}
              <span className="underline font-semibold cursor-pointer">
                Privacy policy
              </span>
            </p>
          )}

          {/* Switch Link */}
          <p className="text-center text-sm mt-4 text-[#001b57]">
            {isSignup ? (
              <>
                Already have a KidsReading account?{" "}
                <span
                  onClick={() => setIsSignup(false)}
                  className="underline cursor-pointer font-semibold"
                >
                  Log In Here
                </span>
              </>
            ) : (
              <>
                New to KidsReading?{" "}
                <span
                  onClick={() => setIsSignup(true)}
                  className="underline cursor-pointer font-semibold"
                >
                  Sign Up
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
