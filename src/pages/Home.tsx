import React, { useState, useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const valuePropsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!valuePropsRef.current) return;

      const rect = valuePropsRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start when element top enters viewport, complete when element top reaches top of viewport
      const startPoint = windowHeight * 0.8;
      const endPoint = windowHeight * 0.2;

      const progress = Math.min(1, Math.max(0, (startPoint - rect.top) / (startPoint - endPoint)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefitCards = [
    {
      title: 'Reduce Returns',
      description: 'Around 20% fewer wrong-size purchases, fewer unnecessary shipments, and less size bracketing.',
      highlight: '20%',
      image: '/benefit-returns.jpg'
    },
    {
      title: 'Boost Conversion',
      description: '+16% conversion lift when shoppers trust the fit, they buy with confidence.',
      highlight: '+16%',
      image: '/benefit-conversion.jpg'
    },
    {
      title: 'Improve Fit Data',
      description: 'Turn shopper interactions into fit signals your team can use to refine sizing rules, reduce uncertainty, and scale consistency.',
      highlight: '',
      image: '/benefit-data.jpg'
    }
  ];

  return (
    <div className="home-page">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glass-container">
          <div className="hero-content-wrapper">
            <div className="hero-content">
              <h1 className="hero-title">
                Know the size.<br />
                See the fit.
              </h1>
              <p className="hero-subtitle">
                Polypo is the AI sizing and fit-intelligence platform that shows every shopper 
                their best size and style before they buy.
              </p>
              <button className="btn btn-primary hero-btn">Book a Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-section">
        <p className="section-label">Trusted by fashion and beauty brands</p>
        <div className="logo-grid">
          <div className="brand-logo">L'Oréal</div>
          <div className="brand-logo">NYX</div>
          <div className="brand-logo">Schwarzkopf</div>
          <div className="brand-logo">Letoit</div>
          <div className="brand-logo">Clara</div>
        </div>
      </section>

      {/* Main Value Proposition */}
      <section className="value-prop-section" ref={valuePropsRef}>
        <div className="container-narrow">
          <h2 className="section-heading">
            {`Polypo replaces generic size charts with AI fit intelligence built around your brand. We deliver consistent sizing across every style because inconsistent fit is fashion's most expensive problem.`
              .split(' ')
              .map((word, index, arr) => {
                const wordProgress = index / arr.length;
                const isVisible = scrollProgress > wordProgress;
                return (
                  <span
                    key={index}
                    style={{
                      color: isVisible ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.15)',
                      transition: 'color 0.15s ease',
                    }}
                  >
                    {word}{' '}
                  </span>
                );
              })}
          </h2>
        </div>
      </section>

      {/* Problem Sections - Stacking Cards */}
      <section className="problems-section">
        <div className="container">
          <div className="stack-cards">
          <div className="problem-card returns">
            <div className="problem-content">
              <span className="problem-badge">RETURNS</span>
              <h3 className="problem-title">High size-related returns</h3>
              <p className="problem-description">
                Around 70% of fashion returns are blamed on size and fit.<br />
                Each one costs $15-25 to process.
              </p>
              <div className="problem-tags">
                <span className="tag">70% size related</span>
                <span className="tag">$15-25 cost/return</span>
              </div>
            </div>
            <div className="problem-visual"></div>
          </div>

          <div className="problem-card confidence">
            <div className="problem-visual"></div>
            <div className="problem-content">
              <span className="problem-badge">CONFIDENCE</span>
              <h3 className="problem-title">Low shopper confidence</h3>
              <p className="problem-description">
                Unclear fit leads to hesitation, abandoned carts, and lost trust.
              </p>
              <div className="problem-tags">
                <span className="tag">70% size related</span>
                <span className="tag">$15-25 cost/return</span>
              </div>
            </div>
          </div>

          <div className="problem-card margins">
            <div className="problem-content">
              <span className="problem-badge">MARGINS</span>
              <h3 className="problem-title">Margin erosion</h3>
              <p className="problem-description">
                Bracketing inflates shipping costs and ties up inventory.
              </p>
              <div className="problem-tags">
                <span className="tag">70% size related</span>
                <span className="tag">$15-25 cost/return</span>
              </div>
            </div>
            <div className="problem-visual"></div>
          </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">WHAT YOU GET</p>
            <h2 className="section-title">Clear fit. Better performance.</h2>
            <p className="section-description">
              Polypo helps shoppers understand how things will fit before they buy:
              turning sizing from uncertainty into confidence, and fit from a cost into a growth lever.
            </p>
          </div>

          <div className="benefits-accordion">
            {benefitCards.map((card, index) => (
              <div
                key={index}
                className={`benefit-accordion-card ${activeCard === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div className="benefit-accordion-text">
                  <div className="benefit-accordion-header">
                    <h3>{card.title}</h3>
                  </div>
                  <div className="benefit-accordion-content">
                    <p>
                      {card.highlight && <strong>{card.highlight}</strong>}
                      {card.description.replace(card.highlight, '').trim()}
                    </p>
                  </div>
                  <span className="benefit-arrow">↗</span>
                </div>
                <div className="benefit-accordion-image">
                  <div className="benefit-image-placeholder"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="benefits-quote">
            <p>
              "With Polypo, Better fit decisions for shoppers. Smarter performance for brands."
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container-split">
          <div className="hiw-content">
            <p className="section-label">HOW IT WORKS</p>
            <h2 className="section-title">From PDP to purchase confidence</h2>
            
            <div className="steps">
              <div className="step">
                <span className="step-number">1</span>
                <div className="step-content">
                  <h4>Shoppers create a profile in seconds</h4>
                  <p>Directly on the product page, with low-friction inputs</p>
                </div>
              </div>
              
              <div className="step">
                <span className="step-number">2</span>
                <div className="step-content">
                  <h4>Polypo recommends the best size</h4>
                  <p>For that specific item, based on brand fit logic and product context.</p>
                </div>
              </div>
              
              <div className="step">
                <span className="step-number">3</span>
                <div className="step-content">
                  <h4>Brands learn and improve over time</h4>
                </div>
              </div>
              
              <div className="note">
                <p>
                  <strong>Note:</strong> The experience is fully customizable from UI and tone to inputs, 
                  logic, and modules.
                </p>
              </div>
            </div>
          </div>
          
          <div className="hiw-visual">
            <div className="visual-container">
              <div className="visual-badge">Size Small</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="integration-section">
        <div className="container">
          <div className="integration-banner">
            <p className="integration-title">Integrated with</p>
            <div className="integration-logos">
              <span>Shopify</span>
              <span>WooCommerce</span>
              <span>Salesforce</span>
              <span>Magento</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="platform-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">PLATFORM OVERVIEW</p>
            <h2 className="section-title">Build your custom fit platform</h2>
          </div>
          
          <div className="platform-grid">
            <div className="platform-card">
              <div className="platform-visual"></div>
              <h3>Size Engine</h3>
              <p>Recommend the best size for every shopper, per product</p>
            </div>
            
            <div className="platform-card">
              <div className="platform-visual"></div>
              <h3>Fit Visualization</h3>
              <p>Show fit context in 2D & 3D, shoppers understand how a garment will sit</p>
            </div>
            
            <div className="platform-card">
              <div className="platform-visual"></div>
              <h3>Interactive Layer</h3>
              <p>Let shoppers explore products in 3D or try them on in AR</p>
            </div>
            
            <div className="platform-card">
              <div className="platform-visual"></div>
              <h3>Dashboard</h3>
              <p>Understand size performance, fit issues, and shopper behavior insights</p>
            </div>
            
            <div className="platform-card">
              <div className="platform-visual"></div>
              <h3>Omnichannel</h3>
              <p>Bring fit confidence into physical retail, pop-ups, and events with AR mirrors</p>
            </div>
            
            <div className="platform-card">
              <div className="platform-visual"></div>
              <h3>AI Guidance</h3>
              <p>Turn sizing and styling into clear and confident ai-powered guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who's It For */}
      <section className="audience-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">WHO IT'S FOR</p>
            <h2 className="section-title">Built for fit-driven fashion teams</h2>
          </div>
          
          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-visual"></div>
              <h3>Fashion and Beauty Brands</h3>
              <ul>
                <li>Size recommendations aligned to your fit philosophy</li>
                <li>Fewer size-related returns and bracketing</li>
                <li>More confident shoppers, higher conversion</li>
              </ul>
            </div>
            
            <div className="audience-card">
              <div className="audience-visual"></div>
              <h3>Designers & made-to-order</h3>
              <ul>
                <li>Capture unique sizing logic and silhouettes</li>
                <li>Guide customers before production</li>
                <li>Reduce remakes, adjustments, and uncertainty</li>
              </ul>
            </div>
            
            <div className="audience-card">
              <div className="audience-visual"></div>
              <h3>Marketplaces & enterprises</h3>
              <ul>
                <li>Consistent fit guidance across catalogs</li>
                <li>Lower return rates at scale</li>
                <li>Better data across brands and categories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-content">
              <span className="cta-badge">GET STARTED</span>
              <h3>Book a 30 mins demo</h3>
              <p>
                See how Polypo adapts to your brand from sizing, modules, and rollout options.
              </p>
              <button className="btn btn-primary">Book a Demo</button>
            </div>
            <div className="cta-visual"></div>
          </div>
        </div>
      </section>

      {/* Discover Studio */}
      <section className="discover-section">
        <div className="container">
          <div className="discover-split">
            <div className="discover-visual">
              <div className="video-placeholder">
                <p>outfit change video</p>
              </div>
            </div>
            <div className="discover-content">
              <span className="discover-badge">DISCOVER STUDIO</span>
              <h2>Where ideas become experiences</h2>
              <p>
                We design custom 3D, AR, and spatial projects for campaigns, retail, and experimentation 
                built to engage audiences, explore new formats, and bring products to life beyond the screen.
              </p>
              <p className="discover-services">
                3D modeling · Interactive 3D · WebAR · AR mirrors · Spatial experiences · 
                VR experiences · Custom builds
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-preview-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">OUR BLOG</p>
            <h2 className="section-title">Stay updated on fit, sizing, and the future of fashion commerce</h2>
          </div>
          
          <div className="blog-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="blog-preview-card">
                <div className="blog-visual"></div>
                <div className="blog-preview-content">
                  <h4>Article Title {i}</h4>
                  <p>Brief description of the article content and what readers will learn.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container-narrow">
          <div className="section-header">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Quick answers</h2>
          </div>
          <div className="faq-list">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="faq-item">
                <p>Question {i} will go here</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
