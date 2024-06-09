import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import projectPortalImage from "../../assets/images/2.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    // Clear user session, tokens, etc.
    localStorage.removeItem('userToken');
    sessionStorage.removeItem('userSession');
    // Redirect to login page
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img src={projectPortalImage} alt="Project Portal" className="navbar-image" />
        </NavLink>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <li className="navbar-item">
            <NavLink to="/about" className="navbar-link" activeClassName="active">ABOUT</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/dashboard" className="navbar-link" activeClassName="active">Dashboard</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/me" className="navbar-link" activeClassName="active">PROFILE</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/project/" className="navbar-link" activeClassName="active">CREATE</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/login" className="navbar-link" activeClassName="active" onClick={handleLogout}>LOGOUT</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
