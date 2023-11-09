import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import LandingPage from "./pages/LandingPage.jsx";
import CarsPage from "./pages/CarsPage.jsx";
import CarProvider from "./context/CarProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<LandingPage />} />
      <Route path="cars" element={<CarsPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarProvider>
      <RouterProvider router={router} />
    </CarProvider>
  </React.StrictMode>
);
