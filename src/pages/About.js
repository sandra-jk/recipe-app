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
        <h3>Welcome to Yummy Hunt</h3>
        <p>Your ultimate gastronomic companion in the digital age! Whether you're a seasoned chef or a kitchen newbie, Yummy Hunt is here to revolutionize the way you discover, create, and savor delightful dishes.</p>
        <p>With Yummy Hunt, your next epicurean adventure is just a tap away. Say farewell to endless recipe searches and bland meals - our intuitive app brings together a treasure trove of mouthwatering recipes from around the globe, curated to suit every taste, dietary preference, and occasion.</p>
        <p>So why wait? Start exploring!</p>
        <button className="action-button" onClick={handleLearnMore}>View Recipe</button>
      </div>
    </div>
  );
};

export default About;
