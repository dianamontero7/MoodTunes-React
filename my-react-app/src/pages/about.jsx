import React from "react";
import "../about.css"; 

function About() {
  return (
    <div className="about-page">
        <section className="about-info">
            <h1>What is MoodTunes?</h1>
            <p>Whether you're happy, sad, chill, or angry, our website curates music recommendations that match your current mood. It helps you set the vibe, shift the energy, or just find your next favorite song.</p>

            <div style={{ height: '15px' }} />

            <h1 className="green">Why We Made It</h1>
            <p>We believe music is more than just sound. It's emotional fuel. MoodTunes was built for people who want music that understands them in the moment. No more endless scrolling or algorithm overwhelm. Just pure, mood-based vibes ready for you to explore.</p>

            <div style={{ height: '15px' }} />

            <h1>Who Made MoodTunes?</h1>
            <p>MoodTunes is a student-built project focused on merging emotion with technology. Designed and developed with care by creators who love music, clean design, and intuitive apps.</p>

            <div style={{ height: '15px' }} />

            <div className="quote-box">

            “Our goal was to create something meaningful, usable, and fun: a digital mixtape that changes with your mood.”

            </div>

            
          </section>
    </div>

     

    )
  }
  
  export default About