import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { TripProvider } from "./context/TripContext.jsx";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
  <TripProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TripProvider>
    </ThemeProvider>
  </React.StrictMode>
);
