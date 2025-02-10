import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import "./SlideBar.css";

const Sidebar = ({ sidebar, toggleSidebar, activeLink }) => {
  const sidebarRef = useRef(null); // To reference the sidebar



  return (
    <nav ref={sidebarRef} className={`sidebar ${sidebar ? "active" : ""}`}>
      <div className="sidebar-wrap">
        <Link to="#" className="menu-close" onClick={toggleSidebar}>
          ✖
        </Link>
        
        {SidebarData.map((item, index) => (
          <SubMenu item={item} key={index} />
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
