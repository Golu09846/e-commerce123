import React from "react";

const HeroSection = () => {
  return (
    <main className="hero container" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h1 id="hero-heading">Your Feet Deserve the Best</h1>
        <p className="hero-description">
          Your feet deserve the best and we’re here to help you with our shoes. Your feet deserve the best and we’re here to help you with our shoes.
        </p>

        {/* Hero buttons with descriptive text */}
        <div className="hero-btn">
          <button className="primary-btn" aria-label="Shop Now">
            Shop Now
          </button>
          <button className="secondary-btn" aria-label="Explore Categories">
            Explore Categories
          </button>
        </div>

        {/* Shopping platforms */}
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="Amazon logo" />
            <img src="/images/flipkart.png" alt="Flipkart logo" />
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="Hero section showing shoes" />
      </div>
    </main>
  );
};

export default HeroSection;
