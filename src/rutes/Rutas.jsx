import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Cards from "../Components/Cards";
import DetallePersona from "../Components/DetallePersona";
import App from "../App";

export default function rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<DetallePersona />} />
      </Routes>
    </BrowserRouter>
  );
}
