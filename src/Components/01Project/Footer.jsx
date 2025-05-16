import React from 'react';
import './css/footer.css';

const Footer = () => {
  return (
    <footer className="ecom-footer">
      <div className="ecom-footer-container">
        <div className="ecom-footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>Contact Us</li>
            <li>Order Tracking</li>
            <li>Returns & Refunds</li>
            <li>Shipping Info</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="ecom-footer-section">
          <h3>About Us</h3>
          <ul>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="ecom-footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Accessories</li>
            <li>Sale</li>
          </ul>
        </div>

        <div className="ecom-footer-section">
          <h3>Follow Us</h3>
          <div className="ecom-social-icons">
            <span>🐦 Twitter</span>
            <span>📘 Facebook</span>
            <span>📸 Instagram</span>
            <span>▶️ YouTube</span>
          </div>
        </div>
      </div>

      <div className="ecom-footer-bottom">
        <p>&copy; 2025 ShopSmart Inc. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
