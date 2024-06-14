import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { StateProvider } from "./context/AddTripContext.jsx";
import { TripsProvider } from "./context/TripsContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const root = document.getElementById("root");
const rootElement = root ? ReactDOM.createRoot(root) : ReactDOM;

rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TripsProvider>
          <StateProvider>
            <App />
          </StateProvider>
        </TripsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
