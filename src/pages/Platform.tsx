import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/Platform.css';

const Platform: React.FC = () => {
  return (
    <div className="platform-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="platform-hero-section">
        <div className="hero-glass-container">
          <div className="hero-content-wrapper">
            <div className="hero-content">
              <h1 className="hero-title">The AI sizing Platform</h1>
              <p className="hero-subtitle">
                Polypo is an AI-driven fit technology platform that delivers personal size 
                recommendations and 3D visualization for every shopper, on every product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engine */}
      <section className="core-engine-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">START WITH CORE ENGINE</p>
            <h2 className="section-title">Core AI Sizing Engine</h2>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Recommendation</h3>
              <p>Recommend the best size per product</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Fit Calculation</h3>
              <p>Tell how close to body or growing will fit</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Adaptability</h3>
              <p>Flexible to body changes, preferences & use cases</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Consistency</h3>
              <p>Deliver consistent sizing accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shopper Journey */}
      <section className="shopper-section">
        <div className="container">
          <h2 className="section-title">It starts with the shopper</h2>
          <p className="section-description">
            Every recommendation begins with the shopper: understanding their body, 
            their needs, their confidence.
          </p>
          
          <div className="shopper-grid">
            <div className="shopper-card">
              <div className="shopper-visual"></div>
              <h3>Capture</h3>
              <p>Take your preferences and measurements</p>
            </div>
            <div className="shopper-card">
              <div className="shopper-visual"></div>
              <h3>Recommend</h3>
              <p>Match sizing to garment specs</p>
            </div>
            <div className="shopper-card">
              <div className="shopper-visual"></div>
              <h3>Visualize</h3>
              <p>See fit on their unique body shape in 3D</p>
            </div>
            <div className="shopper-card">
              <div className="shopper-visual"></div>
              <h3>Understand</h3>
              <p>Explain what fits and what doesn't</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add What You Need */}
      <section className="modules-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">PLATFORM BUILDING</p>
            <h2 className="section-title">Add what you need. When you need it.</h2>
          </div>
          
          <div className="modules-list">
            <div className="module-card">
              <div className="module-content">
                <div className="module-badge">
                  <span className="module-badge-icon">AI</span>
                  <span>SIZE ENGINE</span>
                </div>
                <h3>Recommend the right size, every time.</h3>
                <p>
                  Polypo's AI-first shopper analysis engine recommends 
                  which size, product placement and size confidence.
                </p>
                <div className="module-tags">
                  <span className="module-tag">AI Sizing</span>
                  <span className="module-tag">Recommend</span>
                  <span className="module-tag">Confident</span>
                </div>
              </div>
              <div className="module-visual"></div>
            </div>
            
            <div className="module-card">
              <div className="module-content">
                <div className="module-badge">
                  <span className="module-badge-icon">3D</span>
                  <span>FIT VISUALIZATION</span>
                </div>
                <h3>Show fit in 3D not just size</h3>
                <p>
                  Give shoppers visual context through 3D fit representations on their accurate avatar 
                  helping them understand proportions, ease, and silhouette before buying.
                </p>
                <div className="module-tags">
                  <span className="module-tag">3D Avatar</span>
                  <span className="module-tag">Fitmap</span>
                  <span className="module-tag">Accurate</span>
                </div>
              </div>
              <div className="module-visual"></div>
            </div>
            
            <div className="module-card">
              <div className="module-content">
                <div className="module-badge">
                  <span className="module-badge-icon">2D</span>
                  <span>FIT VISUALIZATION</span>
                </div>
                <h3>Fit, shown on your image</h3>
                <p>
                  Translate size recommendations into clear on-model visuals that reduce uncertainty 
                  and set expectations.
                </p>
                <div className="module-tags">
                  <span className="module-tag">2D Avatar</span>
                  <span className="module-tag">Gen AI</span>
                  <span className="module-tag">Photorealistic</span>
                </div>
              </div>
              <div className="module-visual"></div>
            </div>
            
            <div className="module-card">
              <div className="module-content">
                <div className="module-badge">
                  <span className="module-badge-icon">AI</span>
                  <span>SIZE AND STYLE GUIDANCE</span>
                </div>
                <h3>Turn sizing into clear guidance</h3>
                <p>
                  AI-powered size recommendations help shoppers understand why a size or style is 
                  recommended and how it's meant to fit reducing hesitation and returns.
                </p>
                <div className="module-tags">
                  <span className="module-tag">AI Guidance</span>
                  <span className="module-tag">Conversational</span>
                  <span className="module-tag">Personalized</span>
                </div>
              </div>
              <div className="module-visual"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Insights */}
      <section className="insights-section">
        <div className="container">
          <h2 className="section-title">Fit data and insights you can build on</h2>
          
          <div className="insights-grid">
            <div className="insight-card">
              <h3>92%</h3>
              <p>Recommended Size Accuracy</p>
            </div>
            <div className="insight-card">
              <h3>Size Related Returns</h3>
            </div>
            <div className="insight-card">
              <h3>Bracketing Behavior</h3>
            </div>
            <div className="insight-card">
              <h3>Optimized Size Breakdown</h3>
            </div>
            <div className="insight-card">
              <h3>Fit in Categories Level</h3>
            </div>
            <div className="insight-card">
              <h3>Fit in Categories</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Description */}
      <section className="description-section">
        <div className="container-narrow">
          <h2 className="section-title centered">
            Polypo is a modular fit-intelligence platform designed to adapt to 
            brand-specific sizing rules, product categories, and retail strategies.
          </h2>
          
          <div className="cta-group">
            <p className="section-label">SIMPLE SETUP UP</p>
            <h3>Book a 30 mins demo</h3>
            <p>Learn how Polypo adapts to your brand sizing needs, modules and rollout options.</p>
            <button className="btn btn-primary">BOOK A DEMO</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Platform;
