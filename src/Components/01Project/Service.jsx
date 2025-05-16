
import React from 'react';
import './css/about.css'
// import './ServicePage.css';

const ServicePage = () => {

  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Our Services</h1>
        <p>Enhancing your shopping experience with premium services</p>
      </div>

      <div className="service-container">
        <div className="service-card">
          <i className="fas fa-shipping-fast icon"></i>
          <h3>Fast Delivery</h3>
          <p>We ensure swift and safe delivery of your products right to your doorstep.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-undo icon"></i>
          <h3>Easy Returns</h3>
          <p>Changed your mind? No worries. Return within 30 days hassle-free.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-headset icon"></i>
          <h3>24/7 Support</h3>
          <p>Need help? Our team is always available to assist you any time.</p>
        </div>

        <div className="service-card">
          <i className="fas fa-lock icon"></i>
          <h3>Secure Payments</h3>
          <p>All transactions are encrypted and secure with various payment options.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
