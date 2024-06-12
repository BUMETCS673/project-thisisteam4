<<<<<<< HEAD
import React from 'react';
import './Landing.css';
import bigLogo from '../../assets/images/1.png';

const LandingPage = () => {
    return (
        <main className="landing-page">
            <div className="text-image-container">
                <div className="text-content">
                    <h1>Chat with Students.<br />Find Inspiration.</h1>
                    <h2>Let us connect and organize together.</h2>
                    <button className="learn-more-button">LEARN MORE</button>
                </div>
                <div className="image-content">
                    <img src={bigLogo} alt="Big Logo" className="big-logo" />
                </div>
            </div>
        </main>
    );
};

export default LandingPage;
=======
import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/Navbar/Navbar"; 
import Footer from "../../components/Footer/Footer";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <NavigationBar />
      <div className="landing-content">
        <div className="landing-title-container">
          <h1 className="landing-title">Project-Portal</h1>
        </div>
        <div className="landing-links">
          <Link to="/about" className="landing-link">
            About
          </Link>
          <Link to="/login" className="landing-link">
            Login
          </Link>
          <Link to="/signup" className="landing-link">
            Signup
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
>>>>>>> main
