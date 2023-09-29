import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.scss'
import Home from './pages/home'
import Products from "./pages/products";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Products />} />
          </Routes>
      </>
  );
}

export default App
