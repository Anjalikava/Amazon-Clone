import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomeBanner from "./screen/home-screen/home-banner/Home-Banner";
import HomeDetails from "./screen/home-screen/home-banner/Home-Banner-Click-Products";
import ProductData from "./product-details/Product-Data";
import HomeProductDetails from "./screen/home-screen/home-details/Home-Product-Details";
import OfferDetails from "./screen/home-screen/home-details/Home-product-Offers";
import { HomeScreen } from "./screen/home-screen/Home-Screen";
import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="p-0 m-0 box-border">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/home-banner" element={<HomeBanner />} />
                    <Route path="/home-details" element={<HomeDetails />} />
                    <Route path="/product-data" element={<ProductData />} />
                    <Route path="/product/:id" element={<HomeProductDetails />} />
                    <Route path="/offer/:id" element={<OfferDetails />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
