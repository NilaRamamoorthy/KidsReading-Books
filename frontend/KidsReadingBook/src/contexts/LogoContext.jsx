// src/contexts/LogoContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const LogoContext = createContext();

export const LogoProvider = ({ children }) => {
  const [logo, setLogo] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/logo/`)
      .then((res) => {
        const logoUrl = res.data.image?.startsWith("http")
          ? res.data.image
          : `${API_BASE_URL}${res.data.image}`;
        setLogo(logoUrl);
      })
      .catch((err) => console.error("Error fetching logo:", err));
  }, [API_BASE_URL]);

  return <LogoContext.Provider value={{ logo }}>{children}</LogoContext.Provider>;
};
