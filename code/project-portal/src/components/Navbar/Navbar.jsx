import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/dashboard" className="navbar-link">Dashboard</Link>
        </li>
        <li className="navbar-item">
          <Link to="/project" className="navbar-link">Projects</Link>
        </li>
        <li className="navbar-item">
          <Link to="/me" className="navbar-link">Me</Link>
        </li>
        <li className="navbar-item">
          <Link to="/search" className="navbar-link">Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
