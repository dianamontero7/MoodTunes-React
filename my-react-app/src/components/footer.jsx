import React from "react";
import "../footer.css"; 
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-top">
          <div className="footer-branding">
            <h2>
              Mood up.
              <br />
              Tune In.
              <br />
              Vibe On.
            </h2>
          </div>
  
            <div className="footer-social-contact">
            <div className="social">
              <h4>FOLLOW US</h4>
              <div className="icons">
                <FaInstagram />
                <FaFacebookF />
                <FaTwitter />
              </div>
            </div>
            <div className="contact">
              <h4>CONTACT US</h4>
              <p>SUPPORT@MUSICTUNES.COM</p>
            </div>
          </div>
        </div>
  
        <hr className="section-divider" />
  
            <div className="footer-bottom">
          <p>© 2025 MoodTunes. All rights reserved.</p>
          <p>Powered by: MoodTunes | Designed with ❤️ using React</p>
        </div>
    </footer>
    );
  };
  
  
  
  export default Footer;