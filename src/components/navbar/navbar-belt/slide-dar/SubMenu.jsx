import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <div className="sidebar-item">
                <Link
                    to={item.path}
                    className="sidebar-link"
                    onClick={item.subNav && showSubnav}
                >
                    <div>
                        {item.icon}
                        <span className="sidebar-label">{item.title}</span>
                    </div>
                    {item.subNav && (
                        <div className="sidebar-arrow">
                            {subnav ? "➖" : "➕" }
                        </div>
                    )}
                </Link>
            </div>
            {subnav &&
                item.subNav &&
                item.subNav.map((subItem, index) => (
                    <div className="dropdown-container" key={index}>
                        <SubMenu item={subItem} />
                    </div>
                ))}
        </>
    );
};

export default SubMenu;
