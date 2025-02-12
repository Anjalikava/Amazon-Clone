import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProductData from "./product-details/Product-Data";
import HomeProductDetails from "./screen/home-screen/home-details/Home-Product-Details"; // Import the new component
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { HomeScreen } from "./screen/home-screen/Home-Screen";

const App = () => {
  return (
    <Router>
      <div className="p-0 m-0 box-border">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product-data" element={<ProductData />} />
          <Route path="/product/:id" element={<HomeProductDetails />} /> 
          {/* New route for product details */}
          <Route path="*" element={<Navigate to="/" />} /> 
          {/* Redirect invalid paths to home */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
