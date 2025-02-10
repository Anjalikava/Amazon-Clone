import React, { useState } from "react";
import Sidebar from "./slide-dar/SlideBar"; // Import Sidebar
import "./Navbar-Belt.css"; // Make sure the CSS file is linked

const NavbarBottom = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // To track which link is clicked

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleLinkClick = () => {
    toggleSidebar(true); // Toggle the sidebar
  };

  return (
    <>
       <Sidebar sidebar={sidebarVisible} toggleSidebar={toggleSidebar} activeLink={activeLink} />

      <div className="navbar-bottom">
        <div className="flex items-center space-x-3 p-2 pl-6">
          <div onClick={() => handleLinkClick()}>
          <p className="link flex items-center" >
            <svg
              className="h-6 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            All
          </p>
          </div>
          
          <p className="link" >
            Prime Video
          </p>
          <p className="link" >
            Amazon Business
          </p>
          <p className="link" >
            Today's Deals
          </p>
          <p className="link hidden lg:inline-flex">
            Electronics
          </p>
          <p className="link hidden lg:inline-flex" >
            Food & Grocery
          </p>
          <p className="link hidden lg:inline-flex">
            Prime
          </p>
          <p className="link hidden lg:inline-flex">
            Buy Again
          </p>
          <p className="link hidden lg:inline-flex" >
            Shopper Toolkit
          </p>
          <p className="link hidden lg:inline-flex" >
            Health & Personal Care
          </p>
        </div>
      </div>
   
    </>
  );
};

export default NavbarBottom;
