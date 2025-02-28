// src/components/Introduction.js
import React from "react";

const Introduction = () => {
  return (
    <>
      <div className="introduction">
        <div className="text">
          <h1>Start Your Photography Adventure</h1>
          <p>
            Unleash your creativity and capture life's most beautiful moments...
          </p>
          <p>
            Whether you're a beginner or a pro, our tools and resources will
            help you take your photography to the next level.
          </p>
          <button className="explore-button">Start Exploring</button>
        </div>
        <div className="image">
          <img src="" alt="Photography Introduction" />
        </div>
      </div>
      <div className="buy-plans">
        <h2>Choose Your Photography Plan</h2>
        <p>
          Get access to exclusive photography tutorials, high-quality resources,
          and professional tools with our subscription plans.
        </p>
        <div className="subscription-options">
          <div className="subscription-option">
            <h3>Starter Plan</h3>
            <p>
              Perfect for beginners, with access to basic tutorials and tools
            </p>
            <p>$9.99/month</p>
            <button className="subscribe-button">Subscribe</button>
          </div>
          <div className="subscription-option">
            <h3>Pro Plan</h3>
            <p>
              Unlock full access to all professional tools, exclusive content,
              and advanced tutorials
            </p>
            <p>$19.99/month</p>
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
