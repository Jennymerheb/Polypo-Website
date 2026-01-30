import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="nav-glass-container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <span className="logo-text">POLYPO</span>
          </Link>
          
          <div className="nav-links">
            <Link to="/platform" className="nav-link">
              The Platform
              <span className="dropdown-icon">▼</span>
            </Link>
            <Link to="/studio" className="nav-link">
              The Studio
              <span className="dropdown-icon">▼</span>
            </Link>
            <Link to="/blog" className="nav-link">
              Resources
              <span className="dropdown-icon">▼</span>
            </Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>
          
          <div className="nav-cta">
            <button className="nav-btn nav-btn-secondary">Log in</button>
            <button className="nav-btn nav-btn-primary">Book a Demo</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
