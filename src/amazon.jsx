import React from "react";
import './amazon.css';

const AmazonClone = () => {
  return (
    <div>
      <header>
        <nav className="nav">
          <div className="nav-left">
            <div className="nav-logo">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20240326183545/amazon.png"
                alt="Amazon Logo"
              />
            </div>
            <div className="location">
              <p className="top-text">Deliver to</p>
              <div className="location-icon">
                <i className="fa-solid fa-location-dot"></i>
                <p className="bottom-text">India</p>
              </div>
            </div>
          </div>
          <div className="nav-center">
            <select className="search-dropdown">
              <option>All</option>
              <option>All Departments</option>
              <option>Arts & Crafts</option>
            </select>
            <input type="text" placeholder="Search Amazon" className="search-box" />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="nav-right">
            <div className="language-option">
              <i className="fa-regular fa-flag"></i>
              <select className="select-language">
                <option>EN</option>
                <option>ES</option>
                <option>AR</option>
              </select>
            </div>
            <div className="account-option">
              <p className="top-text">Hello, sign in</p>
              <select className="select-account">
                <option>Account & Lists</option>
              </select>
            </div>
            <div className="order-option">
              <p className="top-text">Returns</p>
              <p className="bottom-text">& Orders</p>
            </div>
            <div className="cart-option">
              <i className="fa-solid fa-cart-shopping"></i>
              Cart
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="carousel">
          {[1, 2, 3].map((num) => (
            <div key={num} className="slide">
              <img
                src={`https://media.geeksforgeeks.org/wp-content/uploads/2024032612291${num}/image${num}.jpg`}
                alt={`Slide ${num}`}
              />
            </div>
          ))}
        </div>
        <div className="items-container">
          {["Gaming accessories", "Deal in PCs", "Amazon Gadget Store"].map((item, index) => (
            <div className="item-card" key={index}>
              <h2>{item}</h2>
              <img
                src={`https://media.geeksforgeeks.org/wp-content/uploads/2024032612291${index}/image${index}.jpg`}
                alt={item}
              />
              <p>
                <a href="#">See more</a>
              </p>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <a href="#" className="back-option">Back to top</a>
        <div className="footer-links">
          <ul>
            <p>Get to Know Us</p>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default AmazonClone;