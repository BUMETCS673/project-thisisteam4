<<<<<<< HEAD
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess } from '../../store/userSlice'; // 确认路径正确
import projectPortalImage from "../../assets/images/2.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logoutSuccess());

    navigate('/auth');
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
          {isAuthenticated && (
            <>
              <li className="navbar-item">
                <NavLink to="/me" className="navbar-link" activeClassName="active">PROFILE</NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/project/" className="navbar-link" activeClassName="active">CREATE</NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/auth" className="navbar-link" activeClassName="active" onClick={handleLogout}>LOGOUT</NavLink>
              </li>
            </>
          )}
          {!isAuthenticated && (
            <li className="navbar-item">
              <NavLink to="/auth" className="navbar-link" activeClassName="active">LOGIN</NavLink>
            </li>
          )}
        </ul>
      </div>
=======
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
>>>>>>> main
    </nav>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default NavigationBar;
>>>>>>> main
