// Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Project-Portal. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About</a>
          {/* <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
