import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo-no-background.png'


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <img src={logo} alt='logo' className="logo" />
          <h1 className="title"  >Yummy Hunt</h1>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
