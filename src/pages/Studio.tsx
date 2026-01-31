import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/Studio.css';

const Studio: React.FC = () => {
  const [activeOmnichannelTab, setActiveOmnichannelTab] = useState(0);

  const omnichannelTabs = [
    {
      title: 'In-store use cases',
      description: 'Design virtual try-on experiences for stores and events.',
      content: (
        <div className="omnichannel-experience-cards">
          <div className="experience-card-item">
            <div className="experience-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3h18v18H3V3z M9 21V10 M15 21V10 M3 10h18" />
              </svg>
            </div>
            <h4>In-Store Experience</h4>
            <p>Enhance the fitting room or sales floor with virtual try-ons</p>
          </div>
          <div className="experience-card-item">
            <div className="experience-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M12 8v8 M8 12h8" />
              </svg>
            </div>
            <h4>Storefront Experience</h4>
            <p>Attract foot traffic by turning your window into an interactive display</p>
          </div>
          <div className="experience-card-item">
            <div className="experience-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" />
                <path d="M12 12l9-4.5 M12 12v9 M12 12L3 7.5" />
              </svg>
            </div>
            <h4>Pop-Ups & Events</h4>
            <p>Create buzz and brand engagement with a digital installation</p>
          </div>
        </div>
      )
    },
    {
      title: 'Mirror sizes',
      description: 'Choose the right display format for your space.',
      content: (
        <div className="omnichannel-mirrors-grid">
          <div className="mirror-size-card">
            <h4>13' mirror</h4>
            <p>Enhance the fitting room or sales floor with virtual try-ons</p>
          </div>
          <div className="mirror-size-card">
            <h4>65' mirror</h4>
            <p>Attract foot traffic by turning your window into an interactive display</p>
          </div>
          <div className="mirror-size-card">
            <h4>85' mirror</h4>
            <p>Create buzz and brand engagement with a digital installation</p>
          </div>
          <div className="mirror-size-card">
            <h4>Custom size mirror</h4>
            <p>Create buzz and brand engagement with a digital installation</p>
          </div>
        </div>
      )
    },
    {
      title: 'Categories supported',
      description: 'Enable try-ons across categories to match your retail strategy.',
      content: (
        <div className="omnichannel-categories-grid">
          <div className="category-item">
            <div className="category-icon category-tops"></div>
            <span>Tops</span>
          </div>
          <div className="category-item">
            <div className="category-icon category-pants"></div>
            <span>Pants</span>
          </div>
          <div className="category-item">
            <div className="category-icon category-jackets"></div>
            <span>Jackets</span>
          </div>
          <div className="category-item">
            <div className="category-icon category-sunglasses"></div>
            <span>Sunglasses</span>
          </div>
          <div className="category-item">
            <div className="category-icon category-shoes"></div>
            <span>Shoes</span>
          </div>
          <div className="category-item">
            <div className="category-icon category-hats"></div>
            <span>Hats</span>
          </div>
          <div className="category-item">
            <div className="category-icon category-accessories"></div>
            <span>Accessories</span>
          </div>
          <div className="category-item">
            <div className="category-icon category-environment"></div>
            <span>Environment</span>
          </div>
        </div>
      )
    },
    {
      title: 'Experience Level',
      description: 'Define how shoppers interact with the mirror experience.',
      content: (
        <div className="omnichannel-experience-level">
          <div className="experience-group">
            <h5>Interaction</h5>
            <div className="experience-icons-row">
              <div className="experience-icon-item">
                <div className="exp-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <circle cx="12" cy="18" r="1" />
                  </svg>
                </div>
                <span>Tablet</span>
              </div>
              <div className="experience-icon-item">
                <div className="exp-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 11l5-5 5 5 M7 17l5-5 5 5" />
                  </svg>
                </div>
                <span>Gesture</span>
              </div>
              <div className="experience-icon-item">
                <div className="exp-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <span>Capture</span>
              </div>
              <div className="experience-icon-item">
                <div className="exp-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                  </svg>
                </div>
                <span>Voice</span>
              </div>
            </div>
          </div>
          <div className="experience-group">
            <h5>Integration</h5>
            <div className="experience-icons-row">
              <div className="experience-icon-item">
                <div className="exp-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 3h18v18H3V3z M9 21V10" />
                  </svg>
                </div>
                <span>Add to Cart</span>
              </div>
              <div className="experience-icon-item">
                <div className="exp-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M7 7h2v2H7V7z M11 7h2v2h-2V7z M15 7h2v2h-2V7z M7 11h2v2H7v-2z M15 11h2v2h-2v-2z M7 15h2v2H7v-2z M11 15h2v2h-2v-2z M15 15h2v2h-2v-2z" />
                  </svg>
                </div>
                <span>QR Code</span>
              </div>
              <div className="experience-icon-item">
                <div className="exp-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3v18 M5 8l7-5 7 5 M5 16l7 5 7-5" />
                  </svg>
                </div>
                <span>Size and Fit</span>
              </div>
              <div className="experience-icon-item">
                <div className="exp-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="6" width="18" height="12" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                </div>
                <span>Purchase</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="studio-page">
      <Navigation />

      {/* Hero Section */}
      <section className="studio-hero-section">
        <div className="studio-hero-container">
          <div className="studio-hero-content">
            <h1 className="studio-hero-title">
              The studio for immersive<br />product experiences
            </h1>
            <p className="studio-hero-subtitle">
              Polypo Studio designs 3D, AR, and spatial
              experiences that give customers new ways
              to preview, interact, and experiment with
              their products.
            </p>
            <button className="btn btn-dark">Get Started</button>
          </div>
        </div>
      </section>

      {/* Craft Experiences Section */}
      <section className="craft-section">
        <div className="container">
          <div className="section-header center">
            <p className="section-label">GET CREATIVE</p>
            <h2 className="section-title">
              Craft experiences your<br />customers will remember
            </h2>
          </div>

          <div className="craft-cards-grid">
            <div className="craft-card craft-card-purple"></div>
            <div className="craft-card craft-card-light"></div>
            <div className="craft-card craft-card-light"></div>
            <div className="craft-card craft-card-gray"></div>
          </div>
        </div>
      </section>

      {/* Interactive 3D Section */}
      <section className="interactive-3d-section">
        <div className="container">
          <div className="interactive-3d-layout">
            <div className="interactive-3d-visual">
              <div className="model-display-area">
                <div className="model-placeholder"></div>
              </div>
              <div className="silhouettes-row">
                <div className="silhouette-item">
                  <div className="silhouette-icon"></div>
                  <span>Shape</span>
                </div>
                <div className="silhouette-item">
                  <div className="silhouette-icon"></div>
                  <span></span>
                </div>
                <div className="silhouette-item">
                  <div className="silhouette-icon"></div>
                  <span></span>
                </div>
                <div className="silhouette-item">
                  <div className="silhouette-icon"></div>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="interactive-3d-content">
              <p className="section-label">INTERACTIVE 3D</p>
              <h2 className="section-title-md">
                Explore and Visualize<br />products in 3D
              </h2>
              <p className="section-text">
                Let shoppers rotate, zoom, and inspect
                products in 3D to better understand
                structure, proportions, and details.
              </p>
            </div>
          </div>

          {/* Brand showcase - FENDI */}
          <div className="brand-showcase">
            <div className="brand-showcase-content">
              <div className="brand-logo">FENDI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Augmented Reality Section */}
      <section className="ar-section">
        <div className="container">
          <div className="ar-layout">
            <div className="ar-content">
              <p className="section-label">AUGMENTED REALITY</p>
              <h2 className="section-title-md">
                Try and experience<br />products
              </h2>
              <p className="section-text">
                Enable AR try-on experiences for
                accessories and selected categories
                directly from the product page or social
                media entry points.
              </p>
            </div>
            <div className="ar-visual">
              <div className="ar-phone-mockup">
                <div className="ar-phone-screen"></div>
                <div className="ar-play-button">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Omnichannel Section */}
      <section className="omnichannel-section">
        <div className="container">
          <div className="section-header center">
            <p className="section-label">OMNICHANNEL</p>
            <h2 className="section-title">Bring it in-store</h2>
          </div>

          <div className="omnichannel-layout-new">
            {/* Left side - Clickable tabs */}
            <div className="omnichannel-tabs">
              {omnichannelTabs.map((tab, index) => (
                <div
                  key={index}
                  className={`omnichannel-tab ${activeOmnichannelTab === index ? 'active' : ''}`}
                  onClick={() => setActiveOmnichannelTab(index)}
                >
                  <div className="tab-content">
                    <span className="tab-title">{tab.title}</span>
                    <p className="tab-description">{tab.description}</p>
                  </div>
                  <span className="tab-arrow">↗</span>
                </div>
              ))}
            </div>

            {/* Middle - Dynamic content based on selected tab */}
            <div className="omnichannel-middle">
              {omnichannelTabs[activeOmnichannelTab].content}
            </div>

            {/* Right side - Video placeholder */}
            <div className="omnichannel-video">
              <div className="video-device">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="omnichannel-video-player"
                >
                  <source src="/videos/omnichannel-demo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who The Studio Is For Section */}
      <section className="studio-for-section">
        <div className="container">
          <div className="studio-for-layout">
            <div className="studio-for-video">
              <p className="video-label">the morph<br />effect video</p>
              <div className="video-placeholder"></div>
            </div>
            <div className="studio-for-content">
              <p className="section-label">CREATIVE MEETS TECHNOLOGY</p>
              <h2 className="section-title-md">Who The Studio Is For</h2>
              <ul className="studio-for-list">
                <li>
                  <span className="list-arrow">→</span>
                  Brand & marketing teams
                </li>
                <li>
                  <span className="list-arrow">→</span>
                  Innovation and digital teams
                </li>
                <li>
                  <span className="list-arrow">→</span>
                  Creative and production agencies
                </li>
                <li>
                  <span className="list-arrow">→</span>
                  Retail and experiential teams
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How The Studio Works Section */}
      <section className="studio-works-section">
        <div className="container">
          <div className="section-header center">
            <p className="section-label">HOW THE STUDIO WORKS</p>
            <h2 className="section-title">It starts with your brand</h2>
            <p className="section-subtitle">
              Studio projects are custom-scoped and tailored to each brand.
            </p>
          </div>

          <div className="studio-works-cards">
            <div className="studio-works-card">
              <div className="works-card-image"></div>
            </div>
            <div className="studio-works-card">
              <div className="works-card-image"></div>
            </div>
            <div className="studio-works-card">
              <div className="works-card-image"></div>
            </div>
            <div className="studio-works-card">
              <div className="works-card-image"></div>
            </div>
          </div>

          <div className="studio-works-steps">
            <div className="works-step">
              <h4>Discover</h4>
              <p>Vision, context, and creative goals.</p>
            </div>
            <div className="works-step">
              <h4>Design</h4>
              <p>Concepts, interactions, and experience flow.</p>
            </div>
            <div className="works-step">
              <h4>Build</h4>
              <p>3D, AR, or spatial execution.</p>
            </div>
            <div className="works-step">
              <h4>Launch</h4>
              <p>Web, retail, event, or campaign.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avatar Preview Section */}
      <section className="avatar-preview-section">
        <div className="container">
          <div className="avatar-preview-wrapper">
            <div className="avatar-preview-image"></div>
          </div>
        </div>
      </section>

      {/* Create With Us CTA Section */}
      <section className="create-cta-section">
        <div className="container">
          <div className="create-cta-card">
            <p className="section-label">CREATE WITH US</p>
            <h3>Have an idea worth exploring?</h3>
            <p>Let's turn it into a 3D, AR, or spatial experience built to engage, inspire, and represent your brand.</p>
            <button className="btn btn-dark">GET CREATIVE</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Studio;
