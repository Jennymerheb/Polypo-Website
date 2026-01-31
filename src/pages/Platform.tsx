import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ModelViewer3D from '../components/ModelViewer3D';
import ImageCompareSlider from '../components/ImageCompareSlider';
import AIStylistChat from '../components/AIStylistChat';
import '../styles/Platform.css';

const Platform: React.FC = () => {
  return (
    <div className="platform-page">
      <Navigation />

      {/* Hero Section */}
      <section className="platform-hero-section">
        <div className="platform-hero-container">
          <div className="platform-hero-content">
            <h1 className="platform-hero-title">The AI sizing Platform</h1>
            <p className="platform-hero-subtitle">
              Polypo is a modular fit-intelligence platform that recommends the right size,
              shows how it fits, and helps brands standardize sizing across every product.
            </p>
            <button className="btn btn-outline-dark">Book a Demo</button>
          </div>
          <div className="platform-hero-visual">
            <div className="platform-hero-image"></div>
          </div>
        </div>
      </section>

      {/* Core Engine Section */}
      <section className="core-engine-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">START WITH YOUR BRAND</p>
            <h2 className="section-title">Core AI Sizing Engine</h2>
          </div>

          <div className="core-engine-layout">
            <div className="core-engine-visual">
              <div className="core-visual-placeholder"></div>
            </div>
            <div className="core-features-grid">
              <div className="core-feature-card">
                <div className="core-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>Recommendation</h3>
                <p>Recommends the best size per shopper, per item</p>
              </div>
              <div className="core-feature-card">
                <div className="core-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3>Customization</h3>
                <p>Reflects your brand's grading and fit philosophy</p>
              </div>
              <div className="core-feature-card">
                <div className="core-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3>Adaptability</h3>
                <p>Adapts across categories, fabrics, and silhouettes</p>
              </div>
              <div className="core-feature-card">
                <div className="core-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3>Consistency</h3>
                <p>Creates consistent fit guidance across collections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopper Journey */}
      <section className="shopper-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">HOW IT WORKS</p>
            <h2 className="section-title">It starts with the shopper</h2>
            <p className="section-description">
              Every experience begins with understanding the shopper: their body, their needs, their confidence.
            </p>
          </div>

          <div className="shopper-cards-grid">
            <div className="shopper-card">
              <div className="shopper-card-visual">
                <img src="/images/shopper-capture.png" alt="Capture body profile" />
              </div>
              <div className="shopper-card-content">
                <h3>Capture</h3>
                <p>Create a body profile from images and preferences.</p>
              </div>
            </div>
            <div className="shopper-card">
              <div className="shopper-card-visual">
                <img src="/images/shopper-recommend.png" alt="Size recommendation" />
              </div>
              <div className="shopper-card-content">
                <h3>Recommend</h3>
                <p>Match the shopper to the right size.</p>
              </div>
            </div>
            <div className="shopper-card">
              <div className="shopper-card-visual">
                <img src="/images/shopper-visualize.png" alt="Visualize garment" />
              </div>
              <div className="shopper-card-content">
                <h3>Visualize</h3>
                <p>See the garment on a realistic 2D image.</p>
              </div>
            </div>
            <div className="shopper-card">
              <div className="shopper-card-visual">
                <img src="/images/shopper-understand.png" alt="Understand fit in 3D" />
              </div>
              <div className="shopper-card-content">
                <h3>Understand</h3>
                <p>Explore fit, ease, and pressure in 3D.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Building Section */}
      <section className="platform-building-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">PLATFORM BUILDING</p>
            <h2 className="section-title">Add what you need.<br />When you need it.</h2>
          </div>

          {/* Module Cards - Stacking */}
          <div className="modules-container">
            {/* Size Engine Module */}
            <div className="module-card">
              <div className="module-content">
                <div className="module-header">
                  <span className="module-badge">SIZE ENGINE</span>
                  <span className="module-badge-type">AI</span>
                </div>
                <h3 className="module-title">Recommend the right size, every time.</h3>
                <p className="module-description">
                  Polypo's AI Size Engine analyzes shopper data, garment specifications, and brand-specific grading rules to recommend the best size for each item.
                </p>
                <div className="module-tags">
                  <span className="module-tag">AI Sizing</span>
                  <span className="module-tag">Recommend</span>
                  <span className="module-tag">Confident</span>
                </div>
              </div>
              <div className="module-visual module-visual-video">
                <video
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'scale(1.4)'
                  }}
                >
                  <source src="/videos/size-engine.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Fit Visualization 3D Module */}
            <div className="module-card reverse">
              <div className="module-content">
                <div className="module-header">
                  <span className="module-badge">FIT VISUALIZATION</span>
                  <span className="module-badge-type">3D</span>
                </div>
                <h3 className="module-title">Show fit in 3D not just size</h3>
                <p className="module-description">
                  Give shoppers visual context through 3D fit representations on their accurate avatar helping them understand proportions, ease, and silhouette before buying.
                </p>
                <div className="module-tags">
                  <span className="module-tag">3D Avatar</span>
                  <span className="module-tag">Fitmap</span>
                  <span className="module-tag">Accurate</span>
                </div>
              </div>
              <div className="module-visual module-visual-3d">
                <ModelViewer3D
                  modelUrl="/models/avatar.gltf"
                  modelScale={2}
                  backgroundColor="#f0f0f0"
                />
              </div>
            </div>

            {/* Fit Visualization 2D Module */}
            <div className="module-card">
              <div className="module-content">
                <div className="module-header">
                  <span className="module-badge">FIT VISUALIZATION</span>
                  <span className="module-badge-type">2D</span>
                </div>
                <h3 className="module-title">Fit, shown on your image</h3>
                <p className="module-description">
                  Translate size recommendations into clear on-model visuals that reduce uncertainty and set expectations.
                </p>
                <div className="module-tags">
                  <span className="module-tag">2D Avatar</span>
                  <span className="module-tag">Gen AI</span>
                  <span className="module-tag">Photorealistic</span>
                </div>
              </div>
              <div className="module-visual module-visual-compare">
                <ImageCompareSlider
                  beforeImage="/images/product-photo.jpg"
                  afterImage="/images/shopper-photo.png"
                  beforeLabel="Product photo"
                  afterLabel="Shopper photo"
                />
              </div>
            </div>

            {/* Size and Style Guidance Module */}
            <div className="module-card reverse">
              <div className="module-content">
                <div className="module-header">
                  <span className="module-badge">SIZE AND STYLE GUIDANCE</span>
                  <span className="module-badge-type">AI</span>
                </div>
                <h3 className="module-title">Turn sizing into clear guidance</h3>
                <p className="module-description">
                  AI-powered explanations help shoppers understand why a size or style is recommended and how a piece is meant to fit reducing hesitation and returns.
                </p>
                <div className="module-tags">
                  <span className="module-tag">AI Guidance</span>
                  <span className="module-tag">Conversational</span>
                  <span className="module-tag">Personalized</span>
                </div>
              </div>
              <div className="module-visual module-visual-stylist">
                <AIStylistChat />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="dashboard-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">FIT INTELLIGENCE DASHBOARD</p>
            <h2 className="section-title">Fit data and insights you can build on</h2>
          </div>

          <div className="dashboard-layout">
            <div className="dashboard-main">
              <div className="dashboard-stat-card">
                <span className="dashboard-stat-value">92%</span>
                <span className="dashboard-stat-label">Recommended Size Accuracy</span>
                <p className="dashboard-stat-description">
                  Track how often shoppers follow size recommendations and improve confidence levels.
                </p>
              </div>
            </div>
            <div className="dashboard-side">
              <div className="dashboard-chart-card">
                <h4>Size-Related Returns</h4>
                <p>Identify fit issues early and reduce costly returns.</p>
                <div className="dashboard-chart-placeholder"></div>
              </div>
              <div className="dashboard-chart-card">
                <h4>Bracketing Behavior</h4>
                <p>Spot uncertainty signals and optimize guidance.</p>
                <div className="dashboard-chart-placeholder"></div>
              </div>
            </div>
          </div>

          <div className="dashboard-bottom-row">
            <div className="dashboard-small-card">
              <h4>Fit on Collection-Level</h4>
              <p>Audit entire collections and fix outliers with adjusted recommendations.</p>
            </div>
            <div className="dashboard-small-card">
              <h4>Fit by Categories</h4>
              <p>Understand how shoppers choose sizes, which items run small or large, and where stock adjustment is needed.</p>
            </div>
            <div className="dashboard-small-card">
              <p>Understand how shoppers choose sizes, which items run small, all in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Statement */}
      <section className="platform-statement-section">
        <div className="container-narrow">
          <p className="platform-statement">
            Polypo is a modular fit-intelligence platform designed to adapt to brand-specific sizing rules, product categories, and retail strategies.
          </p>
        </div>
      </section>

      {/* Work With Us CTA Section */}
      <section className="work-with-us-section">
        <div className="container">
          <div className="work-with-us-card">
            <div className="work-with-us-content">
              <p className="section-label">WORK WITH US</p>
              <h3>Book a 30 mins demo</h3>
              <p>See how Polypo adapts to your brand from sizing modules and rollout options.</p>
              <button className="btn btn-primary">BOOK A DEMO</button>
            </div>
            <div className="work-with-us-visual">
              <div className="work-with-us-image"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Platform;
