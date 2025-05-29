import React from "react";
import "../hero.css"; 
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="hero">
        <h1 className="hero-title">Let Your Mood <br></br>Set the Tune.</h1>
         <div className="hero-buttons">
          <Link to="/moods"><button className="hero-btn primary">Get Started</button></Link>
          <Link to="/about"><button className="hero-btn secondary">Learn More</button></Link>
         </div>
      </section>
    );
  };
  
  
  export default Hero;