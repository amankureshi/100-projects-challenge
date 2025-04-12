import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo">
        <img
          src="https://img.icons8.com/?size=200&id=11772&format=png&color=111916"
          alt="Logo"
        />
        <h2>
          Photo<span>Graphy</span>
        </h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
