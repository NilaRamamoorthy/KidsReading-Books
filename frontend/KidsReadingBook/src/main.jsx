import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LogoProvider } from "./contexts/LogoContext.jsx"; // make sure the path is correct

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LogoProvider>
      <App />
    </LogoProvider>
  </React.StrictMode>
);
