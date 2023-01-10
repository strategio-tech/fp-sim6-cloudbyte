import React from "react";
import "../styles/homepage.css";
import squaresPic from "../images/squares.jpg";

export default function HomePage() {
  return (
    <div>
      <div className="hero-intro">
        <h4 className="city-list">
          <span>MIAMI</span> - <span>CHICAGO</span> - <span>NEW YORK</span>
        </h4>
      </div>
      <div className="parallax">
        <div className="parallax-overlay"></div>
      </div>
      <div className="hero-text-container">
        <h1 className="catch-phrase">Find your perfect brew</h1>
        <h2 className="about-text">
          Brew List is a platform to find and connect with local hip coffee
          shops.
        </h2>
        <div className="hero-image-container">
          <img className="hero-image" src={squaresPic} alt="#"></img>
        </div>
        <h2 className="about-text">
          So what are you waiting for? Sign up and find yourself the perfect
          brew!
        </h2>
        <div className="coffee-parallax">
          <div className="coffee-parallax-overlay"></div>
        </div>
        <div className="footer-container">
          <p>
            Made with <i className="fa-solid fa-heart fa-xs"></i> by{" "}
            <a href="www.kamilchomiak.com">Kamil Chomiak</a>
          </p>
        </div>
      </div>
    </div>
  );
}
