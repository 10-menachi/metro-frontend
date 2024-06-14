import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { StateProvider } from "./context/AddTripContext.jsx";
import { TripsProvider } from "./context/TripsContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TripsProvider>
        <StateProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </StateProvider>
      </TripsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
