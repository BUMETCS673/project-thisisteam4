import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/Navbar/Navbar"; 
//import Footer from '../components/Footer';
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
          <Link to="/login-signup" className="landing-link">
            Login/Signup
          </Link>
        </div>       
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;
