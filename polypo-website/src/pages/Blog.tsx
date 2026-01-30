import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/Blog.css';

const Blog: React.FC = () => {
  const blogPosts = [
    { title: "With Spatial Computing, The World is Your Canvas", category: "INSIGHTS", date: "January, 2024", badge: "New" },
    { title: "Introduction to Spatial Computing and What It Means for the Fashion Industry", category: "INSIGHTS", date: "January, 2024", badge: "New" },
    { title: "Innovating in FashionTech? You Can't Ignore Gen-Z", category: "INSIGHTS", date: "January, 2024", badge: "New" },
    { title: "The Evolving Landscape of the Fashion Industry and the Role of Technology", category: "FEATURES", date: "January, 2024", badge: "New" },
    { title: "Microsoft for Startups Founder's Hub", category: "FEATURES", date: "January, 2024", badge: "New" },
    { title: "Polypo x Stellar Gems AR Try-On Solutions", category: "COLLABS", date: "January, 2024", badge: "New" },
    { title: "Polypo x Rewrites AR Try-On Solutions", category: "COLLABS", date: "January, 2024", badge: "New" },
    { title: "Board Member Announcement: Who is Priscilla Schelp?", category: "COMMUNITY", date: "January, 2024", badge: "New" },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'INSIGHTS': 'purple',
      'FEATURES': 'purple',
      'COLLABS': 'blue',
      'COMMUNITY': 'green'
    };
    return colors[category] || 'purple';
  };

  return (
    <div className="blog-page">
      <Navigation />
      
      {/* Hero Section with Featured Articles */}
      <section className="blog-hero-section">
        <div className="hero-split">
          <div className="hero-article featured">
            <div className="article-overlay">
              <span className="featured-badge">FEATURED</span>
              <div className="article-info">
                <div className="article-title-badge">NAME OF THE ARTICLE</div>
                <div className="article-tags">
                  <span className="tag">TECH</span>
                  <span className="tag">FASHION</span>
                  <span className="tag">INNOVATION</span>
                  <span className="tag">FUTURE</span>
                  <span className="tag">SUSTAINABILITY</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-article">
            <div className="article-overlay">
              <div className="article-info">
                <div className="article-title-badge">NAME OF THE ARTICLE</div>
                <div className="article-tags">
                  <span className="tag">TECH</span>
                  <span className="tag">FASHION</span>
                  <span className="tag">INNOVATION</span>
                  <span className="tag">FUTURE</span>
                  <span className="tag">SUSTAINABILITY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Listing Section */}
      <section className="blog-listing-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">OUR BLOG</p>
            <h2 className="section-title">
              Innovative Solutions Tailored for the Fashion-Forward
            </h2>
          </div>
          
          {/* Search Bar */}
          <div className="search-container">
            <div className="search-bar">
              <input type="text" placeholder="SEARCH HERE" />
              <button className="search-btn">SEARCH</button>
            </div>
          </div>
          
          {/* Filter Tabs */}
          <div className="filters-container">
            <div className="filter-tabs">
              <button className="filter-tab active">VIEW ALL</button>
              <button className="filter-tab">INSIGHTS</button>
              <button className="filter-tab">FEATURES</button>
              <button className="filter-tab">COLLABS</button>
              <button className="filter-tab">COMMUNITY</button>
            </div>
            
            <div className="sort-dropdown">
              <span>MOST RECENT</span>
              <span className="dropdown-arrow">▼</span>
            </div>
          </div>
          
          {/* Blog Cards Grid */}
          <div className="blog-cards-grid">
            {blogPosts.map((post, index) => (
              <div key={index} className={`blog-card ${getCategoryColor(post.category)}`}>
                <div className="card-header">
                  <span className="card-category">{post.category}</span>
                  <div className="card-date">
                    <span className="date-text">{post.date}</span>
                    <span className="new-badge">{post.badge}</span>
                  </div>
                </div>
                <div className="card-image-container">
                  <div className="card-image"></div>
                  <button className="plus-btn">+</button>
                </div>
                <h3 className="card-title">{post.title}</h3>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="pagination-container">
            <button className="pagination-btn disabled">PREV</button>
            <div className="page-numbers">
              <span className="page-number active">1</span>
              <span className="page-number">2</span>
              <span className="page-number">3</span>
              <span className="dots">...</span>
            </div>
            <button className="pagination-btn">NEXT</button>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="support-cta-section">
        <div className="container">
          <div className="support-banner">
            <p className="section-label">GET SUPPORT</p>
            <h2>Book a call with us for support</h2>
            <p className="support-description">
              See how Polypo adapts to your brand from size recommendations to fit 
              visualization, data, and rollout.
            </p>
            <button className="btn btn-primary">ASK OUR TEAM</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
