import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo">
        <h2>
          World<span>Explorer</span>
        </h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
