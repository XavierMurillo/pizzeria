import React from "react";
import Home from "./views/home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cart from "./views/Cart";
import Details from "./views/Details";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrito" element={<Cart />} />
      <Route path="/pizza/:id" element={<Details />} />
    </Routes>
  );
};

export default App;
