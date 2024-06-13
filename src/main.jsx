import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AlertProvider } from "./context/AlertContext";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { StateProvider } from "./context/AddTripContext.jsx";
import { TripsProvider } from "./context/TripsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TripsProvider>
        <StateProvider>
          <App />
        </StateProvider>
      </TripsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
