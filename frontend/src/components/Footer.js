import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-text">LuxeMarket</span>
          </div>
          <p className="footer-desc">
            Premium curated marketplace for the modern lifestyle. Quality meets elegance.
          </p>
          <div className="social-links">
            <a href="/" className="social-link">Twitter</a>
            <a href="/" className="social-link">Instagram</a>
            <a href="/" className="social-link">Facebook</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Shop</h4>
          <a href="/">New Arrivals</a>
          <a href="/">Best Sellers</a>
          <a href="/">Sale</a>
          <a href="/">Collections</a>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <a href="/">Help Center</a>
          <a href="/">Shipping & Returns</a>
          <a href="/">Size Guide</a>
          <a href="/">Contact Us</a>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <a href="/">About Us</a>
          <a href="/">Careers</a>
          <a href="/">Terms</a>
          <a href="/">Privacy</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 LuxeMarket. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
