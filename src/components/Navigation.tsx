import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="nav-glass-container">
        <div className="nav-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src="/Official Logos-01.png" alt="Polypo" className="logo-img" />
          </Link>

          {/* Nav Links */}
          <div className="nav-links">
            <NavLink to="/platform" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              The Platform
              <svg className="chevron-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavLink>
            <NavLink to="/studio" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              The Studio
              <svg className="chevron-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Resources
              <svg className="chevron-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
          </div>

          {/* CTA Buttons */}
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
