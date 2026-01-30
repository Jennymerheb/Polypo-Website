import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const socialIcons = [
    { name: 'Instagram', color: 'white' },
    { name: 'LinkedIn', color: 'white' },
    { name: 'TikTok', color: 'white' },
    { name: 'Snapchat', color: 'white' },
    { name: 'X', color: 'white' },
    { name: 'Mail', color: 'white' }
  ];

  const socialIconsPurple = [
    { name: 'Instagram', color: 'purple' },
    { name: 'LinkedIn', color: 'purple' },
    { name: 'TikTok', color: 'purple' },
    { name: 'Snapchat', color: 'purple' },
    { name: 'X', color: 'purple' },
    { name: 'Mail', color: 'purple' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-highlight">
            <div className="footer-logo">POLYPO</div>
            <p className="footer-tagline">
              The Future of Fashion is Personalized, Interactive, and <span className="bold">All About You!</span>
            </p>
            <div className="footer-ctas">
              <button className="btn btn-primary">BUTTON</button>
              <button className="btn btn-primary">BUTTON</button>
            </div>
          </div>
          
          <div className="footer-links-container">
            <div className="footer-links">
              <div className="footer-section">
                <h3 className="h2-bold">Our Solutions</h3>
                <ul className="link-list">
                  <li>AI Stylist</li>
                  <li>VTO Tech</li>
                  <li>AR Tech</li>
                  <li>Spatial Tech</li>
                  <li>Gen AI</li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h3 className="h2-bold">Our Blog</h3>
                <ul className="link-list">
                  <li>Insights</li>
                  <li>Features</li>
                  <li>Collabs</li>
                  <li>Community</li>
                </ul>
              </div>
            </div>
            
            <div className="social-links">
              <div className="social-icons">
                {socialIcons.map((icon, idx) => (
                  <div key={idx} className="social-icon white">{icon.name[0]}</div>
                ))}
              </div>
              <div className="social-icons">
                {socialIconsPurple.map((icon, idx) => (
                  <div key={idx} className="social-icon purple">{icon.name[0]}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-logo-3d">
          {/* 3D Logo Placeholder */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
