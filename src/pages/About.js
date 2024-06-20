import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../About.css'; 

const About = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/');
  };

  return (
    <div className="about-container">
      <div className="content">
        <h1>About Us</h1>
        <p>We are passionate about sharing recipes with the world.</p>
        <button className="action-button" onClick={handleLearnMore}>View Recipe</button>
      </div>
    </div>
  );
};

export default About;
