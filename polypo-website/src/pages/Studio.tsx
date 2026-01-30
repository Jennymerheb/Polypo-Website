import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/Studio.css';

const Studio: React.FC = () => {
  return (
    <div className="studio-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="studio-hero-section">
        <div className="hero-glass-container">
          <div className="hero-content-wrapper">
            <div className="hero-content">
              <h1 className="hero-title">
                The studio for immersive<br />
                product experiences
              </h1>
              <p className="hero-subtitle">
                We build 3D, AR and spatial-first moments: modeled, rendered and engineered for brands, 
                retailers and campaigns in any format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="experiences-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">GET STARTED</p>
            <h2 className="section-title">Craft experiences your customers will remember</h2>
          </div>
          
          <div className="experiences-grid">
            <div className="experience-card large"></div>
            <div className="experience-card"></div>
          </div>
        </div>
      </section>

      {/* 3D Visualization */}
      <section className="visualization-section">
        <div className="container-split">
          <div className="viz-product">
            <div className="product-showcase">
              <div className="product-image main"></div>
              <div className="product-thumbnails">
                <div className="thumbnail"></div>
                <div className="thumbnail"></div>
                <div className="thumbnail"></div>
              </div>
            </div>
          </div>
          
          <div className="viz-content">
            <p className="section-label">INTERACTIVE 3D</p>
            <h2>Explore and Visualize products in 3D</h2>
            <p>
              Photorealistic 3D models that shoppers can rotate, zoom and interact with, 
              built to be quickly viewable and deeply engaging.
            </p>
          </div>
        </div>
      </section>

      {/* AR Experience */}
      <section className="ar-section">
        <div className="container-split reverse">
          <div className="ar-visual">
            <div className="ar-demo"></div>
          </div>
          
          <div className="ar-content">
            <p className="section-label">AUGMENTED REALITY</p>
            <h2>Try and experience products</h2>
            <p>
              Enable AR experiences to let customers try products in their space or 
              on themselves before they purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container-split">
          <div className="video-visual">
            <div className="video-placeholder">PROMO</div>
          </div>
          
          <div className="video-content">
            <p className="section-label">AUGMENTED REALITY</p>
            <h2>Try and experience products</h2>
            <p>
              Enable AR try-on experience to let customers try on accessories 
              or full outfits using a mobile point.
            </p>
          </div>
        </div>
      </section>

      {/* In-Store Section */}
      <section className="instore-section">
        <div className="container">
          <h2 className="section-title">Bring it in-store</h2>
          
          <div className="instore-grid">
            <div className="instore-card">
              <p className="section-label">TO DRIVE NEW IDEAS</p>
              <h3>In-Store Experience</h3>
              <p>Transform physical retail spaces with interactive AR mirrors and displays</p>
              <div className="instore-visual"></div>
            </div>
            
            <div className="instore-card">
              <p className="section-label">WHEREVER YOU NEED</p>
              <h3>Storefront Experience</h3>
              <p>Engage customers before they walk in with window displays and exterior tech</p>
              <div className="instore-visual"></div>
            </div>
            
            <div className="instore-card">
              <p className="section-label">WHENEVER YOU CALL</p>
              <h3>Pop-Ups & Events</h3>
              <p>Create memorable brand experiences at temporary locations and special events</p>
              <div className="instore-visual"></div>
            </div>
            
            <div className="instore-card">
              <p className="section-label">ORGANIZE REQUIRED</p>
              <h3>Augmented Retail</h3>
              <p>Blend physical and digital retail with AR-enhanced shopping experiences</p>
              <div className="instore-visual"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio For Section */}
      <section className="studio-for-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">CREATE FOR THE METAVERSE</p>
            <h2 className="section-title">Who The Studio is For</h2>
          </div>
          
          <div className="studio-for-grid">
            <div className="for-card">
              <h3>Brand & marketing teams</h3>
            </div>
            <div className="for-card">
              <h3>Interactive and digital forms</h3>
            </div>
            <div className="for-card">
              <h3>Creative and innovation agencies</h3>
            </div>
            <div className="for-card">
              <h3>Retail and experiential teams</h3>
            </div>
          </div>
          
          <div className="morph-video">
            <p className="section-label">TAKE A MOMENT TO TRY IT</p>
            <h3>the morph effect video</h3>
          </div>
        </div>
      </section>

      {/* Brand Setup */}
      <section className="brand-setup-section">
        <div className="container">
          <h2 className="section-title">It starts with your brand</h2>
          <p className="section-description">
            Studio projects are system-scoped and tailored to each format.
          </p>
          
          <div className="setup-grid">
            <div className="setup-card">
              <h3>Ideation</h3>
              <p>Define use cases and experiences</p>
            </div>
            <div className="setup-card">
              <h3>Design</h3>
              <p>Concepts, prototypes, MVP and validations</p>
            </div>
            <div className="setup-card">
              <h3>Build</h3>
              <p>High-res end products</p>
            </div>
            <div className="setup-card">
              <h3>Launch</h3>
              <p>Deploy and iterate real needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="studio-cta-section">
        <div className="container">
          <div className="cta-banner">
            <p className="section-label">CREATE WITH US</p>
            <h2>What do you want exploring?</h2>
            <p>Let's build immersive brand experiences together that push boundaries and engage customers.</p>
            <button className="btn btn-primary">GET STARTED</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Studio;
