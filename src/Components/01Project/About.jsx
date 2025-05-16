import React from 'react';
import './css/about.css';

const AboutPage = () => {
  return (

          <div className="about-ecommerce-container">
            <section className="about">
              <h1>About <span>ShopEase</span></h1>
              <p>Your trusted destination for quality products and exceptional service.</p>
            </section>
      
            <section className="story">
              <h2>Our Story</h2>
              <p>
                ShopEase started with a simple mission: to make online shopping seamless, affordable, and enjoyable.
                From humble beginnings in a garage to serving over 1 million customers worldwide, our journey is fueled by passion and customer trust.
              </p>
            </section>
      
            <section className="features">
              <h2>Why Shop With Us?</h2>
              <div className="feature-grid">
                <div className="feature-card">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/023/483/981/small_2x/trusted-brand-rubber-stamp-seal-vector.jpg" alt="Trusted" />
                  <h3>Trusted by Thousands</h3>
                  <p>Top-rated by our loyal customers worldwide.</p>
                </div>
                <div className="feature-card">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dN0w8YxUuJEas5FAoVbUS1s1mepgdKkF9Q&s" alt="Fast Shipping" />
                  <h3>Fast & Free Shipping</h3>
                  <p>Delivered quickly and free for orders above $50.</p>
                </div>
                <div className="feature-card">
                  <img src="https://img.freepik.com/premium-vector/customer-support-illustration-concept_23152-154.jpg" alt="Support" />
                  <h3>24/7 Customer Support</h3>
                  <p>Real people ready to help — anytime.</p>
                </div>
              </div>
            </section>
      
            <section className="values">
              <h2>What We Stand For</h2>
              <ul>
                <li>✅ Sustainable Packaging</li>
                <li>✅ Ethical Sourcing</li>
                <li>✅ Customer Satisfaction</li>
              </ul>
            </section>
          </div>
  );
};

export default AboutPage;
