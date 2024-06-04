import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <img id="logo" src='./public/logo512.png' alt='logo' className="logo" />
          <h1 className="title">Recipe Finder</h1>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
