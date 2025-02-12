import React from "react";
import { Search, ShoppingCart, Menu } from "@mui/icons-material";
import { LocationOn } from "@mui/icons-material";
import AmazonLogo from "../../../assets/amazonLogo.png";
import "./Navbar-Banner.css";
import LanguageDropdown from "./language-drop-down/Language-Drop-Down";
import { useState, useEffect, useRef } from "react";
const NavbarBanner = () => {
  // State to toggle the menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [selectedText, setSelectedText] = useState("All");
  const textMeasureRef = useRef(null);
  const selectRef = useRef(null);
  useEffect(() => {
    // Update the dropdown width based on the selected option's text width
    if (textMeasureRef.current && selectRef.current) {
      const width = textMeasureRef.current.offsetWidth;
      selectRef.current.style.width = `${width + 32}px`; // Add padding
    }
  }, [selectedText]);

  const handleChange = (e) => {
    setSelectedText(e.target.options[e.target.selectedIndex].text);
  };
  return (
    <div className="navbar-banner">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-container">
          <img src={AmazonLogo} alt="Amazon Logo" className="logo-image" />
          <span className=" md:inline">.in</span>
        </div>

        {/* Menu Icon (visible on phone screens only) */}
        <div
          className="menu-icon-container block md:hidden"
          onClick={toggleMenu}
        >
          <Menu className="menu-icon" />
        </div>

        {/* Dropdown Menu (visible on phone screens only) */}
        {menuOpen && (
          <div className="menu-dropdown">
            <div className="menu-item">
              <div className="address-text dropdown-delivery pl-0.25 ">
                <div className="flex items-center space-x-2">
                  <LocationOn className="menu-icon" />
                  <div>
                    <p className="text-s text-black-300">
                      Delivering to Ahmedabad 382350
                    </p>
                    <p className="font-bold text-sm">Update location</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-item">
              <div className="account-section link">
                <p>Hello, Sign in</p>
                <p className="font-extrabold md:text-sm text-sm">
                  Account & Lists
                </p>
              </div>
            </div>
            <div className="menu-item">
              <div className="returns-section link">
                <p className="text-sm">Returns</p>
                <p className="font-extrabold md:text-sm text-sm">& Orders</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="basket-section link">
                <span className="basket-count text-sm">0</span>
                <ShoppingCart className="basket-icon" />
                <p className="basket-text text-sm">Cart</p>
              </div>
            </div>
          </div>
        )}

        {/* Delivery Address (hidden on small screens) */}
        <div className="delivery-address hidden md:flex">
          <LocationOn className="delivery-icon" />
          <div className="address-text">
            <p className="text-xs text-slate-300">
              Delivering to Ahmedabad 382350
            </p>
            <p className="font-bold">Update location</p>
          </div>
        </div>

        {/* Search Bar (hidden on small screens) */}
        <div className="search-bar hidden md:flex">
          {/* Dropdown */}
          <select
            ref={selectRef}
            onChange={handleChange}
            className=" category-dropdown"
          >
            <option value="aps">All</option>
            <option value="aps"> Books</option>
            <option value="alexa-skills">Faction Clothing</option>
            <option value="amazon-devices">Electronicss</option>
            <option value="fashion">Food & Grocery</option>
            <option value="nowstore">Shopper Toolkit</option>
            <option value="amazon-pharmacy">Health & Personal Care</option>
            {/* <option value="appliances">Appliances</option>
            <option value="mobile-apps">Apps &amp; Games</option>
            <option value="audible">Audible Audiobooks</option>
            <option value="baby">Baby</option>
            <option value="beauty">Beauty</option>
            <option value="stripbooks">Books</option>
            <option value="automotive">Car &amp; Motorbike</option>
            <option value="apparel">Clothing &amp; Accessories</option>
            <option value="collectibles">Collectibles</option>
            <option value="computers">Computers &amp; Accessories</option>
            <option value="todays-deals">Deals</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="lawngarden">Garden &amp; Outdoors</option>
            <option value="gift-cards">Gift Cards</option>
            <option value="grocery">Grocery &amp; Gourmet Foods</option>
            <option value="hpc">Health &amp; Personal Care</option>
            <option value="kitchen">Home &amp; Kitchen</option>
            <option value="industrial">Industrial &amp; Scientific</option>
            <option value="jewelry">Jewellery</option>
            <option value="digital-text">Kindle Store</option>
            <option value="luggage">Luggage &amp; Bags</option>
            <option value="luxury-beauty">Luxury Beauty</option>
            <option value="dvd">Movies &amp; TV Shows</option>
            <option value="digital-music">MP3 Music</option>
            <option value="popular">Music</option>
            <option value="mi">Musical Instruments</option>
            <option value="office-products">Office Products</option>
            <option value="pets">Pet Supplies</option>
            <option value="instant-video">Prime Video</option>
            <option value="shoes">Shoes &amp; Handbags</option>
            <option value="software">Software</option>
            <option value="sporting">Sports, Fitness &amp; Outdoors</option>
            <option value="specialty-aps-sns">Subscribe &amp; Save</option>
            <option value="home-improvement">Tools &amp; Home Improvement</option>
            <option value="toys">Toys &amp; Games</option>
            <option value="under-ten-dollars">Under ₹500</option>
            <option value="videogames">Video Games</option>
            <option value="watches">Watches</option> */}
          </select>

          {/* Hidden element to measure text width */}
          <span
            ref={textMeasureRef}
            className="absolute invisible whitespace-nowrap p-2"
          >
            {selectedText}
          </span>
          <input
            type="text"
            className="search-input"
            placeholder="Search Amazon"
          />
          <button className="search-button">
            <Search className="search-icon" />
          </button>
        </div>

        {/* Right Section (hidden on small screens) */}
        <div className="right-section hidden md:flex">
          <LanguageDropdown />
          {/* <div className="flag-section link">
            <div className="flex">
              <img
                src={IndianFlag}
                alt="Indian Flag"
                className="flag-icon"
               
              />
              <div className="pt-1 pl-1">
                <span className="language-text">EN</span>
                <span className="dropdown-arrow">▼</span>
              </div>
            </div>
          </div> */}
          <div className="account-section link">
            <p>Hello, Sign in</p>
            <p className="font-extrabold md:text-sm text-sm">Account & Lists</p>
          </div>
          <div className="returns-section link">
            <p className="text-sm">Returns</p>
            <p className="font-extrabold md:text-sm text-sm">& Orders</p>
          </div>
          <div className="basket-section link">
            <span className="basket-count text-sm">0</span>
            <ShoppingCart className="basket-icon" />
            <p className="basket-text text-sm">Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBanner;

