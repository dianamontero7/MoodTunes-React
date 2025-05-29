import React from "react";
import "../steps.css"; 
import { Link } from "react-router-dom";

const Steps = () => {
    return (
        <section className="steps-section">
            <div className ="steps-container">
                <h2 className="steps-title">How to use MoodTunes in 3 Easy Steps</h2>
            <div className="steps-cards">
                <div className="step-card">
                     <div className="step-icon">😊</div>
                        <p className="step-text"><strong>01.</strong> Choose a Mood</p>
            </div>
            <div className="step-card">
                <div className="step-icon">🎵</div>
                    <p className="step-text"><strong>02.</strong> Get songs instantly</p>
            </div>
            <div className="step-card">
                <div className="step-icon">❤️</div>
                    <p className="step-text"><strong>03.</strong> Save Your Faves</p>
             </div>
            </div>
      
            <Link to="/moods"><button className="steps-button"> Start Listening <span className="arrow">→</span></button></Link>
  

  </div>
  </section>
    );
  };
  
  
  
  export default Steps;