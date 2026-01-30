import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="hero-glass-container">
          <div className="hero-content-wrapper">
            <div className="hero-content">
              <h1 className="hero-title">
                Fixing fashion's<br />
                most expensive<br />
                problem.
              </h1>
              <p className="hero-subtitle">
                We help brands deliver the right fit to every shopper with AI that understands 
                how clothes actually fit, not just what size charts say. It's about making every 
                purchase confident and every return preventable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">OUR STORY</p>
            <h2 className="section-title">Let us tell you how we started</h2>
          </div>
          
          <div className="story-grid">
            <div className="story-card large">
              <div className="story-visual"></div>
            </div>
            
            <div className="story-card text">
              <div className="story-content">
                <p className="story-text">
                  Online shopping always felt frustrating and wrong
                </p>
                <p className="story-text">
                  Size charts were unclear, and model images were hard to relate to.
                </p>
              </div>
            </div>
            
            <div className="story-card text">
              <div className="story-content">
                <p className="story-text">We would pick a size and wait.</p>
                <p className="story-text">
                  Most of the time, it didn't fit, so we returned it.
                </p>
                <p className="story-text">
                  Other times, we ordered multiple sizes just in case.
                </p>
              </div>
            </div>
            
            <div className="story-card large">
              <div className="story-visual"></div>
            </div>
          </div>
          
          <div className="story-quote">
            <h3>
              There was no clarity.<br />
              No personalization.<br />
              Just guesswork.
            </h3>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-banner">
            <div className="stats-grid">
              <div className="stat-card">
                <h3 className="stat-number">1 in 4</h3>
                <p className="stat-label">online fashion<br />purchases is<br />returned</p>
              </div>
              
              <div className="stat-card">
                <h3 className="stat-number">70%</h3>
                <p className="stat-label">of returns are<br />due to size and<br />fit</p>
              </div>
              
              <div className="stat-card">
                <h3 className="stat-number">$800B in<br />returns</h3>
              </div>
            </div>
            
            <p className="stats-caption">
              "And even more, online shopping felt like expensive, wasteful and unsatisfying guesswork."
            </p>
          </div>
        </div>
      </section>

      {/* Preview Cards */}
      <section className="preview-cards-section">
        <div className="container">
          <div className="preview-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="preview-card">
                <div className="preview-visual"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-split">
            <div className="vision-content">
              <p className="section-label">FROM SIZE GUESSWORK TO FIT TRUTH</p>
              <h2>What if we could replace generic size charts and guesswork from shopping?</h2>
            </div>
            <div className="vision-visual"></div>
          </div>
          
          <div className="mission-statement">
            <h3>
              Our vision for Polypo is to make you the most confident when shopping.
            </h3>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container-narrow">
          <h2 className="section-title centered">
            Let's build the future of fashion together:
          </h2>
          
          <div className="values-list">
            <div className="value-item">
              <h3>More sustainable.</h3>
            </div>
            <div className="value-item">
              <h3>More personalized.</h3>
            </div>
            <div className="value-item">
              <h3>More intelligent.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="partner-cta-section">
        <div className="container">
          <div className="partner-banner">
            <p className="section-label">PARTNERSHIP OBJECTIVES</p>
            <h2 className="section-title">Partner with Polypo</h2>
            
            <div className="partner-card">
              <span className="partner-badge">PARTNER WITH US</span>
              <h3>Let's work together</h3>
              <p>
                We are looking for fashion brands who are ready to transform the future of shopping. 
                If you are passionate about creating better experiences for your customers, 
                let's collaborate and make a difference together.
              </p>
            </div>
          </div>
          
          <div className="partners-showcase">
            <p className="section-label">OUR PARTNERS</p>
            <div className="partners-logo-grid">
              <div className="partner-logo-item">Schwarzkopf</div>
              <div className="partner-logo-item">Unity</div>
              <div className="partner-logo-item">Shopify</div>
              <div className="partner-logo-item">L'Oréal</div>
              <div className="partner-logo-item">AIIO</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
