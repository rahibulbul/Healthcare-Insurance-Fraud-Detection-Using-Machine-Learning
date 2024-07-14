import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="top-line">
        <div className="contact-info">
          <p className="address">Address: 00 test Address, Birmingham, UK</p>
          <p className="phone">Phone: +4407XXXXXXXXX</p>
        </div>
      </div>
      <div className="bottom-line">
        <nav className="nav">
          <Link to="/" className="logo-link">
            LoGo
          </Link>
          <ul>
            <li>
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/get-quote" className="nav-link">
                Get Quote
              </Link>
            </li>
            <li>
              <Link to="/payment" className="nav-link">
                Payment
              </Link>
            </li>
            <li>
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/Login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
