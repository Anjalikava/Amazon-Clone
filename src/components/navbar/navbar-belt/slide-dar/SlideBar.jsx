import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import "./SlideBar.css";
import { FaUserCircle } from "react-icons/fa"; // Import user icon

const Sidebar = ({ sidebar, toggleSidebar }) => {
  const sidebarRef = useRef(null); // To reference the sidebar

  return (
    <nav ref={sidebarRef} className={`sidebar ${sidebar ? "active" : ""}`}>
      <div className="sidebar-wrap">
        {/* Header with Sign In and Close Icon */}
        <div className="sidebar-header">
          <div className="sign-in">
            <FaUserCircle className="sign-in-icon" />
            <span>Hello, Sign In</span>
          </div>
          <Link to="#" className="menu-close" onClick={toggleSidebar}>
            ✖
          </Link>
        </div>

        {/* Sidebar Items */}
        {SidebarData.map((item, index) => (
          <SubMenu item={item} key={index} />
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
