import React from 'react';
import './Landing.css';
import bigLogo from '../../assets/images/1.png';

const LandingPage = () => {
  return (
    <main className="landing-page">
      <div className="text-image-container">
        <div className="text-content">
          <h1>
            Chat with Students.
            <br />
            Find Inspiration.
          </h1>
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
